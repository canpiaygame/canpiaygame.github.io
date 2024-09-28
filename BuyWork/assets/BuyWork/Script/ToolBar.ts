// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventAct, OrderListData, UserInfo, UserListData } from "./DataType";
import HomePage from "./HomePage";
import Net from "./Net";
import OrderItemAll from "./OrderItemAll";
import UserItem from "./UserItem";

const { ccclass, property } = cc._decorator;
export class WinData {
}
@ccclass
export default class ToolBar extends cc.Component {

    @property([cc.Node])
    btnList: cc.Node[] = [];

    @property([cc.Node])
    winList: cc.Node[] = [];
    //--------------
    @property(cc.EditBox)
    userName: cc.EditBox = null;

    @property(cc.EditBox)
    psw: cc.EditBox = null;
    //--------------
    @property(cc.Node)
    contentOrder: cc.Node = null

    @property(cc.Prefab)
    orderItem: cc.Prefab = null;
    //-----------------------

    @property(cc.Node)
    contentUser: cc.Node = null
    @property(cc.Prefab)
    userItem: cc.Prefab = null;
    //-----------------------

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
    old: OrderListData = null;

    updataShop() {
        let data = this.old.data;
        const items = this.contentOrder.children.reduce((arr, child, i) => {
            arr[child.name] = child;
            return arr;
        }, {})
        for (let i = 0; i < data.length; i++) {
            const olData = data[i];
            let child = items[olData.id];
            if (child) {
                child.getComponent(OrderItemAll).setData(olData);
                delete items[child.name]
            } else {
                let node = this.createNode(olData.id, this.orderItem);
                node.getComponent(OrderItemAll).setData(olData);
            }
        }
        for (let itemName in items) {
            items[itemName].destroy();
        }
    }

    createNode(name: string, pf: cc.Prefab) {
        let node = cc.instantiate(pf);
        node.name = name;
        this.contentOrder.addChild(node);
        return node;
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
            this.userName.textLabel.string = ''
            this.psw.textLabel.string = '';
            this.root.setUserData(result);
        } else {
            this.root.showTips('修改失败！');
        }
        this.root.node.emit(EventAct.HideLoading);
    }
    updataUI() {
        for (let i = 0; i < this.winList.length; i++) {
            const element = this.winList[i];
            element.x = this.openWin == i ? -36 : -4000
        }
    }
    userList:UserListData = null;
    async openUserList(){
        if (!this.root) return;
        this.root.node.emit(EventAct.ShowLoading);
        let reslut = await Net.userList(this.root.getPageData().userInfo.id);
        if (reslut) {
            this.userList = reslut;
            this.updataUserList()
        } else {
            this.root.showTips('错误，请重试！')
        }
        this.root.node.emit(EventAct.HideLoading);
    }
    updataUserList() {
        let data = this.userList.data;
        const items = this.contentUser.children.reduce((arr, child, i) => {
            arr[child.name] = child;
            return arr;
        }, {})
        for (let i = 0; i < data.length; i++) {
            const uData = data[i];
            let child = items[uData.id];
            if (child) {
                child.getComponent(UserItem).setData(uData);
                delete items[child.name]
            } else {
                let node = this.createNode(uData.id, this.userItem);
                node.getComponent(UserItem).setData(uData);
            }
        }
        for (let itemName in items) {
            items[itemName].destroy();
        }

    }

    async openOrderList() {
        if (!this.root) return;
        // if (this.root.getPageData().isTourist) return;
        this.root.node.emit(EventAct.ShowLoading);
        let reslut = await Net.orderListAll(this.root.getPageData().userInfo.id);
        if (reslut) {
            this.old = reslut;
            this.updataShop()
        } else {
            this.root.showTips('历史订单错误，请重试！')
        }
        this.root.node.emit(EventAct.HideLoading);
    }
    btnUserClick() {
        this.openWin = 0;
        this.updataUI();
    }
    btnUserListClick() {
        this.openWin = 1;
        this.updataUI();
    }
    btnOrderListClcik() {
        this.openWin = 3;
        this.updataUI();
        this.openOrderList();

    }
    btnShopListClick() {

    }
    // update (dt) {}
}
