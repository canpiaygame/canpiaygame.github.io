"use strict";
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