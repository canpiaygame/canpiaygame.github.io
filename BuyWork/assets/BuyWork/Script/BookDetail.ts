import { BookData, EventAct, IMG } from "./DataType";
import HomePage from "./HomePage";
import Net from "./Net";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BookDetail extends cc.Component {

    @property(cc.Label)
    bookName: cc.Label = null;
    @property(cc.Label)
    price: cc.Label = null;
    @property(cc.Label)
    publishingHouse: cc.Label = null;

    @property(cc.Label)
    isbn: cc.Label = null;
    @property(cc.Label)
    dec: cc.Label = null;

    @property(cc.Sprite)
    pic: cc.Sprite = null;

    @property(cc.Label)
    num: cc.Label = null;
    bookData: BookData;
    edNum = 1;
    uid: string = ''
    setData(bd: BookData, uid: string) {
        this.bookData = bd;
        this.edNum = 1;
        this.uid = uid;
        this.updateUI();
    }
    root: HomePage = null;
    setRoot(root: HomePage) {
        this.root = root;
    }
    updateUI() {
        this.bookName.string = `书名：《${this.bookData.name}》`;
        this.price.string = `价格：《${this.bookData.unitPrice}》`;
        this.publishingHouse.string = `出版社：${this.bookData.publishingHouse}`;
        this.isbn.string = `isbn：${this.bookData.isbn}`;
        this.dec.string = `简介：${this.bookData.description}`;
        let path = IMG.getImg((parseInt(this.bookData.cover)));
        cc.loader.loadRes(path, cc.Texture2D, (error: Error, resource: any) => {
            let spf = new cc.SpriteFrame;
            spf.setTexture(resource);
            this.pic.spriteFrame = spf;
        });
        this.num.string = this.edNum.toString();
    }


    closeBtn() {
        this.node.active = false;
    }


    left() {
        if (this.edNum - 1 >= 1) {
            this.edNum = this.edNum - 1;
        }
        this.updateUI();
    }

    right() {
        if (this.edNum + 1 <= 99) {
            this.edNum = this.edNum + 1;
        }
        this.updateUI();
    }

    async buy() {
        this.root.node.emit(EventAct.ShowLoading);
        let reslut = await Net.buyBook(this.uid, this.bookData.id, this.edNum);
        if (reslut) {
            this.root.showTips('购买成功！');
        } else {
            this.root.showTips('购买失败！请重试');
        }
        this.root.node.emit(EventAct.HideLoading);
        this.closeBtn();
    }
    // update (dt) {}
}
