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
function disableCusData(pane,control) {
	pane.pne01.setEnabled(false);
	pane.pneClientDetails02.setEnabled(false);
	pane.Pane03.setEnabled(false);
	pane.pane8.setEnabled(false);
	pane.serviceRequest.setEnabled(false);
	pane.contactDetails01.setEnabled(false);
	pane.pneSrvcDt.setEnabled(false);
	control.serviceDates.setEnabled(false);
	pane.pneMrginSerDates.setEnabled(false);
}
function TESOSGMetaData(pane,control,data,flag) {
	pane.pneTechInfoParent.setVisible(true);
	pane.MarginPaneTechnicalInfo.setVisible(true);
	control.lblTechInfo.setVisible(true);
	
	pane.pneServiceIPs.setEnabled(false);
	pane.pneMgmtIPs.setEnabled(false);
	pane.pneTechnicalInfo_management_IP_Info.setEnabled(false);
	pane.pneAddDeleteManagementIP.setVisible(false);
	
	pane.pneAddDeleteButton.setVisible(true);
	pane.TechnicalInfo_equipment.setVisible(true);
	pane.TechnicalInfo_equipment.setEnabled(true);
	disableServiceIPFields();
	disableMgmtIPFields();
	
	pane.pneTechnicalInfo_management_IP_Info.setVisible(false);
	pane.pneAddDeleteManagementIP.setVisible(false);
	pane.pneMgmtIPs.setVisible(false);
	pane.pneServiceIPs.setVisible(false);
	pane.TechnicalInfo_equipment.setVisible(false);
	pane.pneAddDeleteButton.setVisible(false);

	pane.pneSrvcDt.setVisible(false);
	control.serviceDates.setVisible(false);
	pane.pneMrginSerDates.setVisible(false);
	pane.pneDeviceReq.setVisible(false);
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_MRR]');
	NummberOnlyUpdated('[id$=widget_control_TechnicalInfo_IR_Number]');
	
	control.TechnicalInfo_IR_Number.setRequired(flag);	control.TechnicalInfo_IR_Number.setEnabled(flag);
	control.TechnicalInfo_security.setRequired(flag);	control.TechnicalInfo_security.setEnabled(flag);
	pane.pneBtnActions.setVisible(flag);
	pane.toolbar.setVisible(!flag);
	pane.TechnicalInfo_deviceRequest.setEnabled(false);
}
function CheckProcessDublication(context,this1,factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        logger.info("call:"+tmpURL);
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        //var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info("xmlstatus" + xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
              
                logger.info(xm); 
                if(xm=="Y") {
        			alert("Please Note: Activation process is already triggered for the given Siebel Circuit ID");
        		}
        		else {
        			control.submit.setEnabled(true);
        			this1.getForm().invokeAction("submit",this1,context);
        		}
                return xm;             
               
                
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function NummberOnlyUpdated(id) 
{
	$(id).keydown(function(e) {
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
	});	
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
function enableColor(ctrlID) {
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
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_projectManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_account]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_accountManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_regionView]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_floor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_GPSCoordinates]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_sector]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceStatus]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contactPerson]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_mobile]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_email]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_location]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_bandwidthupdown]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_technology]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceType]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor_Engineer]');
	
}
function chngeBkGrndColorTechnicalInfo(){
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedDate]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_MRR]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_SFCPOPPE]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IMEI]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_SFC_Tag_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_addedBy]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceDescription]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceName]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_quantity]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IMEI]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_SFC_Tag_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_addedBy]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceDescription]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceName]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_serial_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_status]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_type]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_aggregation_Point]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_capacity]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_carrier_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_comments]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_management_Carrier_IP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_management_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_port_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_port]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_portType]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_security]');
}

function chngeBkGrndColorECSValidation() {
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_projectManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_account]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_accountManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_regionView]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_floor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_GPSCoordinates]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_sector]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingID]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceStatus]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contactPerson]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_mobile]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_email]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_location]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_bandwidthupdown]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_technology]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceType]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor_Engineer]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_MRR]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_SFCPOPPE]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IMEI]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_SFC_Tag_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_addedBy]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceDescription]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceName]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_quantity]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IMEI]');
}
function chngeBkGrndColorNWMappingFinal() {
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_projectManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_account]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_accountManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_regionView]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_floor]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_GPSCoordinates]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_sector]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingID]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceStatus]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contactPerson]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_mobile]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_email]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_location]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_bandwidthupdown]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_technology]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceType]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor_Engineer]');
	
}
function chngeBkGrndColorNWMappingInitial() {
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_siebelCircuitID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_projectManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_account]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientID]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_accountManager]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientName]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_regionView]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_floor]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_GPSCoordinates]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_sector]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingName]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingID]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceStatus]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contactPerson]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_mobile]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_email]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_location]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_bandwidthupdown]');
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_technology]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_address]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	//chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceType]');
	chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor_Engineer]');
	
}

function chngeBkGrndColorTechnicalInfoEqChnge(){
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedDate]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_IR_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_MRR]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_SFCPOPPE]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_carrierVLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientIP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_clientVLAN]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IMEI]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_IR_Number]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_SFC_Tag_Number]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_VLAN]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_addedBy]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_address]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceDescription]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_deviceName]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_quantity]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_serial_Number]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_siebelCircuitID]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_status]');
	//chngeBkGrndColor('[id$=widget_control_TechnicalInfo_deviceRequest_type]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_aggregation_Point]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_capacity]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_carrier_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_comments]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_management_Carrier_IP]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_management_VLAN]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_management_IP_Info_port_Number]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_port]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_portType]');
	chngeBkGrndColor('[id$=widget_control_TechnicalInfo_security]');
}
function chngeBkGrndColorProvDataTESFAE() {
chngeBkGrndColor('[id$=widget_control_ProvisioningData_siebelCircuitID]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_projectManager]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_account]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientID]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_accountManager]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_clientName]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor]');

chngeBkGrndColor('[id$=widget_control_ProvisioningData_regionView]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_floor]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_GPSCoordinates]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_sector]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingName]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_buildingID]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceStatus]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_contactPerson]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_mobile]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_email]');

chngeBkGrndColor('[id$=widget_control_ProvisioningData_location]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_bandwidthupdown]');
//chngeBkGrndColor('[id$=widget_control_ProvisioningData_technology]');

chngeBkGrndColor('[id$=widget_control_ProvisioningData_address]');
chngeBkGrndColor('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	
chngeBkGrndColor('[id$=widget_control_ProvisioningData_serviceType]');
chngeBkGrndColor('[id$=widget_control_ProvisioningData_contractor_Engineer]');
}

function chngeBkGrndColorProvDataBlack() {
setupFontColorDropdown('[id$=widget_control_ProvisioningData_siebelCircuitID]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_projectManager]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_account]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_clientID]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_accountManager]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_clientName]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_contractor]');

setupFontColorDropdown('[id$=widget_control_ProvisioningData_regionView]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_floor]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_GPSCoordinates]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_sector]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_buildingName]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_buildingID]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_serviceStatus]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_contactPerson]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_mobile]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_email]');
setupFontColorDropdown('[id$=widget_control_ProvisioningData_address]');
setupFontColorDropdown('[id$=widget_control_TechnicalInfo_modifiedBy]');	
	
setupFontColorDropdown('[id$=widget_control_ProvisioningData_serviceType]');
}