

if (typeof(tibcoforms) == 'undefined') tibcoforms = new Object();
if (typeof(tibcoforms.formCode) == 'undefined') tibcoforms.formCode = new Object();
tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA'] = new Object();
tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA']['defineActions'] = function() {
var fc = tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA'];
    fc['rule_cancel'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "cancel", "Cancel", fc['action_Cancel']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(cancel) Error: " + e);
           throw e;
       }
    }

            fc['action_Cancel'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                if(askConfirmation('[id$=control_widget_cancel]')==true){
	context.control.form.invokeAction("cancel",context.control,context);
}
else{
}
            }
    fc['rule_submit'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "submit", "SubmitForm", fc['action_SubmitForm']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(submit) Error: " + e);
           throw e;
       }
    }

            fc['action_SubmitForm'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                
var subflg=1;

if(data.TaskName=="Equipment_Change" || data.TaskName=="N/W_Mapping_Finalization")
{
	var dvicePne = pane.TechnicalInfo_deviceRequest;
	var s      = dvicePne.value.length;
	for(var i=0;i<s;i++) {
		if( (dvicePne.value[i].SFC_Tag_Number=="") || (dvicePne.value[i].serial_Number=="") || (dvicePne.value[i].IMEI=="")|| (dvicePne.value[i].address=="")) {
			alert(resource.msg.MNUAL_INST_ALERT); subflg=0;
		}
	}
	if(subflg==1) {
		context.control.form.invokeAction("submit",context.control,context);
		
	}
}

if(data.TaskName=="Initiate_Swap_Tariff_Process"){
	if((control.ProvisioningData_siebelCircuitID.value==null) || (control.ProvisioningData_siebelCircuitID.value==""))
	{
		alert("Enter a valid Siebel Ciruit ID");
	}
}
if(data.TaskName=='Validation'){
	if((control.LicenseUpgradeFlag.value==null) || (control.LicenseUpgradeFlag.value=="")){
		alert("Please check if License upgrade required before proceeding");
	}
	else{
		context.control.form.invokeAction("submit",context.control,context);
	}
}
else if(data.TaskName=='Select_Contractor'){
	if((control.optionlist3.value==null) || (control.optionlist3.value=="")){
		alert("Please select a contractor before proceeding");
	}
	else{
		context.control.form.invokeAction("submit",context.control,context);
	}
}
else if(data.TaskName=='N/W_Mapping_Initial_Setup'){

	var dvicePne = pane.TechnicalInfo_deviceRequest;
	var s      = dvicePne.value.length;
	for(var i=0;i<s;i++) {
		if( (dvicePne.value[i].SFC_Tag_Number=="") || (dvicePne.value[i].serial_Number=="") || (dvicePne.value[i].IMEI=="")|| (dvicePne.value[i].address=="")) {
			subflg=0;
		}
	}
	if(subflg==0){
	alert(resource.msg.MNUAL_INST_ALERT); 
	}
	
	else if((control.selectNetworkMapping.value==null) || (control.selectNetworkMapping.value==""))
	{
		subflg=0;	
		alert("Please select a Network mapping type before proceeding");
	}
	
	else if((control.selectNetworkMapping.value=="AcceptWithUpgrade" ) && ((control.SelectedContractorGroup.value==null)||(control.SelectedContractorGroup.value==""))) 
	{
		subflg=0;
		alert("Please select the Contractor Agency before proceeding.");
	}
	if(subflg==1) {
		context.control.form.invokeAction("submit",context.control,context);
		
	}
	
	
}

else {
		context.control.form.invokeAction("submit",context.control,context);
	}
	
	
	
            }
    fc['rule_initrule1'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "initrule1", "rule1", fc['action_rule1']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(initrule1) Error: " + e);
           throw e;
       }
    }

    fc['rule_setHeaderName'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "setHeaderName", "rule11", fc['action_rule11']);
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "setHeaderName", "setFontColor", fc['action_setFontColor']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(setHeaderName) Error: " + e);
           throw e;
       }
    }

            fc['action_rule11'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                
logger.info(data.TaskName.length);
var name=data.TaskName;
for(var index=0; index<name.length; index++) {
	name=name.replace("_"," ");
	//data.setTaskName(name);
}
logger.info(name);
pane.content.label = name;

/*pane.pneMarginPaneCntrAgnt.setVisible(false);
pane.selectContractorAgency.setVisible(false);
control.lblContractorAgency.setVisible(false);
control.lblSelectContractor.setVisible(false);
control.addEquipment.setVisible(false);

pane.pneMarginPaneSelectContractor.setVisible(false);
pane.selectContractor.setVisible(false);
*/
//control.lblMgmtIP.setVisible(false);
//pane.pneManagementIPs.setVisible(false);
pane.MarginPaneTechnicalInfo.visible = true;
//pane.pane13.setVisible(false);

if(data.TaskName=="Deactivation_Process_Initiate"){
control.addEquipment.visible = true;

}

/*if(data.getTaskName()=="Select_Contractor"){
pane.pneMarginPaneCntrAgnt.setVisible(false);
pane.selectContractorAgency.setVisible(false);

control.lblContractorAgency.setVisible(false);

control.lblSelectContractor.setVisible(true);


pane.pneMarginPaneSelectContractor.setVisible(true);
pane.selectContractor.setVisible(true);
}

if(data.getTaskName()=="PM_Review"){
control.lblContractorAgency.setVisible(true);
control.lblSelectContractor.setVisible(false);

pane.pneMarginPaneCntrAgnt.setVisible(true);
pane.selectContractorAgency.setVisible(true);

pane.pneMarginPaneSelectContractor.setVisible(false);
pane.selectContractor.setVisible(false);
}
*/
if(data.TaskName=="Initiate_Swap_Tariff_Process") {
	control.btnSearch.visible = true;
}
else {
	control.btnSearch.visible = false;
}
            }
            fc['action_setFontColor'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                setupFontColor('[id$=generalDetails]');
setupFontColor('[id$=clientDetails]');
setupFontColor('[id$=resource]');
setupFontColor('[id$=installationAddress]');
setupFontColor('[id$=lblServiceRequest]');
setupFontColor('[id$=contactDetails]');
setupFontColor('[id$=serviceDates]');
setupFontColor('[id$=commentsText]');
setupFontColor('[id$=lblTechInfo]');
setupFontColor('[id$=lblContractorAgency]');
setupFontColor('[id$=lblSelectContractor]');
setupFontColor('[id$=commentHistory]');
setupFontColor('[id$=lbllicenseUpgrade]');
setupFontColor('[id$=lblselectContractorAgency]');
setupFontColor('[id$=lblselectContractor]');
setupFontColor('[id$=lblselectNetworkMapping]');
setupFontColor('[id$=lbluploadDocuments]');
setupFontColor('[id$=serviceRequestExistingConfiguration]');



setupFontColorDropdown('[id$=Provisioning_Data_floor]');
setupFontColorDropdown('[id$=ProvisioningData_accountManager]');
setupFontColorDropdown('[id$=ProvisioningData_floor]');


NummberOnlyUpdated('[id$=widget_control_Provisioning_Data_mobile]');

            }
    fc['rule_addEquipment'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "addEquipment", "equipments", fc['action_equipments']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(addEquipment) Error: " + e);
           throw e;
       }
    }

            fc['action_equipments'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var Record=factory.com_sfc_fosImpl_dataModel.createEquipmentDetails();
pane.TechnicalInfo_equipment.value.push(Record);
//pane.TechnicalInfo_equipment.setSelection(Record);
            }
    fc['rule_trapdoorLogic'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "trapdoorLogic", "trapdoorLogic", fc['action_trapdoorLogic']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(trapdoorLogic) Error: " + e);
           throw e;
       }
    }

            fc['action_trapdoorLogic'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var a;

if(data.ProvisioningData.siebelCircuitID=='90981'){
    data.ProvisioningData.clientName = "Excel Cinema";
    //data.getProvisioning_Data().setProjectManager("NA");
    data.ProvisioningData.account = "New";
    data.ProvisioningData.clientID = "4536";
    data.ProvisioningData.accountManager = "Alan Witsel";
    data.ProvisioningData.clientName = "Excel Cinema";
    data.ProvisioningData.contactPerson = "Alan Witsel";
    data.ProvisioningData.regionView = "Nairobi";
    data.ProvisioningData.contractor = "NA";
     data.ProvisioningData.buildingID = "1215";
    data.ProvisioningData.buildingName = "Apex Global";
    data.ProvisioningData.floor = "2";
    data.ProvisioningData.location = "Kenya";
    data.ProvisioningData.sector = "2";
    data.ProvisioningData.GPSCoordinates = "23";
    data.ProvisioningData.mobile = "9879786767";
    data.ProvisioningData.bandwidthupdown = "FFB5";
    data.ProvisioningData.serviceType = "Internet";
    data.ProvisioningData.technology = "PTP";
    data.ProvisioningData.email = "alan@demogmail.com";
	
	//control.Provisioning_Data_serviceStatus.setValue("Registered");
	
	control.TechnicalInfo_SFCPOPPE.value = "Gospel";
	//control.TechnicalInfo_management_IP_Info_aggregation_Point.setValue("Gospel");
	//control.TechnicalInfo_management_IP_Info_management_Carrier_IP.setValue("10.163.184.212");
	//control.TechnicalInfo_management_IP_Info_carrier_VLAN.setValue("3181");
	control.TechnicalInfo_clientIP.value = "41.90.11.200/30";
	control.TechnicalInfo_clientVLAN.value = "765";

	
	var record = factory.com_sfc_fosImpl_dataModel.createEquipmentDetails();
		record.address = "10.215.17.163/28";
		record.type = "AR169F";
		record.VLAN = "3341";
	pane.TechnicalInfo_equipment.value.push(record);
	control.TechnicalInfo_modifiedDate.value = new Date();
} 
            }
    fc['rule_fetchSwapTariffData'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "fetchSwapTariffData", "fetchSwapTariffData", fc['action_fetchSwapTariffData']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(fetchSwapTariffData) Error: " + e);
           throw e;
       }
    }

            fc['action_fetchSwapTariffData'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                

//data.setFetchDataURL("http://hakadam-t470:7020/");




ldCustomerInfo(factory,pane,control,logger,data.FetchDataURL,"getCustomerInformation?SiebelCircuitID="+control.ProvisioningData_siebelCircuitID.value);
ldTechnicalInfo(factory,pane,control,logger,data.FetchDataURL,"getTechnicalInformation?SiebelCircuitID="+control.ProvisioningData_siebelCircuitID.value);
ldCommentsHist(factory, pane, control, logger,data.FetchDataURL,"getCommentsHistory?SiebelCircuitID="+control.ProvisioningData_siebelCircuitID.value);

var dupcheckFlag=0;
var requestStatusFlag=0;

if(data.TaskName=="Initiate_Swap_Tariff_Process")
{
	control.fileattachments.value = "<iframe SCROLLING='yes' frameborder=0 width=1000 height=250 src='"+data.xDMSURL.toString()+"/archiv?xfunc=list&folderid="+data.ProvisioningData.siebelCircuitID+"&xupload=true&target=_blank'></iframe>";	
	pane.pneUploadDocuments.visible = true;
	control.lbluploadDocuments.visible = true;
}



// check duplicacy
//var exists=CheckProcessDublication(factory, pane, control, logger, data.getFetchDataURL(),"getRequestMetaData?SiebelCircuitID="+control.Provisioning_Data_siebelCircuitID.getValue()+"&ProcessName=Deactivation");
            }
    fc['rule_licenseupdate'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "licenseupdate", "licenseUpdate", fc['action_licenseUpdate']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(licenseupdate) Error: " + e);
           throw e;
       }
    }

            fc['action_licenseUpdate'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                data.LicenseUpgradeFlag = context.control.value;
            }
    fc['rule_networkMappingrule'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "networkMappingrule", "networkmappingrule", fc['action_networkmappingrule']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(networkMappingrule) Error: " + e);
           throw e;
       }
    }

            fc['action_networkmappingrule'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                data.NetworkMappingStatus = context.control.value;

if(context.control.value=="AcceptWithUpgrade")
{
	pane.pneSelectContractorAgency.visible = true;
	control.lblselectContractorAgency.visible = true;
}
else
{
	pane.pneSelectContractorAgency.visible = false;
	control.lblselectContractorAgency.visible = false;
}
            }
    fc['rule_selectContractorAgency'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "selectContractorAgency", "selectContractorAgency", fc['action_selectContractorAgency']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(selectContractorAgency) Error: " + e);
           throw e;
       }
    }

            fc['action_selectContractorAgency'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                //data.SelectedContractorGroup = context.control.value;
            }
    fc['rule_selectContractor'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "selectContractor", "selectContractor", fc['action_selectContractor']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(selectContractor) Error: " + e);
           throw e;
       }
    }

            fc['action_selectContractor'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                //data.SelectedContractor = context.control.value;
control.ProvisioningData_contractor.value = context.control.value;
            }
    fc['rule_addManagementIP'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "addManagementIP", "addManagementIP", fc['action_addManagementIP']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(addManagementIP) Error: " + e);
           throw e;
       }
    }

            fc['action_addManagementIP'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var Record=factory.com_sfc_fosImpl_dataModel.createManagement_IP_List();
pane.TechnicalInfo_management_IP_Info.value.push(Record);
//pane.TechnicalInfo_equipment.setSelection(Record);
            }
    fc['rule_removeManagementIP'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "removeManagementIP", "removeManagementIP", fc['action_removeManagementIP']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(removeManagementIP) Error: " + e);
           throw e;
       }
    }

            fc['action_removeManagementIP'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var pneTechMgmtIP = pane.TechnicalInfo_management_IP_Info;

if(pneTechMgmtIP.selection!=null) {
	var $array = pneTechMgmtIP.value;
	var $index = $array.indexOf(pneTechMgmtIP.selection);
	if ($index != -1) { $array.splice($index, 1); }
}
else {
	alert(resource.msg.TESFAE_REMOVAL_ERR);
}
            }
    fc['rule_deviceActions'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "deviceActions", "deviceActions", fc['action_deviceActions']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(deviceActions) Error: " + e);
           throw e;
       }
    }

            fc['action_deviceActions'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var a;
var pneTDReq = pane.TechnicalInfo_deviceRequest;
if(context.control.name=="btnAddDevice"){
	var r = factory.com_sfc_fosImpl_dataModel.createDeviceRequest();
	r.siebelCircuitID = data.ProvisioningData.siebelCircuitID;
	pneTDReq.value.push(r);
}
else {
	if(pneTDReq.selection!=null) {
		var $array = pneTDReq.value;
		var $index = $array.indexOf(pneTDReq.selection);
		if ($index != -1) { $array.splice($index, 1); }
	}
	else {
	//	resource.exter
	}
}
            }
    fc['rule_demandDeskDecision'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "demandDeskDecision", "demandDeskDecision", fc['action_demandDeskDecision']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(demandDeskDecision) Error: " + e);
           throw e;
       }
    }

            fc['action_demandDeskDecision'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                data.DemandDeskDecision = context.control.value.toString();
context.control.form.invokeAction("submit",context.control,context);
            }
    fc['rule_checkDuplicacy'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "checkDuplicacy", "checkDuplicacy", fc['action_checkDuplicacy']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(checkDuplicacy) Error: " + e);
           throw e;
       }
    }

            fc['action_checkDuplicacy'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var devices = pane.TechnicalInfo_deviceRequest;
var lngth   = pane.TechnicalInfo_deviceRequest.value.length;


if(devices.selection!=null) {
var curr  = devices.selection;
for(var i=0;i<lngth;i++) {
if(curr != devices.value[i]) {
var rec = devices.value[i];
if((curr.SFC_Tag_Number == rec.SFC_Tag_Number) && (curr.SFC_Tag_Number!="")){
alert(resource.msg.DUP_SFC_TAG_ALERT);
curr.SFC_Tag_Number = "";
}
if((curr.IMEI== rec.IMEI) && (curr.IMEI!="")){
alert(resource.msg.DUP_IMEI_ALERT);
curr.IMEI = "";
}
if ((curr.serial_Number == rec.serial_Number) && (curr.serial_Number!="")) {
alert(resource.msg.DUP_SRL_NUM_ALERT);
curr.serial_Number = "";
}
if((curr.address  == rec.serial_Number) && (curr.address!="")) {
alert(resource.msg.DUP_ADDR_ALERT);
curr.address = "";
}
}
}
}
            }
    fc['rule_addCPEDetails'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "addCPEDetails", "addCPEDetails", fc['action_addCPEDetails']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(addCPEDetails) Error: " + e);
           throw e;
       }
    }

            fc['action_addCPEDetails'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var a;


var record = factory.com_sfc_fosImpl_dataModel.createCPEManagementIPDetails();
pane.TechnicalInfo_CPEManagementIPDetails.value.push(record);
            }
    fc['rule_removeCPEDetails'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "removeCPEDetails", "removeCPEDetails", fc['action_removeCPEDetails']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(removeCPEDetails) Error: " + e);
           throw e;
       }
    }

            fc['action_removeCPEDetails'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                
if(pane.TechnicalInfo_CPEManagementIPDetails.selection!=null) {
	var $array = pane.TechnicalInfo_CPEManagementIPDetails.value;
	var $index = $array.indexOf(pane.TechnicalInfo_CPEManagementIPDetails.selection);
	if ($index != -1) { $array.splice($index, 1); }
}
            }
    fc['rule_addServiceDetails'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "addServiceDetails", "AddServiceDetails", fc['action_AddServiceDetails']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(addServiceDetails) Error: " + e);
           throw e;
       }
    }

            fc['action_AddServiceDetails'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                var record = factory.com_sfc_fosImpl_dataModel.createServiceIPDetails();
pane.TechnicalInfo_serviceIPDetails.value.push(record);
            }
    fc['rule_removeServiceIPDetails'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "removeServiceIPDetails", "rule12", fc['action_rule12']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(removeServiceIPDetails) Error: " + e);
           throw e;
       }
    }

            fc['action_rule12'] = function(context, data, pane, control, factory, pkg, f , p) {
                 if (context.form && context.form._marked4Cancel)
                    return;
                 var resource = context.form.resource;
                 var logger = tibcoforms.bridge.log_logger();
                if(pane.TechnicalInfo_serviceIPDetails.selection!=null) {
	var $array = pane.TechnicalInfo_serviceIPDetails.value;
	var $index = $array.indexOf(pane.TechnicalInfo_serviceIPDetails.selection);
	if ($index != -1) { $array.splice($index, 1); }
}
            }
    fc['action_rule1'] = function(context, data, pane, control, factory, pkg, f , p) {
        if (context.form && context.form._marked4Cancel)
            return;
        var resource = context.form.resource;
        var logger = tibcoforms.bridge.log_logger();
        
if(data.TaskName=="Initiate_Swap_Tariff_Process")
{
	control.serviceRequestExistingConfiguration.visible = false;
	//pane.OldServiceRequest.visible = false;
	pane.pnecommenthistory.visible = true;
	control.lblcommentHistory.visible = true;
	control.btnSearch.visible = true;
	pane.pneUploadDocuments.visible = false;
	control.lbluploadDocuments.visible = false;
	
}

if(data.TaskName=="Validation")
{
	pane.pneLicenseUpgrade.visible = true;
	control.lbllicenseUpgrade.visible = true;
	pane.clientDetails.enabled = false;
	pane.Pane03.enabled = false;
	pane.pane8.enabled = false;
	//pane.pne01.setEnabled(false);
	pane.contactDetails.enabled = false;
	pane.TechnicalInfo.enabled = false;
	chngeBkGrndColorECSValidation();
	chngeBkGrndColorTechnicalInfo();
	chngeBkGrndColorProvDataBlack();
	//chngeBkGrndColorProvDataTESFAE();
	//chngeBkGrndColorProvDataBlack();
	//logger.info("Inside Validation");	
	control.ProvisioningData_serviceStatus.enabled = false;
	pane.pneAddDeleteManagementIP.visible = false;
	pane.pneDeviceReq.visible = false;
	pane.pneServiceIPDetailsBtns.visible = false;
	pane.pneMgmtIPDetails.visible = false;
	control.ProvisioningData_projectManager.enabled = true;
	control.ProvisioningData_account.enabled = false;
	control.ProvisioningData_siebelCircuitID.enabled = false;
	
}

if(data.TaskName=="N/W_Mapping_Initial_Setup")
{
	control.lblselectNetworkMapping.visible = true;
	pane.pneNetworkMapping.visible = true;
	pane.pne01.enabled = false;
	pane.contactDetails.enabled = false;
	pane.clientDetails.enabled = false;
	pane.Pane03.enabled = false;
	chngeBkGrndColorNWMappingInitial();
	chngeBkGrndColorProvDataBlack();
	control.ProvisioningData_serviceStatus.enabled = false;
}

if(data.TaskName=="Resumption")
{
	control.submit.label = "Accept";
	control.reject.visible = true;
	pane.pne01.enabled = false;
	pane.clientDetails.enabled = false;
	pane.contactDetails.enabled = false;
	pane.Pane03.enabled = false;
	pane.pane8.enabled = false;
	pane.TechnicalInfo.enabled = false;
	pane.serviceRequest.enabled = false;
	chngeBkGrndColorProvData();
	chngeBkGrndColorTechnicalInfo();
	chngeBkGrndColorProvDataBlack();
	pane.pneAddDeleteManagementIP.visible = false;
	pane.pneDeviceReq.visible = false;
}

if(data.TaskName=="Equipment_Change")
{
	pane.pne01.enabled = false;
	pane.clientDetails.enabled = false;
	pane.contactDetails.enabled = false;
	pane.Pane03.enabled = false;
	pane.pane8.enabled = false;
	pane.serviceRequest.enabled = false;
	//pane.TechnicalInfo.setEnabled(false);
	pane.TechnicalInfo_deviceRequest.enabled = true;
	pane.pneDeviceReq.enabled = true;
	pane.pneTechInfo04.enabled = false;
	pane.pneTechnicalInfo06.enabled = false;
	
	pane.TechnicalInfo_management_IP_Info.enabled = false;
	pane.pneAddDeleteManagementIP.enabled = false;	
	chngeBkGrndColorProvData();
	chngeBkGrndColorTechnicalInfoEqChnge();
	chngeBkGrndColorProvDataBlack();	
	control.TechnicalInfo_MRR.visible = false;
	pane.pneAddDeleteManagementIP.visible = false;
	pane.pneServiceIPDetailsBtns.visible = false;
	control.TechnicalInfo_MRR.visible = false;
	pane.TechnicalInfo_CPEManagementIPDetails.enabled = false; pane.pneAddDeleteManagementIP.visible = false;
	pane.pneServiceIPDetailsBtns.visible = false;
	pane.TechnicalInfo_serviceIPDetails.enabled = false;
	pane.pneMgmtIPDetails.visible = false;
	
}

if(data.TaskName=="Equipment_Recovery" || data.TaskName=="License_Updates" || data.TaskName=="TES_OSG_Approval")
{
	chngeBkGrndColorProvData();
	chngeBkGrndColorTechnicalInfo();
	chngeBkGrndColorProvDataBlack();
	pane.pneAddDeleteManagementIP.visible = false;
	pane.pneDeviceReq.visible = false;
}
if(data.TaskName=="Select_Contractor")
{
	chngeBkGrndColorProvData();
	chngeBkGrndColorTechnicalInfo();
	chngeBkGrndColorProvDataBlack();
	pane.pneDeviceReq.visible = false;
	pane.TechnicalInfo_management_IP_Info.visible = true;
	
}

if(data.TaskName=="N/W_Mapping_Finalization")
{
	chngeBkGrndColorNWMappingFinal();
	chngeBkGrndColorProvDataBlack();
	control.ProvisioningData_serviceStatus.enabled = false;
}

if(data.TaskName=="Equipment_Recovery" || data.TaskName=="Select_Contractor" || data.TaskName=="License_Updates" || data.TaskName=="N/W_Mapping_Finalization" || data.TaskName=="TES_OSG_Approval")
{
	pane.pne01.enabled = false;
	pane.clientDetails.enabled = false;
	pane.contactDetails.enabled = false;
	pane.Pane03.enabled = false;
	pane.pane8.enabled = false;
	pane.serviceRequest.enabled = false;
	pane.TechnicalInfo.enabled = false;
	
	if(data.TaskName=="Equipment_Recovery" || data.TaskName=="Select_Contractor")
	{
		pane.pneAddDeleteManagementIP.visible = false;
		pane.TechnicalInfo_management_IP_Info.visible = false;
		pane.TechnicalInfo_management_IP_Info.visible = true;
		pane.TechnicalInfo_management_IP_Info.enabled = false;
	}
	if(data.TaskName=="Select_Contractor")
	{
		control.TechnicalInfo_MRR.visible = false;
		pane.pneSelectContractor.visible = true;
		control.lblselectContractor.visible = true;
		pane.pneDeviceReq.visible = false;
		pane.TechnicalInfo_management_IP_Info.visible = true;
		
	}
	if(data.TaskName=="N/W_Mapping_Finalization")
	{
		pane.TechnicalInfo.enabled = true;
		pane.serviceRequest.enabled = true;
	}
	pane.pneServiceIPDetailsBtns.visible = false;
	pane.pneMgmtIPDetails.visible = false;
}


//pane.serviceDates.setEnabled(true);
//pane.contactDetails.setEnabled(true);
//pane.serviceRequest.setEnabled(true);
//pane.pane8.setEnabled(true);
//pane.Pane03.setEnabled(true);
//pane.clientDetails.setEnabled(true);
//pane.pne01.setEnabled(true);
//pane.TechnicalInfo.setEnabled(true);
control.ProvisioningData_serviceStatus.value = "Active";
//control.ProvisioningData_serviceStatus.setEnabled(false);
chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_projectManager]');
//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedDate]');
//setupFontColorDropdown('[id$=widget_control_Provisioning_Data_siebelCircuitID]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_projectManager]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_account]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_clientID]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_regionView]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_floor]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_sector]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_buildingName]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_buildingID]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_serviceStatus]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_contactPerson]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_mobile]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_email]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_address]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_accountManager]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_clientName]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_contractor]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_location]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_serviceStart]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_installDate]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_serviceEnd]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_requestDate]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_serviceType]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_regionView]');

