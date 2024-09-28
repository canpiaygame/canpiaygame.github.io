// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventAct, UserInfo } from "./DataType";
import HomePage from "./HomePage";
import Net from "./Net";

const { ccclass, property } = cc._decorator;
export class WinData {
}
@ccclass
export default class ToolBar extends cc.Component {

    @property([cc.Node])
    btnList: cc.Node[] = [];

    @property([cc.Node])
    winList: cc.Node[] = [];

    @property(cc.EditBox)
    userName: cc.EditBox = null;

    @property(cc.EditBox)
    psw: cc.EditBox = null;


    @property(cc.Node)
    topWin: cc.Node = null;

    root: HomePage = null;
    openWin: number = 0;
    userData: UserInfo = null;
    setRoot(root: HomePage) {
        this.root = root;
    }
    setUserData(ud: UserInfo) {
        this.userData = ud;
    }
    adminUI() {
        this.btnList.forEach(element => {
            element.active = true;
        });
    }

    userUI() {
        this.btnList.forEach((element, i) => {
            element.active = (i == 0 || i == 4);
        });
    }

    closeBtnClick() {
        this.topWin.active = false;
    }

    openBtnClick() {
        this.topWin.active = true;
    }

    async logOutBtnClick(e) {
        if (!this.userData) return;
        await Net.logout(this.userData.id);
        this.root.setUserData(null);
        this.userData = null;
        this.root.showTips('退出登录！');
    }

    async fixUser() {
        if (!this.userData) return;
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
        let data = this.userData;
        data.name = userName;
        data.password = psw
        let result = await Net.Fix(data);
        if (result) {
            this.root.showTips('修改成功');
            this.userName.textLabel.string=''
            this.psw.textLabel.string=''
        } else {
            this.root.showTips('修改失败！');
        }
        this.root.node.emit(EventAct.HideLoading);
    }
    // update (dt) {}
}
