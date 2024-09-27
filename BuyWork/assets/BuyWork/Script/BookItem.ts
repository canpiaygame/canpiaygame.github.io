import { BookData, IMG } from "./DataType";
import Shop from "./Shop";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BookItem extends cc.Component {

    @property(cc.Label)
    bookName: cc.Label = null;

    @property(cc.Sprite)
    pic: cc.Sprite = null;

    bookData: BookData;
    root: Shop = null;

    setRoot(root: Shop) {
        this.root = root;
    }
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.click, this)
    }
    click(e) {
        if (!this.root) return;
        if (!this.bookData) return;
        this.root.onShowDetial(this.bookData)
    }

    setData(bd: BookData) {
        this.bookData = bd;
        this.updateUI();
    }

    updateUI() {
        this.bookName.string = this.bookData.name;
        let path = IMG.getImg((parseInt(this.bookData.cover)));
        cc.loader.loadRes(path, cc.Texture2D, (error: Error, resource: any) => {
            let spf = new cc.SpriteFrame;
            spf.setTexture(resource);
            this.pic.spriteFrame = spf;
        })
    }


}