chngeBkGrndColor('[id$=widget_control_OldServiceRequest_bandwidthupdown]');
chngeBkGrndColor('[id$=widget_control_OldServiceRequest_serviceType]');
chngeBkGrndColor('[id$=widget_control_OldServiceRequest_technology]');
	
	


	
//}
/*else {
	pane.serviceDates.setEnabled(false);
	pane.contactDetails.setEnabled(false);
	pane.serviceRequest.setEnabled(false);
	pane.pane8.setEnabled(false);
	pane.Pane03.setEnabled(false);
	pane.clientDetails.setEnabled(false);
	pane.pne01.setEnabled(false);
	pane.TechnicalInfo.setEnabled(false);
	disableMgmtIPFields();
	disableServiceIPFields();
	chngeBkGrndColorProvData();
}*/
//logger.info(data.CommentHistory.length);


// File Attachments

if(data.TaskName!="Initiate_Swap_Tariff_Process")
{
control.fileattachments.value = "<iframe SCROLLING='yes' frameborder=0 width=1000 height=250 src='"+data.xDMSURL.toString()+"/archiv?xfunc=list&folderid="+data.ProvisioningData.siebelCircuitID+"&xupload=true&target=_blank'></iframe>";
}
setupButtoncolor('[id$=widget_control_btnReject]','red');
setupButtoncolor('[id$=widget_control_Cancel]','red');
    }
    fc['action_cancel'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('cancel');
    }

    fc['action_apply'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('apply');
    }
    
    fc['action_close'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('close');
    }

    fc['action_submit'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('submit');
    }
    
    fc['action_validate'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('validate');
    }
    
    fc['action_reset'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('reset');
    }
    
    fc['generator_info'] = function() {
        return "TIBCO Forms for ACE Runtime 11.0.0.045";
    }
};
tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA']['defineActions']();

tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA']['defineValidations'] = function() {
var fc = tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA'];
    
fc['validation_FetchDataURL_FetchDataURL__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchDataURL__length", true, true);
}
    
fc['validation_DemandDeskDeadline_taskName_DemandDeskDeadline_taskName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "DemandDeskDeadline_taskName__length", true, true);
}
    
    
    
fc['validation_ProvisioningData_clientName_ProvisioningData_clientName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_clientName__length", true, true);
}
    
fc['validation_TechnicalInfo_equipment_addedBy_TechnicalInfo_equipment_addedBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_addedBy__length", true, true);
}
    
    
    
fc['validation_TechnicalInfo_management_IP_Info_management_VLAN_TechnicalInfo_management_IP_Info_management_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_management_VLAN__length", true, true);
}
    
    
fc['validation_OldServiceRequest_bandwidthupdown_OldServiceRequest_bandwidthupdown__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OldServiceRequest_bandwidthupdown__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_clientVLAN_SwapTariffExecutionRequest_planItem_technicalInformation_clientVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_clientVLAN__length", true, true);
}
    
fc['validation_PortTypeArray_PortTypeArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "PortTypeArray__length", true, true);
}
    
    
    
    
fc['validation_textinput71_textinput71__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput71__length", true, true);
}
    
