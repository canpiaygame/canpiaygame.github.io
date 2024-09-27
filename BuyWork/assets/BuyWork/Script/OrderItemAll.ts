import { OrderData } from "./DataType";
import OrderItem from "./OrderItem";
import Shop from "./Shop";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OrderItemAll extends OrderItem {

    @property(cc.Label)
    userName: cc.Label = null;

    updateUI() {
        super.updateUI && super.updateUI();
        this.userName.string = `下单用户：《${this.orderData.userName}》`;

    }


}
