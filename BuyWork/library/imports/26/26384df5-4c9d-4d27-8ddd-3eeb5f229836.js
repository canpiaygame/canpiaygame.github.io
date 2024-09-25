"use strict";
cc._RF.push(module, '2638431TJ1NJ43dPutfIpg2', 'DataType');
// BuyWork/Script/DataType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookData = exports.ItemData = exports.OrderForm = exports.ItemList = exports.role = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
var PageData = /** @class */ (function () {
    function PageData() {
        this.isLogin = false; // 
        this.loading = false;
    }
    return PageData;
}());
exports.PageData = PageData;
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.userName = '';
        this.psw = '';
        this.role = role.Tourist;
        this.uid = '';
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var EventAct;
(function (EventAct) {
    EventAct["ShowLoading"] = "showLoading";
    EventAct["HideLoading"] = "hideLoading";
})(EventAct = exports.EventAct || (exports.EventAct = {}));
var role;
(function (role) {
    role[role["Tourist"] = 0] = "Tourist";
    role[role["User"] = 1] = "User";
    role[role["Admin"] = 2] = "Admin";
})(role = exports.role || (exports.role = {}));
/**
 *购物车 购物清单
*/
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.bookList = [];
        this.lastUpdateTime = 0;
    }
    return ItemList;
}());
exports.ItemList = ItemList;
/**
 * 订单
 */
var OrderForm = /** @class */ (function () {
    function OrderForm() {
        this.itemList = [];
    }
    return OrderForm;
}());
exports.OrderForm = OrderForm;
var ItemData = /** @class */ (function () {
    function ItemData() {
        this.bookData = null;
    }
    return ItemData;
}());
exports.ItemData = ItemData;
var BookData = /** @class */ (function () {
    function BookData() {
        this.name = '';
        this.from = '';
        this.date = ''; // string or number
        this.isbn = '';
        this.desc = '';
        this.pic = 0;
        this.price = 0;
        this.createTime = 0; // 时间戳或者字符串  书本下单时间
        this.payTime = 0; // 付款时间
    }
    return BookData;
}());
exports.BookData = BookData;

cc._RF.pop();