sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      var oData;
      var Masterdataid ;
  
      return BaseController.extend("masterdatanamespace.workflowuimodule.controller.App", {
        onInit() {


          debugger


        },
        onBeforeRendering: async function(oEvent) {
          debugger
          Masterdataid = this.getOwnerComponent().oModels.context.oData.startEvent.masterdataid;
         
         
          await $.ajax({
            url: `https://7d2927dbtrial-dev-wiprocompilance-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/MasterData?$filter=Masterdataid eq '${Masterdataid}'`,
            method: 'GET',
            success: function (response) {
              debugger
              oData = response.value[0]
              // console.log('Success:', response);
              // Handle successful response here
            },
            error: function (xhr, status, error) {
              debugger
              console.error('Error:', error);
              // Handle error here
            }
          });
          setTimeout(()=>{
            this.byId("entity").setText(oData.Entity);
            this.byId("country").setText(oData.Country);
            this.byId("companyname").setText(oData.CompanyName);
            this.byId("listofdirectors").setText(oData.ListofDirectors);
            this.byId("comments").setText(oData.Comments);
            this.byId("status").setText(oData.Status);
          },500)

         
        },

        onAfterRendering: async function(oEvent) {
          debugger
          
            var data = {
         masterdataid : Masterdataid
      }
        this.getView().getModel("device").setProperty("/data", JSON.stringify(data));
        
          

         
        }

       
        
      });
    }
  );
  