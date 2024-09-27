"use strict";
cc._RF.push(module, '2638431TJ1NJ43dPutfIpg2', 'DataType');
// BuyWork/Script/DataType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMG = exports.URL = exports.BookData = exports.BookListData = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
var PageData = /** @class */ (function () {
    function PageData() {
        this.shopData = null; // 商城数据
        this.isLogin = false; // 
        this.isTourist = false;
    }
    return PageData;
}());
exports.PageData = PageData;
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.name = '';
        this.password = '';
        this.admin = '';
        this.id = '';
        this.creationTime = '';
        this.updateTime = '';
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var EventAct;
(function (EventAct) {
    EventAct["ShowLoading"] = "showLoading";
    EventAct["HideLoading"] = "hideLoading";
})(EventAct = exports.EventAct || (exports.EventAct = {}));
// export enum role {
//     Tourist,
//     User,
//     Admin,
// }
var BookListData = /** @class */ (function () {
    function BookListData() {
        this.responseCode = 0;
        this.responseMessage = '';
        this.currentPage = 0;
        this.pageSize = 0;
        this.totalPage = 0;
        this.data = [];
    }
    return BookListData;
}());
exports.BookListData = BookListData;
var BookData = /** @class */ (function () {
    function BookData() {
        this.id = '';
        this.name = '';
        this.publishingHouse = '';
        this.publicationDate = '';
        this.isbn = '';
        this.description = '';
        this.cover = '';
        this.unitPrice = '';
    }
    return BookData;
}());
exports.BookData = BookData;
exports.URL = {
    Login: 'v1/auth/login',
    LogOut: 'v1/auth/logout',
    Register: '/v1/user',
    BookList: '/v1/book/paging',
    AddBook: '/v1/book',
    Buy: '/v1/order',
    test: 'http://localhost:8888/',
    prod: '',
    get DOMAIN() {
        return exports.URL.test;
    }
};
exports.IMG = {
    IMG: [
        'Img/1',
        'Img/2',
        'Img/3',
        'Img/4',
        'Img/5'
    ],
    getImg: function (num) {
        return exports.IMG.IMG[num];
    }
};

cc._RF.pop();