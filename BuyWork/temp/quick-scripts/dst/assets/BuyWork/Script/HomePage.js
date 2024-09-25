
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
Object.defineProperty(exports, "__esModule", { value: true });
var DataType_1 = require("./DataType");
var Login_1 = require("./Login");
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
    HomePage.prototype.onLoad = function () {
        this.loginNode.node.on(DataType_1.EventAct.ShowLoading, this.showLoading.bind(this), this);
        this.loginNode.node.on(DataType_1.EventAct.HideLoading, this.hideLoading.bind(this), this);
    };
    HomePage.prototype.updatePageData = function () {
    };
    HomePage.prototype.getPageData = function () {
        return;
    };
    HomePage.prototype.showLoading = function () {
    };
    HomePage.prototype.hideLoading = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0Q7QUFDaEQsaUNBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQiwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQ0M7UUFqQ0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVMsSUFBSSxDQUFDO1FBR3RCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7O0lBc0J4QyxDQUFDO0lBcEJhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsaUNBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksT0FBTTtJQUNWLENBQUM7SUFFRCw4QkFBVyxHQUFYO0lBRUEsQ0FBQztJQUVELDhCQUFXLEdBQVg7SUFFQSxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDOzhDQUNPO0lBR3RCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzsrQ0FDUTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7MENBQ007SUFaSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFjdCwgUGFnZURhdGEgfSBmcm9tIFwiLi9EYXRhVHlwZVwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IFNob3AgZnJvbSBcIi4vU2hvcFwiO1xyXG5pbXBvcnQgVGlwcyBmcm9tIFwiLi9UaXBzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoU2hvcClcclxuICAgIHNob3BOb2RlOiBTaG9wID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTG9naW4pXHJcbiAgICBsb2dpbk5vZGU6IExvZ2luID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVGlwcylcclxuICAgIHRpcHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHBhZ2VEYXRhOiBQYWdlRGF0YSA9IG5ldyBQYWdlRGF0YSgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dpbk5vZGUubm9kZS5vbihFdmVudEFjdC5TaG93TG9hZGluZywgdGhpcy5zaG93TG9hZGluZy5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxvZ2luTm9kZS5ub2RlLm9uKEV2ZW50QWN0LkhpZGVMb2FkaW5nLCB0aGlzLmhpZGVMb2FkaW5nLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVQYWdlRGF0YSgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGFnZURhdGEoKTogUGFnZURhdGEge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93TG9hZGluZygpIHtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlTG9hZGluZygpIHtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==