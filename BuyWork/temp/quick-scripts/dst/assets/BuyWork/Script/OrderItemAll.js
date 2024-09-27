
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/OrderItemAll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxPcmRlckl0ZW1BbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFTO0lBQW5EO1FBQUEscUVBWUM7UUFURyxjQUFRLEdBQWEsSUFBSSxDQUFDOztJQVM5QixDQUFDO0lBUEcsK0JBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsSUFBSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx5Q0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsV0FBRyxDQUFDO0lBRS9ELENBQUM7SUFORDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNPO0lBSFQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQVloQztJQUFELG1CQUFDO0NBWkQsQUFZQyxDQVp5QyxtQkFBUyxHQVlsRDtrQkFab0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyRGF0YSB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSBcIi4vT3JkZXJJdGVtXCI7XHJcbmltcG9ydCBTaG9wIGZyb20gXCIuL1Nob3BcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckl0ZW1BbGwgZXh0ZW5kcyBPcmRlckl0ZW0ge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdXBkYXRlVUkoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlVUkgJiYgc3VwZXIudXBkYXRlVUkoKTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lLnN0cmluZyA9IGDkuIvljZXnlKjmiLfvvJrjgIoke3RoaXMub3JkZXJEYXRhLnVzZXJOYW1lfeOAi2A7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19