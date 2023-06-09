sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
    
], function(ManagedObject , Fragment) {
    'use strict';

    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog",{

        constructor : function(oView){
            this._oView = oView
        },
        exit : function(){
            delete this._oView
        },
        open : function(){
            var oView = this._oView;
            //create dialog
            if (!oView.byId("HelloDialog")) {
                var oFragmentController = {
                    onCloseDialog : function(){
                        oView.byId("HelloDialog").close()
                    }
                }
                Fragment.load({
                    id: oView.getId(),
                    name : "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller : oFragmentController
    
                }).then(function(oDialog) {
                    oView.addDependent(oDialog)
                    oDialog.open()
                })
            }else{
                oView.byId("HelloDialog").open()
            }
        }
    })

    
}); 