fc['validation_Building_NameArray_Building_NameArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Building_NameArray__length", true, true);
}
    
    
    
    
fc['validation_TechnicalInfo_management_IP_Info_port_Number_TechnicalInfo_management_IP_Info_port_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_port_Number__length", true, true);
}
    
fc['validation_ProvisioningData_contractor_ProvisioningData_contractor__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_contractor__length", true, true);
}
    
fc['validation_ProvisioningData_address_ProvisioningData_address__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 300) ? true : [context.control.label ? context.control.label : context.control.name, \'300\'] : context.value.length <= 300;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_address__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_GPSCoordinates_SwapTariffExecutionRequest_planItem_provisioningData_GPSCoordinates__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_GPSCoordinates__length", true, true);
}
    
fc['validation_textarea444_textarea444__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea444__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_account_SwapTariffExecutionRequest_planItem_provisioningData_account__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_account__length", true, true);
}
    
fc['validation_AccountTypeArray_AccountTypeArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "AccountTypeArray__length", true, true);
}
    
    
fc['validation_ProvisioningData_projectManager_ProvisioningData_projectManager__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_projectManager__length", true, true);
}
    
fc['validation_textarea31_textarea31__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea31__length", true, true);
}
    
    
fc['validation_ProvisioningData_buildingID_ProvisioningData_buildingID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_buildingID__length", true, true);
}
    
    
fc['validation_BuildingIDArray_BuildingIDArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "BuildingIDArray__length", true, true);
}
    
fc['validation_PortNumberArray_PortNumberArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "PortNumberArray__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest__multiplicity", true, false);
}
    
    
fc['validation_ProcessExecutionRequest_header_planID_ProcessExecutionRequest_header_planID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_header_planID__length", true, true);
}
    
fc['validation_EquipmentArray_EquipmentArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "EquipmentArray__length", true, true);
}
    
    
    
fc['validation_DemandDeskDeadline_processName_DemandDeskDeadline_processName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "DemandDeskDeadline_processName__length", true, true);
}
    
    
fc['validation_FetchSLA1_emailConfig_FetchSLA1_emailConfig__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchSLA1_emailConfig__length", true, true);
}
    
fc['validation_ProvisioningData_email_EmailValidation'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = ' \
  \nif(context.control.value.length<8) \
  \n{ \
  \n	false; \
  \n} \
  \nelse \
  \n{ \
  \nvar ch = RegExp(\"(.)+@(.)+\\\\.(.)+\").test(context.control.value); \
  \n \
  \nif(ch==true) { \
  \ntrue; \
  \n} \
  \nelse { \
  \nfalse; \
  \n} \
  \n}';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "EmailValidation", false, true);
}
fc['validation_ProvisioningData_email_ProvisioningData_email__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_email__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_port_SwapTariffExecutionRequest_planItem_technicalInformation_port__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_port__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_IR_Number_TechnicalInfo_deviceRequest_IR_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_IR_Number__length", true, true);
}
    
fc['validation_TechnicalInfo_clientVLAN_TechnicalInfo_clientVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_clientVLAN__length", true, true);
}
    
fc['validation_textinput65_textinput65__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput65__length", true, true);
}
    
fc['validation_textinput81_textinput81__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput81__length", true, true);
}
    
    
    
    
    
    
fc['validation_ProvisioningData_installDate_ProvisioningData_installDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_installDate__datetime", true, true);
}
    
fc['validation_textinput88_textinput88__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput88__length", true, true);
}
    
    
fc['validation_FetchSLA1_taskConfig_FetchSLA1_taskConfig__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchSLA1_taskConfig__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_carrierIP_SwapTariffExecutionRequest_planItem_technicalInformation_carrierIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_carrierIP__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_modifiedBy_SwapTariffExecutionRequest_planItem_technicalInformation_modifiedBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_modifiedBy__length", true, true);
}
    
fc['validation_ProvisioningData_accountManager_ProvisioningData_accountManager__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_accountManager__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_security_SwapTariffExecutionRequest_planItem_technicalInformation_security__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_security__length", true, true);
}
    
fc['validation_TechnicalInfo_equipment_TechnicalInfo_equipment__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment__multiplicity", true, false);
}
    
fc['validation_textarea449_textarea449__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea449__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_installDate_SwapTariffExecutionRequest_planItem_provisioningData_installDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_installDate__datetime", true, true);
}
    
fc['validation_ServiceStatusArray_ServiceStatusArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ServiceStatusArray__length", true, true);
}
    
    
fc['validation_SelectedECS_SelectedECS__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SelectedECS__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_evaluationPriority_SwapTariffExecutionRequest_planItem_udf_evaluationPriority__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf_evaluationPriority__length", true, true);
}
    
    
fc['validation_TechnicalInfo_equipment_IR_Number_TechnicalInfo_equipment_IR_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_IR_Number__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_recordStatus_SwapTariffExecutionRequest_planItem_provisioningData_recordStatus__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_recordStatus__length", true, true);
}
    
fc['validation_textinput79_textinput79__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput79__length", true, true);
}
    
    
fc['validation_textarea450_textarea450__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea450__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_serviceType_SwapTariffExecutionRequest_planItem_provisioningData_serviceType__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_serviceType__length", true, true);
}
    
fc['validation_textarea448_textarea448__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea448__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_name_SwapTariffExecutionRequest_planItem_udf_name__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf_name__length", true, true);
}
    
    
fc['validation_DemandDeskDeadline_taskConfig_DemandDeskDeadline_taskConfig__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "DemandDeskDeadline_taskConfig__length", true, true);
}
    
