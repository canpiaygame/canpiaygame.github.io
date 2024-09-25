
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
exports.BookData = exports.ItemData = exports.OrderForm = exports.ItemList = exports.role = exports.EventAct = exports.UserInfo = exports.PageData = void 0;
var PageData = /** @class */ (function () {
    function PageData() {
        this.isLogin = false; // 
        this.loading = false;
    }
    return PageData;
}());
exports.PageData = PageData;
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.userName = '';
        this.psw = '';
        this.role = role.Tourist;
        this.uid = '';
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var EventAct;
(function (EventAct) {
    EventAct["ShowLoading"] = "showLoading";
    EventAct["HideLoading"] = "hideLoading";
})(EventAct = exports.EventAct || (exports.EventAct = {}));
var role;
(function (role) {
    role[role["Tourist"] = 0] = "Tourist";
    role[role["User"] = 1] = "User";
    role[role["Admin"] = 2] = "Admin";
})(role = exports.role || (exports.role = {}));
/**
 *购物车 购物清单
*/
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.bookList = [];
        this.lastUpdateTime = 0;
    }
    return ItemList;
}());
exports.ItemList = ItemList;
/**
 * 订单
 */
var OrderForm = /** @class */ (function () {
    function OrderForm() {
        this.itemList = [];
    }
    return OrderForm;
}());
exports.OrderForm = OrderForm;
var ItemData = /** @class */ (function () {
    function ItemData() {
        this.bookData = null;
    }
    return ItemData;
}());
exports.ItemData = ItemData;
var BookData = /** @class */ (function () {
    function BookData() {
        this.name = '';
        this.from = '';
        this.date = ''; // string or number
        this.isbn = '';
        this.desc = '';
        this.pic = 0;
        this.price = 0;
        this.createTime = 0; // 时间戳或者字符串  书本下单时间
        this.payTime = 0; // 付款时间
    }
    return BookData;
}());
exports.BookData = BookData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnV5V29ya1xcU2NyaXB0XFxEYXRhVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO1FBSUksWUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFRLEdBQUc7UUFDcEMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUU3QixDQUFDO0lBQUQsZUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksNEJBQVE7QUFTckI7SUFBQTtRQUNJLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQixRQUFHLEdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSw0QkFBUTtBQU1yQixJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsdUNBQTJCLENBQUE7SUFDM0IsdUNBQTJCLENBQUE7QUFFL0IsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBRUQsSUFBWSxJQUlYO0FBSkQsV0FBWSxJQUFJO0lBQ1oscUNBQU8sQ0FBQTtJQUNQLCtCQUFJLENBQUE7SUFDSixpQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUpXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQUlmO0FBRUQ7O0VBRUU7QUFDRjtJQUFBO1FBQ0ksYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFXLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBQUQsZUFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksNEJBQVE7QUFLckI7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksYUFBUSxHQUFlLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDhCQUFTO0FBS3RCO0lBQUE7UUFDSSxhQUFRLEdBQWEsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw0QkFBUTtBQUlyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBUSxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFDbkMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixlQUFVLEdBQVcsQ0FBQyxDQUFBLENBQUcsbUJBQW1CO1FBQzVDLFlBQU8sR0FBVSxDQUFDLENBQUMsQ0FBTSxPQUFPO0lBRXBDLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgUGFnZURhdGEge1xyXG4gICAgdXNlckluZm86IFVzZXJJbmZvOyAgICAgICAgICAgICAvLyDnlKjmiLfmlbDmja4gXHJcbiAgICB0b29sQmFyRGF0YTogYW55OyAgICAgICAgICAgICAgIC8vIOW3peWFt+agj1xyXG4gICAgc2hvcERhdGE6IGFueTsgICAgICAgICAgICAgICAgICAvLyDllYbln47mlbDmja5cclxuICAgIGlzTG9naW46IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8vIFxyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHBzdzogc3RyaW5nID0gJyc7XHJcbiAgICByb2xlOiByb2xlID0gcm9sZS5Ub3VyaXN0O1xyXG4gICAgdWlkOiBzdHJpbmcgPSAnJ1xyXG59XHJcbmV4cG9ydCBlbnVtIEV2ZW50QWN0IHtcclxuICAgIFNob3dMb2FkaW5nID0gJ3Nob3dMb2FkaW5nJyxcclxuICAgIEhpZGVMb2FkaW5nID0gJ2hpZGVMb2FkaW5nJyxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHJvbGUge1xyXG4gICAgVG91cmlzdCxcclxuICAgIFVzZXIsXHJcbiAgICBBZG1pbixcclxufVxyXG5cclxuLyoqXHJcbiAq6LSt54mp6L2mIOi0reeJqea4heWNlVxyXG4qL1xyXG5leHBvcnQgY2xhc3MgSXRlbUxpc3Qge1xyXG4gICAgYm9va0xpc3Q6IEJvb2tEYXRhW10gPSBbXTtcclxuICAgIGxhc3RVcGRhdGVUaW1lOiBudW1iZXIgPSAwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDorqLljZVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBPcmRlckZvcm0ge1xyXG4gICAgaXRlbUxpc3Q6IEl0ZW1EYXRhW10gPSBbXTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtRGF0YSB7XHJcbiAgICBib29rRGF0YTogQm9va0RhdGEgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va0RhdGEge1xyXG4gICAgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgICBmcm9tOiBzdHJpbmcgPSAnJztcclxuICAgIGRhdGU6IGFueSA9ICcnOyAvLyBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICBpc2JuOiBzdHJpbmcgPSAnJztcclxuICAgIGRlc2M6IHN0cmluZyA9ICcnO1xyXG4gICAgcGljOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpY2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY3JlYXRlVGltZTogbnVtYmVyID0gMCAgIC8vIOaXtumXtOaIs+aIluiAheWtl+espuS4siAg5Lmm5pys5LiL5Y2V5pe26Ze0XHJcbiAgICBwYXlUaW1lOm51bWJlciA9IDA7ICAgICAgLy8g5LuY5qy+5pe26Ze0XHJcblxyXG59ICJdfQ==