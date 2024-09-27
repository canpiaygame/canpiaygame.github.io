import BottomTool from "./BottomTool";
import { BookListData, EventAct, PageData, UserInfo } from "./DataType";
import Login from "./Login";
import Net from "./Net";
import Shop from "./Shop";
import Tips from "./Tips";

const { ccclass, property } = cc._decorator;



@ccclass
export default class HomePage extends cc.Component {

    @property(cc.Node)
    loading: cc.Node = null;

    @property(Shop)
    shopNode: Shop = null;

    @property(BottomTool)
    bottomTool: BottomTool = null;

    @property(Login)
    loginNode: Login = null;

    @property(Tips)
    tips: Tips = null;

    async setUserData(ud: UserInfo) {
        let pd = this.getPageData();
        if (ud) {
            pd.userInfo = ud;
            pd.isLogin = true;
            let bookList: BookListData = await Net.getBookList();
            pd.shopData = bookList;
        } else {
            pd.userInfo = null;
            pd.isLogin = false;
            pd.shopData = null;
        }
        this.updatePageData(pd);
        this.node.emit(EventAct.HideLoading);
    }

    async touristLogin() {
        let pd = this.getPageData();
        pd.isTourist = true;
        pd.userInfo = null;
        pd.isLogin = false;
        let bookList: BookListData = await Net.getBookList();
        pd.shopData = bookList;
        this.updatePageData(pd);
    }

    protected pageData: PageData = new PageData();

    protected onLoad(): void {
        this.node.on(EventAct.ShowLoading, this.showLoading.bind(this), this);
        this.node.on(EventAct.HideLoading, this.hideLoading.bind(this), this);
        this.loginNode.setRoot(this);
        this.shopNode.setRoot(this);
        this.bottomTool.setRoot(this);
    }

    updatePageData(data: PageData) {
        this.pageData = data;
        this.updateUI(this.pageData);
    }
    updateUI(data: PageData) {
        this.loginNode.node.active = data.isTourist ? false : !data.isLogin;
        this.shopNode.node.active = (data.isLogin && data.shopData != null)
        if (data.shopData && data.shopData != this.shopNode.shopData) {
            this.shopNode.setData(data.shopData,data.userInfo.id);
        }
    }

    showLoading() {
        this.loading.active = true;
    }

    hideLoading() {
        this.loading.active = false;
    }
    getPageData(): PageData {
        return this.pageData;
    }

    showTips(str: string) {
        this.tips.node.active = true;
        this.tips.setLabel(str);
        this.scheduleOnce(() => {
            this.tips.node.active = false;
        }, 1)
    }
}
