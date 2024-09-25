import { EventAct, PageData } from "./DataType";
import Login from "./Login";
import Shop from "./Shop";
import Tips from "./Tips";

const { ccclass, property } = cc._decorator;



@ccclass
export default class HomePage extends cc.Component {

    @property(cc.Node)
    loading: cc.Node = null;

    @property(Shop)
    shopNode: Shop = null;

    @property(Login)
    loginNode: Login = null;

    @property(Tips)
    tips: cc.Node = null;

    pageData: PageData = new PageData();

    protected onLoad(): void {
        this.loginNode.node.on(EventAct.ShowLoading, this.showLoading.bind(this), this);
        this.loginNode.node.on(EventAct.HideLoading, this.hideLoading.bind(this), this);
    }
    
    updatePageData() {
        
    }
    
    getPageData(): PageData {
        return
    }
    
    showLoading() {
    
    }
    
    hideLoading() {
    
    }
}
