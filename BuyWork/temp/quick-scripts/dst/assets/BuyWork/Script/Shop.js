
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