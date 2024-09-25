// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class RotateSelf extends cc.Component {

    start() {
        cc.tween(this.node).sequence(cc.tween(this.node).to(2.5, { angle: -359.9 }), cc.tween(this.node).call(() => { this.node.angle = 0; })).repeatForever().start();
    }

    // update (dt) {}
}
