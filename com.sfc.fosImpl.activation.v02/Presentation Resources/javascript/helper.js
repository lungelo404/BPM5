function fetchArray(control,searchString,data,logger) {

	control.fetchList.enabled=false; 
	control.Provisioning_Data_buildingID.value="";
	var search_term = searchString;	var search = search_term.toUpperCase();
	var arr    = data.Building_NameArray;	
	var arrVal = data.BuildingIDArray;
	var tmpArrLbl = new Array();	var tmpArrVal = new Array();
	var j=0;
	
	for(var i=0;i<arr.length;i++) {
		var currStr=  arr[i].toUpperCase();
			if(currStr.indexOf(search)!=-1){
				tmpArrLbl[j]=arr[i];
				tmpArrVal[j++]=arrVal[i];
				logger.info("In for Loop: "+i);
			}
		}
		var emArr = new Array();
	
		control.buildingName.setOptions(emArr,emArr);
		control.buildingName.setOptions(tmpArrVal,tmpArrLbl);
		if(tmpArrVal != null) {
			if(tmpArrVal.length==1) {
				control.Provisioning_Data_buildingName.value=tmpArrVal[0];
			}
		}
		if(tmpArrVal==null) {
			control.Provisioning_Data_buildingName.value="";
			control.Provisioning_Data_buildingID.value="";
			
		}
		control.fetchList.enabled=true; 
}
function setUICusConfirmation(control,data,pane,resource,factory,logger,CusConfirmFlag) {
	pane.pneTechInfoParent.visible=true;
	pane.MarginPaneTechnicalInfo.visible=true;
	control.lblTechInfo.visible=true;
	pane.pneMgmtIPs.visible=false;
	pane.pneDeviceReq.visible=false;
	pane.pneCPEMgmtIPDetails.visible=true;  pane.pneCPEMgmtIPDetails.enabled=false;		pane.pneCPEMgmtDetailsBtns.visible=false;
	pane.pneMgmtIPInfo.visible=true;		pane.pneMgmtIPInfo.enabled=false;			pane.pneAddDeleteManagementIP.visible=false;
	pane.pneServiceIPDetails.visible=true;  pane.pneServiceIPDetails.enabled=false;		pane.pneServiceIPDetailsBtns.visible=false;
	pane.pneTESOSGDetails.visible=false;
	chngeBkGrndColorProvData();
	disableCusData(pane,control);
	pane.pne01.enabled=false;
	pane.clientDetails01.enabled=false;
	pane.Pane03.enabled=false;
	pane.pneInstallationAddress.enabled=false;
	pane.serviceRequest.enabled=false;
	chngeBkGrndColorProvData();
	pane.contactDetails01.enabled=false;
	pane.TechnicalInfo_deviceRequest.enabled=false;
}
function enabledGPS(control,data,pane,factory,logger) {
	pane.pneInstallationAddress.enabled=true;
	pane.installationAddress01.enabled=true;
	pane.installationAddress02.enabled=false;
	control.Provisioning_Data_regionView.enabled=false;
	control.Provisioning_Data_floor.enabled=false;
	control.Provisioning_Data_address.enabled=false;
	enabledColor('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
}
function setUIServiceIP(control,data,pane,resource,factory,logger,ServiceIPFlag) {
	logger.info("START  SERVICE IP FUNCTION");
	pane.pneTechInfoParent.visible=true; pane.MarginPaneTechnicalInfo.visible=true;	control.lblTechInfo.visible=true;
	TESOSGMetaData(pane,control,data,false); 	
	pane.pneTESOSGDetails.visible=true; pane.pneTESOSGDetails.enabled=false;
	
	if(data.TaskName=="Validate_Provisioning")	{	pane.pneCPEMgmtIPDetails.visible=false; }
	if(data.TaskName=="Provision_IPs")	{	pane.pneCPEMgmtIPDetails.visible=true; pane.pneCPEMgmtIPDetails.enabled=false; pane.pneCPEMgmtDetailsBtns.visible=false; }
	
	pane.pneMgmtIPInfo.visible=true; 

	pane.pneAddDeleteManagementIP.visible=true;
	pane.pneTechnicalInfo_management_IP_Info.visible=true; pane.pneTechnicalInfo_management_IP_Info.enabled=true;
	pane.pneServiceIPDetails.visible=true;
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_security]');
	pane.pne01.enabled=false;
	pane.clientDetails01.enabled=false;
	pane.Pane03.enabled=false;
	pane.pneInstallationAddress.enabled=false;
	pane.serviceRequest.enabled=false;
	pane.contactDetails01.enabled=false;
	chngeBkGrndColorProvData();

	pane.pneInstallationAddress.enabled=true;
	pane.installationAddress01.enabled=true;
	pane.pneInstallationAddress.enabled=true;
	control.Provisioning_Data_GPSCoordinates.enabled=true;	enabledColor('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
	control.Provisioning_Data_sector.enabled=true;			enabledColor('[id$=widget_control_Provisioning_Data_sector]');
	control.Provisioning_Data_buildingName.enabled=true;	enabledColor('[id$=widget_control_Provisioning_Data_buildingName]');	
	control.Provisioning_Data_regionView.enabled=false;
	control.Provisioning_Data_floor.enabled=false;
	control.Provisioning_Data_address.enabled=false;
	control.Provisioning_Data_location.enabled=false;
	control.Provisioning_Data_sector.enabled=true;
	
	control.txtSearchCriteria.visible=true;
	control.fetchList.visible=true;
	control.resetList.visible=true;

	
	logger.info("END  SERVICE IP FUNCTION");
}
function setUIProvMgmtIP(control,data,pane,resource,factory,logger,TrnInfoFlag) {
	
	logger.info("START  MGMT IP FUNCTION");
	pane.pneTechInfoParent.visible=true;
	pane.MarginPaneTechnicalInfo.visible=true;
	control.lblTechInfo.visible=true;
	pane.pneCPEMgmtIPDetails.visible=true; pane.pneCPEMgmtIPDetails.enabled=true;
	pane.pneTESOSGDetails.visible=false;
	
	/*Device Details Pane*/
	pane.pneDeviceReq.visible=false;
	if(pane.TechnicalInfo_deviceRequest.value.length > 0) {
		pane.TechnicalInfo_deviceRequest.visible=true;
	}
	else {
		pane.TechnicalInfo_deviceRequest.visible=false;
	}
	
	pane.serviceRequest.enabled=true;
	control.Provisioning_Data_bandwidthupdown.enabled=false;
	control.Provisioning_Data_serviceStatus.enabled=false;
	control.Provisioning_Data_technology.enabled=true;
	control.Provisioning_Data_serviceType.enabled=false;
	chngeBkGrndColorProvDataTESFAE();
		
	pane.pneInstallationAddress.enabled=true;
	control.Provisioning_Data_regionView.enabled=false; chngeBkGrndColor('[id$=widget_control_Provisioning_Data_regionView]');
	control.Provisioning_Data_floor.enabled=false;		chngeBkGrndColor('[id$=widget_control_Provisioning_Data_floor]');
	control.Provisioning_Data_address.enabled=false;	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_address]');
	control.Provisioning_Data_buildingID.enabled=false;
	pane.installationAddress02.enabled=true;
	control.Provisioning_Data_sector.enabled=true;	enabledColor('[id$=widget_control_Provisioning_Data_sector]');
	enabledColor('[id$=widget_control_Provisioning_Data_buildingName]');
	enabledColor('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
	enabledColor('[id$=widget_control_Provisioning_Data_location]');	
	pane.TechnicalInfo_deviceRequest.enabled=false;
	
	/* READ ONLY */
	pane.clientDetails01.enabled=false;
	pane.Pane03.enabled=false;
	pane.pne01.enabled=false;
	pane.contactDetails01.enabled=false;
	
	/*NOT REQUIRED ANYMORE. HENCE HIDDEN*/
	pane.pneMgmtIPs.visible=false;
	pane.pneAddDeleteButton.visible=false;
	pane.TechnicalInfo_equipment.visible=false;
	pane.TechnicalInfo_equipment.enabled=false;
	
	if(TrnInfoFlag==true) {
		pane.pneMgmtIPInfo.visible=true;
	}
	control.txtSearchCriteria.visible=true;
	control.fetchList.visible=true;
	control.resetList.visible=true;
}
	
function validateIP(txt) {
	 if(txt.length<7 || txt.length>20) {
		 return false;
	 }
	 else {
	 var rgex1 = '((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))(?![\\d])';
     var rgex2 = '((?:\\/[\\w\\.\\-]+)+)';	
     var r1 = new RegExp(rgex1); var r2 = new RegExp(rgex1+rgex2);
     return( r1.test(txt) || r2.test(txt));
	 }
     
}
function disableField(fieldID) {
	fieldID.enabled=false;
}
function disableCusData(pane,control) {
	pane.pne01.enabled=false;
	pane.pneClientDetails02.enabled=false;
	pane.Pane03.enabled=false;
	pane.pneInstallationAddress.enabled=false;
	pane.serviceRequest.enabled=false;
	pane.contactDetails01.enabled=false;
	pane.pneSrvcDt.enabled=false;
	control.serviceDates.enabled=false;
	pane.pneMrginSerDates.enabled=false;
}
function TESOSGMetaData(pane,control,data,flag) {
	pane.pneTechInfoParent.visible=true;
	pane.MarginPaneTechnicalInfo.visible=true;
	control.lblTechInfo.visible=true;
	
	pane.pneServiceIPs.enabled=false;
	pane.pneMgmtIPs.enabled=false;
	pane.pneTechnicalInfo_management_IP_Info.enabled=false;
	pane.pneAddDeleteManagementIP.visible=false;
	

	disableServiceIPFields();
	disableMgmtIPFields();
	
	pane.pneTechnicalInfo_management_IP_Info.visible=false;
	pane.pneAddDeleteManagementIP.visible=false;
	pane.pneMgmtIPs.visible=false;
	pane.pneServiceIPs.visible=false;


	pane.pneSrvcDt.visible=false;
	control.serviceDates.visible=false;
	pane.pneMrginSerDates.visible=false;
	pane.pneDeviceReq.visible=flag;
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_MRR]');
	NummberOnlyUpdated('[id$=widget_control_TechnicalInfo_IR_Number]');
	
	control.TechnicalInfo_IR_Number.required=flag;	control.TechnicalInfo_IR_Number.enabled=flag;
	control.TechnicalInfo_security.required=!flag;	control.TechnicalInfo_security.enabled=!flag; control.TechnicalInfo_security.visible=!flag;
	pane.pneBtnActions.visible=flag;
	pane.toolbar.visible=!flag;
	pane.TechnicalInfo_deviceRequest.enabled=flag;
}
function CheckProcessDublication(context,this1,factory, pane, control, logger, url, funcName) {
}