fc['validation_TechnicalInfo_management_IP_Info_comments_TechnicalInfo_management_IP_Info_comments__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_comments__length", true, true);
}
    
    
    
fc['validation_TechnicalInfo_equipment_status_TechnicalInfo_equipment_status__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_status__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_deviceName_TechnicalInfo_deviceRequest_deviceName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_deviceName__length", true, true);
}
    
fc['validation_BandwidthArray_BandwidthArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "BandwidthArray__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_regionView_SwapTariffExecutionRequest_planItem_provisioningData_regionView__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_regionView__length", true, true);
}
    
fc['validation_ContractorNames_ContractorNames__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ContractorNames__length", true, true);
}
    
fc['validation_pane36_pane36__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "pane36__multiplicity", true, false);
}
    
    
    
    
fc['validation_textarea453_textarea453__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea453__length", true, true);
}
    
    
fc['validation_FetchSLA1_taskName_FetchSLA1_taskName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchSLA1_taskName__length", true, true);
}
    
fc['validation_textarea30_textarea30__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea30__length", true, true);
}
    
    
fc['validation_TechnicalInfo_serviceIPDetails_clientVLAN_TechnicalInfo_serviceIPDetails_clientVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_serviceIPDetails_clientVLAN__length", true, true);
}
    
fc['validation_textinput66_textinput66__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput66__length", true, true);
}
    
    
fc['validation_ProvisioningData_clientID_ProvisioningData_clientID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_clientID__length", true, true);
}
    
    
    
fc['validation_textarea452_textarea452__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea452__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_deviceDescription_TechnicalInfo_deviceRequest_deviceDescription__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_deviceDescription__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_contractor_SwapTariffExecutionRequest_planItem_provisioningData_contractor__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_contractor__length", true, true);
}
    
    
    
    
    
fc['validation_TimerLimit_propertyValue_TimerLimit_propertyValue__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TimerLimit_propertyValue__length", true, true);
}
    
    
fc['validation_TechnicalInfo_equipment_siebel_Circuit_ID_TechnicalInfo_equipment_siebel_Circuit_ID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_siebel_Circuit_ID__length", true, true);
}
    
fc['validation_ProvisioningData_contractor_Engineer_ProvisioningData_contractor_Engineer__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_contractor_Engineer__length", true, true);
}
    
fc['validation_ProvisioningData_serviceEnd_ProvisioningData_serviceEnd__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_serviceEnd__datetime", true, true);
}
    
fc['validation_TechnologyArray_TechnologyArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnologyArray__length", true, true);
}
    
    
fc['validation_ProvisioningData_GPSCoordinates_ProvisioningData_GPSCoordinates__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_GPSCoordinates__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_VLAN_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_VLAN__length", true, true);
}
    
fc['validation_Account_Manager_Account_Manager__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Account_Manager__length", true, true);
}
    
    
fc['validation_pane31_pane31__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "pane31__multiplicity", true, false);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_projectManager_SwapTariffExecutionRequest_planItem_provisioningData_projectManager__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_projectManager__length", true, true);
}
    
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_VLAN_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_VLAN__length", true, true);
}
    
    
    
fc['validation_TechnicalInfo_CPEManagementIPDetails_CPEManagementIP_TechnicalInfo_CPEManagementIPDetails_CPEManagementIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_CPEManagementIPDetails_CPEManagementIP__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_IR_Number_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_IR_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_IR_Number__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_header_orderRefNum_SwapTariffExecutionRequest_header_orderRefNum__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_header_orderRefNum__length", true, true);
}
    
fc['validation_DemandDeskDeadline_emailConfig_DemandDeskDeadline_emailConfig__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "DemandDeskDeadline_emailConfig__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationDate_SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationDate__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationDate__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_serial_Number_TechnicalInfo_deviceRequest_serial_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_serial_Number__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_addedBy_TechnicalInfo_deviceRequest_addedBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_addedBy__length", true, true);
}
    
fc['validation_TechnicalInfo_port_TechnicalInfo_port__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_port__length", true, true);
}
    
fc['validation_textinput67_textinput67__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput67__length", true, true);
}
    
    
fc['validation_TechnicalInfo_management_IP_Info_carrierIP_TechnicalInfo_management_IP_Info_carrierIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_carrierIP__length", true, true);
}
    
    
fc['validation_TechnicalInfo_equipment_type_TechnicalInfo_equipment_type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_type__length", true, true);
}
    
    
    
fc['validation_TechnicalInfo_CPEManagementIPDetails_CPEManagementVLAN_TechnicalInfo_CPEManagementIPDetails_CPEManagementVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_CPEManagementIPDetails_CPEManagementVLAN__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_EMEI_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_EMEI__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_EMEI__length", true, true);
}
    
    
    
    
    
fc['validation_CommentHistory_stepName_CommentHistory_stepName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "CommentHistory_stepName__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_clientName_SwapTariffExecutionRequest_planItem_provisioningData_clientName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_clientName__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_engineer_SwapTariffExecutionRequest_planItem_provisioningData_engineer__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_engineer__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_addedBy_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_addedBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_addedBy__length", true, true);
}
    
fc['validation_textinput70_textinput70__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput70__length", true, true);
}
    
fc['validation_textarea27_textarea27__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 500) ? true : [context.control.label ? context.control.label : context.control.name, \'500\'] : context.value.length <= 500;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea27__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_modifiedDate_SwapTariffExecutionRequest_planItem_technicalInformation_modifiedDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_modifiedDate__datetime", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceName_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceName__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_siebelCircuitID_SwapTariffExecutionRequest_planItem_provisioningData_siebelCircuitID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_siebelCircuitID__length", true, true);
}
    
fc['validation_TechnicalInfo_management_IP_Info_carrier_VLAN_TechnicalInfo_management_IP_Info_carrier_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_carrier_VLAN__length", true, true);
}
    
    
fc['validation_NetworkMappingStatus_NetworkMappingStatus__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "NetworkMappingStatus__length", true, true);
}
    
fc['validation_PauseTimerRef_propertyName_PauseTimerRef_propertyName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "PauseTimerRef_propertyName__length", true, true);
}
    
    
    
    
fc['validation_pane34_pane34__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "pane34__multiplicity", true, false);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_portType_SwapTariffExecutionRequest_planItem_technicalInformation_portType__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_portType__length", true, true);
}
    
fc['validation_textinput43_textinput43__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput43__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_location_SwapTariffExecutionRequest_planItem_provisioningData_location__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_location__length", true, true);
}
    
fc['validation_ContractorAgencyNames_ContractorAgencyNames__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ContractorAgencyNames__length", true, true);
}
    
fc['validation_TechnicalInfo_portType_TechnicalInfo_portType__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_portType__length", true, true);
}
    
fc['validation_textinput49_textinput49__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput49__length", true, true);
}
    
fc['validation_textarea34_textarea34__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea34__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_planItemID_SwapTariffExecutionRequest_planItem_planItemID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_planItemID__length", true, true);
}
    
fc['validation_ProcessExecutionRequest_planitemID_ProcessExecutionRequest_planitemID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_planitemID__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_siebel_Circuit_ID_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_siebel_Circuit_ID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_siebel_Circuit_ID__length", true, true);
}
    
fc['validation_textarea446_textarea446__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea446__length", true, true);
}
    
    
fc['validation_textinput87_textinput87__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput87__length", true, true);
}
    
fc['validation_textinput68_textinput68__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput68__length", true, true);
}
    
fc['validation_OldServiceRequest_serviceType_OldServiceRequest_serviceType__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OldServiceRequest_serviceType__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_carrierVLAN_SwapTariffExecutionRequest_planItem_technicalInformation_carrierVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_carrierVLAN__length", true, true);
}
    
    
fc['validation_textinput77_textinput77__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput77__length", true, true);
}
    
fc['validation_textinput51_textinput51__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput51__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_floor_SwapTariffExecutionRequest_planItem_provisioningData_floor__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_floor__length", true, true);
}
    
    
fc['validation_ProcessExecutionRequest_siebelCircuitID_ProcessExecutionRequest_siebelCircuitID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_siebelCircuitID__length", true, true);
}
    
    
fc['validation_CommentHistory_addedby_CommentHistory_addedby__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "CommentHistory_addedby__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_technology_SwapTariffExecutionRequest_planItem_provisioningData_technology__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_technology__length", true, true);
}
    
    
    
fc['validation_LicenseUpgradeFlag_LicenseUpgradeFlag__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "LicenseUpgradeFlag__length", true, true);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_type_TechnicalInfo_deviceRequest_type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_type__length", true, true);
}
    
