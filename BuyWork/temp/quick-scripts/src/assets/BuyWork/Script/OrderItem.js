"use strict";
cc._RF.push(module, 'c831eqtYgFLDbGt1Z5MVVph', 'OrderItem');
// BuyWork/Script/OrderItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bookName = null;
        _this.total = null;
        _this.ctime = null;
        _this.amount = null;
        return _this;
    }
    // root: Shop = null;
    // setRoot(root: Shop) {
    //     this.root = root;
    // }
    OrderItem.prototype.onLoad = function () {
    };
    OrderItem.prototype.setData = function (bd) {
        this.orderData = bd;
        this.updateUI();
    };
    OrderItem.prototype.updateUI = function () {
        this.bookName.string = "\u4E66\u540D\uFF1A\u300A" + this.orderData.bookName + "\u300B";
        this.total.string = "\u5408\u8BA1\uFF1A\u300A" + this.orderData.total + "\u300B";
        this.ctime.string = "\u521B\u5EFA\u65F6\u95F4\uFF1A\u300A" + this.orderData.createTime + "\u300B";
        this.amount.string = "\u6570\u91CF\uFF1A\u300A" + this.orderData.amount + "\u300B";
    };
    __decorate([
        property(cc.Label)
    ], OrderItem.prototype, "bookName", void 0);
    __decorate([
        property(cc.Label)
    ], OrderItem.prototype, "total", void 0);
    __decorate([
        property(cc.Label)
    ], OrderItem.prototype, "ctime", void 0);
    __decorate([
        property(cc.Label)
    ], OrderItem.prototype, "amount", void 0);
    OrderItem = __decorate([
        ccclass
    ], OrderItem);
    return OrderItem;
}(cc.Component));
exports.default = OrderItem;

cc._RF.pop();