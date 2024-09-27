"use strict";
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