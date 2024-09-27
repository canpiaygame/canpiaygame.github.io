
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxCb29rRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxRDtBQUVyRCw2QkFBd0I7QUFFbEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErRUM7UUE1RUcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBR2pDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUcsR0FBVyxFQUFFLENBQUE7UUFPaEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7UUFrRHRCLGlCQUFpQjtJQUNyQixDQUFDO0lBekRHLDRCQUFPLEdBQVAsVUFBUSxFQUFZLEVBQUUsR0FBVztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsNkJB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QVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0U7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNFO0lBbEJKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRTlCO0lBQUQsaUJBQUM7Q0EvRUQsQUErRUMsQ0EvRXVDLEVBQUUsQ0FBQyxTQUFTLEdBK0VuRDtrQkEvRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rRGF0YSwgRXZlbnRBY3QsIElNRyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgTmV0IGZyb20gXCIuL05ldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJvb2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcmljZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaXNibjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGVjOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBpYzogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIGJvb2tEYXRhOiBCb29rRGF0YTtcclxuICAgIGVkTnVtID0gMTtcclxuICAgIHVpZDogc3RyaW5nID0gJydcclxuICAgIHNldERhdGEoYmQ6IEJvb2tEYXRhLCB1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYm9va0RhdGEgPSBiZDtcclxuICAgICAgICB0aGlzLmVkTnVtID0gMTtcclxuICAgICAgICB0aGlzLnVpZCA9IHVpZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XHJcbiAgICB9XHJcbiAgICByb290OiBIb21lUGFnZSA9IG51bGw7XHJcbiAgICBzZXRSb290KHJvb3Q6IEhvbWVQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIHRoaXMuYm9va05hbWUuc3RyaW5nID0gYOS5puWQje+8muOAiiR7dGhpcy5ib29rRGF0YS5uYW1lfeOAi2A7XHJcbiAgICAgICAgdGhpcy5wcmljZS5zdHJpbmcgPSBg5Lu35qC877ya44CKJHt0aGlzLmJvb2tEYXRhLnVuaXRQcmljZX3jgItgO1xyXG4gICAgICAgIHRoaXMucHVibGlzaGluZ0hvdXNlLnN0cmluZyA9IGDlh7rniYjnpL7vvJoke3RoaXMuYm9va0RhdGEucHVibGlzaGluZ0hvdXNlfWA7XHJcbiAgICAgICAgdGhpcy5pc2JuLnN0cmluZyA9IGBpc2Ju77yaJHt0aGlzLmJvb2tEYXRhLmlzYm59YDtcclxuICAgICAgICB0aGlzLmRlYy5zdHJpbmcgPSBg566A5LuL77yaJHt0aGlzLmJvb2tEYXRhLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgbGV0IHBhdGggPSBJTUcuZ2V0SW1nKChwYXJzZUludCh0aGlzLmJvb2tEYXRhLmNvdmVyKSkpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlRleHR1cmUyRCwgKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BmID0gbmV3IGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBzcGYuc2V0VGV4dHVyZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGljLnNwcml0ZUZyYW1lID0gc3BmO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubnVtLnN0cmluZyA9IHRoaXMuZWROdW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xvc2VCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtIC0gMSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWROdW0gPSB0aGlzLmVkTnVtIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkTnVtICsgMSA8PSA5OSkge1xyXG4gICAgICAgICAgICB0aGlzLmVkTnVtID0gdGhpcy5lZE51bSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBidXkoKSB7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5TaG93TG9hZGluZyk7XHJcbiAgICAgICAgbGV0IHJlc2x1dCA9IGF3YWl0IE5ldC5idXlCb29rKHRoaXMudWlkLCB0aGlzLmJvb2tEYXRhLmlkLCB0aGlzLmVkTnVtKTtcclxuICAgICAgICBpZiAocmVzbHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5zaG93VGlwcygn6LSt5Lmw5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290LnNob3dUaXBzKCfotK3kubDlpLHotKXvvIHor7fph43or5UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuZW1pdChFdmVudEFjdC5IaWRlTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bigpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=