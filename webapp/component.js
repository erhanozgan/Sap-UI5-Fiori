sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    'use strict';
    return UIComponent.extend("sap.ui.walkthrough.Component",{
        metadata : {
            manifest : "json"
        },
        init : function(){
            UIComponent.prototype.init.apply(this, arguments);
            var oData = {
                recipient : {
                    name : "Erhan"
                }
               };
               var oModel = new JSONModel(oData);
               this.setModel(oModel);

               //set the dialog

               this._helloDialog = new HelloDialog(this.getRootControl())

        },
        exit : function(){
            this._helloDialog.destroy();
                delete this.helloDialog;

            },
        openHelloDialog : function(){
                this._helloDialog.open();
            }
        
    });

});