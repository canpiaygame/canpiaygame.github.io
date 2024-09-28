"use strict";
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