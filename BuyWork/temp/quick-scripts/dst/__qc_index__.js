
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/BuyWork/Script/BookDetail');
require('./assets/BuyWork/Script/BookItem');
require('./assets/BuyWork/Script/BottomTool');
require('./assets/BuyWork/Script/DataType');
require('./assets/BuyWork/Script/Helloworld');
require('./assets/BuyWork/Script/HomePage');
require('./assets/BuyWork/Script/Login');
require('./assets/BuyWork/Script/Net');
require('./assets/BuyWork/Script/OrderItem');
require('./assets/BuyWork/Script/OrderItemAll');
require('./assets/BuyWork/Script/RotateSelf');
require('./assets/BuyWork/Script/Shop');
require('./assets/BuyWork/Script/Tips');
require('./assets/BuyWork/Script/ToolBar');
require('./assets/BuyWork/Script/UserItem');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();