
export class PageData {
    userInfo: UserInfo;             // 用户数据 
    toolBarData: any;               // 工具栏
    shopData: any;                  // 商城数据
    isLogin: boolean = false;        // 
    loading: boolean = false;

}

export class UserInfo {
    userName: string = '';
    psw: string = '';
    role: role = role.Tourist;
    uid: string = ''
}
export enum EventAct {
    ShowLoading = 'showLoading',
    HideLoading = 'hideLoading',

}

export enum role {
    Tourist,
    User,
    Admin,
}

/**
 *购物车 购物清单
*/
export class ItemList {
    bookList: BookData[] = [];
    lastUpdateTime: number = 0
}

/**
 * 订单
 */
export class OrderForm {
    itemList: ItemData[] = [];

}

export class ItemData {
    bookData: BookData = null;
}

export class BookData {
    name: string = '';
    from: string = '';
    date: any = ''; // string or number
    isbn: string = '';
    desc: string = '';
    pic: number = 0;
    price: number = 0;

    createTime: number = 0   // 时间戳或者字符串  书本下单时间
    payTime:number = 0;      // 付款时间

} 