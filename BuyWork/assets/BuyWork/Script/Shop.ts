import BookDetail from "./BookDetail";
import BookItem from "./BookItem";
import { BookData, BookListData } from "./DataType";
import HomePage from "./HomePage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Shop extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;

    @property(BookDetail)
    detail: BookDetail = null;

    @property(cc.Prefab)
    bookItem: cc.Prefab = null;

    shopData: BookListData = null;
    root: HomePage = null;
    uid: string = ''
    setRoot(root: HomePage) {
        this.root = root;
        this.detail.setRoot(root);
    }
    setData(sd: BookListData,uid) {
        this.uid = uid
        this.shopData = sd;
        this.updateUI();
    }
    updateUI() {
        let data = this.shopData.data;
        const items = this.content.children.reduce((arr, child, i) => {
            arr[child.name] = child;
            return arr;
        }, {})
        for (let i = 0; i < data.length; i++) {
            const bookData = data[i];
            let child = items[bookData.id];
            if (child) {
                child.getComponent(BookItem).setData(bookData);
                delete items[child.name]
            } else {
                let node = this.createNode(bookData.id);
                node.getComponent(BookItem).setData(bookData);
            }
        }
        for (let itemName in items) {
            items[itemName].destroy();
        }
    }

    createNode(name: string) {
        let node = cc.instantiate(this.bookItem);
        node.name = name;
        this.content.addChild(node);
        return node;
    }
    

    onShowDetial(bd: BookData) {
        let pd = this.root.getPageData();
        if (pd.isTourist) {
            this.root.showTips('游客只有查看权限，请注册登录');
            return;
        }
        this.detail.node.active = true;
        this.detail.setData(bd,this.uid);
    }
    onHideDetial() {
        this.detail.node.active = false;
    }

    // update (dt) {}
}
