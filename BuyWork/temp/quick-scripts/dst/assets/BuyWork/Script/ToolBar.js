
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/ToolBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd13e1Jl1FRPWYQ7ZOIOMGP4', 'ToolBar');
// BuyWork/Script/ToolBar.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinData = void 0;
var DataType_1 = require("./DataType");
var Net_1 = require("./Net");
var OrderItemAll_1 = require("./OrderItemAll");
var UserItem_1 = require("./UserItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinData = /** @class */ (function () {
    function WinData() {
    }
    return WinData;
}());
exports.WinData = WinData;
var ToolBar = /** @class */ (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnList = [];
        _this.winList = [];
        //--------------
        _this.userName = null;
        _this.psw = null;
        //--------------
        _this.contentOrder = null;
        _this.orderItem = null;
        //-----------------------
        _this.contentUser = null;
        _this.userItem = null;
        //-----------------------
        _this.topWin = null;
        _this.root = null;
        _this.openWin = 0;
        _this.userData = null;
        _this.old = null;
        _this.userList = null;
        return _this;
        // update (dt) {}
    }
    ToolBar.prototype.setRoot = function (root) {
        this.root = root;
    };
    ToolBar.prototype.setUserData = function (ud) {
        this.userData = ud;
    };
    ToolBar.prototype.updataShop = function () {
        var data = this.old.data;
        var items = this.contentOrder.children.reduce(function (arr, child, i) {
            arr[child.name] = child;
            return arr;
        }, {});
        for (var i = 0; i < data.length; i++) {
            var olData = data[i];
            var child = items[olData.id];
            if (child) {
                child.getComponent(OrderItemAll_1.default).setData(olData);
                delete items[child.name];
            }
            else {
                var node = this.createNode(olData.id, this.orderItem);
                node.getComponent(OrderItemAll_1.default).setData(olData);
            }
        }
        for (var itemName in items) {
            items[itemName].destroy();
        }
    };
    ToolBar.prototype.createNode = function (name, pf) {
        var node = cc.instantiate(pf);
        node.name = name;
        this.contentOrder.addChild(node);
        return node;
    };
    ToolBar.prototype.adminUI = function () {
        this.btnList.forEach(function (element) {
            element.active = true;
        });
    };
    ToolBar.prototype.userUI = function () {
        this.btnList.forEach(function (element, i) {
            element.active = (i == 0 || i == 4);
        });
    };
    ToolBar.prototype.closeBtnClick = function () {
        this.topWin.active = false;
    };
    ToolBar.prototype.openBtnClick = function () {
        this.topWin.active = true;
    };
    ToolBar.prototype.logOutBtnClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userData)
                            return [2 /*return*/];
                        return [4 /*yield*/, Net_1.default.logout(this.userData.id)];
                    case 1:
                        _a.sent();
                        this.root.setUserData(null);
                        this.userData = null;
                        this.root.showTips('退出登录！');
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolBar.prototype.fixUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userName, psw, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userData)
                            return [2 /*return*/];
                        userName = this.userName.textLabel.string;
                        psw = this.psw.textLabel.string;
                        if (userName.length < 3) {
                            this.root.showTips('用户名设置太短！');
                            return [2 /*return*/];
                        }
                        else if (psw.length < 6) {
                            this.root.showTips('密码设置太短！');
                            return [2 /*return*/];
                        }
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        data = this.userData;
                        data.name = userName;
                        data.password = psw;
                        return [4 /*yield*/, Net_1.default.Fix(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.root.showTips('修改成功');
                            this.userName.textLabel.string = '';
                            this.psw.textLabel.string = '';
                            this.root.setUserData(result);
                        }
                        else {
                            this.root.showTips('修改失败！');
                        }
                        this.root.node.emit(DataType_1.EventAct.HideLoading);
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolBar.prototype.updataUI = function () {
        for (var i = 0; i < this.winList.length; i++) {
            var element = this.winList[i];
            element.x = this.openWin == i ? -36 : -4000;
        }
    };
    ToolBar.prototype.openUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reslut;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.root)
                            return [2 /*return*/];
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        return [4 /*yield*/, Net_1.default.userList(this.root.getPageData().userInfo.id)];
                    case 1:
                        reslut = _a.sent();
                        if (reslut) {
                            this.userList = reslut;
                            this.updataUserList();
                        }
                        else {
                            this.root.showTips('错误，请重试！');
                        }
                        this.root.node.emit(DataType_1.EventAct.HideLoading);
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolBar.prototype.updataUserList = function () {
        var data = this.userList.data;
        var items = this.contentUser.children.reduce(function (arr, child, i) {
            arr[child.name] = child;
            return arr;
        }, {});
        for (var i = 0; i < data.length; i++) {
            var uData = data[i];
            var child = items[uData.id];
            if (child) {
                child.getComponent(UserItem_1.default).setData(uData);
                delete items[child.name];
            }
            else {
                var node = this.createNode(uData.id, this.userItem);
                node.getComponent(UserItem_1.default).setData(uData);
            }
        }
        for (var itemName in items) {
            items[itemName].destroy();
        }
    };
    ToolBar.prototype.openOrderList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reslut;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.root)
                            return [2 /*return*/];
                        // if (this.root.getPageData().isTourist) return;
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        return [4 /*yield*/, Net_1.default.orderListAll(this.root.getPageData().userInfo.id)];
                    case 1:
                        reslut = _a.sent();
                        if (reslut) {
                            this.old = reslut;
                            this.updataShop();
                        }
                        else {
                            this.root.showTips('历史订单错误，请重试！');
                        }
                        this.root.node.emit(DataType_1.EventAct.HideLoading);
                        return [2 /*return*/];
                }
            });
        });
    };
    ToolBar.prototype.btnUserClick = function () {
        this.openWin = 0;
        this.updataUI();
    };
    ToolBar.prototype.btnUserListClick = function () {
        this.openWin = 1;
        this.updataUI();
    };
    ToolBar.prototype.btnOrderListClcik = function () {
        this.openWin = 3;
        this.updataUI();
        this.openOrderList();
    };
    ToolBar.prototype.btnShopListClick = function () {
    };
    __decorate([
        property([cc.Node])
    ], ToolBar.prototype, "btnList", void 0);
    __decorate([
        property([cc.Node])
    ], ToolBar.prototype, "winList", void 0);
    __decorate([
        property(cc.EditBox)
    ], ToolBar.prototype, "userName", void 0);
    __decorate([
        property(cc.EditBox)
    ], ToolBar.prototype, "psw", void 0);
    __decorate([
        property(cc.Node)
    ], ToolBar.prototype, "contentOrder", void 0);
    __decorate([
        property(cc.Prefab)
    ], ToolBar.prototype, "orderItem", void 0);
    __decorate([
        property(cc.Node)
    ], ToolBar.prototype, "contentUser", void 0);
    __decorate([
        property(cc.Prefab)
    ], ToolBar.prototype, "userItem", void 0);
    __decorate([
        property(cc.Node)
    ], ToolBar.prototype, "topWin", void 0);
    ToolBar = __decorate([
        ccclass
    ], ToolBar);
    return ToolBar;
}(cc.Component));
exports.default = ToolBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxUb29sQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1Q0FBNkU7QUFFN0UsNkJBQXdCO0FBQ3hCLCtDQUEwQztBQUMxQyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUM7SUFBQTtJQUNBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSwwQkFBTztBQUdwQjtJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXFNQztRQWxNRyxhQUFPLEdBQWMsRUFBRSxDQUFDO1FBR3hCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFDeEIsZ0JBQWdCO1FBRWhCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFlLElBQUksQ0FBQztRQUN2QixnQkFBZ0I7UUFFaEIsa0JBQVksR0FBWSxJQUFJLENBQUE7UUFHNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1Qix5QkFBeUI7UUFHekIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQix5QkFBeUI7UUFHekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQU8xQixTQUFHLEdBQWtCLElBQUksQ0FBQztRQTJGMUIsY0FBUSxHQUFnQixJQUFJLENBQUM7O1FBa0U3QixpQkFBaUI7SUFDckIsQ0FB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QUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7SUFFQSxDQUFDO0lBaE1EO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzRDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NkNBQ087SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDRTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1E7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNPO0lBSTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0s7SUE1Qk4sT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXFNM0I7SUFBRCxjQUFDO0NBck1ELEFBcU1DLENBck1vQyxFQUFFLENBQUMsU0FBUyxHQXFNaEQ7a0JBck1vQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgRXZlbnRBY3QsIE9yZGVyTGlzdERhdGEsIFVzZXJJbmZvLCBVc2VyTGlzdERhdGEgfSBmcm9tIFwiLi9EYXRhVHlwZVwiO1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuaW1wb3J0IE5ldCBmcm9tIFwiLi9OZXRcIjtcclxuaW1wb3J0IE9yZGVySXRlbUFsbCBmcm9tIFwiLi9PcmRlckl0ZW1BbGxcIjtcclxuaW1wb3J0IFVzZXJJdGVtIGZyb20gXCIuL1VzZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgV2luRGF0YSB7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbEJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGJ0bkxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB3aW5MaXN0OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS1cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgdXNlck5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHN3OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS1cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29udGVudE9yZGVyOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBvcmRlckl0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50VXNlcjogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB1c2VySXRlbTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvcFdpbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcm9vdDogSG9tZVBhZ2UgPSBudWxsO1xyXG4gICAgb3BlbldpbjogbnVtYmVyID0gMDtcclxuICAgIHVzZXJEYXRhOiBVc2VySW5mbyA9IG51bGw7XHJcbiAgICBzZXRSb290KHJvb3Q6IEhvbWVQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgIH1cclxuICAgIHNldFVzZXJEYXRhKHVkOiBVc2VySW5mbykge1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1ZDtcclxuICAgIH1cclxuICAgIG9sZDogT3JkZXJMaXN0RGF0YSA9IG51bGw7XHJcblxyXG4gICAgdXBkYXRhU2hvcCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMub2xkLmRhdGE7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNvbnRlbnRPcmRlci5jaGlsZHJlbi5yZWR1Y2UoKGFyciwgY2hpbGQsIGkpID0+IHtcclxuICAgICAgICAgICAgYXJyW2NoaWxkLm5hbWVdID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sRGF0YSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGl0ZW1zW29sRGF0YS5pZF07XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KE9yZGVySXRlbUFsbCkuc2V0RGF0YShvbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW1zW2NoaWxkLm5hbWVdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlTm9kZShvbERhdGEuaWQsIHRoaXMub3JkZXJJdGVtKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KE9yZGVySXRlbUFsbCkuc2V0RGF0YShvbERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1OYW1lIGluIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2l0ZW1OYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5vZGUobmFtZTogc3RyaW5nLCBwZjogY2MuUHJlZmFiKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwZik7XHJcbiAgICAgICAgbm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRPcmRlci5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBhZG1pblVJKCkge1xyXG4gICAgICAgIHRoaXMuYnRuTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlclVJKCkge1xyXG4gICAgICAgIHRoaXMuYnRuTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gKGkgPT0gMCB8fCBpID09IDQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnRuQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy50b3BXaW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJ0bkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMudG9wV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9nT3V0QnRuQ2xpY2soZSkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IE5ldC5sb2dvdXQodGhpcy51c2VyRGF0YS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNldFVzZXJEYXRhKG51bGwpO1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6YCA5Ye655m75b2V77yBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZml4VXNlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckRhdGEpIHJldHVybjtcclxuICAgICAgICBsZXQgdXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lLnRleHRMYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHBzdyA9IHRoaXMucHN3LnRleHRMYWJlbC5zdHJpbmc7XHJcbiAgICAgICAgaWYgKHVzZXJOYW1lLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfnlKjmiLflkI3orr7nva7lpKrnn63vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHN3Lmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCflr4bnoIHorr7nva7lpKrnn63vvIEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LlNob3dMb2FkaW5nKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMudXNlckRhdGE7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgZGF0YS5wYXNzd29yZCA9IHBzd1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOZXQuRml4KGRhdGEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfkv67mlLnmiJDlip8nKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZS50ZXh0TGFiZWwuc3RyaW5nID0gJydcclxuICAgICAgICAgICAgdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2V0VXNlckRhdGEocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+S/ruaUueWksei0pe+8gScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgIH1cclxuICAgIHVwZGF0YVVJKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aW5MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLndpbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQueCA9IHRoaXMub3BlbldpbiA9PSBpID8gLTM2IDogLTQwMDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VyTGlzdDpVc2VyTGlzdERhdGEgPSBudWxsO1xyXG4gICAgYXN5bmMgb3BlblVzZXJMaXN0KCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LlNob3dMb2FkaW5nKTtcclxuICAgICAgICBsZXQgcmVzbHV0ID0gYXdhaXQgTmV0LnVzZXJMaXN0KHRoaXMucm9vdC5nZXRQYWdlRGF0YSgpLnVzZXJJbmZvLmlkKTtcclxuICAgICAgICBpZiAocmVzbHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3QgPSByZXNsdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRhVXNlckxpc3QoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6ZSZ6K+v77yM6K+36YeN6K+V77yBJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGFVc2VyTGlzdCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMudXNlckxpc3QuZGF0YTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29udGVudFVzZXIuY2hpbGRyZW4ucmVkdWNlKChhcnIsIGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGFycltjaGlsZC5uYW1lXSA9IGNoaWxkO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB1RGF0YSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGl0ZW1zW3VEYXRhLmlkXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoVXNlckl0ZW0pLnNldERhdGEodURhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW1zW2NoaWxkLm5hbWVdXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlTm9kZSh1RGF0YS5pZCwgdGhpcy51c2VySXRlbSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChVc2VySXRlbSkuc2V0RGF0YSh1RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbU5hbWUgaW4gaXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbXNbaXRlbU5hbWVdLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9wZW5PcmRlckxpc3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICAvLyBpZiAodGhpcy5yb290LmdldFBhZ2VEYXRhKCkuaXNUb3VyaXN0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5vcmRlckxpc3RBbGwodGhpcy5yb290LmdldFBhZ2VEYXRhKCkudXNlckluZm8uaWQpO1xyXG4gICAgICAgIGlmIChyZXNsdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSByZXNsdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRhU2hvcCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfljoblj7LorqLljZXplJnor6/vvIzor7fph43or5XvvIEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgIH1cclxuICAgIGJ0blVzZXJDbGljaygpIHtcclxuICAgICAgICB0aGlzLm9wZW5XaW4gPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRhVUkoKTtcclxuICAgIH1cclxuICAgIGJ0blVzZXJMaXN0Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuV2luID0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0YVVJKCk7XHJcbiAgICB9XHJcbiAgICBidG5PcmRlckxpc3RDbGNpaygpIHtcclxuICAgICAgICB0aGlzLm9wZW5XaW4gPSAzO1xyXG4gICAgICAgIHRoaXMudXBkYXRhVUkoKTtcclxuICAgICAgICB0aGlzLm9wZW5PcmRlckxpc3QoKTtcclxuXHJcbiAgICB9XHJcbiAgICBidG5TaG9wTGlzdENsaWNrKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19