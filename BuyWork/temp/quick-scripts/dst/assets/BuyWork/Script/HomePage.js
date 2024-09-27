
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBd0U7QUFDeEUsaUNBQTRCO0FBQzVCLDZCQUF3QjtBQUN4QiwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBRXBCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0VDO1FBNUVHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFTLElBQUksQ0FBQztRQUd0QixlQUFTLEdBQVUsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBUyxJQUFJLENBQUM7UUE0QlIsY0FBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDOztJQXVDbEQsQ0FBQztJQWpFUyw4QkFBVyxHQUFqQixVQUFrQixFQUFZOzs7Ozs7d0JBQ3RCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7NkJBQ3hCLEVBQUUsRUFBRix3QkFBRTt3QkFDRixFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzt3QkFDakIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ1cscUJBQU0sYUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBaEQsUUFBUSxHQUFpQixTQUF1Qjt3QkFDcEQsRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Ozt3QkFFdkIsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ25CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNuQixFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7O3dCQUV2QixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUs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QUM7SUEzRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7OENBQ087SUFHdEI7UUFEQyxRQUFRLENBQUMsZUFBSyxDQUFDOytDQUNRO0lBR3hCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzswQ0FDRztJQVpELFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErRTVCO0lBQUQsZUFBQztDQS9FRCxBQStFQyxDQS9FcUMsRUFBRSxDQUFDLFNBQVMsR0ErRWpEO2tCQS9Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tMaXN0RGF0YSwgRXZlbnRBY3QsIFBhZ2VEYXRhLCBVc2VySW5mbyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuL05ldFwiO1xyXG5pbXBvcnQgU2hvcCBmcm9tIFwiLi9TaG9wXCI7XHJcbmltcG9ydCBUaXBzIGZyb20gXCIuL1RpcHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvYWRpbmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTaG9wKVxyXG4gICAgc2hvcE5vZGU6IFNob3AgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShMb2dpbilcclxuICAgIGxvZ2luTm9kZTogTG9naW4gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShUaXBzKVxyXG4gICAgdGlwczogVGlwcyA9IG51bGw7XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckRhdGEodWQ6IFVzZXJJbmZvKSB7XHJcbiAgICAgICAgbGV0IHBkID0gdGhpcy5nZXRQYWdlRGF0YSgpO1xyXG4gICAgICAgIGlmICh1ZCkge1xyXG4gICAgICAgICAgICBwZC51c2VySW5mbyA9IHVkO1xyXG4gICAgICAgICAgICBwZC5pc0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGJvb2tMaXN0OiBCb29rTGlzdERhdGEgPSBhd2FpdCBOZXQuZ2V0Qm9va0xpc3QoKTtcclxuICAgICAgICAgICAgcGQuc2hvcERhdGEgPSBib29rTGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwZC51c2VySW5mbyA9IG51bGw7XHJcbiAgICAgICAgICAgIHBkLmlzTG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgcGQuc2hvcERhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VEYXRhKHBkKTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdG91cmlzdExvZ2luKCkge1xyXG4gICAgICAgIGxldCBwZCA9IHRoaXMuZ2V0UGFnZURhdGEoKTtcclxuICAgICAgICBwZC5pc1RvdXJpc3QgPSB0cnVlO1xyXG4gICAgICAgIHBkLnVzZXJJbmZvID0gbnVsbDtcclxuICAgICAgICBwZC5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvb2tMaXN0OiBCb29rTGlzdERhdGEgPSBhd2FpdCBOZXQuZ2V0Qm9va0xpc3QoKTtcclxuICAgICAgICBwZC5zaG9wRGF0YSA9IGJvb2tMaXN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZURhdGEocGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwYWdlRGF0YTogUGFnZURhdGEgPSBuZXcgUGFnZURhdGEoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihFdmVudEFjdC5TaG93TG9hZGluZywgdGhpcy5zaG93TG9hZGluZy5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oRXZlbnRBY3QuSGlkZUxvYWRpbmcsIHRoaXMuaGlkZUxvYWRpbmcuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbk5vZGUuc2V0Um9vdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3BOb2RlLnNldFJvb3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGFnZURhdGEoZGF0YTogUGFnZURhdGEpIHtcclxuICAgICAgICB0aGlzLnBhZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKHRoaXMucGFnZURhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVUkoZGF0YTogUGFnZURhdGEpIHtcclxuICAgICAgICB0aGlzLmxvZ2luTm9kZS5ub2RlLmFjdGl2ZSA9IGRhdGEuaXNUb3VyaXN0ID8gZmFsc2UgOiAhZGF0YS5pc0xvZ2luO1xyXG4gICAgICAgIHRoaXMuc2hvcE5vZGUubm9kZS5hY3RpdmUgPSAoZGF0YS5pc0xvZ2luICYmIGRhdGEuc2hvcERhdGEgIT0gbnVsbClcclxuICAgICAgICBpZiAoZGF0YS5zaG9wRGF0YSAmJiBkYXRhLnNob3BEYXRhICE9IHRoaXMuc2hvcE5vZGUuc2hvcERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wTm9kZS5zZXREYXRhKGRhdGEuc2hvcERhdGEsZGF0YS51c2VySW5mby5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFBhZ2VEYXRhKCk6IFBhZ2VEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGlwcyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aXBzLnNldExhYmVsKHN0cik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpcHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==