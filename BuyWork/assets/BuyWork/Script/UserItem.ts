import { UserInfo } from "./DataType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UserItem extends cc.Component {

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Label)
    role: cc.Label = null;
    @property(cc.Label)
    time: cc.Label = null;
    userData: UserInfo = null;
    setData(userData: UserInfo) {
        this.userData = userData;
        this.userName.string = `用户名：${userData.name}`;
        this.role.string = `身份：${userData.admin ? '管理员' : '普通用户'}`;
        this.time.string = `注册时间：${userData.creationTime}`;
    }

    // update (dt) {}
}
