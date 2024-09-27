"use strict";
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