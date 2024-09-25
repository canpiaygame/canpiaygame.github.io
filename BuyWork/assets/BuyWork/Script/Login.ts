
const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    @property(cc.EditBox)
    userName: cc.EditBox = null;

    @property(cc.EditBox)
    psw: cc.EditBox = null;

   protected onLoad(): void {
       
   }
}
