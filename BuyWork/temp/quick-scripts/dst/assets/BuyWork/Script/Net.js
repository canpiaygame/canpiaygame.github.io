
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0Y7QUFFbEY7SUFBQTtJQXVOQSxDQUFDO0lBcE5nQixTQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXO3VDQUFHLE9BQU87Ozs7Z0JBQzlDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7b0NBQ3hCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFHLGNBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBRyxDQUFDLEtBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0RBQ2hHLElBQUksRUFBRSxjQUFjO2dEQUNwQixLQUFLLEVBQUUsa0JBQWtCOzZDQUM1QixDQUFDLENBQUMsRUFBQTs7b0NBSEMsTUFBTSxHQUFHLGNBQVcsU0FHckIsRUFBQztvQ0FDSixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxJQUFJLFNBQVMsRUFBRTt3Q0FDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQ0FDdkI7eUNBQU07d0NBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDO3FDQUM3Qjs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUNMO0lBQ1ksVUFBTSxHQUFuQixVQUFvQixHQUFHO3VDQUFHLE9BQU87Ozs7Z0JBQ3pCLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsR0FBRztpQkFDWCxDQUFDO2dC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YXRhLCBCb29rTGlzdERhdGEsIE9yZGVyTGlzdERhdGEsIFVSTCwgVXNlckluZm8gfSBmcm9tIFwiLi9EYXRhVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0IHtcclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGxvZ2luKG5hbWU6IHN0cmluZywgcHN3OiBzdHJpbmcpOiBQcm9taXNlPFVzZXJJbmZvPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkxvZ2lufWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m76ZmG5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg55m76ZmG5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBsb2dvdXQodWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgdWlkOiB1aWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuTG9nT3V0fWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlh7rmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOeZu+WHuuWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEJvb2tMaXN0KCk6IFByb21pc2U8Qm9va0xpc3REYXRhPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogOTk5OSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IEJvb2tMaXN0RGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkJvb2tMaXN0fWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Lmm5Y2VJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOS5puWNleWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGFkZEJvb2soYm9va0RhdGE6IEJvb2tEYXRhLCB1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gYm9va0RhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5BZGRCb29rfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDkuabnsY3miJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5re75Yqg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlQm9vayhib29rRGF0YTogQm9va0RhdGEsIHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBib29rRGF0YTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BVVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQWRkQm9va31gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5Lmm57GN5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOa3u+WKoOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRCb29rQnlJRChib29rRGF0YTogQm9va0RhdGEsIHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBib29rRGF0YS5pZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdHRVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkFkZEJvb2t9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOS5puexjeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOa3u+WKoOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgcHN3OiBzdHJpbmcsIGFkbWluOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBzdyxcclxuICAgICAgICAgICAgYWRtaW46IGFkbWluXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLlJlZ2lzdGVyfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5rOo5YaM5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDms6jlhozlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBteUxpc3QodWlkKTogUHJvbWlzZTxPcmRlckxpc3REYXRhPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogOTk5OSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuSGlzdG9yeU15fWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYnV5Qm9vayh1aWQsYm9va0lkLHRvdGFsKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOnVpZCAsXHJcbiAgICAgICAgICAgIGJvb2tJZDogYm9va0lkLFxyXG4gICAgICAgICAgICB0b3RhbDogdG90YWxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5CdXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i0reS5sOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg6LSt5Lmw5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgYWpheCh0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhPzogQmxvYiB8IEJ1ZmZlclNvdXJjZSB8IEZvcm1EYXRhIHwgVVJMU2VhcmNoUGFyYW1zIHwgc3RyaW5nIHwgbnVsbCwgaGVhZGVyczogeyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW10pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3Blbih0eXBlLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=