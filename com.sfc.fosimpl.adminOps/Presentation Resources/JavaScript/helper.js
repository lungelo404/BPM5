function setupFontColor(ctrlID) {
	$(ctrlID).css('color', 'white');
}

function dwnldExcel(pane,control,logger,data,factory,f) {

	
	pane.pane3.setVisible(true);
	control.resetCriteria.setVisible(true);
	var url="exportCustomerInformationToCSV?SiebelCircuitID="+control.siebelIDOptionList.getValue()+"&BuildingName="+control.buildingNameOptionList.getValue()+"&ServiceType="+control.serviceTypeOptionList.getValue()+"&Technology="+control.technologyOptionList.getValue()+"&ClientName="+control.customerNameOptionList.getValue()+"&ServiceStatus="+control.serviceStatusOptionlist.getValue()+"&ProjectManager="+control.projectManagerOptionlist.getValue();
	//control.ExprtDataHyprLnkDsplyNme.setValue("Export Data");
	//control.ExprtDataHyprLnkAddress.setValue(data.getFetchDataURL()+url);
	logger.info("export url"+data.getFetchDataURL()+url);
	//window.open(data.getFetchDataURL()+url,"_blank",'top=0,width=100',"replace=false");
	window.open(data.getFetchDataURL()+url);
	
}
function chngeBkGrndColor(ctrlID) {
	$(ctrlID).css("background-color", "rgb(235, 235, 228");
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
chngeBkGrndColor('[id$=widget_control_CustomerInformation_siebelCircuitID]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_projectManager]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_account]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_recordStatus]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_clientID]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_accountManager]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_clientName]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_contractor]');

chngeBkGrndColor('[id$=widget_control_CustomerInformation_regionView]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_contractor_Engineer]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_floor]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_location]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_engineer]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_GPSCoordinates]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_sector]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_serviceType]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_technology]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_bandwidthupdown]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_lastNotificationBy]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_lastNotificationDate]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_buildingName]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_buildingID]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_serviceStatus]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_contactPerson]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_mobile]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_email]');
chngeBkGrndColor('[id$=widget_control_CustomerInformation_address]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_recordStatus]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_siebelCircuitID]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_clientIP]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_carrierIP]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_clientVLAN]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_carrierVLAN]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_SFCPOPPE]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_aggPoint]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_portType]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_port]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_modifiedBy]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_modifiedDate]');
chngeBkGrndColor('[id$=widget_control_processType]');
chngeBkGrndColor('[id$=widget_control_currentTask]');
chngeBkGrndColor('[id$=widget_control_projectManager]');
chngeBkGrndColor('[id$=widget_control_accountManager]');
chngeBkGrndColor('[id$=widget_control_customerName]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_MRR]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_IR_Number]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_clientName]');
chngeBkGrndColor('[id$=widget_control_TechnicalInformation_security]');

chngeBkGrndColor('[id$=widget_control_clientName]');
chngeBkGrndColor('[id$=widget_control_MRR]');
chngeBkGrndColor('[id$=widget_control_IR_Number]');
chngeBkGrndColor('[id$=widget_control_customerName]');
chngeBkGrndColor('[id$=TechnicalInformation_security]');




}