function NummberOnlyUpdated(id) 
{
	/*$(id).keydown(function(e) {
	if((e.which === 50 && e.shiftKey)||(e.which === 51 && e.shiftKey)||(e.which === 52 && e.shiftKey)||(e.which === 53 && e.shiftKey)||(e.which === 54 && e.shiftKey)||(e.which === 55 && e.shiftKey)) {
		e.preventDefault();
	}
	else if((e.which === 49 && e.shiftKey)||(e.which === 48 && e.shiftKey)||(e.which === 56 && e.shiftKey)||(e.which === 57 && e.shiftKey)||(e.which === 188 && e.shiftKey)||(e.which ===190 && e.shiftKey)) {
		e.preventDefault();
	}
	if (e.ctrlKey || e.altKey) {
		 	e.preventDefault();
	 }
	else { 
		var n = e.keyCode; 
			if (!((n == 8)||(n == 188) ||(n == 190)|| (n == 9)|| (n == 46)|| (n >= 35 && n <= 40)|| (n >= 48 && n <= 57)|| (n >= 96 && n <= 105))) { 
				e.preventDefault();  
			}
		}
	});*/	
}
function setupButtoncolor(ctrlID,btnColor) {
	$(ctrlID).css('background-color', btnColor);
	//$(ctrlID).css('background-clip', 'padding-box');
	$(ctrlID).css('color', 'white');
	
}
function askConfirmation(ctrlID){
	var ask=window.confirm("Are you sure you want to cancel?");
	return ask;
}

