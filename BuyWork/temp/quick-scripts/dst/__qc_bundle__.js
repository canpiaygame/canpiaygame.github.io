
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/BuyWork/Script/BookDetail');
require('./assets/BuyWork/Script/BookItem');
require('./assets/BuyWork/Script/BottomTool');
require('./assets/BuyWork/Script/DataType');
require('./assets/BuyWork/Script/Helloworld');
require('./assets/BuyWork/Script/HomePage');
require('./assets/BuyWork/Script/Login');
require('./assets/BuyWork/Script/Net');
require('./assets/BuyWork/Script/OrderItem');
require('./assets/BuyWork/Script/OrderItemAll');
require('./assets/BuyWork/Script/RotateSelf');
require('./assets/BuyWork/Script/Shop');
require('./assets/BuyWork/Script/Tips');
require('./assets/BuyWork/Script/ToolBar');

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
//------QC-SOURCE-SPLIT------

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
        _this.userName = null;
        _this.psw = null;
        _this.topWin = null;
        _this.root = null;
        _this.openWin = 0;
        _this.userData = null;
        return _this;
        // update (dt) {}
    }
    ToolBar.prototype.setRoot = function (root) {
        this.root = root;
    };
    ToolBar.prototype.setUserData = function (ud) {
        this.userData = ud;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxUb29sQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1Q0FBZ0Q7QUFFaEQsNkJBQXdCO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDO0lBQUE7SUFDQSxDQUFDO0lBQUQsY0FBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksMEJBQU87QUFHcEI7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFpRkM7UUE5RUcsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUd4QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBR3hCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFlLElBQUksQ0FBQztRQUl2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixjQUFRLEdBQWEsSUFBSSxDQUFDOztRQTREMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUE1REcseUJBQU8sR0FBUCxVQUFRLElBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELDZCQUFXLEdBQVgsVUFBWSxFQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx5QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFB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LENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDTztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dDQUNFO0lBSXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0s7SUFoQk4sT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlGM0I7SUFBRCxjQUFDO0NBakZELEFBaUZDLENBakZvQyxFQUFFLENBQUMsU0FBUyxHQWlGaEQ7a0JBakZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgRXZlbnRBY3QsIFVzZXJJbmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5leHBvcnQgY2xhc3MgV2luRGF0YSB7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbEJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGJ0bkxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB3aW5MaXN0OiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHVzZXJOYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHBzdzogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG9wV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICBvcGVuV2luOiBudW1iZXIgPSAwO1xyXG4gICAgdXNlckRhdGE6IFVzZXJJbmZvID0gbnVsbDtcclxuICAgIHNldFJvb3Qocm9vdDogSG9tZVBhZ2UpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckRhdGEodWQ6IFVzZXJJbmZvKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVkO1xyXG4gICAgfVxyXG4gICAgYWRtaW5VSSgpIHtcclxuICAgICAgICB0aGlzLmJ0bkxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJVSSgpIHtcclxuICAgICAgICB0aGlzLmJ0bkxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IChpID09IDAgfHwgaSA9PSA0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJ0bkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMudG9wV2luLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5CdG5DbGljaygpIHtcclxuICAgICAgICB0aGlzLnRvcFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvZ091dEJ0bkNsaWNrKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckRhdGEpIHJldHVybjtcclxuICAgICAgICBhd2FpdCBOZXQubG9nb3V0KHRoaXMudXNlckRhdGEuaWQpO1xyXG4gICAgICAgIHRoaXMucm9vdC5zZXRVc2VyRGF0YShudWxsKTtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+mAgOWHuueZu+W9le+8gScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZpeFVzZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJEYXRhKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy51c2VyTmFtZS50ZXh0TGFiZWwuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwc3cgPSB0aGlzLnBzdy50ZXh0TGFiZWwuc3RyaW5nO1xyXG4gICAgICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn55So5oi35ZCN6K6+572u5aSq55+t77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBzdy5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn5a+G56CB6K6+572u5aSq55+t77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnVzZXJEYXRhO1xyXG4gICAgICAgIGRhdGEubmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIGRhdGEucGFzc3dvcmQgPSBwc3dcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTmV0LkZpeChkYXRhKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn5L+u5pS55oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZz0nJ1xyXG4gICAgICAgICAgICB0aGlzLnBzdy50ZXh0TGFiZWwuc3RyaW5nPScnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfkv67mlLnlpLHotKXvvIEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcaecmodRxGPbpaOb3rYg5g', 'Tips');
// BuyWork/Script/Tips.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tips = /** @class */ (function (_super) {
    __extends(Tips, _super);
    function Tips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    Tips.prototype.setLabel = function (str) {
        this.label.string = str;
    };
    __decorate([
        property(cc.Label)
    ], Tips.prototype, "label", void 0);
    Tips = __decorate([
        ccclass
    ], Tips);
    return Tips;
}(cc.Component));
exports.default = Tips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBUUM7UUFMRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQUszQixDQUFDO0lBSEcsdUJBQVEsR0FBUixVQUFTLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBSE4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQVF4QjtJQUFELFdBQUM7Q0FSRCxBQVFDLENBUmlDLEVBQUUsQ0FBQyxTQUFTLEdBUTdDO2tCQVJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgc2V0TGFiZWwoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHN0cjtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1891fPaAtEMpAtGeIOZwF9', 'Login');
// BuyWork/Script/Login.ts

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
var Net_1 = require("./Net");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userName = null;
        _this.psw = null;
        _this.root = null;
        _this.userData = null;
        return _this;
    }
    Login.prototype.setRoot = function (root) {
        this.root = root;
    };
    Login.prototype.onLoad = function () {
    };
    Login.prototype.loginBtnClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userName, psw, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userName = this.userName.textLabel.string;
                        psw = this.psw.textLabel.string;
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        return [4 /*yield*/, Net_1.default.login(userName, psw)];
                    case 1:
                        userData = _a.sent();
                        if (userData.id) {
                            this.root.setUserData(userData);
                            this.userData = userData;
                            this.root.showTips('登录成功！');
                        }
                        else {
                            this.root.showTips('登录失败！请重试');
                            this.root.node.emit(DataType_1.EventAct.HideLoading);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userName, psw, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, Net_1.default.register(userName, psw, true)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.root.showTips('注册成功！正在跳转');
                            this.loginBtnClick();
                        }
                        else {
                            this.root.showTips('注册失败！请重试');
                            this.root.node.emit(DataType_1.EventAct.HideLoading);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.logOutBtnClick = function (e) {
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
    // 游客登陆
    Login.prototype.touristLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.userData)
                    return [2 /*return*/];
                if (!this.root)
                    return [2 /*return*/];
                this.root.touristLogin();
                this.root.showTips('游客登录！');
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.EditBox)
    ], Login.prototype, "userName", void 0);
    __decorate([
        property(cc.EditBox)
    ], Login.prototype, "psw", void 0);
    Login = __decorate([
        ccclass
    ], Login);
    return Login;
}(cc.Component));
exports.default = Login;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0Q7QUFFaEQsNkJBQXdCO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBc0VDO1FBbkVHLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFlLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBNkQ5QixDQUFDO0lBNURHLHVCQUFPLEdBQVAsVUFBUSxJQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDUyxzQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFSyw2QkFBYSxHQUFuQjs7Ozs7O3dCQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMzQixxQkFBTSxhQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBQTs7d0JBQXpDLFFBQVEsR0FBRyxTQUE4Qjt3QkFDN0MsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFOzRCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxH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bmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgdXNlck5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHN3OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICB1c2VyRGF0YTogVXNlckluZm8gPSBudWxsO1xyXG4gICAgc2V0Um9vdChyb290OiBIb21lUGFnZSkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dpbkJ0bkNsaWNrKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LlNob3dMb2FkaW5nKTtcclxuICAgICAgICBsZXQgdXNlckRhdGEgPSBhd2FpdCBOZXQubG9naW4odXNlck5hbWUsIHBzdyk7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zZXRVc2VyRGF0YSh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfnmbvlvZXmiJDlip/vvIEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eZu+W9leWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5yb290LnVzZXJEYXRhID0gdXNlckRhdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eUqOaIt+WQjeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChwc3cubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+Wvhueggeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmVtaXQoRXZlbnRBY3QuU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOZXQucmVnaXN0ZXIodXNlck5hbWUsIHBzdywgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOaIkOWKn++8geato+WcqOi3s+i9rCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQnRuQ2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9nT3V0QnRuQ2xpY2soZSkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IE5ldC5sb2dvdXQodGhpcy51c2VyRGF0YS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNldFVzZXJEYXRhKG51bGwpO1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6YCA5Ye655m75b2V77yBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45a6i55m76ZmGXHJcbiAgICBhc3luYyB0b3VyaXN0TG9naW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJEYXRhKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvb3QudG91cmlzdExvZ2luKCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfmuLjlrqLnmbvlvZXvvIEnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// BuyWork/Script/Helloworld.ts

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
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        this.label.string = this.text;
        console.log('aa');
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxIZWxsb3dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBYUM7UUFWRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBTzNCLENBQUM7SUFMRywwQkFBSyxHQUFMO1FBQ0ksYUFBYTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBVEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUd2QjtRQURDLFFBQVE7NENBQ2M7SUFOTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBYTlCO0lBQUQsaUJBQUM7Q0FiRCxBQWFDLENBYnVDLEVBQUUsQ0FBQyxTQUFTLEdBYW5EO2tCQWJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhYScpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/RotateSelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '533d6f8vUZGOK21WTyp0OzY', 'RotateSelf');
// BuyWork/Script/RotateSelf.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RotateSelf = /** @class */ (function (_super) {
    __extends(RotateSelf, _super);
    function RotateSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotateSelf.prototype.start = function () {
        var _this = this;
        cc.tween(this.node).sequence(cc.tween(this.node).to(2.5, { angle: -359.9 }), cc.tween(this.node).call(function () { _this.node.angle = 0; })).repeatForever().start();
    };
    RotateSelf = __decorate([
        ccclass
    ], RotateSelf);
    return RotateSelf;
}(cc.Component));
exports.default = RotateSelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxSb3RhdGVTZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQU9BLENBQUM7SUFMRywwQkFBSyxHQUFMO1FBQUEsaUJBRUM7UUFERyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuSyxDQUFDO0lBSmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FPOUI7SUFBRCxpQkFBQztDQVBELEFBT0MsQ0FQdUMsRUFBRSxDQUFDLFNBQVMsR0FPbkQ7a0JBUG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlU2VsZiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5zZXF1ZW5jZShjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDIuNSwgeyBhbmdsZTogLTM1OS45IH0pLCBjYy50d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4geyB0aGlzLm5vZGUuYW5nbGUgPSAwOyB9KSkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce1fcTHQ8NJWqi9K6OjqXNd', 'Shop');
// BuyWork/Script/Shop.ts

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
var BookDetail_1 = require("./BookDetail");
var BookItem_1 = require("./BookItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.detail = null;
        _this.bookItem = null;
        _this.shopData = null;
        _this.root = null;
        _this.uid = '';
        return _this;
        // update (dt) {}
    }
    Shop.prototype.setRoot = function (root) {
        this.root = root;
        this.detail.setRoot(root);
    };
    Shop.prototype.setData = function (sd, uid) {
        this.uid = uid;
        this.shopData = sd;
        this.updateUI();
    };
    Shop.prototype.updateUI = function () {
        var data = this.shopData.data;
        var items = this.content.children.reduce(function (arr, child, i) {
            arr[child.name] = child;
            return arr;
        }, {});
        for (var i = 0; i < data.length; i++) {
            var bookData = data[i];
            var child = items[bookData.id];
            if (child) {
                child.getComponent(BookItem_1.default).setData(bookData);
                delete items[child.name];
            }
            else {
                var node = this.createNode(bookData.id);
                node.getComponent(BookItem_1.default).setData(bookData);
            }
        }
        for (var itemName in items) {
            items[itemName].destroy();
        }
    };
    Shop.prototype.createNode = function (name) {
        var node = cc.instantiate(this.bookItem);
        node.name = name;
        this.content.addChild(node);
        return node;
    };
    Shop.prototype.onShowDetial = function (bd) {
        var pd = this.root.getPageData();
        if (pd.isTourist) {
            this.root.showTips('游客只有查看权限，请注册登录');
            return;
        }
        this.detail.node.active = true;
        this.detail.setData(bd, this.uid);
    };
    Shop.prototype.onHideDetial = function () {
        this.detail.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "content", void 0);
    __decorate([
        property(BookDetail_1.default)
    ], Shop.prototype, "detail", void 0);
    __decorate([
        property(cc.Prefab)
    ], Shop.prototype, "bookItem", void 0);
    Shop = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(cc.Component));
