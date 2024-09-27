"use strict";
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