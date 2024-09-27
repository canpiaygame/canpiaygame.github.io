
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxEYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBR0ksYUFBUSxHQUFpQixJQUFJLENBQUMsQ0FBa0IsT0FBTztRQUN2RCxZQUFPLEdBQVksS0FBSyxDQUFDLENBQVEsR0FBRztRQUNwQyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTtBQVFyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBRSxHQUFXLEVBQUUsQ0FBQTtRQUNmLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFRO0FBUXJCLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQix1Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBMkIsQ0FBQTtBQUUvQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUVKO0lBQUE7UUFDSSxpQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixnQkFBVyxHQUFXLENBQUMsQ0FBQTtRQUN2QixhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsU0FBSSxHQUFlLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9DQUFZO0FBU3pCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixvQkFBZSxHQUFXLEVBQUUsQ0FBQTtRQUM1QixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsZUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNEJBQVE7QUFVckI7SUFBQTtRQUNJLGlCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3hCLG9CQUFlLEdBQVcsRUFBRSxDQUFBO1FBQzVCLGdCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLGFBQVEsR0FBVyxDQUFDLENBQUE7UUFDcEIsY0FBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixTQUFJLEdBQWdCLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNDQUFhO0FBUzFCO0lBQUE7UUFDSSxPQUFFLEdBQVcsRUFBRSxDQUFBO1FBQ2YsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFDckIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFLdkIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw4QkFBUztBQWVULFFBQUEsR0FBRyxHQUFHO0lBQ2YsS0FBSyxFQUFFLGVBQWU7SUFDdEIsTUFBTSxFQUFFLGdCQUFnQjtJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0IsVUFBVSxFQUFFLGtCQUFrQjtJQUc5QixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCLElBQUksRUFBRSxFQUFFO0lBQ1IsSUFBSSxNQUFNO1FBQ04sT0FBTyxXQUFHLENBQUMsSUFBSSxDQUFBO0lBQ25CLENBQUM7Q0FFSixDQUFBO0FBRVksUUFBQSxHQUFHLEdBQUc7SUFDZixHQUFHLEVBQUU7UUFDRCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztLQUNWO0lBQ0QsTUFBTSxFQUFOLFVBQU8sR0FBVztRQUNkLE9BQU8sV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN2QixDQUFDO0NBQ0osQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgUGFnZURhdGEge1xyXG4gICAgdXNlckluZm86IFVzZXJJbmZvOyAgICAgICAgICAgICAvLyDnlKjmiLfmlbDmja4gXHJcbiAgICB0b29sQmFyRGF0YTogYW55OyAgICAgICAgICAgICAgIC8vIOW3peWFt+agj1xyXG4gICAgc2hvcERhdGE6IEJvb2tMaXN0RGF0YSA9IG51bGw7ICAgICAgICAgICAgICAgICAgLy8g5ZWG5Z+O5pWw5o2uXHJcbiAgICBpc0xvZ2luOiBib29sZWFuID0gZmFsc2U7ICAgICAgICAvLyBcclxuICAgIGlzVG91cmlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nID0gJyc7XHJcbiAgICBhZG1pbjogc3RyaW5nID0gJydcclxuICAgIGlkOiBzdHJpbmcgPSAnJ1xyXG4gICAgY3JlYXRpb25UaW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHVwZGF0ZVRpbWU6IHN0cmluZyA9ICcnO1xyXG59XHJcbmV4cG9ydCBlbnVtIEV2ZW50QWN0IHtcclxuICAgIFNob3dMb2FkaW5nID0gJ3Nob3dMb2FkaW5nJyxcclxuICAgIEhpZGVMb2FkaW5nID0gJ2hpZGVMb2FkaW5nJyxcclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBlbnVtIHJvbGUge1xyXG4vLyAgICAgVG91cmlzdCxcclxuLy8gICAgIFVzZXIsXHJcbi8vICAgICBBZG1pbixcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tMaXN0RGF0YSB7XHJcbiAgICByZXNwb25zZUNvZGU6IG51bWJlciA9IDBcclxuICAgIHJlc3BvbnNlTWVzc2FnZTogc3RyaW5nID0gJydcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwXHJcbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gMFxyXG4gICAgdG90YWxQYWdlOiBudW1iZXIgPSAwXHJcbiAgICBkYXRhOiBCb29rRGF0YVtdID0gW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tEYXRhIHtcclxuICAgIGlkOiBzdHJpbmcgPSAnJ1xyXG4gICAgbmFtZTogc3RyaW5nID0gJydcclxuICAgIHB1Ymxpc2hpbmdIb3VzZTogc3RyaW5nID0gJydcclxuICAgIHB1YmxpY2F0aW9uRGF0ZTogc3RyaW5nID0gJydcclxuICAgIGlzYm46IHN0cmluZyA9ICcnXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nID0gJydcclxuICAgIGNvdmVyOiBzdHJpbmcgPSAnJ1xyXG4gICAgdW5pdFByaWNlOiBzdHJpbmcgPSAnJ1xyXG59XHJcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3REYXRhIHtcclxuICAgIHJlc3BvbnNlQ29kZTogbnVtYmVyID0gMFxyXG4gICAgcmVzcG9uc2VNZXNzYWdlOiBzdHJpbmcgPSAnJ1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDBcclxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAwXHJcbiAgICB0b3RhbFBhZ2U6IG51bWJlciA9IDBcclxuICAgIGRhdGE6IE9yZGVyRGF0YVtdID0gW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nID0gJydcclxuICAgIGJvb2tJZDogc3RyaW5nID0gJydcclxuICAgIHVzZXJJZDogc3RyaW5nID0gJydcclxuICAgIHVzZXJOYW1lOiBzdHJpbmcgPSAnJ1xyXG4gICAgYm9va05hbWU6IHN0cmluZyA9ICcnXHJcbiAgICB0b3RhbDogbnVtYmVyID0gMDtcclxuICAgIGFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIG9yZGVyRGF0ZTogc3RyaW5nO1xyXG4gICAgY3JlYXRlVGltZTogc3RyaW5nO1xyXG4gICAgdXBkYXRlVGltZTogc3RyaW5nO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVUkwgPSB7XHJcbiAgICBMb2dpbjogJ3YxL2F1dGgvbG9naW4nLFxyXG4gICAgTG9nT3V0OiAndjEvYXV0aC9sb2dvdXQnLFxyXG4gICAgUmVnaXN0ZXI6ICcvdjEvdXNlcicsXHJcbiAgICBCb29rTGlzdDogJy92MS9ib29rL3BhZ2luZycsXHJcbiAgICBBZGRCb29rOiAnL3YxL2Jvb2snLFxyXG4gICAgQnV5OiAnL3YxL29yZGVyJyxcclxuICAgIEhpc3RvcnlNeTogJy92MS9vcmRlci9wYWdpbmcnLFxyXG4gICAgSGlzdG9yeUFsbDogJy92MS9vcmRlci9wYWdpbmcnLFxyXG5cclxuXHJcbiAgICB0ZXN0OiAnaHR0cDovL2xvY2FsaG9zdDo4ODg4LycsXHJcbiAgICBwcm9kOiAnJyxcclxuICAgIGdldCBET01BSU4oKSB7XHJcbiAgICAgICAgcmV0dXJuIFVSTC50ZXN0XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSU1HID0ge1xyXG4gICAgSU1HOiBbXHJcbiAgICAgICAgJ0ltZy8xJyxcclxuICAgICAgICAnSW1nLzInLFxyXG4gICAgICAgICdJbWcvMycsXHJcbiAgICAgICAgJ0ltZy80JyxcclxuICAgICAgICAnSW1nLzUnXHJcbiAgICBdLFxyXG4gICAgZ2V0SW1nKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIElNRy5JTUdbbnVtXVxyXG4gICAgfVxyXG59Il19