exports.default = Shop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0Qyx1Q0FBa0M7QUFJNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFtRUM7UUFoRUcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUN0QixTQUFHLEdBQVcsRUFBRSxDQUFBOztRQXFEaEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsc0JBQU8sR0FBUCxVQUFRLElBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFnQixFQUFDLEdBQUc7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMzQjtpQkFBTTtnQkFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7UUFDRCxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtZQUN4QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdELDJCQUFZLEdBQVosVUFBYSxFQUFZO1FBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO3dDQUNLO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ087SUFUVixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBbUV4QjtJQUFELFdBQUM7Q0FuRUQsQUFtRUMsQ0FuRWlDLEVBQUUsQ0FBQyxTQUFTLEdBbUU3QztrQkFuRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9va0RldGFpbCBmcm9tIFwiLi9Cb29rRGV0YWlsXCI7XHJcbmltcG9ydCBCb29rSXRlbSBmcm9tIFwiLi9Cb29rSXRlbVwiO1xyXG5pbXBvcnQgeyBCb29rRGF0YSwgQm9va0xpc3REYXRhIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoQm9va0RldGFpbClcclxuICAgIGRldGFpbDogQm9va0RldGFpbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJvb2tJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHNob3BEYXRhOiBCb29rTGlzdERhdGEgPSBudWxsO1xyXG4gICAgcm9vdDogSG9tZVBhZ2UgPSBudWxsO1xyXG4gICAgdWlkOiBzdHJpbmcgPSAnJ1xyXG4gICAgc2V0Um9vdChyb290OiBIb21lUGFnZSkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwuc2V0Um9vdChyb290KTtcclxuICAgIH1cclxuICAgIHNldERhdGEoc2Q6IEJvb2tMaXN0RGF0YSx1aWQpIHtcclxuICAgICAgICB0aGlzLnVpZCA9IHVpZFxyXG4gICAgICAgIHRoaXMuc2hvcERhdGEgPSBzZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVSSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc2hvcERhdGEuZGF0YTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5yZWR1Y2UoKGFyciwgY2hpbGQsIGkpID0+IHtcclxuICAgICAgICAgICAgYXJyW2NoaWxkLm5hbWVdID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvb2tEYXRhID0gZGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gaXRlbXNbYm9va0RhdGEuaWRdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChCb29rSXRlbSkuc2V0RGF0YShib29rRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgaXRlbXNbY2hpbGQubmFtZV1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5jcmVhdGVOb2RlKGJvb2tEYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEJvb2tJdGVtKS5zZXREYXRhKGJvb2tEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtTmFtZSBpbiBpdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtc1tpdGVtTmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOb2RlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib29rSXRlbSk7XHJcbiAgICAgICAgbm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBvblNob3dEZXRpYWwoYmQ6IEJvb2tEYXRhKSB7XHJcbiAgICAgICAgbGV0IHBkID0gdGhpcy5yb290LmdldFBhZ2VEYXRhKCk7XHJcbiAgICAgICAgaWYgKHBkLmlzVG91cmlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+a4uOWuouWPquacieafpeeci+adg+mZkO+8jOivt+azqOWGjOeZu+W9lScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV0YWlsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRldGFpbC5zZXREYXRhKGJkLHRoaXMudWlkKTtcclxuICAgIH1cclxuICAgIG9uSGlkZURldGlhbCgpIHtcclxuICAgICAgICB0aGlzLmRldGFpbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/DataType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2638431TJ1NJ43dPutfIpg2', 'DataType');
// BuyWork/Script/DataType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMG = exports.URL = exports.OrderData = exports.OrderListData = exports.BookData = exports.BookListData = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
var PageData = /** @class */ (function () {
    function PageData() {
        this.shopData = null; // 商城数据
        this.isLogin = false; // 
        this.isTourist = false;
    }
    return PageData;
}());
exports.PageData = PageData;
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.name = '';
        this.password = '';
        this.admin = '';
        this.id = '';
        this.creationTime = '';
        this.updateTime = '';
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var EventAct;
(function (EventAct) {
    EventAct["ShowLoading"] = "showLoading";
    EventAct["HideLoading"] = "hideLoading";
})(EventAct = exports.EventAct || (exports.EventAct = {}));
// export enum role {
//     Tourist,
//     User,
//     Admin,
// }
var BookListData = /** @class */ (function () {
    function BookListData() {
        this.responseCode = 0;
        this.responseMessage = '';
        this.currentPage = 0;
        this.pageSize = 0;
        this.totalPage = 0;
        this.data = [];
    }
    return BookListData;
}());
exports.BookListData = BookListData;
var BookData = /** @class */ (function () {
    function BookData() {
        this.id = '';
        this.name = '';
        this.publishingHouse = '';
        this.publicationDate = '';
        this.isbn = '';
        this.description = '';
        this.cover = '';
        this.unitPrice = '';
    }
    return BookData;
}());
exports.BookData = BookData;
var OrderListData = /** @class */ (function () {
    function OrderListData() {
        this.responseCode = 0;
        this.responseMessage = '';
        this.currentPage = 0;
        this.pageSize = 0;
        this.totalPage = 0;
        this.data = [];
    }
    return OrderListData;
}());
exports.OrderListData = OrderListData;
var OrderData = /** @class */ (function () {
    function OrderData() {
        this.id = '';
        this.bookId = '';
        this.userId = '';
        this.userName = '';
        this.bookName = '';
        this.total = 0;
        this.amount = 0;
    }
    return OrderData;
}());
exports.OrderData = OrderData;
exports.URL = {
    Login: 'v1/auth/login',
    LogOut: 'v1/auth/logout',
    Register: '/v1/user',
    Fix: '/v1/user',
    BookList: '/v1/book/paging',
    AddBook: '/v1/book',
    Buy: '/v1/order',
    HistoryMy: '/v1/order/paging',
    HistoryAll: '/v1/order/paging',
    test: 'http://localhost:8888/',
    prod: '',
    get DOMAIN() {
        return exports.URL.test;
    }
};
exports.IMG = {
    IMG: [
        'Img/1',
        'Img/2',
        'Img/3',
        'Img/4',
        'Img/5'
    ],
    getImg: function (num) {
        return exports.IMG.IMG[num];
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxEYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBR0ksYUFBUSxHQUFpQixJQUFJLENBQUMsQ0FBa0IsT0FBTztRQUN2RCxZQUFPLEdBQVksS0FBSyxDQUFDLENBQVEsR0FBRztRQUNwQyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTtBQVFyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBRSxHQUFXLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFRO0FBUXJCLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQix1Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBMkIsQ0FBQTtBQUUvQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUVKO0lBQUE7UUFDSSxpQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9DQUFZO0FBU3pCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFVckI7SUFBQTtRQUNJLGlCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLG9CQUFlLEdBQVcsRUFBRSxDQUFBO1FBQzVCLGdCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLGFBQVEsR0FBVyxDQUFDLENBQUE7UUFDcEIsY0FBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixTQUFJLEdBQWdCLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNDQUFhO0FBUzFCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFDckIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFLdkIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw4QkFBUztBQWVULFFBQUEsR0FBRyxHQUFHO0lBQ2YsS0FBSyxFQUFFLGVBQWU7SUFDdEIsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixHQUFHLEVBQUUsVUFBVTtJQUNmLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsT0FBTyxFQUFFLFVBQVU7SUFDbkIsR0FBRyxFQUFFLFdBQVc7SUFDaEIsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixVQUFVLEVBQUUsa0JBQWtCO0lBRzlCLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLE1BQU07UUFDTixPQUFPLFdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDbkIsQ0FBQztDQUVKLENBQUE7QUFFWSxRQUFBLEdBQUcsR0FBRztJQUNmLEdBQUcsRUFBRTtRQUNELE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1Y7SUFDRCxNQUFNLEVBQU4sVUFBTyxHQUFXO1FBQ2QsT0FBTyxXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGF0YSB7XHJcbiAgICB1c2VySW5mbzogVXNlckluZm87ICAgICAgICAgICAgIC8vIOeUqOaIt+aVsOaNriBcclxuICAgIHRvb2xCYXJEYXRhOiBhbnk7ICAgICAgICAgICAgICAgLy8g5bel5YW35qCPXHJcbiAgICBzaG9wRGF0YTogQm9va0xpc3REYXRhID0gbnVsbDsgICAgICAgICAgICAgICAgICAvLyDllYbln47mlbDmja5cclxuICAgIGlzTG9naW46IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8vIFxyXG4gICAgaXNUb3VyaXN0OiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcclxuICAgIGFkbWluOiBzdHJpbmcgPSAnJ1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBjcmVhdGlvblRpbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdXBkYXRlVGltZTogc3RyaW5nID0gJyc7XHJcbn1cclxuZXhwb3J0IGVudW0gRXZlbnRBY3Qge1xyXG4gICAgU2hvd0xvYWRpbmcgPSAnc2hvd0xvYWRpbmcnLFxyXG4gICAgSGlkZUxvYWRpbmcgPSAnaGlkZUxvYWRpbmcnLFxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gcm9sZSB7XHJcbi8vICAgICBUb3VyaXN0LFxyXG4vLyAgICAgVXNlcixcclxuLy8gICAgIEFkbWluLFxyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0xpc3REYXRhIHtcclxuICAgIHJlc3BvbnNlQ29kZTogbnVtYmVyID0gMFxyXG4gICAgcmVzcG9uc2VNZXNzYWdlOiBzdHJpbmcgPSAnJ1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDBcclxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAwXHJcbiAgICB0b3RhbFBhZ2U6IG51bWJlciA9IDBcclxuICAgIGRhdGE6IEJvb2tEYXRhW10gPSBbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0RhdGEge1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGljYXRpb25EYXRlOiBzdHJpbmcgPSAnJ1xyXG4gICAgaXNibjogc3RyaW5nID0gJydcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xyXG4gICAgY292ZXI6IHN0cmluZyA9ICcnXHJcbiAgICB1bml0UHJpY2U6IHN0cmluZyA9ICcnXHJcbn1cclxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdERhdGEge1xyXG4gICAgcmVzcG9uc2VDb2RlOiBudW1iZXIgPSAwXHJcbiAgICByZXNwb25zZU1lc3NhZ2U6IHN0cmluZyA9ICcnXHJcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyID0gMFxyXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDBcclxuICAgIHRvdGFsUGFnZTogbnVtYmVyID0gMFxyXG4gICAgZGF0YTogT3JkZXJEYXRhW10gPSBbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJEYXRhIHtcclxuICAgIGlkOiBzdHJpbmcgPSAnJ1xyXG4gICAgYm9va0lkOiBzdHJpbmcgPSAnJ1xyXG4gICAgdXNlcklkOiBzdHJpbmcgPSAnJ1xyXG4gICAgdXNlck5hbWU6IHN0cmluZyA9ICcnXHJcbiAgICBib29rTmFtZTogc3RyaW5nID0gJydcclxuICAgIHRvdGFsOiBudW1iZXIgPSAwO1xyXG4gICAgYW1vdW50OiBudW1iZXIgPSAwO1xyXG4gICAgb3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVUaW1lOiBzdHJpbmc7XHJcbiAgICB1cGRhdGVUaW1lOiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVSTCA9IHtcclxuICAgIExvZ2luOiAndjEvYXV0aC9sb2dpbicsXHJcbiAgICBMb2dPdXQ6ICd2MS9hdXRoL2xvZ291dCcsXHJcbiAgICBSZWdpc3RlcjogJy92MS91c2VyJyxcclxuICAgIEZpeDogJy92MS91c2VyJyxcclxuICAgIEJvb2tMaXN0OiAnL3YxL2Jvb2svcGFnaW5nJyxcclxuICAgIEFkZEJvb2s6ICcvdjEvYm9vaycsXHJcbiAgICBCdXk6ICcvdjEvb3JkZXInLFxyXG4gICAgSGlzdG9yeU15OiAnL3YxL29yZGVyL3BhZ2luZycsXHJcbiAgICBIaXN0b3J5QWxsOiAnL3YxL29yZGVyL3BhZ2luZycsXHJcblxyXG5cclxuICAgIHRlc3Q6ICdodHRwOi8vbG9jYWxob3N0Ojg4ODgvJyxcclxuICAgIHByb2Q6ICcnLFxyXG4gICAgZ2V0IERPTUFJTigpIHtcclxuICAgICAgICByZXR1cm4gVVJMLnRlc3RcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJTUcgPSB7XHJcbiAgICBJTUc6IFtcclxuICAgICAgICAnSW1nLzEnLFxyXG4gICAgICAgICdJbWcvMicsXHJcbiAgICAgICAgJ0ltZy8zJyxcclxuICAgICAgICAnSW1nLzQnLFxyXG4gICAgICAgICdJbWcvNSdcclxuICAgIF0sXHJcbiAgICBnZXRJbWcobnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSU1HLklNR1tudW1dXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Net.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e78d1KGhndD84KNVIzHgMZI', 'Net');
// BuyWork/Script/Net.ts

"use strict";
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
var Net = /** @class */ (function () {
    function Net() {
    }
    Net.login = function (name, psw) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {};
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.Login, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('登陆成功');
                                        reslove(result.data);
                                    }
                                    else {
                                        reject(new Error("\u767B\u9646\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.logout = function (uid) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    uid: uid
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.LogOut, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('登出成功');
                                        reslove(true);
                                    }
                                    else {
                                        reject(new Error("\u767B\u51FA\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.getBookList = function () {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    currentPage: 0,
                    pageSize: 9999,
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.BookList, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('书单');
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u4E66\u5355\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.addBook = function (bookData, uid) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = bookData;
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.AddBook, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('添加书籍成功');
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u6DFB\u52A0\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.updateBook = function (bookData, uid) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = bookData;
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.AddBook, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('添加书籍成功');
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u6DFB\u52A0\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.getBookByID = function (bookData, uid) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    id: bookData.id
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('GET', "" + DataType_1.URL.DOMAIN + DataType_1.URL.AddBook, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('添加书籍成功');
                                        reslove(result.data);
                                    }
                                    else {
                                        reject(new Error("\u6DFB\u52A0\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.register = function (name, psw, admin) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    name: name,
                    password: psw,
                    admin: admin
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.Register, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('注册成功');
                                        reslove(true);
                                    }
                                    else {
                                        reject(new Error("\u6CE8\u518C\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.Fix = function (userData) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = userData;
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.Fix, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: userData.id
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('注册成功');
                                        reslove(true);
                                    }
                                    else {
                                        reject(new Error("\u6CE8\u518C\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.myList = function (uid) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    currentPage: 0,
                    pageSize: 9999,
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.HistoryMy, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.buyBook = function (uid, bookId, total) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = {
                    userId: uid,
                    bookId: bookId,
                    total: total
                };
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.Buy, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('购买成功');
                                        reslove(true);
                                    }
                                    else {
                                        reject(new Error("\u8D2D\u4E70\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.ajax = function (type, url, data, headers) {
        if (headers === void 0) { headers = []; }
        return new Promise(function (resolve) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 400)) {
                        var response = xhr.responseText;
                        resolve(response);
                    }
                    else {
                        resolve(null);
                    }
                }
            };
            xhr.open(type, url, true);
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var item = headers_1[_i];
                xhr.setRequestHeader(item.name, item.value);
            }
            xhr.send(data);
        });
    };
    return Net;
}());
exports.default = Net;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0Y7QUFFbEY7SUFBQTtJQTRPQSxDQUFDO0lBek9nQixTQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXO3VDQUFHLE9BQU87Ozs7Z0JBQzlDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7b0NBQ3hCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFHLGNBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBRyxDQUFDLEtBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0RBQ2hHLElBQUksRUFBRSxjQUFjO2dEQUNwQixLQUFLLEVBQUUsa0JBQWtCOzZDQUM1QixDQUFDLENBQUMsRUFBQTs7b0NBSEMsTUFBTSxHQUFHLGNBQVcsU0FHckIsRUFBQztvQ0FDSixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxJQUFJLFNBQVMsRUFBRTt3Q0FDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQ0FDdkI7eUNBQU07d0NBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDO3FDQUM3Qjs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUNMO0lBQ1ksVUFBTSxHQUFuQixVQUFvQixHQUFHO3VDQUFHLE9BQU87Ozs7Z0JBQ3pCLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsR0FBRztpQkFDWCxDQUFDO2dC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Q0FBQztZQUMvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QyxJQUFJLFFBQVEsR0FBVyxHQUFHLENBQUMsWUFBWSxDQUFDO3dCQUN4QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3JCO3lCQUNJO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDakI7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBbUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7Z0JBQXZCLElBQU0sSUFBSSxnQkFBQTtnQkFDWCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQTVPQSxBQTRPQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va0RhdGEsIEJvb2tMaXN0RGF0YSwgT3JkZXJMaXN0RGF0YSwgVVJMLCBVc2VySW5mbyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXQge1xyXG5cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgbG9naW4obmFtZTogc3RyaW5nLCBwc3c6IHN0cmluZyk6IFByb21pc2U8VXNlckluZm8+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuTG9naW59YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvpmYbmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDnmbvpmYblpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGxvZ291dCh1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1aWQ6IHVpZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Mb2dPdXR9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+WHuuaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg55m75Ye65aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0Qm9va0xpc3QoKTogUHJvbWlzZTxCb29rTGlzdERhdGE+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogQm9va0xpc3REYXRhID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BVVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQm9va0xpc3R9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuabljZUnKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5Lmm5Y2V5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYWRkQm9vayhib29rRGF0YTogQm9va0RhdGEsIHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBib29rRGF0YTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkFkZEJvb2t9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOS5puexjeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGVCb29rKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGJvb2tEYXRhO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUFVUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5BZGRCb29rfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDkuabnsY3miJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5re75Yqg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEJvb2tCeUlEKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGJvb2tEYXRhLmlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ0dFVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQWRkQm9va31gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5Lmm57GN5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5re75Yqg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBwc3c6IHN0cmluZywgYWRtaW46IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcHN3LFxyXG4gICAgICAgICAgICBhZG1pbjogYWRtaW5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuUmVnaXN0ZXJ9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOazqOWGjOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBGaXgodXNlckRhdGE6VXNlckluZm8pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gdXNlckRhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkZpeH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlckRhdGEuaWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOazqOWGjOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIG15TGlzdCh1aWQpOiBQcm9taXNlPE9yZGVyTGlzdERhdGE+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5IaXN0b3J5TXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBidXlCb29rKHVpZCwgYm9va0lkLCB0b3RhbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdWlkLFxyXG4gICAgICAgICAgICBib29rSWQ6IGJvb2tJZCxcclxuICAgICAgICAgICAgdG90YWw6IHRvdGFsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkJ1eX1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LSt5Lmw5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDotK3kubDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBhamF4KHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBCbG9iIHwgQnVmZmVyU291cmNlIHwgRm9ybURhdGEgfCBVUkxTZWFyY2hQYXJhbXMgfCBzdHJpbmcgfCBudWxsLCBoZWFkZXJzOiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/BookItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0a18SsggdPx5t+utx8+aWb', 'BookItem');
// BuyWork/Script/BookItem.ts

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
var DataType_1 = require("./DataType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BookItem = /** @class */ (function (_super) {
    __extends(BookItem, _super);
    function BookItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bookName = null;
        _this.pic = null;
        _this.root = null;
        return _this;
    }
    BookItem.prototype.setRoot = function (root) {
        this.root = root;
    };
    BookItem.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.click, this);
    };
    BookItem.prototype.click = function (e) {
        if (!this.root)
            return;
        if (!this.bookData)
            return;
        this.root.onShowDetial(this.bookData);
    };
    BookItem.prototype.setData = function (bd) {
        this.bookData = bd;
        this.updateUI();
    };
    BookItem.prototype.updateUI = function () {
        var _this = this;
        this.bookName.string = this.bookData.name;
        var path = DataType_1.IMG.getImg((parseInt(this.bookData.cover)));
        cc.loader.loadRes(path, cc.Texture2D, function (error, resource) {
            var spf = new cc.SpriteFrame;
            spf.setTexture(resource);
            _this.pic.spriteFrame = spf;
        });
    };
    __decorate([
        property(cc.Label)
    ], BookItem.prototype, "bookName", void 0);
    __decorate([
        property(cc.Sprite)
    ], BookItem.prototype, "pic", void 0);
    BookItem = __decorate([
        ccclass
    ], BookItem);
    return BookItem;
}(cc.Component));
exports.default = BookItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb29rSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFHckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1Q0M7UUFwQ0csY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFVBQUksR0FBUyxJQUFJLENBQUM7O0lBOEJ0QixDQUFDO0lBNUJHLDBCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ0Qsd0JBQUssR0FBTCxVQUFNLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsRUFBWTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFZLEVBQUUsUUFBYTtZQUM5RCxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDRTtJQU5MLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QzVCO0lBQUQsZUFBQztDQXZDRCxBQXVDQyxDQXZDcUMsRUFBRSxDQUFDLFNBQVMsR0F1Q2pEO2tCQXZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tEYXRhLCBJTUcgfSBmcm9tIFwiLi9EYXRhVHlwZVwiO1xyXG5pbXBvcnQgU2hvcCBmcm9tIFwiLi9TaG9wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJvb2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBpYzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBib29rRGF0YTogQm9va0RhdGE7XHJcbiAgICByb290OiBTaG9wID0gbnVsbDtcclxuXHJcbiAgICBzZXRSb290KHJvb3Q6IFNob3ApIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xpY2ssIHRoaXMpXHJcbiAgICB9XHJcbiAgICBjbGljayhlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuYm9va0RhdGEpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvb3Qub25TaG93RGV0aWFsKHRoaXMuYm9va0RhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShiZDogQm9va0RhdGEpIHtcclxuICAgICAgICB0aGlzLmJvb2tEYXRhID0gYmQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuYm9va05hbWUuc3RyaW5nID0gdGhpcy5ib29rRGF0YS5uYW1lO1xyXG4gICAgICAgIGxldCBwYXRoID0gSU1HLmdldEltZygocGFyc2VJbnQodGhpcy5ib29rRGF0YS5jb3ZlcikpKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5UZXh0dXJlMkQsIChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNwZiA9IG5ldyBjYy5TcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgc3BmLnNldFRleHR1cmUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBpYy5zcHJpdGVGcmFtZSA9IHNwZjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/BookDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '175b8o5WeFCUJTJrPghmHPl', 'BookDetail');
// BuyWork/Script/BookDetail.ts

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
var Net_1 = require("./Net");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BookDetail = /** @class */ (function (_super) {
    __extends(BookDetail, _super);
    function BookDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bookName = null;
        _this.price = null;
        _this.publishingHouse = null;
        _this.isbn = null;
        _this.dec = null;
        _this.pic = null;
        _this.num = null;
        _this.edNum = 1;
        _this.uid = '';
        _this.root = null;
        return _this;
        // update (dt) {}
    }
    BookDetail.prototype.setData = function (bd, uid) {
        this.bookData = bd;
        this.edNum = 1;
        this.uid = uid;
        this.updateUI();
    };
    BookDetail.prototype.setRoot = function (root) {
        this.root = root;
    };
    BookDetail.prototype.updateUI = function () {
        var _this = this;
        this.bookName.string = "\u4E66\u540D\uFF1A\u300A" + this.bookData.name + "\u300B";
        this.price.string = "\u4EF7\u683C\uFF1A\u300A" + this.bookData.unitPrice + "\u300B";
        this.publishingHouse.string = "\u51FA\u7248\u793E\uFF1A" + this.bookData.publishingHouse;
        this.isbn.string = "isbn\uFF1A" + this.bookData.isbn;
        this.dec.string = "\u7B80\u4ECB\uFF1A" + this.bookData.description;
        var path = DataType_1.IMG.getImg((parseInt(this.bookData.cover)));
        cc.loader.loadRes(path, cc.Texture2D, function (error, resource) {
            var spf = new cc.SpriteFrame;
            spf.setTexture(resource);
            _this.pic.spriteFrame = spf;
        });
        this.num.string = this.edNum.toString();
    };
    BookDetail.prototype.closeBtn = function () {
        this.node.active = false;
    };
    BookDetail.prototype.left = function () {
        if (this.edNum - 1 >= 1) {
            this.edNum = this.edNum - 1;
        }
        this.updateUI();
    };
    BookDetail.prototype.right = function () {
        if (this.edNum + 1 <= 99) {
            this.edNum = this.edNum + 1;
        }
        this.updateUI();
    };
    BookDetail.prototype.buy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reslut;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        return [4 /*yield*/, Net_1.default.buyBook(this.uid, this.bookData.id, this.edNum)];
                    case 1:
                        reslut = _a.sent();
                        if (reslut) {
                            this.root.showTips('购买成功！');
                        }
                        else {
                            this.root.showTips('购买失败！请重试');
                        }
                        this.root.node.emit(DataType_1.EventAct.HideLoading);
                        this.closeBtn();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "bookName", void 0);
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "price", void 0);
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "publishingHouse", void 0);
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "isbn", void 0);
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "dec", void 0);
    __decorate([
        property(cc.Sprite)
    ], BookDetail.prototype, "pic", void 0);
    __decorate([
        property(cc.Label)
    ], BookDetail.prototype, "num", void 0);
    BookDetail = __decorate([
        ccclass
    ], BookDetail);
    return BookDetail;
}(cc.Component));
exports.default = BookDetail;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb29rRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUVyRCw2QkFBd0I7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErRUM7UUE1RUcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUcsR0FBVyxFQUFFLENBQUE7UUFPaEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7UUFrRHRCLGlCQUFpQjtJQUNyQixDQUFDO0lBekRHLDRCQUFPLEdBQVAsVUFBUSxFQUFZLEVBQUUsR0FBVztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsNkJB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QVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNFO0lBbEJKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRTlCO0lBQUQsaUJBQUM7Q0EvRUQsQUErRUMsQ0EvRXVDLEVBQUUsQ0FBQyxTQUFTLEdBK0VuRDtrQkEvRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rRGF0YSwgRXZlbnRBY3QsIElNRyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuL05ldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJvb2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcmljZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXNibjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGVjOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBpYzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGJvb2tEYXRhOiBCb29rRGF0YTtcclxuICAgIGVkTnVtID0gMTtcclxuICAgIHVpZDogc3RyaW5nID0gJydcclxuICAgIHNldERhdGEoYmQ6IEJvb2tEYXRhLCB1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYm9va0RhdGEgPSBiZDtcclxuICAgICAgICB0aGlzLmVkTnVtID0gMTtcclxuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICB9XHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICBzZXRSb290KHJvb3Q6IEhvbWVQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuYm9va05hbWUuc3RyaW5nID0gYOS5puWQje+8muOAiiR7dGhpcy5ib29rRGF0YS5uYW1lfeOAi2A7XHJcbiAgICAgICAgdGhpcy5wcmljZS5zdHJpbmcgPSBg5Lu35qC877ya44CKJHt0aGlzLmJvb2tEYXRhLnVuaXRQcmljZX3jgItgO1xyXG4gICAgICAgIHRoaXMucHVibGlzaGluZ0hvdXNlLnN0cmluZyA9IGDlh7rniYjnpL7vvJoke3RoaXMuYm9va0RhdGEucHVibGlzaGluZ0hvdXNlfWA7XHJcbiAgICAgICAgdGhpcy5pc2JuLnN0cmluZyA9IGBpc2Ju77yaJHt0aGlzLmJvb2tEYXRhLmlzYm59YDtcclxuICAgICAgICB0aGlzLmRlYy5zdHJpbmcgPSBg566A5LuL77yaJHt0aGlzLmJvb2tEYXRhLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgbGV0IHBhdGggPSBJTUcuZ2V0SW1nKChwYXJzZUludCh0aGlzLmJvb2tEYXRhLmNvdmVyKSkpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlRleHR1cmUyRCwgKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BmID0gbmV3IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBzcGYuc2V0VGV4dHVyZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGljLnNwcml0ZUZyYW1lID0gc3BmO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubnVtLnN0cmluZyA9IHRoaXMuZWROdW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xvc2VCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtIC0gMSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWROdW0gPSB0aGlzLmVkTnVtIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtICsgMSA8PSA5OSkge1xyXG4gICAgICAgICAgICB0aGlzLmVkTnVtID0gdGhpcy5lZE51bSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBidXkoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5idXlCb29rKHRoaXMudWlkLCB0aGlzLmJvb2tEYXRhLmlkLCB0aGlzLmVkTnVtKTtcclxuICAgICAgICBpZiAocmVzbHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6LSt5Lmw5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfotK3kubDlpLHotKXvvIHor7fph43or5UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bigpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/BottomTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8b26yFLmVERJ2Y7gF2m15N', 'BottomTool');
// BuyWork/Script/BottomTool.ts

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
var Net_1 = require("./Net");
var OrderItem_1 = require("./OrderItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BottomTool = /** @class */ (function (_super) {
    __extends(BottomTool, _super);
    function BottomTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.orderItem = null;
        _this.orderList = null;
        _this.root = null;
        _this.old = null;
        return _this;
        // update (dt) {}
    }
    BottomTool.prototype.setRoot = function (root) {
        this.root = root;
    };
    BottomTool.prototype.openOrderList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reslut;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.root)
                            return [2 /*return*/];
                        if (this.root.getPageData().isTourist)
                            return [2 /*return*/];
                        this.root.node.emit(DataType_1.EventAct.ShowLoading);
                        return [4 /*yield*/, Net_1.default.myList(this.root.getPageData().userInfo.id)];
                    case 1:
                        reslut = _a.sent();
                        if (reslut) {
                            this.old = reslut;
                            this.updateUI();
                        }
                        else {
                            this.root.showTips('历史订单错误，请重试！');
                        }
                        this.root.node.emit(DataType_1.EventAct.HideLoading);
                        this.orderList.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    BottomTool.prototype.updateUI = function () {
        var data = this.old.data;
        var items = this.content.children.reduce(function (arr, child, i) {
            arr[child.name] = child;
            return arr;
        }, {});
        for (var i = 0; i < data.length; i++) {
            var olData = data[i];
            var child = items[olData.id];
            if (child) {
                child.getComponent(OrderItem_1.default).setData(olData);
                delete items[child.name];
            }
            else {
                var node = this.createNode(olData.id);
                node.getComponent(OrderItem_1.default).setData(olData);
            }
        }
        for (var itemName in items) {
            items[itemName].destroy();
        }
    };
    BottomTool.prototype.createNode = function (name) {
        var node = cc.instantiate(this.orderItem);
        node.name = name;
        this.content.addChild(node);
        return node;
    };
    BottomTool.prototype.closeOrderList = function () {
        this.orderList.active = false;
    };
    __decorate([
        property(cc.Node)
    ], BottomTool.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], BottomTool.prototype, "orderItem", void 0);
    __decorate([
        property(cc.Node)
    ], BottomTool.prototype, "orderList", void 0);
    BottomTool = __decorate([
        ccclass
    ], BottomTool);
    return BottomTool;
}(cc.Component));
exports.default = BottomTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb3R0b21Ub29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUVyRCw2QkFBd0I7QUFDeEIseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0VDO1FBN0RHLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsU0FBRyxHQUFrQixJQUFJLENBQUM7O1FBZ0QxQixpQkFBaUI7SUFDckIsQ0FBQztJQXBERyw0QkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUssa0NBQWEsR0FBbkI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7NEJBQUUsc0JBQU87d0JBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzRCQUFFLHNCQUFPO3dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDN0IscUJBQU0sYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQTlELE1BQU0sR0FBRyxTQUFxRDt3QkFDbEUsSUFBSSxNQUFNLEVBQUU7NEJBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTt5QkFDbEI7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7eUJBQ3BDO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Ozs7O0tBQ2hDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN4QixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNCO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEQ7U0FDSjtRQUNELEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBMUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBVFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdFOUI7SUFBRCxpQkFBQztDQWhFRCxBQWdFQyxDQWhFdUMsRUFBRSxDQUFDLFNBQVMsR0FnRW5EO2tCQWhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QWN0LCBPcmRlckxpc3REYXRhIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSBcIi4vT3JkZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tVG9vbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBvcmRlckl0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvcmRlckxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJvb3Q6IEhvbWVQYWdlID0gbnVsbDtcclxuICAgIHNldFJvb3Qocm9vdDogSG9tZVBhZ2UpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgfVxyXG4gICAgb2xkOiBPcmRlckxpc3REYXRhID0gbnVsbDtcclxuICAgIGFzeW5jIG9wZW5PcmRlckxpc3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5yb290LmdldFBhZ2VEYXRhKCkuaXNUb3VyaXN0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5teUxpc3QodGhpcy5yb290LmdldFBhZ2VEYXRhKCkudXNlckluZm8uaWQpO1xyXG4gICAgICAgIGlmIChyZXNsdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSByZXNsdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn5Y6G5Y+y6K6i5Y2V6ZSZ6K+v77yM6K+36YeN6K+V77yBJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMub2xkLmRhdGE7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ucmVkdWNlKChhcnIsIGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGFycltjaGlsZC5uYW1lXSA9IGNoaWxkO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvbERhdGEgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBpdGVtc1tvbERhdGEuaWRdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChPcmRlckl0ZW0pLnNldERhdGEob2xEYXRhKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtc1tjaGlsZC5uYW1lXVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUob2xEYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KE9yZGVySXRlbSkuc2V0RGF0YShvbERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1OYW1lIGluIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2l0ZW1OYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlTm9kZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3JkZXJJdGVtKTtcclxuICAgICAgICBub2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU9yZGVyTGlzdCgpIHtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
