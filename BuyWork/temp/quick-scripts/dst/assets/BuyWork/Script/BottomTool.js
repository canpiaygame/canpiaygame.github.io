
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb3R0b21Ub29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUVyRCw2QkFBd0I7QUFDeEIseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBOERDO1FBM0RHLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFHdkIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsU0FBRyxHQUFrQixJQUFJLENBQUM7O1FBOEMxQixpQkFBaUI7SUFDckIsQ0FBQztJQWxERyw0QkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUssa0NBQWEsR0FBbkI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDN0IscUJBQU0sYUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQTlELE1BQU0sR0FBRyxTQUFxRDt3QkFDbEUsSUFBSSxNQUFNLEVBQUU7NEJBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTt5QkFDbEI7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7eUJBQ3BDO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Ozs7O0tBQ2hDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN4QixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzNCO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEQ7U0FDSjtRQUNELEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBeEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBVFQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThEOUI7SUFBRCxpQkFBQztDQTlERCxBQThEQyxDQTlEdUMsRUFBRSxDQUFDLFNBQVMsR0E4RG5EO2tCQTlEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QWN0LCBPcmRlckxpc3REYXRhIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBOZXQgZnJvbSBcIi4vTmV0XCI7XHJcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSBcIi4vT3JkZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tVG9vbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBvcmRlckl0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvcmRlckxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHJvb3Q6IEhvbWVQYWdlID0gbnVsbDtcclxuICAgIHNldFJvb3Qocm9vdDogSG9tZVBhZ2UpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgfVxyXG4gICAgb2xkOiBPcmRlckxpc3REYXRhID0gbnVsbDtcclxuICAgIGFzeW5jIG9wZW5PcmRlckxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5teUxpc3QodGhpcy5yb290LmdldFBhZ2VEYXRhKCkudXNlckluZm8uaWQpO1xyXG4gICAgICAgIGlmIChyZXNsdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGQgPSByZXNsdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn5Y6G5Y+y6K6i5Y2V6ZSZ6K+v77yM6K+36YeN6K+V77yBJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMub2xkLmRhdGE7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ucmVkdWNlKChhcnIsIGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGFycltjaGlsZC5uYW1lXSA9IGNoaWxkO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvbERhdGEgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBpdGVtc1tvbERhdGEuaWRdO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudChPcmRlckl0ZW0pLnNldERhdGEob2xEYXRhKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtc1tjaGlsZC5uYW1lXVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUob2xEYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KE9yZGVySXRlbSkuc2V0RGF0YShvbERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1OYW1lIGluIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2l0ZW1OYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlTm9kZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3JkZXJJdGVtKTtcclxuICAgICAgICBub2RlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU9yZGVyTGlzdCgpIHtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==