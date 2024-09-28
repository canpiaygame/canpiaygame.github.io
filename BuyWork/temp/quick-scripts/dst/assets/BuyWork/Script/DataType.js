
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BuyWork/Script/DataType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2638431TJ1NJ43dPutfIpg2', 'DataType');
// BuyWork/Script/DataType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMG = exports.URL = exports.OrderData = exports.OrderListData = exports.BookData = exports.BookListData = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
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
var OrderListData = /** @class */ (function () {
    function OrderListData() {
        this.responseCode = 0;
        this.responseMessage = '';
        this.currentPage = 0;
        this.pageSize = 0;
        this.totalPage = 0;
        this.data = [];
    }
    return OrderListData;
}());
exports.OrderListData = OrderListData;
var OrderData = /** @class */ (function () {
    function OrderData() {
        this.id = '';
        this.bookId = '';
        this.userId = '';
        this.userName = '';
        this.bookName = '';
        this.total = 0;
        this.amount = 0;
    }
    return OrderData;
}());
exports.OrderData = OrderData;
exports.URL = {
    Login: 'v1/auth/login',
    LogOut: 'v1/auth/logout',
    Register: '/v1/user',
    Fix: '/v1/user',
    BookList: '/v1/book/paging',
    AddBook: '/v1/book',
    Buy: '/v1/order',
    HistoryMy: '/v1/order/paging',
    HistoryAll: '/v1/order/paging',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxEYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBR0ksYUFBUSxHQUFpQixJQUFJLENBQUMsQ0FBa0IsT0FBTztRQUN2RCxZQUFPLEdBQVksS0FBSyxDQUFDLENBQVEsR0FBRztRQUNwQyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTtBQVFyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBRSxHQUFXLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFRO0FBUXJCLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQix1Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBMkIsQ0FBQTtBQUUvQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUVKO0lBQUE7UUFDSSxpQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9DQUFZO0FBU3pCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFVckI7SUFBQTtRQUNJLGlCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLG9CQUFlLEdBQVcsRUFBRSxDQUFBO1FBQzVCLGdCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLGFBQVEsR0FBVyxDQUFDLENBQUE7UUFDcEIsY0FBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixTQUFJLEdBQWdCLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNDQUFhO0FBUzFCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFDckIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFLdkIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw4QkFBUztBQWVULFFBQUEsR0FBRyxHQUFHO0lBQ2YsS0FBSyxFQUFFLGVBQWU7SUFDdEIsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixHQUFHLEVBQUUsVUFBVTtJQUNmLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsT0FBTyxFQUFFLFVBQVU7SUFDbkIsR0FBRyxFQUFFLFdBQVc7SUFDaEIsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixVQUFVLEVBQUUsa0JBQWtCO0lBRzlCLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLE1BQU07UUFDTixPQUFPLFdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDbkIsQ0FBQztDQUVKLENBQUE7QUFFWSxRQUFBLEdBQUcsR0FBRztJQUNmLEdBQUcsRUFBRTtRQUNELE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1Y7SUFDRCxNQUFNLEVBQU4sVUFBTyxHQUFXO1FBQ2QsT0FBTyxXQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGF0YSB7XHJcbiAgICB1c2VySW5mbzogVXNlckluZm87ICAgICAgICAgICAgIC8vIOeUqOaIt+aVsOaNriBcclxuICAgIHRvb2xCYXJEYXRhOiBhbnk7ICAgICAgICAgICAgICAgLy8g5bel5YW35qCPXHJcbiAgICBzaG9wRGF0YTogQm9va0xpc3REYXRhID0gbnVsbDsgICAgICAgICAgICAgICAgICAvLyDllYbln47mlbDmja5cclxuICAgIGlzTG9naW46IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8vIFxyXG4gICAgaXNUb3VyaXN0OiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcclxuICAgIGFkbWluOiBzdHJpbmcgPSAnJ1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBjcmVhdGlvblRpbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdXBkYXRlVGltZTogc3RyaW5nID0gJyc7XHJcbn1cclxuZXhwb3J0IGVudW0gRXZlbnRBY3Qge1xyXG4gICAgU2hvd0xvYWRpbmcgPSAnc2hvd0xvYWRpbmcnLFxyXG4gICAgSGlkZUxvYWRpbmcgPSAnaGlkZUxvYWRpbmcnLFxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gcm9sZSB7XHJcbi8vICAgICBUb3VyaXN0LFxyXG4vLyAgICAgVXNlcixcclxuLy8gICAgIEFkbWluLFxyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0xpc3REYXRhIHtcclxuICAgIHJlc3BvbnNlQ29kZTogbnVtYmVyID0gMFxyXG4gICAgcmVzcG9uc2VNZXNzYWdlOiBzdHJpbmcgPSAnJ1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDBcclxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAwXHJcbiAgICB0b3RhbFBhZ2U6IG51bWJlciA9IDBcclxuICAgIGRhdGE6IEJvb2tEYXRhW10gPSBbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0RhdGEge1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGlzaGluZ0hvdXNlOiBzdHJpbmcgPSAnJ1xyXG4gICAgcHVibGljYXRpb25EYXRlOiBzdHJpbmcgPSAnJ1xyXG4gICAgaXNibjogc3RyaW5nID0gJydcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xyXG4gICAgY292ZXI6IHN0cmluZyA9ICcnXHJcbiAgICB1bml0UHJpY2U6IHN0cmluZyA9ICcnXHJcbn1cclxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdERhdGEge1xyXG4gICAgcmVzcG9uc2VDb2RlOiBudW1iZXIgPSAwXHJcbiAgICByZXNwb25zZU1lc3NhZ2U6IHN0cmluZyA9ICcnXHJcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyID0gMFxyXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDBcclxuICAgIHRvdGFsUGFnZTogbnVtYmVyID0gMFxyXG4gICAgZGF0YTogT3JkZXJEYXRhW10gPSBbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJEYXRhIHtcclxuICAgIGlkOiBzdHJpbmcgPSAnJ1xyXG4gICAgYm9va0lkOiBzdHJpbmcgPSAnJ1xyXG4gICAgdXNlcklkOiBzdHJpbmcgPSAnJ1xyXG4gICAgdXNlck5hbWU6IHN0cmluZyA9ICcnXHJcbiAgICBib29rTmFtZTogc3RyaW5nID0gJydcclxuICAgIHRvdGFsOiBudW1iZXIgPSAwO1xyXG4gICAgYW1vdW50OiBudW1iZXIgPSAwO1xyXG4gICAgb3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVUaW1lOiBzdHJpbmc7XHJcbiAgICB1cGRhdGVUaW1lOiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVSTCA9IHtcclxuICAgIExvZ2luOiAndjEvYXV0aC9sb2dpbicsXHJcbiAgICBMb2dPdXQ6ICd2MS9hdXRoL2xvZ291dCcsXHJcbiAgICBSZWdpc3RlcjogJy92MS91c2VyJyxcclxuICAgIEZpeDogJy92MS91c2VyJyxcclxuICAgIEJvb2tMaXN0OiAnL3YxL2Jvb2svcGFnaW5nJyxcclxuICAgIEFkZEJvb2s6ICcvdjEvYm9vaycsXHJcbiAgICBCdXk6ICcvdjEvb3JkZXInLFxyXG4gICAgSGlzdG9yeU15OiAnL3YxL29yZGVyL3BhZ2luZycsXHJcbiAgICBIaXN0b3J5QWxsOiAnL3YxL29yZGVyL3BhZ2luZycsXHJcblxyXG5cclxuICAgIHRlc3Q6ICdodHRwOi8vbG9jYWxob3N0Ojg4ODgvJyxcclxuICAgIHByb2Q6ICcnLFxyXG4gICAgZ2V0IERPTUFJTigpIHtcclxuICAgICAgICByZXR1cm4gVVJMLnRlc3RcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJTUcgPSB7XHJcbiAgICBJTUc6IFtcclxuICAgICAgICAnSW1nLzEnLFxyXG4gICAgICAgICdJbWcvMicsXHJcbiAgICAgICAgJ0ltZy8zJyxcclxuICAgICAgICAnSW1nLzQnLFxyXG4gICAgICAgICdJbWcvNSdcclxuICAgIF0sXHJcbiAgICBnZXRJbWcobnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gSU1HLklNR1tudW1dXHJcbiAgICB9XHJcbn0iXX0=