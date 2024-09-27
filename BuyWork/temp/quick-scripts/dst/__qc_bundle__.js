
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
require('./assets/BuyWork/Script/DataType');
require('./assets/BuyWork/Script/Helloworld');
require('./assets/BuyWork/Script/HomePage');
require('./assets/BuyWork/Script/Login');
require('./assets/BuyWork/Script/Net');
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToolBar = /** @class */ (function (_super) {
    __extends(ToolBar, _super);
    function ToolBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ToolBar.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], ToolBar.prototype, "label", void 0);
    __decorate([
        property
    ], ToolBar.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxUb29sQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUTt5Q0FDYztJQU5OLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpQjNCO0lBQUQsY0FBQztDQWpCRCxBQWlCQyxDQWpCb0MsRUFBRSxDQUFDLFNBQVMsR0FpQmhEO2tCQWpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbEJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0Q7QUFFaEQsNkJBQXdCO0FBRWxCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBdUVDO1FBcEVHLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFlLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxJQUFJLENBQUM7O0lBOEQ5QixDQUFDO0lBN0RHLHVCQUFPLEdBQVAsVUFBUSxJQUFjO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDUyxzQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFSyw2QkFBYSxHQUFuQjs7Ozs7O3dCQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMzQixxQkFBTSxhQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBQTs7d0JBQXpDLFFBQVEsR0FBRyxTQUE4Qjt3QkFDN0MsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFOzRCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxH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bmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgdXNlck5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcHN3OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICB1c2VyRGF0YTogVXNlckluZm8gPSBudWxsO1xyXG4gICAgc2V0Um9vdChyb290OiBIb21lUGFnZSkge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dpbkJ0bkNsaWNrKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LlNob3dMb2FkaW5nKTtcclxuICAgICAgICBsZXQgdXNlckRhdGEgPSBhd2FpdCBOZXQubG9naW4odXNlck5hbWUsIHBzdyk7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zZXRVc2VyRGF0YSh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfnmbvlvZXmiJDlip/vvIEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eZu+W9leWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5yb290LnVzZXJEYXRhID0gdXNlckRhdGE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMudXNlck5hbWUudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3cudGV4dExhYmVsLnN0cmluZztcclxuICAgICAgICBpZiAodXNlck5hbWUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+eUqOaIt+WQjeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChwc3cubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+Wvhueggeiuvue9ruWkquefre+8gScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmVtaXQoRXZlbnRBY3QuU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOZXQucmVnaXN0ZXIodXNlck5hbWUsIHBzdywgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOaIkOWKn++8geato+WcqOi3s+i9rCcpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQnRuQ2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+azqOWGjOWksei0pe+8geivt+mHjeivlScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Qubm9kZS5lbWl0KEV2ZW50QWN0LkhpZGVMb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9nT3V0QnRuQ2xpY2soZSkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyRGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IE5ldC5sb2dvdXQodGhpcy51c2VyRGF0YS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNldFVzZXJEYXRhKG51bGwpO1xyXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6YCA5Ye655m75b2V77yBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45a6i55m76ZmGXHJcbiAgICBhc3luYyB0b3VyaXN0TG9naW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJEYXRhKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJvb3QudG91cmlzdExvZ2luKCk7XHJcbiAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfmuLjlrqLnmbvlvZXvvIEnKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
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
            var child = items[i.toString()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0Qyx1Q0FBa0M7QUFJNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFtRUM7UUFoRUcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUN0QixTQUFHLEdBQVcsRUFBRSxDQUFBOztRQXFEaEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsc0JBQU8sR0FBUCxVQUFRLElBQWM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFnQixFQUFDLEdBQUc7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNCO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQ7U0FDSjtRQUNELEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR0QsMkJBQVksR0FBWixVQUFhLEVBQVk7UUFDckIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsMkJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7d0NBQ0s7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDTztJQVRWLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FtRXhCO0lBQUQsV0FBQztDQW5FRCxBQW1FQyxDQW5FaUMsRUFBRSxDQUFDLFNBQVMsR0FtRTdDO2tCQW5Fb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29rRGV0YWlsIGZyb20gXCIuL0Jvb2tEZXRhaWxcIjtcclxuaW1wb3J0IEJvb2tJdGVtIGZyb20gXCIuL0Jvb2tJdGVtXCI7XHJcbmltcG9ydCB7IEJvb2tEYXRhLCBCb29rTGlzdERhdGEgfSBmcm9tIFwiLi9EYXRhVHlwZVwiO1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vSG9tZVBhZ2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShCb29rRGV0YWlsKVxyXG4gICAgZGV0YWlsOiBCb29rRGV0YWlsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYm9va0l0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgc2hvcERhdGE6IEJvb2tMaXN0RGF0YSA9IG51bGw7XHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICB1aWQ6IHN0cmluZyA9ICcnXHJcbiAgICBzZXRSb290KHJvb3Q6IEhvbWVQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgICAgICB0aGlzLmRldGFpbC5zZXRSb290KHJvb3QpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShzZDogQm9va0xpc3REYXRhLHVpZCkge1xyXG4gICAgICAgIHRoaXMudWlkID0gdWlkXHJcbiAgICAgICAgdGhpcy5zaG9wRGF0YSA9IHNkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5zaG9wRGF0YS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLnJlZHVjZSgoYXJyLCBjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBhcnJbY2hpbGQubmFtZV0gPSBjaGlsZDtcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYm9va0RhdGEgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBpdGVtc1tpLnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChCb29rSXRlbSkuc2V0RGF0YShib29rRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgaXRlbXNbY2hpbGQubmFtZV1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5jcmVhdGVOb2RlKGJvb2tEYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KEJvb2tJdGVtKS5zZXREYXRhKGJvb2tEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtTmFtZSBpbiBpdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtc1tpdGVtTmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOb2RlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib29rSXRlbSk7XHJcbiAgICAgICAgbm9kZS5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBvblNob3dEZXRpYWwoYmQ6IEJvb2tEYXRhKSB7XHJcbiAgICAgICAgbGV0IHBkID0gdGhpcy5yb290LmdldFBhZ2VEYXRhKCk7XHJcbiAgICAgICAgaWYgKHBkLmlzVG91cmlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3Quc2hvd1RpcHMoJ+a4uOWuouWPquacieafpeeci+adg+mZkO+8jOivt+azqOWGjOeZu+W9lScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV0YWlsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRldGFpbC5zZXREYXRhKGJkLHRoaXMudWlkKTtcclxuICAgIH1cclxuICAgIG9uSGlkZURldGlhbCgpIHtcclxuICAgICAgICB0aGlzLmRldGFpbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
exports.IMG = exports.URL = exports.BookData = exports.BookListData = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
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
exports.URL = {
    Login: 'v1/auth/login',
    LogOut: 'v1/auth/logout',
    Register: '/v1/user',
    BookList: '/v1/book/paging',
    AddBook: '/v1/book',
    Buy: '/v1/order',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxEYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBR0ksYUFBUSxHQUFpQixJQUFJLENBQUMsQ0FBa0IsT0FBTztRQUN2RCxZQUFPLEdBQVksS0FBSyxDQUFDLENBQVEsR0FBRztRQUNwQyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTtBQVFyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBRSxHQUFXLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFRO0FBUXJCLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQix1Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBMkIsQ0FBQTtBQUUvQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUVKO0lBQUE7UUFDSSxpQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9DQUFZO0FBU3pCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFhUixRQUFBLEdBQUcsR0FBRztJQUNmLEtBQUssRUFBRSxlQUFlO0lBQ3RCLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixPQUFPLEVBQUUsVUFBVTtJQUNuQixHQUFHLEVBQUMsV0FBVztJQUVmLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLE1BQU07UUFDTixPQUFPLFdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDbkIsQ0FBQztDQUVKLENBQUE7QUFFWSxRQUFBLEdBQUcsR0FBRztJQUNmLEdBQUcsRUFBRTtRQUNELE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1Y7SUFDRCxNQUFNLEVBQU4sVUFBTyxHQUFXO1FBQ2QsT0FBTyxXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGF0YSB7XHJcbiAgICB1c2VySW5mbzogVXNlckluZm87ICAgICAgICAgICAgIC8vIOeUqOaIt+aVsOaNriBcclxuICAgIHRvb2xCYXJEYXRhOiBhbnk7ICAgICAgICAgICAgICAgLy8g5bel5YW35qCPXHJcbiAgICBzaG9wRGF0YTogQm9va0xpc3REYXRhID0gbnVsbDsgICAgICAgICAgICAgICAgICAvLyDllYbln47mlbDmja5cclxuICAgIGlzTG9naW46IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8vIFxyXG4gICAgaXNUb3VyaXN0OiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcclxuICAgIGFkbWluOiBzdHJpbmcgPSAnJ1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBjcmVhdGlvblRpbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdXBkYXRlVGltZTogc3RyaW5nID0gJyc7XHJcbn1cclxuZXhwb3J0IGVudW0gRXZlbnRBY3Qge1xyXG4gICAgU2hvd0xvYWRpbmcgPSAnc2hvd0xvYWRpbmcnLFxyXG4gICAgSGlkZUxvYWRpbmcgPSAnaGlkZUxvYWRpbmcnLFxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gcm9sZSB7XHJcbi8vICAgICBUb3VyaXN0LFxyXG4vLyAgICAgVXNlcixcclxuLy8gICAgIEFkbWluLFxyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0xpc3REYXRhIHtcclxuICAgIHJlc3BvbnNlQ29kZTogbnVtYmVyID0gMFxyXG4gICAgcmVzcG9uc2VNZXNzYWdlOiBzdHJpbmcgPSAnJ1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDBcclxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAwXHJcbiAgICB0b3RhbFBhZ2U6IG51bWJlciA9IDBcclxuICAgIGRhdGE6IEJvb2tEYXRhW10gPSBbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0RhdGEge1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGljYXRpb25EYXRlOiBzdHJpbmcgPSAnJ1xyXG4gICAgaXNibjogc3RyaW5nID0gJydcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xyXG4gICAgY292ZXI6IHN0cmluZyA9ICcnXHJcbiAgICB1bml0UHJpY2U6IHN0cmluZyA9ICcnXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVSTCA9IHtcclxuICAgIExvZ2luOiAndjEvYXV0aC9sb2dpbicsXHJcbiAgICBMb2dPdXQ6ICd2MS9hdXRoL2xvZ291dCcsXHJcbiAgICBSZWdpc3RlcjogJy92MS91c2VyJyxcclxuICAgIEJvb2tMaXN0OiAnL3YxL2Jvb2svcGFnaW5nJyxcclxuICAgIEFkZEJvb2s6ICcvdjEvYm9vaycsXHJcbiAgICBCdXk6Jy92MS9vcmRlcicsXHJcblxyXG4gICAgdGVzdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC8nLFxyXG4gICAgcHJvZDogJycsXHJcbiAgICBnZXQgRE9NQUlOKCkge1xyXG4gICAgICAgIHJldHVybiBVUkwudGVzdFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElNRyA9IHtcclxuICAgIElNRzogW1xyXG4gICAgICAgICdJbWcvMScsXHJcbiAgICAgICAgJ0ltZy8yJyxcclxuICAgICAgICAnSW1nLzMnLFxyXG4gICAgICAgICdJbWcvNCcsXHJcbiAgICAgICAgJ0ltZy81J1xyXG4gICAgXSxcclxuICAgIGdldEltZyhudW06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBJTUcuSU1HW251bV1cclxuICAgIH1cclxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFFbkU7SUFBQTtJQWlNQSxDQUFDO0lBOUxnQixTQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXO3VDQUFHLE9BQU87Ozs7Z0JBQzlDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7b0NBQ3hCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFHLGNBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBRyxDQUFDLEtBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0RBQ2hHLElBQUksRUFBRSxjQUFjO2dEQUNwQixLQUFLLEVBQUUsa0JBQWtCOzZDQUM1QixDQUFDLENBQUMsRUFBQTs7b0NBSEMsTUFBTSxHQUFHLGNBQVcsU0FHckIsRUFBQztvQ0FDSixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxJQUFJLFNBQVMsRUFBRTt3Q0FDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQ0FDdkI7eUNBQU07d0NBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDO3FDQUM3Qjs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUNMO0lBQ1ksVUFBTSxHQUFuQixVQUFvQixHQUFHO3VDQUFHLE9BQU87Ozs7Z0JBQ3pCLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsR0FBRztpQkFDWCxDQUFDO2dC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QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQztZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsVUFBQztBQUFELENBak1BLEFBaU1DLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rRGF0YSwgQm9va0xpc3REYXRhLCBVUkwsIFVzZXJJbmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldCB7XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBsb2dpbihuYW1lOiBzdHJpbmcsIHBzdzogc3RyaW5nKTogUHJvbWlzZTxVc2VySW5mbz4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Mb2dpbn1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+mZhuaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOeZu+mZhuWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgbG9nb3V0KHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVpZDogdWlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkxvZ091dH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75Ye65oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDnmbvlh7rlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRCb29rTGlzdCgpOiBQcm9taXNlPEJvb2tMaXN0RGF0YT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDk5OTksXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBCb29rTGlzdERhdGEgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUFVUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Cb29rTGlzdH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S5puWNlScpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDkuabljZXlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRCb29rKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGJvb2tEYXRhO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQWRkQm9va31gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5Lmm57GN5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOa3u+WKoOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHVwZGF0ZUJvb2soYm9va0RhdGE6IEJvb2tEYXRhLCB1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gYm9va0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkFkZEJvb2t9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOS5puexjeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0Qm9va0J5SUQoYm9va0RhdGE6IEJvb2tEYXRhLCB1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogYm9va0RhdGEuaWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnR0VUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5BZGRCb29rfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDkuabnsY3miJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIHBzdzogc3RyaW5nLCBhZG1pbjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwc3csXHJcbiAgICAgICAgICAgIGFkbWluOiBhZG1pblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5SZWdpc3Rlcn1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5rOo5YaM5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYnV5Qm9vayh1aWQsYm9va0lkLHRvdGFsKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOnVpZCAsXHJcbiAgICAgICAgICAgIGJvb2tJZDogYm9va0lkLFxyXG4gICAgICAgICAgICB0b3RhbDogdG90YWxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5CdXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i0reS5sOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg6LSt5Lmw5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgYWpheCh0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogQmxvYiB8IEJ1ZmZlclNvdXJjZSB8IEZvcm1EYXRhIHwgVVJMU2VhcmNoUGFyYW1zIHwgc3RyaW5nIHwgbnVsbCwgaGVhZGVyczogeyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW10pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3Blbih0eXBlLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb29rRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUVyRCw2QkFBd0I7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErRUM7UUE1RUcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUcsR0FBVyxFQUFFLENBQUE7UUFPaEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7UUFrRHRCLGlCQUFpQjtJQUNyQixDQUFDO0lBekRHLDRCQUFPLEdBQVAsVUFBUSxFQUFZLEVBQUUsR0FBVztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsNkJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQUcsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw2QkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsV0FBRyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLDZCQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBaUIsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLHVCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBYSxDQUFDO1FBQ3BELElBQUksSUFBSSxHQUFHLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFZLEVBQUUsUUFBYTtZQUM5RCxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFHRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVLLHdCQUFHLEdBQVQ7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDN0IscUJBQU0sYUFBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQWxFLE1BQU0sR0FBRyxTQUF5RDt3QkFDdEUsSUFBSSxNQUFNLEVBQUU7NEJBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQy9COzZCQUFNOzRCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUNsQzt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztLQUNuQjtJQTFFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDYztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNFO0lBbEJKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRTlCO0lBQUQsaUJBQUM7Q0EvRUQsQUErRUMsQ0EvRXVDLEVBQUUsQ0FBQyxTQUFTLEdBK0VuRDtrQkEvRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rRGF0YSwgRXZlbnRBY3QsIElNRyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuL05ldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJvb2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcmljZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXNibjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGVjOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBpYzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGJvb2tEYXRhOiBCb29rRGF0YTtcclxuICAgIGVkTnVtID0gMTtcclxuICAgIHVpZDogc3RyaW5nID0gJydcclxuICAgIHNldERhdGEoYmQ6IEJvb2tEYXRhLCB1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYm9va0RhdGEgPSBiZDtcclxuICAgICAgICB0aGlzLmVkTnVtID0gMTtcclxuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICB9XHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICBzZXRSb290KHJvb3Q6IEhvbWVQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuYm9va05hbWUuc3RyaW5nID0gYOS5puWQje+8muOAiiR7dGhpcy5ib29rRGF0YS5uYW1lfeOAi2A7XHJcbiAgICAgICAgdGhpcy5wcmljZS5zdHJpbmcgPSBg5Lu35qC877ya44CKJHt0aGlzLmJvb2tEYXRhLnVuaXRQcmljZX3jgItgO1xyXG4gICAgICAgIHRoaXMucHVibGlzaGluZ0hvdXNlLnN0cmluZyA9IGDlh7rniYjnpL7vvJoke3RoaXMuYm9va0RhdGEucHVibGlzaGluZ0hvdXNlfWA7XHJcbiAgICAgICAgdGhpcy5pc2JuLnN0cmluZyA9IGBpc2Ju77yaJHt0aGlzLmJvb2tEYXRhLmlzYm59YDtcclxuICAgICAgICB0aGlzLmRlYy5zdHJpbmcgPSBg566A5LuL77yaJHt0aGlzLmJvb2tEYXRhLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgbGV0IHBhdGggPSBJTUcuZ2V0SW1nKChwYXJzZUludCh0aGlzLmJvb2tEYXRhLmNvdmVyKSkpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlRleHR1cmUyRCwgKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BmID0gbmV3IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBzcGYuc2V0VGV4dHVyZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGljLnNwcml0ZUZyYW1lID0gc3BmO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubnVtLnN0cmluZyA9IHRoaXMuZWROdW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xvc2VCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtIC0gMSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWROdW0gPSB0aGlzLmVkTnVtIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtICsgMSA8PSA5OSkge1xyXG4gICAgICAgICAgICB0aGlzLmVkTnVtID0gdGhpcy5lZE51bSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBidXkoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5idXlCb29rKHRoaXMudWlkLCB0aGlzLmJvb2tEYXRhLmlkLCB0aGlzLmVkTnVtKTtcclxuICAgICAgICBpZiAocmVzbHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6LSt5Lmw5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfotK3kubDlpLHotKXvvIHor7fph43or5UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bigpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
