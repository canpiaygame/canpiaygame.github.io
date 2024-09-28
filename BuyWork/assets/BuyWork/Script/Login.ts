import { EventAct, UserInfo } from "./DataType";
import HomePage from "./HomePage";
import Net from "./Net";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    userName: cc.EditBox = null;

    @property(cc.EditBox)
    psw: cc.EditBox = null;

    root: HomePage = null;
    userData: UserInfo = null;
    setRoot(root: HomePage) {
        this.root = root;
    }
    protected onLoad(): void {

    }

    async loginBtnClick() {
        let userName = this.userName.textLabel.string;
        let psw = this.psw.textLabel.string;
        this.root.node.emit(EventAct.ShowLoading);
        let userData = await Net.login(userName, psw);
        if (userData.id) {
            this.root.setUserData(userData);
            this.userData = userData;
            this.root.showTips('登录成功！');
        } else {
            this.root.showTips('登录失败！请重试');
            this.root.node.emit(EventAct.HideLoading);
        }
        // this.root.userData = userData;

    }

    async register() {
        let userName = this.userName.textLabel.string;
        let psw = this.psw.textLabel.string;
        if (userName.length < 3) {
            this.root.showTips('用户名设置太短！');
            return;
        } else if (psw.length < 6) {
            this.root.showTips('密码设置太短！');
            return;
        }
        this.root.node.emit(EventAct.ShowLoading);
        let result = await Net.register(userName, psw, true);
        if (result) {
            this.root.showTips('注册成功！正在跳转');
            this.loginBtnClick();
        } else {
            this.root.showTips('注册失败！请重试');
            this.root.node.emit(EventAct.HideLoading);
        }
    }

    async logOutBtnClick(e) {
        if (!this.userData) return;
        await Net.logout(this.userData.id);
        this.root.setUserData(null);
        this.userData = null;
        this.root.showTips('退出登录！');
    }

    // 游客登陆
    async touristLogin() {
        if (!this.userData) return;
        if (!this.root) return;
        this.root.touristLogin();
        this.root.showTips('游客登录！');
    }
}
