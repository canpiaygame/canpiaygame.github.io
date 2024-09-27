
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/OrderItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxPcmRlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF1Q0M7UUFwQ0csY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQzs7SUEyQjVCLENBQUM7SUF4QkcscUJBQXFCO0lBRXJCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsSUFBSTtJQUNKLDBCQUFNLEdBQU47SUFDQSxDQUFDO0lBR0QsMkJBQU8sR0FBUCxVQUFRLEVBQWE7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsNkJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQUcsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw2QkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssV0FBRyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHlDQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxXQUFHLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsNkJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLFdBQUcsQ0FBQztJQUd6RCxDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0s7SUFaUCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdUM3QjtJQUFELGdCQUFDO0NBdkNELEFBdUNDLENBdkNzQyxFQUFFLENBQUMsU0FBUyxHQXVDbEQ7a0JBdkNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJEYXRhIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IFNob3AgZnJvbSBcIi4vU2hvcFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVySXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYm9va05hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0b3RhbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGN0aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb3JkZXJEYXRhOiBPcmRlckRhdGE7XHJcbiAgICAvLyByb290OiBTaG9wID0gbnVsbDtcclxuXHJcbiAgICAvLyBzZXRSb290KHJvb3Q6IFNob3ApIHtcclxuICAgIC8vICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgLy8gfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXREYXRhKGJkOiBPcmRlckRhdGEpIHtcclxuICAgICAgICB0aGlzLm9yZGVyRGF0YSA9IGJkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSSgpIHtcclxuICAgICAgICB0aGlzLmJvb2tOYW1lLnN0cmluZyA9IGDkuablkI3vvJrjgIoke3RoaXMub3JkZXJEYXRhLmJvb2tOYW1lfeOAi2A7XHJcbiAgICAgICAgdGhpcy50b3RhbC5zdHJpbmcgPSBg5ZCI6K6h77ya44CKJHt0aGlzLm9yZGVyRGF0YS50b3RhbH3jgItgO1xyXG4gICAgICAgIHRoaXMuY3RpbWUuc3RyaW5nID0gYOWIm+W7uuaXtumXtO+8muOAiiR7dGhpcy5vcmRlckRhdGEuY3JlYXRlVGltZX3jgItgO1xyXG4gICAgICAgIHRoaXMuYW1vdW50LnN0cmluZyA9IGDmlbDph4/vvJrjgIoke3RoaXMub3JkZXJEYXRhLmFtb3VudH3jgItgO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=