fc['validation_PauseTimerRef_propertyValue_PauseTimerRef_propertyValue__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "PauseTimerRef_propertyValue__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_MRR_SwapTariffExecutionRequest_planItem_technicalInformation_MRR__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_MRR__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_port_Number_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_port_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_port_Number__length", true, true);
}
    
fc['validation_textarea459_textarea459__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea459__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_IR_Number_SwapTariffExecutionRequest_planItem_technicalInformation_IR_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_IR_Number__length", true, true);
}
    
fc['validation_TechnicalInfo_carrierIP_TechnicalInfo_carrierIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_carrierIP__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_SFC_Tag_Number_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_SFC_Tag_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_SFC_Tag_Number__length", true, true);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_siebelCircuitID_TechnicalInfo_deviceRequest_siebelCircuitID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_siebelCircuitID__length", true, true);
}
    
fc['validation_TechnicalInfo_management_IP_Info_TechnicalInfo_management_IP_Info__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info__multiplicity", true, false);
}
    
    
    
    
    
fc['validation_Carrier_Eq_Type_Carrier_Eq_Type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Carrier_Eq_Type__length", true, true);
}
    
fc['validation_TechnicalInfo_carrierVLAN_TechnicalInfo_carrierVLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_carrierVLAN__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_notesComments_SwapTariffExecutionRequest_planItem_provisioningData_notesComments__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_notesComments__length", true, true);
}
    
    
fc['validation_FetchSLA1_SLA_Deadline_FetchSLA1_SLA_Deadline__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchSLA1_SLA_Deadline__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_type_SwapTariffExecutionRequest_planItem_udf_type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf_type__length", true, true);
}
    
fc['validation_textinput42_textinput42__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput42__length", true, true);
}
    
    
fc['validation_TechnicalInfo_modifiedBy_TechnicalInfo_modifiedBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_modifiedBy__length", true, true);
}
    
fc['validation_ServiceTypeArray_ServiceTypeArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ServiceTypeArray__length", true, true);
}
    
fc['validation_ProvisioningData_location_ProvisioningData_location__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_location__length", true, true);
}
    
fc['validation_ProvisioningData_recordStatus_ProvisioningData_recordStatus__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_recordStatus__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info__multiplicity", true, false);
}
    
fc['validation_TimerLimit_propertyName_TimerLimit_propertyName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TimerLimit_propertyName__length", true, true);
}
    
fc['validation_TechnicalInfo_MRR_TechnicalInfo_MRR__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_MRR__length", true, true);
}
    
fc['validation_textinput83_textinput83__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput83__length", true, true);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_VLAN_TechnicalInfo_deviceRequest_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_VLAN__length", true, true);
}
    
    
    
fc['validation_TechnicalInfo_SFCPOPPE_TechnicalInfo_SFCPOPPE__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_SFCPOPPE__length", true, true);
}
    
    
    
fc['validation_ProvisioningData_sector_ProvisioningData_sector__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_sector__length", true, true);
}
    
fc['validation_SystemParamRef_propertyName_SystemParamRef_propertyName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SystemParamRef_propertyName__length", true, true);
}
    
fc['validation_FetchSLA1_processName_FetchSLA1_processName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "FetchSLA1_processName__length", true, true);
}
    
fc['validation_TechnicalInfo_equipment_serial_Number_TechnicalInfo_equipment_serial_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_serial_Number__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_quantity_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_quantity__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_quantity__length", true, true);
}
    
    
    
    
fc['validation_pane32_pane32__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "pane32__multiplicity", true, false);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_address_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_address__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_address__length", true, true);
}
    
fc['validation_textarea445_textarea445__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea445__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_aggPoint_SwapTariffExecutionRequest_planItem_technicalInformation_aggPoint__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_aggPoint__length", true, true);
}
    
fc['validation_BuildingFloorArray_BuildingFloorArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "BuildingFloorArray__length", true, true);
}
    
fc['validation_ContractorGroupNames_ContractorGroupNames__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ContractorGroupNames__length", true, true);
}
    
fc['validation_SystemParamRef_propertyValue_SystemParamRef_propertyValue__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SystemParamRef_propertyValue__length", true, true);
}
    
    
    
    
fc['validation_TechnicalInfo_management_IP_Info_aggregation_Point_TechnicalInfo_management_IP_Info_aggregation_Point__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_aggregation_Point__length", true, true);
}
    
fc['validation_ProvisioningData_notesComments_ProvisioningData_notesComments__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_notesComments__length", true, true);
}
    
fc['validation_TechnicalInfo_clientIP_TechnicalInfo_clientIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_clientIP__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_flavour_SwapTariffExecutionRequest_planItem_udf_flavour__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf_flavour__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_TechnicalInfo_deviceRequest__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest__multiplicity", true, false);
}
    
fc['validation_ProcessExecutionRequest_header_correlationID_ProcessExecutionRequest_header_correlationID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_header_correlationID__length", true, true);
}
    
fc['validation_textinput85_textinput85__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput85__length", true, true);
}
    
    
    
fc['validation_ProcessExecutionRequest_header_businessTransactionID_ProcessExecutionRequest_header_businessTransactionID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_header_businessTransactionID__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_Carrier_IP_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_Carrier_IP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_management_Carrier_IP__length", true, true);
}
    
    
fc['validation_textarea457_textarea457__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea457__length", true, true);
}
    
    
    
    
    
fc['validation_SwapTariffExecutionRequest_header_businessTransactionID_SwapTariffExecutionRequest_header_businessTransactionID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_header_businessTransactionID__length", true, true);
}
    
fc['validation_textinput74_textinput74__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput74__length", true, true);
}
    
fc['validation_textinput86_textinput86__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput86__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_email_SwapTariffExecutionRequest_planItem_provisioningData_email__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_email__length", true, true);
}
    
fc['validation_ProcessExecutionRequest_udf_evaluationPriority_ProcessExecutionRequest_udf_evaluationPriority__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf_evaluationPriority__length", true, true);
}
    
fc['validation_xDMSURL_xDMSURL__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 300) ? true : [context.control.label ? context.control.label : context.control.name, \'300\'] : context.value.length <= 300;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "xDMSURL__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_sector_SwapTariffExecutionRequest_planItem_provisioningData_sector__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_sector__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_buildingID_SwapTariffExecutionRequest_planItem_provisioningData_buildingID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_buildingID__length", true, true);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_quantity_TechnicalInfo_deviceRequest_quantity__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_quantity__length", true, true);
}
    
fc['validation_textarea11_textarea11__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 500) ? true : [context.control.label ? context.control.label : context.control.name, \'500\'] : context.value.length <= 500;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea11__length", true, true);
}
    
fc['validation_ProvisioningData_lastNotificationBy_ProvisioningData_lastNotificationBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_lastNotificationBy__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_serial_Number_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_serial_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_serial_Number__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_header_planID_SwapTariffExecutionRequest_header_planID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_header_planID__length", true, true);
}
    
fc['validation_OldServiceRequest_technology_OldServiceRequest_technology__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OldServiceRequest_technology__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_header_correlationID_SwapTariffExecutionRequest_header_correlationID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_header_correlationID__length", true, true);
}
    
fc['validation_AggregationPointsArray_AggregationPointsArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "AggregationPointsArray__length", true, true);
}
    
fc['validation_ProvisioningData_lastNotificationDate_ProvisioningData_lastNotificationDate__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_lastNotificationDate__length", true, true);
}
    
    
fc['validation_TechnicalInfo_IR_Number_TechnicalInfo_IR_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_IR_Number__length", true, true);
}
    
    
fc['validation_CommentHistory_time_CommentHistory_time__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "CommentHistory_time__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_contactPerson_SwapTariffExecutionRequest_planItem_provisioningData_contactPerson__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_contactPerson__length", true, true);
}
    
fc['validation_textinput76_ValidateIP'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'var result=validateIP(context.control.value); \
  \nresult;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ValidateIP", false, true);
}
fc['validation_textinput76_textinput76__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput76__length", true, true);
}
    
    
    
fc['validation_RegionArray_RegionArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "RegionArray__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_value_SwapTariffExecutionRequest_planItem_udf_value__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf_value__length", true, true);
}
    
fc['validation_extinput74_extinput74__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "extinput74__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_siebelCircuitID_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_siebelCircuitID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_siebelCircuitID__length", true, true);
}
    
fc['validation_PortCapacity_PortCapacity__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "PortCapacity__length", true, true);
}
    
    
    
fc['validation_ProvisioningData_engineer_ProvisioningData_engineer__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_engineer__length", true, true);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_IMEI_TechnicalInfo_deviceRequest_IMEI__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_IMEI__length", true, true);
}
    
    
    
    
fc['validation_textinput64_textinput64__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput64__length", true, true);
}
    
    
fc['validation_textarea447_textarea447__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea447__length", true, true);
}
    
    
fc['validation_textarea455_textarea455__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea455__length", true, true);
}
    
