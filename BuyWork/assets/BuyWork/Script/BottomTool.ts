import { EventAct, OrderListData } from "./DataType";
import HomePage from "./HomePage";
import Net from "./Net";
import OrderItem from "./OrderItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BottomTool extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Prefab)
    orderItem: cc.Prefab = null;

    @property(cc.Node)
    orderList: cc.Node = null;

    root: HomePage = null;
    setRoot(root: HomePage) {
        this.root = root;
    }
    old: OrderListData = null;
    async openOrderList() {
        this.root.node.emit(EventAct.ShowLoading);
        let reslut = await Net.myList(this.root.getPageData().userInfo.id);
        if (reslut) {
            this.old = reslut;
            this.updateUI()
        } else {
            this.root.showTips('历史订单错误，请重试！')
        }
        this.root.node.emit(EventAct.HideLoading);
        this.orderList.active = true;
    }

    updateUI() {
        let data = this.old.data;
        const items = this.content.children.reduce((arr, child, i) => {
            arr[child.name] = child;
            return arr;
        }, {})
        for (let i = 0; i < data.length; i++) {
            const olData = data[i];
            let child = items[olData.id];
            if (child) {
                child.getComponent(OrderItem).setData(olData);
                delete items[child.name]
            } else {
                let node = this.createNode(olData.id);
                node.getComponent(OrderItem).setData(olData);
            }
        }
        for (let itemName in items) {
            items[itemName].destroy();
        }
    }
    createNode(name: string) {
        let node = cc.instantiate(this.orderItem);
        node.name = name;
        this.content.addChild(node);
        return node;
    }

    closeOrderList() {
        this.orderList.active = false;
    }

    // update (dt) {}
}
