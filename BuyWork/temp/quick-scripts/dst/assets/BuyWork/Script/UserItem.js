
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/UserItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38c1fwOmE1OzoQ6FiISfb4H', 'UserItem');
// BuyWork/Script/UserItem.ts

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
var UserItem = /** @class */ (function (_super) {
    __extends(UserItem, _super);
    function UserItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userName = null;
        _this.role = null;
        _this.time = null;
        _this.userData = null;
        return _this;
        // update (dt) {}
    }
    UserItem.prototype.setData = function (userData) {
        this.userData = userData;
        this.userName.string = "\u7528\u6237\u540D\uFF1A" + userData.name;
        this.role.string = "\u8EAB\u4EFD\uFF1A" + (userData.admin ? '管理员' : '普通用户');
        this.time.string = "\u6CE8\u518C\u65F6\u95F4\uFF1A" + userData.creationTime;
    };
    __decorate([
        property(cc.Label)
    ], UserItem.prototype, "userName", void 0);
    __decorate([
        property(cc.Label)
    ], UserItem.prototype, "role", void 0);
    __decorate([
        property(cc.Label)
    ], UserItem.prototype, "time", void 0);
    UserItem = __decorate([
        ccclass
    ], UserItem);
    return UserItem;
}(cc.Component));
exports.default = UserItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxVc2VySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtCQztRQWZHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxJQUFJLENBQUM7O1FBUTFCLGlCQUFpQjtJQUNyQixDQUFDO0lBUkcsMEJBQU8sR0FBUCxVQUFRLFFBQWtCO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDZCQUFPLFFBQVEsQ0FBQyxJQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsd0JBQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQ0FBUSxRQUFRLENBQUMsWUFBYyxDQUFDO0lBQ3ZELENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRztJQVJMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQjVCO0lBQUQsZUFBQztDQWxCRCxBQWtCQyxDQWxCcUMsRUFBRSxDQUFDLFNBQVMsR0FrQmpEO2tCQWxCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdXNlck5hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByb2xlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICB1c2VyRGF0YTogVXNlckluZm8gPSBudWxsO1xyXG4gICAgc2V0RGF0YSh1c2VyRGF0YTogVXNlckluZm8pIHtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZS5zdHJpbmcgPSBg55So5oi35ZCN77yaJHt1c2VyRGF0YS5uYW1lfWA7XHJcbiAgICAgICAgdGhpcy5yb2xlLnN0cmluZyA9IGDouqvku73vvJoke3VzZXJEYXRhLmFkbWluID8gJ+euoeeQhuWRmCcgOiAn5pmu6YCa55So5oi3J31gO1xyXG4gICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSBg5rOo5YaM5pe26Ze077yaJHt1c2VyRGF0YS5jcmVhdGlvblRpbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==