fc['validation_OldServiceRequest_serviceStatus_OldServiceRequest_serviceStatus__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OldServiceRequest_serviceStatus__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationBy_SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationBy__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_lastNotificationBy__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_accountManager_SwapTariffExecutionRequest_planItem_provisioningData_accountManager__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_accountManager__length", true, true);
}
    
fc['validation_ProvisioningData_mobile_MobileNumberFormatValidation'] = function(formId, controlName, cloneUID, listIndex) {
    var valFunc = fc['validationFunction_ProvisioningData_mobile_MobileNumberFormatValidation'];
    return bpm.forms.Util.handleCustomValidation.call(this, formId, this, cloneUID, listIndex, valFunc, "MobileNumberFormatValidation", false, true);
}

fc['validationFunction_ProvisioningData_mobile_MobileNumberFormatValidation'] = function(context, form, data, pane, control, factory, pkg, f, p, logger, resource) {
    var MobNumber=context.control.value;
if(MobNumber==null || MobNumber=="")
{
	
	return false;
}
else
{
	
	if(MobNumber.length==10)
	{
		var isNonDigitChar;
		
		for(var i=0;i<MobNumber.length;i++)
		{
			
			isNonDigitChar = isNaN(parseInt(MobNumber.charAt(i)));
			logger.info(MobNumber.charAt(i)+parseInt(MobNumber.charAt(i))+isNonDigitChar);
			if(isNonDigitChar)
			{
				
				return false;
			}
		}
		
		return true;
	}
	
	else if(MobNumber.length==13)
	{
		var c = MobNumber.charAt(0);
 		if(c=="+")
		{
			var isNonDigitChar;
			for(var i=1;i<MobNumber.length;i++)
			{
				isNonDigitChar = isNaN(parseInt(MobNumber.charAt(i)));
				if(isNonDigitChar)
				{	
					return false;
				}
			}
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}	
}
fc['validation_ProvisioningData_mobile_ProvisioningData_mobile__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_mobile__length", true, true);
}
    
fc['validation_textinput73_textinput73__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput73__length", true, true);
}
    
fc['validation_TechnicalInfo_management_IP_Info_capacity_TechnicalInfo_management_IP_Info_capacity__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_capacity__length", true, true);
}
    
fc['validation_ProcessExecutionRequest_header_orderID_ProcessExecutionRequest_header_orderID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_header_orderID__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_address_TechnicalInfo_deviceRequest_address__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_address__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_address_SwapTariffExecutionRequest_planItem_provisioningData_address__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 300) ? true : [context.control.label ? context.control.label : context.control.name, \'300\'] : context.value.length <= 300;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_address__length", true, true);
}
    
fc['validation_textinput41_textinput41__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput41__length", true, true);
}
    
    
    
    
    
fc['validation_SFC_POPArray_SFC_POPArray__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SFC_POPArray__length", true, true);
}
    
fc['validation_pane33_pane33__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "pane33__multiplicity", true, false);
}
    
    
fc['validation_TechnicalInfo_deviceRequest_status_TechnicalInfo_deviceRequest_status__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_status__length", true, true);
}
    
    
fc['validation_ProcessExecutionRequest_udf_value_ProcessExecutionRequest_udf_value__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf_value__length", true, true);
}
    
fc['validation_ProvisioningData_contactPerson_ProvisioningData_contactPerson__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_contactPerson__length", true, true);
}
    
fc['validation_TechnicalInfo_equipment_address_TechnicalInfo_equipment_address__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_address__length", true, true);
}
    
fc['validation_TechnicalInfo_deviceRequest_SFC_Tag_Number_TechnicalInfo_deviceRequest_SFC_Tag_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_deviceRequest_SFC_Tag_Number__length", true, true);
}
    
    
fc['validation_ProcessExecutionRequest_udf_ProcessExecutionRequest_udf__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf__multiplicity", true, false);
}
    
fc['validation_SelectedContractor_SelectedContractor__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SelectedContractor__length", true, true);
}
    
fc['validation_TechnicalInfo_CPEManagementIPDetails_TechnicalInfo_CPEManagementIPDetails__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_CPEManagementIPDetails__multiplicity", true, false);
}
    
    
    
fc['validation_SelectedContractorGroup_SelectedContractorGroup__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SelectedContractorGroup__length", true, true);
}
    
    
    
    
fc['validation_TechnicalInfo_management_IP_Info_management_Carrier_IP_TechnicalInfo_management_IP_Info_management_Carrier_IP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_management_IP_Info_management_Carrier_IP__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_comments_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_comments__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_comments__length", true, true);
}
    
fc['validation_TechnicalInfo_equipment_EMEI_TechnicalInfo_equipment_EMEI__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_EMEI__length", true, true);
}
    
fc['validation_TechnicalInfo_serviceIPDetails_TechnicalInfo_serviceIPDetails__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_serviceIPDetails__multiplicity", true, false);
}
    
fc['validation_textarea454_ValidateIP'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'var result=validateIP(context.control.value); \
  \nresult;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ValidateIP", false, true);
}
fc['validation_textarea454_textarea454__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea454__length", true, true);
}
    
fc['validation_ProcessExecutionRequest_header_orderRefNum_ProcessExecutionRequest_header_orderRefNum__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_header_orderRefNum__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_status_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_status__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_status__length", true, true);
}
    
fc['validation_TechnicalInfo_modifiedDate_TechnicalInfo_modifiedDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_modifiedDate__datetime", true, true);
}
    
fc['validation_DemandDeskDeadline_SLA_Deadline_DemandDeskDeadline_SLA_Deadline__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "DemandDeskDeadline_SLA_Deadline__length", true, true);
}
    
fc['validation_ProvisioningData_contractorEngineer_PhNumber_ProvisioningData_contractorEngineer_PhNumber__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_contractorEngineer_PhNumber__length", true, true);
}
    
    
fc['validation_TechnicalInfo_serviceIPDetails_clientIP_TechnicalInfo_serviceIPDetails_clientIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_serviceIPDetails_clientIP__length", true, true);
}
    
fc['validation_datetime1_datetime1__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "datetime1__datetime", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_bandwidthupdown_SwapTariffExecutionRequest_planItem_provisioningData_bandwidthupdown__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_bandwidthupdown__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_serviceEnd_SwapTariffExecutionRequest_planItem_provisioningData_serviceEnd__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_serviceEnd__datetime", true, true);
}
    
    
fc['validation_ProvisioningData_serviceStart_ProvisioningData_serviceStart__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_serviceStart__datetime", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_aggregation_Point_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_aggregation_Point__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_aggregation_Point__length", true, true);
}
    
fc['validation_ProcessExecutionRequest_udf_flavour_ProcessExecutionRequest_udf_flavour__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf_flavour__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_buildingName_SwapTariffExecutionRequest_planItem_provisioningData_buildingName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_buildingName__length", true, true);
}
    
    
    
fc['validation_SwapTariffExecutionRequest_header_orderID_SwapTariffExecutionRequest_header_orderID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_header_orderID__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_mobile_SwapTariffExecutionRequest_planItem_provisioningData_mobile__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_mobile__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_clientIP_SwapTariffExecutionRequest_planItem_technicalInformation_clientIP__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_clientIP__length", true, true);
}
    
fc['validation_textinput48_textinput48__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput48__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_serviceStatus_SwapTariffExecutionRequest_planItem_provisioningData_serviceStatus__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_serviceStatus__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_clientID_SwapTariffExecutionRequest_planItem_provisioningData_clientID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_clientID__length", true, true);
}
    
fc['validation_textinput82_textinput82__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput82__length", true, true);
}
    
fc['validation_textinput46_textinput46__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput46__length", true, true);
}
    
fc['validation_TaskName_TaskName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TaskName__length", true, true);
}
    
fc['validation_CommentText_CommentText__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 500) ? true : [context.control.label ? context.control.label : context.control.name, \'500\'] : context.value.length <= 500;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "CommentText__length", true, true);
}
    
fc['validation_textarea33_textarea33__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea33__length", true, true);
}
    
    
    
fc['validation_SLAFLAGGlobal_SLAFLAGGlobal__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SLAFLAGGlobal__length", true, true);
}
    
    
    
fc['validation_CommentHistory_comments_CommentHistory_comments__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 500) ? true : [context.control.label ? context.control.label : context.control.name, \'500\'] : context.value.length <= 500;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "CommentHistory_comments__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_requestDate_SwapTariffExecutionRequest_planItem_provisioningData_requestDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_requestDate__datetime", true, true);
}
    
    
    
    
fc['validation_ProcessExecutionRequest_udf_name_ProcessExecutionRequest_udf_name__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf_name__length", true, true);
}
    
fc['validation_TechnicalInfo_aggPoint_TechnicalInfo_aggPoint__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_aggPoint__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_type_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment_type__length", true, true);
}
    
    
fc['validation_SwapTariffExecutionRequest_planItem_provisioningData_serviceStart_SwapTariffExecutionRequest_planItem_provisioningData_serviceStart__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_provisioningData_serviceStart__datetime", true, true);
}
    
fc['validation_ProvisioningData_siebelCircuitID_ProvisioningData_siebelCircuitID__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_siebelCircuitID__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_SFCPOPPE_SwapTariffExecutionRequest_planItem_technicalInformation_SFCPOPPE__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_SFCPOPPE__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_carrier_VLAN_SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_carrier_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_management_IP_Info_carrier_VLAN__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_equipment_SwapTariffExecutionRequest_planItem_technicalInformation_equipment__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_equipment__multiplicity", true, false);
}
    
fc['validation_textinput50_textinput50__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput50__length", true, true);
}
    
fc['validation_textinput69_textinput69__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput69__length", true, true);
}
    
fc['validation_textarea13_textarea13__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 500) ? true : [context.control.label ? context.control.label : context.control.name, \'500\'] : context.value.length <= 500;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textarea13__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceDescription_SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceDescription__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 100) ? true : [context.control.label ? context.control.label : context.control.name, \'100\'] : context.value.length <= 100;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_technicalInformation_deviceRequest_deviceDescription__length", true, true);
}
    
fc['validation_SwapTariffExecutionRequest_planItem_udf_SwapTariffExecutionRequest_planItem_udf__multiplicity'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof bpm.forms.Util.checkMultiplicity != \'undefined\' ? bpm.forms.Util.checkMultiplicity(context.value, 0, 2147483647) ?  true : [context.control ? (context.control.label ? context.control.label : context.control.name) : context.pane ? (context.pane.label ? context.pane.label : context.pane.name) : null, \'0\'] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "SwapTariffExecutionRequest_planItem_udf__multiplicity", true, false);
}
    
    
fc['validation_ProvisioningData_requestDate_ProvisioningData_requestDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProvisioningData_requestDate__datetime", true, true);
}
    
fc['validation_textinput75_textinput75__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput75__length", true, true);
}
    
fc['validation_textinput80_textinput80__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput80__length", true, true);
}
    
    
fc['validation_TechnicalInfo_equipment_VLAN_TechnicalInfo_equipment_VLAN__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_VLAN__length", true, true);
}
    
fc['validation_param_param__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "param__length", true, true);
}
    
    
fc['validation_TechnicalInfo_equipment_SFC_Tag_Number_TechnicalInfo_equipment_SFC_Tag_Number__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_equipment_SFC_Tag_Number__length", true, true);
}
    
    
fc['validation_textinput72_textinput72__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "textinput72__length", true, true);
}
    
fc['validation_TechnicalInfo_security_TechnicalInfo_security__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 200) ? true : [context.control.label ? context.control.label : context.control.name, \'200\'] : context.value.length <= 200;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_security__length", true, true);
}
    
    
    
    
fc['validation_ProcessExecutionRequest_processName_ProcessExecutionRequest_processName__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_processName__length", true, true);
}
    
    
fc['validation_ProcessExecutionRequest_udf_type_ProcessExecutionRequest_udf_type__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "ProcessExecutionRequest_udf_type__length", true, true);
}
    
    
fc['validation_TechnicalInfo_serviceIPDetails_SFCPOPPE_TechnicalInfo_serviceIPDetails_SFCPOPPE__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "TechnicalInfo_serviceIPDetails_SFCPOPPE__length", true, true);
}
    
    fc['validate_required'] = function(formId, controlName, cloneUID, listIndex) {
        return bpm.forms.Util.handleRequiredValidation.call(this, formId, controlName, cloneUID, listIndex);
    }
    fc['register_pkgs_and_fcts'] = function(formId) {
       var form = tibcoforms.formCache[formId];
       form.registerPackages(['com.sfc.fosImpl.dataModel.DataModelPackage', 'com.sfc.fosImpl.bizData.dataModel.DataModelPackage']);
       form.registerFactories(['com.sfc.fosImpl.dataModel.DataModelFactory', 'com.sfc.fosImpl.bizData.dataModel.DataModelFactory']);
    }
    fc['DataModel'] = function(formId) {
        if (this.form) return;
        this.form = tibcoforms.formCache[formId];
        Object.defineProperty(this, 'ProvisioningData', {
            get: function() {
                return this.form.dataMap['ProvisioningData'].value;
            },
            set: function(value) {
                this.form.dataMap['ProvisioningData'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'TechnicalInfo', {
            get: function() {
                return this.form.dataMap['TechnicalInfo'].value;
            },
            set: function(value) {
                this.form.dataMap['TechnicalInfo'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'FetchDataURL', {
            get: function() {
                return this.form.dataMap['FetchDataURL'].value;
            },
            set: function(value) {
                this.form.dataMap['FetchDataURL'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'SelectedECS', {
            get: function() {
                return this.form.dataMap['SelectedECS'].value;
            },
            set: function(value) {
                this.form.dataMap['SelectedECS'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'NetworkMappingStatus', {
            get: function() {
                return this.form.dataMap['NetworkMappingStatus'].value;
            },
            set: function(value) {
                this.form.dataMap['NetworkMappingStatus'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'LicenseUpgradeFlag', {
            get: function() {
                return this.form.dataMap['LicenseUpgradeFlag'].value;
            },
            set: function(value) {
                this.form.dataMap['LicenseUpgradeFlag'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'TaskName', {
            get: function() {
                return this.form.dataMap['TaskName'].value;
            },
            set: function(value) {
                this.form.dataMap['TaskName'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'CommentText', {
            get: function() {
                return this.form.dataMap['CommentText'].value;
            },
            set: function(value) {
                this.form.dataMap['CommentText'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'CommentHistory', {
            get: function() {
                return this.form.dataMap['CommentHistory'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'EquipmentArray', {
            get: function() {
                return this.form.dataMap['EquipmentArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'RegionArray', {
            get: function() {
                return this.form.dataMap['RegionArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'PortTypeArray', {
            get: function() {
                return this.form.dataMap['PortTypeArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'BandwidthArray', {
            get: function() {
                return this.form.dataMap['BandwidthArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'ServiceTypeArray', {
            get: function() {
                return this.form.dataMap['ServiceTypeArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'PortNumberArray', {
            get: function() {
                return this.form.dataMap['PortNumberArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'SFC_POPArray', {
            get: function() {
                return this.form.dataMap['SFC_POPArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'TechnologyArray', {
            get: function() {
                return this.form.dataMap['TechnologyArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'Account_Manager', {
            get: function() {
                return this.form.dataMap['Account_Manager'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'AggregationPointsArray', {
            get: function() {
                return this.form.dataMap['AggregationPointsArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'ServiceStatusArray', {
            get: function() {
                return this.form.dataMap['ServiceStatusArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'BuildingFloorArray', {
            get: function() {
                return this.form.dataMap['BuildingFloorArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'AccountTypeArray', {
            get: function() {
                return this.form.dataMap['AccountTypeArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'xDMSURL', {
            get: function() {
                return this.form.dataMap['xDMSURL'].value;
            },
            set: function(value) {
                this.form.dataMap['xDMSURL'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'DemandDeskDecision', {
            get: function() {
                return this.form.dataMap['DemandDeskDecision'].value;
            },
            set: function(value) {
                this.form.dataMap['DemandDeskDecision'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'SelectedContractor', {
            get: function() {
                return this.form.dataMap['SelectedContractor'].value;
            },
            set: function(value) {
                this.form.dataMap['SelectedContractor'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'SelectedContractorGroup', {
            get: function() {
                return this.form.dataMap['SelectedContractorGroup'].value;
            },
            set: function(value) {
                this.form.dataMap['SelectedContractorGroup'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'ContractorNames', {
            get: function() {
                return this.form.dataMap['ContractorNames'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'ContractorGroupNames', {
            get: function() {
                return this.form.dataMap['ContractorGroupNames'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'ContractorAgencyNames', {
            get: function() {
                return this.form.dataMap['ContractorAgencyNames'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'Building_NameArray', {
            get: function() {
                return this.form.dataMap['Building_NameArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'BuildingIDArray', {
            get: function() {
                return this.form.dataMap['BuildingIDArray'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'OldServiceRequest', {
            get: function() {
                return this.form.dataMap['OldServiceRequest'].value;
            },
            set: function(value) {
                this.form.dataMap['OldServiceRequest'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'Carrier_Eq_Type', {
            get: function() {
                return this.form.dataMap['Carrier_Eq_Type'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'PortCapacity', {
            get: function() {
                return this.form.dataMap['PortCapacity'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
    }
       
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
       
       
};
tibcoforms.formCode['_Sa2vYHCZEe2f3ugktJnfoA']['defineValidations']();
