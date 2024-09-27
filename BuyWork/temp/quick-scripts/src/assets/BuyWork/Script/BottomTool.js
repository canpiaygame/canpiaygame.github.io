"use strict";
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