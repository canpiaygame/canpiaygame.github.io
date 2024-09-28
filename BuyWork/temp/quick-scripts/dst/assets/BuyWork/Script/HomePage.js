
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
var ToolBar_1 = require("./ToolBar");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.shopNode = null;
        _this.bottomTool = null;
        _this.topTool = null;
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
                        this.topTool.setUserData(ud);
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
        this.topTool.setRoot(this);
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
        property(ToolBar_1.default)
    ], HomePage.prototype, "topTool", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsdUNBQXdFO0FBQ3hFLGlDQUE0QjtBQUM1Qiw2QkFBd0I7QUFDeEIsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUMxQixxQ0FBZ0M7QUFFMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzRkM7UUFuRkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVMsSUFBSSxDQUFDO1FBR3RCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBNkJSLGNBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQzs7SUF5Q2xELENBQUM7SUFwRVMsOEJBQVcsR0FBakIsVUFBa0IsRUFBWTs7Ozs7O3dCQUN0QixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzZCQUN4QixFQUFFLEVBQUYsd0JBQUU7d0JBQ0YsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQ2pCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNXLHFCQUFNLGFBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQWhELFFBQVEsR0FBaUIsU0FBdUI7d0JBQ3BELEVBQUUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7d0JBRXZCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNuQixFQUFFLENBQUMsT0FBTyxHQUFHLEtB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QixpQkFNQztRQUxHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQWxGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzs4Q0FDTztJQUd0QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO2dEQUNTO0lBRTlCO1FBREMsUUFBUSxDQUFDLGlCQUFPLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsZUFBSyxDQUFDOytDQUNRO0lBR3hCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzswQ0FDRztJQWhCRCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0Y1QjtJQUFELGVBQUM7Q0F0RkQsQUFzRkMsQ0F0RnFDLEVBQUUsQ0FBQyxTQUFTLEdBc0ZqRDtrQkF0Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm90dG9tVG9vbCBmcm9tIFwiLi9Cb3R0b21Ub29sXCI7XHJcbmltcG9ydCB7IEJvb2tMaXN0RGF0YSwgRXZlbnRBY3QsIFBhZ2VEYXRhLCBVc2VySW5mbyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuL05ldFwiO1xyXG5pbXBvcnQgU2hvcCBmcm9tIFwiLi9TaG9wXCI7XHJcbmltcG9ydCBUaXBzIGZyb20gXCIuL1RpcHNcIjtcclxuaW1wb3J0IFRvb2xCYXIgZnJvbSBcIi4vVG9vbEJhclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFNob3ApXHJcbiAgICBzaG9wTm9kZTogU2hvcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KEJvdHRvbVRvb2wpXHJcbiAgICBib3R0b21Ub29sOiBCb3R0b21Ub29sID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShUb29sQmFyKVxyXG4gICAgdG9wVG9vbDogVG9vbEJhciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTG9naW4pXHJcbiAgICBsb2dpbk5vZGU6IExvZ2luID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVGlwcylcclxuICAgIHRpcHM6IFRpcHMgPSBudWxsO1xyXG5cclxuICAgIGFzeW5jIHNldFVzZXJEYXRhKHVkOiBVc2VySW5mbykge1xyXG4gICAgICAgIGxldCBwZCA9IHRoaXMuZ2V0UGFnZURhdGEoKTtcclxuICAgICAgICBpZiAodWQpIHtcclxuICAgICAgICAgICAgcGQudXNlckluZm8gPSB1ZDtcclxuICAgICAgICAgICAgcGQuaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib29rTGlzdDogQm9va0xpc3REYXRhID0gYXdhaXQgTmV0LmdldEJvb2tMaXN0KCk7XHJcbiAgICAgICAgICAgIHBkLnNob3BEYXRhID0gYm9va0xpc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGQudXNlckluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICBwZC5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBkLnNob3BEYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlRGF0YShwZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoRXZlbnRBY3QuSGlkZUxvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMudG9wVG9vbC5zZXRVc2VyRGF0YSh1ZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdG91cmlzdExvZ2luKCkge1xyXG4gICAgICAgIGxldCBwZCA9IHRoaXMuZ2V0UGFnZURhdGEoKTtcclxuICAgICAgICBwZC5pc1RvdXJpc3QgPSB0cnVlO1xyXG4gICAgICAgIHBkLnVzZXJJbmZvID0gbnVsbDtcclxuICAgICAgICBwZC5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvb2tMaXN0OiBCb29rTGlzdERhdGEgPSBhd2FpdCBOZXQuZ2V0Qm9va0xpc3QoKTtcclxuICAgICAgICBwZC5zaG9wRGF0YSA9IGJvb2tMaXN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZURhdGEocGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwYWdlRGF0YTogUGFnZURhdGEgPSBuZXcgUGFnZURhdGEoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihFdmVudEFjdC5TaG93TG9hZGluZywgdGhpcy5zaG93TG9hZGluZy5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oRXZlbnRBY3QuSGlkZUxvYWRpbmcsIHRoaXMuaGlkZUxvYWRpbmcuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2dpbk5vZGUuc2V0Um9vdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3BOb2RlLnNldFJvb3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib3R0b21Ub29sLnNldFJvb3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3BUb29sLnNldFJvb3QodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGFnZURhdGEoZGF0YTogUGFnZURhdGEpIHtcclxuICAgICAgICB0aGlzLnBhZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKHRoaXMucGFnZURhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVUkoZGF0YTogUGFnZURhdGEpIHtcclxuICAgICAgICB0aGlzLmxvZ2luTm9kZS5ub2RlLmFjdGl2ZSA9IGRhdGEuaXNUb3VyaXN0ID8gZmFsc2UgOiAhZGF0YS5pc0xvZ2luO1xyXG4gICAgICAgIHRoaXMuc2hvcE5vZGUubm9kZS5hY3RpdmUgPSAoZGF0YS5pc0xvZ2luICYmIGRhdGEuc2hvcERhdGEgIT0gbnVsbClcclxuICAgICAgICBpZiAoZGF0YS5zaG9wRGF0YSAmJiBkYXRhLnNob3BEYXRhICE9IHRoaXMuc2hvcE5vZGUuc2hvcERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wTm9kZS5zZXREYXRhKGRhdGEuc2hvcERhdGEsZGF0YS51c2VySW5mby5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFBhZ2VEYXRhKCk6IFBhZ2VEYXRhIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGlwcyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGlwcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aXBzLnNldExhYmVsKHN0cik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpcHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==