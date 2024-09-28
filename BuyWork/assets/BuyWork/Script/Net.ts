import { BookData, BookListData, OrderListData, URL, UserInfo } from "./DataType";

export default class Net {


    static async login(name: string, psw: string): Promise<UserInfo> {
        let data = {};
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.Login}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('登陆成功');
                reslove(result.data)
            } else {
                reject(new Error(`登陆失败`));
            }
        })
    }
    static async logout(uid): Promise<any> {
        let data = {
            uid: uid
        };
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.LogOut}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('登出成功');
                reslove(true)
            } else {
                reject(new Error(`登出失败`));
            }
        })
    }

    static async getBookList(): Promise<BookListData> {
        let data = {
            currentPage: 0,
            pageSize: 9999,
        };
        return new Promise(async (reslove, reject) => {
            let result: BookListData = JSON.parse(await this.ajax('PUT', `${URL.DOMAIN}${URL.BookList}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('书单');
                reslove(result)
            } else {
                reject(new Error(`书单失败`));
            }
        })
    }

    static async addBook(bookData: BookData, uid): Promise<any> {
        let data = bookData;
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.AddBook}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('添加书籍成功');
                reslove(result)
            } else {
                reject(new Error(`添加失败`));
            }
        })
    }

    static async updateBook(bookData: BookData, uid): Promise<any> {
        let data = bookData;
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('PUT', `${URL.DOMAIN}${URL.AddBook}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('添加书籍成功');
                reslove(result)
            } else {
                reject(new Error(`添加失败`));
            }
        })
    }


    static async getBookByID(bookData: BookData, uid): Promise<any> {
        let data = {
            id: bookData.id
        };
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('GET', `${URL.DOMAIN}${URL.AddBook}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('添加书籍成功');
                reslove(result.data)
            } else {
                reject(new Error(`添加失败`));
            }
        })
    }

    static async register(name: string, psw: string, admin: boolean): Promise<any> {
        let data = {
            name: name,
            password: psw,
            admin: admin
        };
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.Register}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('注册成功');
                reslove(true)
            } else {
                reject(new Error(`注册失败`));
            }
        })
    }


    static async Fix(userData:UserInfo): Promise<any> {
        let data = userData;
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('PUT', `${URL.DOMAIN}${URL.Fix}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: userData.id

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('注册成功');
                reslove(true)
            } else {
                reject(new Error(`注册失败`));
            }
        })
    }

    static async myList(uid): Promise<OrderListData> {
        let data = {
            currentPage: 0,
            pageSize: 9999,
        };
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.HistoryMy}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                reslove(result)
            } else {
                reject(new Error(`失败`));
            }
        })
    }

    static async buyBook(uid, bookId, total): Promise<any> {
        let data = {
            userId: uid,
            bookId: bookId,
            total: total
        };
        return new Promise(async (reslove, reject) => {
            let result = JSON.parse(await this.ajax('POST', `${URL.DOMAIN}${URL.Buy}`, JSON.stringify(data), [{
                name: "Content-Type",
                value: "application/json"
            }, {
                name: 'userId',
                value: uid

            }]));
            if (result && result.responseMessage == 'Success') {
                console.log('购买成功');
                reslove(true)
            } else {
                reject(new Error(`购买失败`));
            }
        })
    }







    static ajax(type: string, url: string, data?: Blob | BufferSource | FormData | URLSearchParams | string | null, headers: { name: string, value: string }[] = []) {
        return new Promise<string>((resolve) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ((xhr.status >= 200 && xhr.status < 400)) {
                        let response: string = xhr.responseText;
                        resolve(response);
                    }
                    else {
                        resolve(null);
                    }
                }
            };
            xhr.open(type, url, true);
            for (const item of headers) {
                xhr.setRequestHeader(item.name, item.value);
            }
            xhr.send(data);
        });
    }
}
