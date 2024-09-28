
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0Y7QUFFbEY7SUFBQTtJQTRPQSxDQUFDO0lBek9nQixTQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxHQUFXO3VDQUFHLE9BQU87Ozs7Z0JBQzlDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7Ozs7b0NBQ3hCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFHLGNBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBRyxDQUFDLEtBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0RBQ2hHLElBQUksRUFBRSxjQUFjO2dEQUNwQixLQUFLLEVBQUUsa0JBQWtCOzZDQUM1QixDQUFDLENBQUMsRUFBQTs7b0NBSEMsTUFBTSxHQUFHLGNBQVcsU0FHckIsRUFBQztvQ0FDSixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxJQUFJLFNBQVMsRUFBRTt3Q0FDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3Q0FDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQ0FDdkI7eUNBQU07d0NBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDO3FDQUM3Qjs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUNMO0lBQ1ksVUFBTSxHQUFuQixVQUFvQixHQUFHO3VDQUFHLE9BQU87Ozs7Z0JBQ3pCLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsR0FBRztpQkFDWCxDQUFDO2dC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Q0FBQztZQUMvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QyxJQUFJLFFBQVEsR0FBVyxHQUFHLENBQUMsWUFBWSxDQUFDO3dCQUN4QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3JCO3lCQUNJO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDakI7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBbUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7Z0JBQXZCLElBQU0sSUFBSSxnQkFBQTtnQkFDWCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQTVPQSxBQTRPQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va0RhdGEsIEJvb2tMaXN0RGF0YSwgT3JkZXJMaXN0RGF0YSwgVVJMLCBVc2VySW5mbyB9IGZyb20gXCIuL0RhdGFUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXQge1xyXG5cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgbG9naW4obmFtZTogc3RyaW5nLCBwc3c6IHN0cmluZyk6IFByb21pc2U8VXNlckluZm8+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuTG9naW59YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvpmYbmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDnmbvpmYblpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGxvZ291dCh1aWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICB1aWQ6IHVpZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5Mb2dPdXR9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+WHuuaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg55m75Ye65aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0Qm9va0xpc3QoKTogUHJvbWlzZTxCb29rTGlzdERhdGE+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogQm9va0xpc3REYXRhID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BVVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQm9va0xpc3R9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuabljZUnKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5Lmm5Y2V5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYWRkQm9vayhib29rRGF0YTogQm9va0RhdGEsIHVpZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBib29rRGF0YTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkFkZEJvb2t9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOS5puexjeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDmt7vliqDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGVCb29rKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGJvb2tEYXRhO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUFVUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5BZGRCb29rfWAsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250ZW50LVR5cGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcklkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1aWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDkuabnsY3miJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUocmVzdWx0KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5re75Yqg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEJvb2tCeUlEKGJvb2tEYXRhOiBCb29rRGF0YSwgdWlkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGJvb2tEYXRhLmlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ0dFVCcsIGAke1VSTC5ET01BSU59JHtVUkwuQWRkQm9va31gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5Lmm57GN5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihg5re75Yqg5aSx6LSlYCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBwc3c6IHN0cmluZywgYWRtaW46IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcHN3LFxyXG4gICAgICAgICAgICBhZG1pbjogYWRtaW5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGF3YWl0IHRoaXMuYWpheCgnUE9TVCcsIGAke1VSTC5ET01BSU59JHtVUkwuUmVnaXN0ZXJ9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOazqOWGjOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBGaXgodXNlckRhdGE6VXNlckluZm8pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gdXNlckRhdGE7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQVVQnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkZpeH1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlckRhdGEuaWRcclxuXHJcbiAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3BvbnNlTWVzc2FnZSA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfms6jlhozmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHJlc2xvdmUodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYOazqOWGjOWksei0pWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIG15TGlzdCh1aWQpOiBQcm9taXNlPE9yZGVyTGlzdERhdGE+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoYXdhaXQgdGhpcy5hamF4KCdQT1NUJywgYCR7VVJMLkRPTUFJTn0ke1VSTC5IaXN0b3J5TXl9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VySWQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVpZFxyXG5cclxuICAgICAgICAgICAgfV0pKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzcG9uc2VNZXNzYWdlID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgcmVzbG92ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBidXlCb29rKHVpZCwgYm9va0lkLCB0b3RhbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdWlkLFxyXG4gICAgICAgICAgICBib29rSWQ6IGJvb2tJZCxcclxuICAgICAgICAgICAgdG90YWw6IHRvdGFsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShhd2FpdCB0aGlzLmFqYXgoJ1BPU1QnLCBgJHtVUkwuRE9NQUlOfSR7VVJMLkJ1eX1gLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3VzZXJJZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdWlkXHJcblxyXG4gICAgICAgICAgICB9XSkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXNwb25zZU1lc3NhZ2UgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6LSt5Lmw5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICByZXNsb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGDotK3kubDlpLHotKVgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBhamF4KHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGRhdGE/OiBCbG9iIHwgQnVmZmVyU291cmNlIHwgRm9ybURhdGEgfCBVUkxTZWFyY2hQYXJhbXMgfCBzdHJpbmcgfCBudWxsLCBoZWFkZXJzOiB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W10gPSBbXSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihpdGVtLm5hbWUsIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==