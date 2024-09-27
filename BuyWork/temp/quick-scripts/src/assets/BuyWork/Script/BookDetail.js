"use strict";
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