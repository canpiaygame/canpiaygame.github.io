
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