
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/HomePage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc4d7Y+f21I+KtgcUjfTLOh', 'HomePage');
// BuyWork/Script/HomePage.ts

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
var BottomTool_1 = require("./BottomTool");
var DataType_1 = require("./DataType");
var Login_1 = require("./Login");
var Net_1 = require("./Net");
var Shop_1 = require("./Shop");
var Tips_1 = require("./Tips");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.shopNode = null;
        _this.bottomTool = null;
        _this.loginNode = null;
        _this.tips = null;
        _this.pageData = new DataType_1.PageData();
        return _this;
    }
    HomePage.prototype.setUserData = function (ud) {
        return __awaiter(this, void 0, void 0, function () {
            var pd, bookList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pd = this.getPageData();
                        if (!ud) return [3 /*break*/, 2];
                        pd.userInfo = ud;
                        pd.isLogin = true;
                        return [4 /*yield*/, Net_1.default.getBookList()];
                    case 1:
                        bookList = _a.sent();
                        pd.shopData = bookList;
                        return [3 /*break*/, 3];
                    case 2:
                        pd.userInfo = null;
                        pd.isLogin = false;
                        pd.shopData = null;
                        _a.label = 3;
                    case 3:
                        this.updatePageData(pd);
                        this.node.emit(DataType_1.EventAct.HideLoading);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.touristLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pd, bookList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pd = this.getPageData();
                        pd.isTourist = true;
                        pd.userInfo = null;
                        pd.isLogin = false;
                        return [4 /*yield*/, Net_1.default.getBookList()];
                    case 1:
                        bookList = _a.sent();
                        pd.shopData = bookList;
                        this.updatePageData(pd);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onLoad = function () {
        this.node.on(DataType_1.EventAct.ShowLoading, this.showLoading.bind(this), this);
        this.node.on(DataType_1.EventAct.HideLoading, this.hideLoading.bind(this), this);
        this.loginNode.setRoot(this);
        this.shopNode.setRoot(this);
        this.bottomTool.setRoot(this);
    };
    HomePage.prototype.updatePageData = function (data) {
        this.pageData = data;
        this.updateUI(this.pageData);
    };
    HomePage.prototype.updateUI = function (data) {
        this.loginNode.node.active = data.isTourist ? false : !data.isLogin;
        this.shopNode.node.active = (data.isLogin && data.shopData != null);
        if (data.shopData && data.shopData != this.shopNode.shopData) {
            this.shopNode.setData(data.shopData, data.userInfo.id);
        }
    };
    HomePage.prototype.showLoading = function () {
        this.loading.active = true;
    };
    HomePage.prototype.hideLoading = function () {
        this.loading.active = false;
    };
    HomePage.prototype.getPageData = function () {
        return this.pageData;
    };
    HomePage.prototype.showTips = function (str) {
        var _this = this;
        this.tips.node.active = true;
        this.tips.setLabel(str);
        this.scheduleOnce(function () {
            _this.tips.node.active = false;
        }, 1);
    };
    __decorate([
        property(cc.Node)
    ], HomePage.prototype, "loading", void 0);
    __decorate([
        property(Shop_1.default)
    ], HomePage.prototype, "shopNode", void 0);
    __decorate([
        property(BottomTool_1.default)
    ], HomePage.prototype, "bottomTool", void 0);
    __decorate([
        property(Login_1.default)
    ], HomePage.prototype, "loginNode", void 0);
    __decorate([
        property(Tips_1.default)
    ], HomePage.prototype, "tips", void 0);
    HomePage = __decorate([
        ccclass
    ], HomePage);
    return HomePage;
}(cc.Component));
exports.default = HomePage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsdUNBQXdFO0FBQ3hFLGlDQUE0QjtBQUM1Qiw2QkFBd0I7QUFDeEIsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUs1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1GQztRQWhGRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGNBQVEsR0FBUyxJQUFJLENBQUM7UUFHdEIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFHOUIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBNEJSLGNBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQzs7SUF3Q2xELENBQUM7SUFsRVMsOEJBQVcsR0FBakIsVUFBa0IsRUFBWTs7Ozs7O3dCQUN0QixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzZCQUN4QixFQUFFLEVBQUYsd0JBQUU7d0JBQ0YsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQ2pCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNXLHFCQUFNLGFBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQWhELFFBQVEsR0FBaUIsU0FBdUI7d0JBQ3BELEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7d0JBRXZCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNuQixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDbkIsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJ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Q2QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBL0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDOzhDQUNPO0lBR3RCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7Z0RBQ1M7SUFHOUI7UUFEQyxRQUFRLENBQUMsZUFBSyxDQUFDOytDQUNRO0lBR3hCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzswQ0FDRztJQWZELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtRjVCO0lBQUQsZUFBQztDQW5GRCxBQW1GQyxDQW5GcUMsRUFBRSxDQUFDLFNBQVMsR0FtRmpEO2tCQW5Gb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3R0b21Ub29sIGZyb20gXCIuL0JvdHRvbVRvb2xcIjtcclxuaW1wb3J0IHsgQm9va0xpc3REYXRhLCBFdmVudEFjdCwgUGFnZURhdGEsIFVzZXJJbmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcbmltcG9ydCBTaG9wIGZyb20gXCIuL1Nob3BcIjtcclxuaW1wb3J0IFRpcHMgZnJvbSBcIi4vVGlwc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFNob3ApXHJcbiAgICBzaG9wTm9kZTogU2hvcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvdHRvbVRvb2wpXHJcbiAgICBib3R0b21Ub29sOiBCb3R0b21Ub29sID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTG9naW4pXHJcbiAgICBsb2dpbk5vZGU6IExvZ2luID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVGlwcylcclxuICAgIHRpcHM6IFRpcHMgPSBudWxsO1xyXG5cclxuICAgIGFzeW5jIHNldFVzZXJEYXRhKHVkOiBVc2VySW5mbykge1xyXG4gICAgICAgIGxldCBwZCA9IHRoaXMuZ2V0UGFnZURhdGEoKTtcclxuICAgICAgICBpZiAodWQpIHtcclxuICAgICAgICAgICAgcGQudXNlckluZm8gPSB1ZDtcclxuICAgICAgICAgICAgcGQuaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib29rTGlzdDogQm9va0xpc3REYXRhID0gYXdhaXQgTmV0LmdldEJvb2tMaXN0KCk7XHJcbiAgICAgICAgICAgIHBkLnNob3BEYXRhID0gYm9va0xpc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGQudXNlckluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICBwZC5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBkLnNob3BEYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlRGF0YShwZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoRXZlbnRBY3QuSGlkZUxvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRvdXJpc3RMb2dpbigpIHtcclxuICAgICAgICBsZXQgcGQgPSB0aGlzLmdldFBhZ2VEYXRhKCk7XHJcbiAgICAgICAgcGQuaXNUb3VyaXN0ID0gdHJ1ZTtcclxuICAgICAgICBwZC51c2VySW5mbyA9IG51bGw7XHJcbiAgICAgICAgcGQuaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib29rTGlzdDogQm9va0xpc3REYXRhID0gYXdhaXQgTmV0LmdldEJvb2tMaXN0KCk7XHJcbiAgICAgICAgcGQuc2hvcERhdGEgPSBib29rTGlzdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VEYXRhKHBkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcGFnZURhdGE6IFBhZ2VEYXRhID0gbmV3IFBhZ2VEYXRhKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oRXZlbnRBY3QuU2hvd0xvYWRpbmcsIHRoaXMuc2hvd0xvYWRpbmcuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKEV2ZW50QWN0LkhpZGVMb2FkaW5nLCB0aGlzLmhpZGVMb2FkaW5nLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubG9naW5Ob2RlLnNldFJvb3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wTm9kZS5zZXRSb290KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tVG9vbC5zZXRSb290KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhZ2VEYXRhKGRhdGE6IFBhZ2VEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSh0aGlzLnBhZ2VEYXRhKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVJKGRhdGE6IFBhZ2VEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbk5vZGUubm9kZS5hY3RpdmUgPSBkYXRhLmlzVG91cmlzdCA/IGZhbHNlIDogIWRhdGEuaXNMb2dpbjtcclxuICAgICAgICB0aGlzLnNob3BOb2RlLm5vZGUuYWN0aXZlID0gKGRhdGEuaXNMb2dpbiAmJiBkYXRhLnNob3BEYXRhICE9IG51bGwpXHJcbiAgICAgICAgaWYgKGRhdGEuc2hvcERhdGEgJiYgZGF0YS5zaG9wRGF0YSAhPSB0aGlzLnNob3BOb2RlLnNob3BEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcE5vZGUuc2V0RGF0YShkYXRhLnNob3BEYXRhLGRhdGEudXNlckluZm8uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRQYWdlRGF0YSgpOiBQYWdlRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RpcHMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpcHMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGlwcy5zZXRMYWJlbChzdHIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aXBzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxufVxyXG4iXX0=