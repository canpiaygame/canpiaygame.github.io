import { OrderData } from "./DataType";
import Shop from "./Shop";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OrderItem extends cc.Component {

    @property(cc.Label)
    bookName: cc.Label = null;

    @property(cc.Label)
    total: cc.Label = null;

    @property(cc.Label)
    ctime: cc.Label = null;

    @property(cc.Label)
    amount: cc.Label = null;

    orderData: OrderData;
    // root: Shop = null;

    // setRoot(root: Shop) {
    //     this.root = root;
    // }
    onLoad() {
    }


    setData(bd: OrderData) {
        this.orderData = bd;
        this.updateUI();
    }

    updateUI() {
        this.bookName.string = `书名：《${this.orderData.bookName}》`;
        this.total.string = `合计：《${this.orderData.total}》`;
        this.ctime.string = `创建时间：《${this.orderData.createTime}》`;
        this.amount.string = `数量：《${this.orderData.amount}》`;


    }


}
