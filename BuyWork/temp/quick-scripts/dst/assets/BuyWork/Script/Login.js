
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0Q7QUFFaEQsNkJBQXdCO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBdUVDO1FBcEVHLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFlLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBOEQ5QixDQUFDO0lBN0RHLHVCQUFPLEdBQVAsVUFBUSxJQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDUyxzQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFSyw2QkFBYSxHQUFuQjs7Ozs7O3dCQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMzQixxQkFBTSxhQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBQTs7d0JBQXpDLFFBQVEsR0FBRyxTQUE4Qjt3QkFDN0MsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFOzRCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxH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bmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgdXNlck5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHN3OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICB1c2VyRGF0YTogVXNlckluZm8gPSBudWxsO1xyXG4gICAgc2V0Um9vdChyb290OiBIb21lUGFnZSkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dpbkJ0bkNsaWNrKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LlNob3dMb2FkaW5nKTtcclxuICAgICAgICBsZXQgdXNlckRhdGEgPSBhd2FpdCBOZXQubG9naW4odXNlck5hbWUsIHBzdyk7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zZXRVc2VyRGF0YSh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfnmbvlvZXmiJDlip/vvIEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eZu+W9leWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5yb290LnVzZXJEYXRhID0gdXNlckRhdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eUqOaIt+WQjeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChwc3cubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+Wvhueggeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmVtaXQoRXZlbnRBY3QuU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOZXQucmVnaXN0ZXIodXNlck5hbWUsIHBzdywgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOaIkOWKn++8geato+WcqOi3s+i9rCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQnRuQ2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9nT3V0QnRuQ2xpY2soZSkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IE5ldC5sb2dvdXQodGhpcy51c2VyRGF0YS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNldFVzZXJEYXRhKG51bGwpO1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6YCA5Ye655m75b2V77yBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45a6i55m76ZmGXHJcbiAgICBhc3luYyB0b3VyaXN0TG9naW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJEYXRhKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvb3QudG91cmlzdExvZ2luKCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfmuLjlrqLnmbvlvZXvvIEnKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19