"use strict";
cc._RF.push(module, '6780cRRm+ZM/b52JZt8Si7z', 'OrderItemAll');
// BuyWork/Script/OrderItemAll.ts

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
var OrderItem_1 = require("./OrderItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderItemAll = /** @class */ (function (_super) {
    __extends(OrderItemAll, _super);
    function OrderItemAll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userName = null;
        return _this;
    }
    OrderItemAll.prototype.updateUI = function () {
        _super.prototype.updateUI && _super.prototype.updateUI.call(this);
        this.userName.string = "\u4E0B\u5355\u7528\u6237\uFF1A\u300A" + this.orderData.userName + "\u300B";
    };
    __decorate([
        property(cc.Label)
    ], OrderItemAll.prototype, "userName", void 0);
    OrderItemAll = __decorate([
        ccclass
    ], OrderItemAll);
    return OrderItemAll;
}(OrderItem_1.default));
exports.default = OrderItemAll;

cc._RF.pop();