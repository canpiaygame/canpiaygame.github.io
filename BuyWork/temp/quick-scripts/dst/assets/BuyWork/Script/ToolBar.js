
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