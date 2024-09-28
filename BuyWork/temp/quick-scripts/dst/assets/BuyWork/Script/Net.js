
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/Net.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    Net.userList = function (uid) {
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
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.UserList, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        console.log('成功');
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.Fix = function (userData) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                data = userData;
                return [2 /*return*/, new Promise(function (reslove, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.Fix, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: userData.id
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
    Net.myList = function (uid) {
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
                                    return [4 /*yield*/, this.ajax('POST', "" + DataType_1.URL.DOMAIN + DataType_1.URL.HistoryMy, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u5931\u8D25"));
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Net.orderListAll = function (uid) {
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
                                    return [4 /*yield*/, this.ajax('PUT', "" + DataType_1.URL.DOMAIN + DataType_1.URL.HistoryMy, JSON.stringify(data), [{
                                                name: "Content-Type",
                                                value: "application/json"
                                            }, {
                                                name: 'userId',
                                                value: uid
                                            }])];
                                case 1:
                                    result = _b.apply(_a, [_c.sent()]);
                                    if (result && result.responseMessage == 'Success') {
                                        reslove(result);
                                    }
                                    else {
                                        reject(new Error("\u5931\u8D25"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0Y7QUFFbEY7SUFBQTtJQXlSQSxDQUFDO0lBdFJnQixTQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXO3VDQUFHLE9BQU87Ozs7Z0JBQzlDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7b0NBQ3hCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFHLGNBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBRyxDQUFDLEtBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0RBQ2hHLElBQUksRUFBRSxjQUFjO2dEQUNwQixLQUFLLEVBQUUsa0JBQWtCOzZDQUM1QixDQUFDLENBQUMsRUFBQTs7b0NBSEMsTUFBTSxHQUFHLGNBQVcsU0FHckIsRUFBQztvQ0FDSixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxJQUFJLFNBQVMsRUFBRTt3Q0FDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQ0FDdkI7eUNBQU07d0NBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDO3FDQUM3Qjs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUNMO0lBQ1ksVUFBTSxHQUFuQixVQUFvQixHQUFHO3VDQUFHLE9BQU87Ozs7Z0JBQ3pCLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsR0FBRztpQkFDWCxDQUFDO2dC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RTtnQkFBdkIsSUFBTSxJQUFJLGdCQUFBO2dCQUNYLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQztZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsVUFBQztBQUFELENBelJBLEFBeVJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rRGF0YSwgQm9va0xpc3REYXRhLCBPcmRlckxpc3REYXRhLCBVUkwsIFVzZXJJbmZvIH0gZnJvbSBcIi4vRGF0YVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldCB7XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBsb2dpbihuYW1lOiBzdHJpbmcsIHBzdzogc3RyaW5nKTogUHJvbWlzZTxVc2VySW5mbz4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Mb2dpbn1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+mZhuaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOeZu+mZhuWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgbG9nb3V0KHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVpZDogdWlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkxvZ091dH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75Ye65oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDnmbvlh7rlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRCb29rTGlzdCgpOiBQcm9taXNlPEJvb2tMaXN0RGF0YT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDk5OTksXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBCb29rTGlzdERhdGEgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUFVUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Cb29rTGlzdH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S5puWNlScpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDkuabljZXlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRCb29rKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGJvb2tEYXRhO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQWRkQm9va31gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5Lmm57GN5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOa3u+WKoOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHVwZGF0ZUJvb2soYm9va0RhdGE6IEJvb2tEYXRhLCB1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gYm9va0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkFkZEJvb2t9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOS5puexjeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0Qm9va0J5SUQoYm9va0RhdGE6IEJvb2tEYXRhLCB1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogYm9va0RhdGEuaWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnR0VUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5BZGRCb29rfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDkuabnsY3miJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIHBzdzogc3RyaW5nLCBhZG1pbjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwc3csXHJcbiAgICAgICAgICAgIGFkbWluOiBhZG1pblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5SZWdpc3Rlcn1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+azqOWGjOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5rOo5YaM5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdXNlckxpc3QodWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLlVzZXJMaXN0fWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIEZpeCh1c2VyRGF0YTogVXNlckluZm8pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gdXNlckRhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkZpeH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlckRhdGEuaWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOazqOWGjOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIG15TGlzdCh1aWQpOiBQcm9taXNlPE9yZGVyTGlzdERhdGE+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5IaXN0b3J5TXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBvcmRlckxpc3RBbGwodWlkKTogUHJvbWlzZTxPcmRlckxpc3REYXRhPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogOTk5OSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUFVUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5IaXN0b3J5TXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBidXlCb29rKHVpZCwgYm9va0lkLCB0b3RhbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdWlkLFxyXG4gICAgICAgICAgICBib29rSWQ6IGJvb2tJZCxcclxuICAgICAgICAgICAgdG90YWw6IHRvdGFsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkJ1eX1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LSt5Lmw5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDotK3kubDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBhamF4KHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBCbG9iIHwgQnVmZmVyU291cmNlIHwgRm9ybURhdGEgfCBVUkxTZWFyY2hQYXJhbXMgfCBzdHJpbmcgfCBudWxsLCBoZWFkZXJzOiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==