function setupFontColor(ctrlID) {
	$(ctrlID).css('color', 'white');
}
function setupFontColorDropdown(ctrlID) {
	$(ctrlID).css('color', 'black');
}

function chngeBkGrndColor(ctrlID) {
	$(ctrlID).css("background-color", "rgb(235, 235, 228");
}
function enabledColor(ctrlID) {
	$(ctrlID).css("background-color", "rgb(255, 255, 255");
}
function disableMgmtIPFields() {
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_aggPoint]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_port]');
}
function disableServiceIPFields() {
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_SFCPOPPE]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_portType]');	
}

function chngeBkGrndColorProvData() {
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_projectManager]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_account]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_clientID]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_accountManager]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_clientName]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contractor]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_regionView]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_floor]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_sector]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_buildingName]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_buildingID]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_serviceStatus]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contactPerson]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_mobile]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_email]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_location]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_bandwidthupdown]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_technology]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_serviceType]');
	chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contractor_Engineer]');
	
}
function chngeBkGrndColorProvDataTESFAE() {
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_siebelCircuitID]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_projectManager]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_account]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_clientID]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_accountManager]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_clientName]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contractor]');

chngeBkGrndColor('[id$=widget_control_Provisioning_Data_regionView]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_floor]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_GPSCoordinates]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_sector]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_buildingName]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_buildingID]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_serviceStatus]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contactPerson]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_mobile]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_email]');

chngeBkGrndColor('[id$=widget_control_Provisioning_Data_location]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_bandwidthupdown]');
//chngeBkGrndColor('[id$=widget_control_Provisioning_Data_technology]');

chngeBkGrndColor('[id$=widget_control_Provisioning_Data_address]');
chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_serviceType]');
chngeBkGrndColor('[id$=widget_control_Provisioning_Data_contractor_Engineer]');
}

function chngeBkGrndColorProvDataBlack() {
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_siebelCircuitID]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_projectManager]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_account]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_clientID]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_accountManager]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_clientName]');
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_contractor]');

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
setupFontColorDropdown('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	
setupFontColorDropdown('[id$=widget_control_Provisioning_Data_serviceType]');
}