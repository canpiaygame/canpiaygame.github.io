
export class PageData {
    userInfo: UserInfo;             // 用户数据 
    toolBarData: any;               // 工具栏
    shopData: BookListData = null;                  // 商城数据
    isLogin: boolean = false;        // 
    isTourist: boolean = false;
}

export class UserInfo {
    name: string = '';
    password: string = '';
    admin: string = ''
    id: string = ''
    creationTime: string = '';
    updateTime: string = '';
}
export enum EventAct {
    ShowLoading = 'showLoading',
    HideLoading = 'hideLoading',

}

// export enum role {
//     Tourist,
//     User,
//     Admin,
// }

export class BookListData {
    responseCode: number = 0
    responseMessage: string = ''
    currentPage: number = 0
    pageSize: number = 0
    totalPage: number = 0
    data: BookData[] = []
}

export class BookData {
    id: string = ''
    name: string = ''
    publishingHouse: string = ''
    publicationDate: string = ''
    isbn: string = ''
    description: string = ''
    cover: string = ''
    unitPrice: string = ''
}
export class OrderListData {
    responseCode: number = 0
    responseMessage: string = ''
    currentPage: number = 0
    pageSize: number = 0
    totalPage: number = 0
    data: OrderData[] = []
}

export class OrderData {
    id: string = ''
    bookId: string = ''
    userId: string = ''
    userName: string = ''
    bookName: string = ''
    total: number = 0;
    amount: number = 0;
    orderDate: string;
    createTime: string;
    updateTime: string;

}


export const URL = {
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
        return URL.test
    }

}

export const IMG = {
    IMG: [
        'Img/1',
        'Img/2',
        'Img/3',
        'Img/4',
        'Img/5'
    ],
    getImg(num: number) {
        return IMG.IMG[num]
    }
}