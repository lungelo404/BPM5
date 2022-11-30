function CheckProcessDublication(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        logger.info("call:"+tmpURL);
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        //var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open('GET', tmpURL, false);
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
              
                logger.info("Response"+xm);
                if(xm=="Y") {
				alert("Please Note: Deactivation process is already triggered for the given Siebel Circuit ID");
					control.submit.setEnabled(false);
				}
				else {
					control.submit.setEnabled(true);
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




function GetUniqueElements(factory, pane, control, logger, a) {
    logger.info("Inside Unique Function")
    logger.info(Array.from(new Set(a)));
}

function getEleValue(xmlDoc, tgNm, indx, logger) {
    var result = "";
    var rSet = xmlDoc.getElementsByTagName(tgNm);
    if (rSet == null) {
        return result;
    } else {
        if (rSet[indx] != null) {
            if (rSet[indx].childNodes != null) {
                return (rSet[indx].childNodes[0].nodeValue);
            } else {
                return result;
            }
        } else {
            return result;
        }
    }
}

function ExportDataToCSV(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info("xmlstatus" + xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                if (window.XMLHttpRequest) {
                    logger.info("CSV requested");
                }
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function ExportSiebelData(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        //var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info("xmlstatus" + xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
                xmlDoc.async = false;
                         
                var recordSet = xmlDoc.getElementsByTagName("ns0:Customer_InformationElement");              
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                pane.ExportCustomerInformationArray.getValue().clear();
                if (lngth == 0) {
                    alert("No records Found");
                    control.exportDataLink.setVisible(false);
                } else {
                    for (var i = 0; i < lngth; i++) {
                        var record = factory.com_sfc_fosImpl_bizData_dataModel.createCustomer_Information();
                        record.setSiebelCircuitID(getEleValue(xmlDoc, "siebelCircuitID", i, logger));
                        record.setProjectManager(getEleValue(xmlDoc, "projectManager", i, logger));
                        record.setClientName(getEleValue(xmlDoc, "clientName", i, logger));
                        record.setAccountManager(getEleValue(xmlDoc, "accountManager", i, logger));
                        record.setAccount(getEleValue(xmlDoc, "account", i, logger));
                        record.setContractor(getEleValue(xmlDoc, "contractor", i, logger));
                        record.setLocation(getEleValue(xmlDoc, "location", i, logger));
                        record.setFloor(getEleValue(xmlDoc, "floor", i, logger));
                        record.setClientID(getEleValue(xmlDoc, "clientID", i, logger));
                        record.setServiceType(getEleValue(xmlDoc, "serviceType", i, logger));
                        record.setGPSCoordinates(getEleValue(xmlDoc, "GPSCoordinates", i, logger));
                        record.setBandwidthupdown(getEleValue(xmlDoc, "bandwidthupdown", i, logger));
                        record.setTechnology(getEleValue(xmlDoc, "technology", i, logger));
                        record.setServiceStatus(getEleValue(xmlDoc, "serviceStatus", i, logger));
                        record.setBuildingID(getEleValue(xmlDoc, "buildingID", i, logger));
                        record.setContactPerson(getEleValue(xmlDoc, "contactPerson", i, logger));
                        record.setMobile(getEleValue(xmlDoc, "mobile", i, logger));
                        record.setEmail(getEleValue(xmlDoc, "email", i, logger));
                        record.setServiceStart(getEleValue(xmlDoc, "serviceStart", i, logger));
                        record.setServiceEnd(getEleValue(xmlDoc, "serviceEnd", i, logger));
                        record.setRequestDate(getEleValue(xmlDoc, "requestDate", i, logger));
                        record.setInstallDate(getEleValue(xmlDoc, "installDate", i, logger));
                        record.setRecordStatus(getEleValue(xmlDoc, "recordStatus", i, logger));
                        record.setEngineer(getEleValue(xmlDoc, "engineer", i, logger));
                        record.setAddress(getEleValue(xmlDoc, "email", i, logger));
                        record.setLastNotificationBy(getEleValue(xmlDoc, "lastNotificationBy", i, logger));
                        record.setLastNotificationDate(getEleValue(xmlDoc, "lastNotificationDate", i, logger));
                        pane.ExportCustomerInformationArray.getValue().add(record);
                    }
                }
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function ldTechnicalInfo(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info(xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
                
                xmlDoc.async = false;
                var recordSet = xmlDoc.getElementsByTagName("model:Technical_InformationElement");
                var lngth = recordSet.length;
                logger.info(xm);
                logger.info("Lengh of the incoming array for Records: " + lngth);
                 if (lngth == 0) {
                   // alert("No Records Found. Enter Valid Siebel Circuit ID");
                } else 
                    
                {
                   pane.TechnicalInfo.getValue().setCarrierVLAN(getEleValue(xmlDoc, "carrierVLAN", 0, logger));
                   pane.TechnicalInfo.getValue().setCarrierIP(getEleValue(xmlDoc, "carrierIP", 0, logger));
                   pane.TechnicalInfo.getValue().setAggPoint(getEleValue(xmlDoc, "aggPoint", 0, logger));
                   pane.TechnicalInfo.getValue().setPort(getEleValue(xmlDoc, "port", 0, logger));
                   pane.TechnicalInfo.getValue().setClientVLAN(getEleValue(xmlDoc, "clientVLAN", 0, logger));
                   pane.TechnicalInfo.getValue().setClientIP(getEleValue(xmlDoc, "clientIP", 0, logger));
                   pane.TechnicalInfo.getValue().setSFCPOPPE(getEleValue(xmlDoc, "SFCPOPPE", 0, logger));
                   pane.TechnicalInfo.getValue().setPortType(getEleValue(xmlDoc, "portType", 0, logger));
                   pane.TechnicalInfo.getValue().setModifiedBy(getEleValue(xmlDoc, "modifiedBy", 0, logger));
                   pane.TechnicalInfo.getValue().setModifiedDate(getEleValue(xmlDoc, "modifiedDate", 0, logger));
                   
                 
                   pane.TechnicalInfo.getValue().setMRR(getEleValue(xmlDoc, "MRR", 0, logger));
                   pane.TechnicalInfo.getValue().setIR_Number(getEleValue(xmlDoc, "IR_Number", 0, logger));
                   pane.TechnicalInfo.getValue().setSecurity(getEleValue(xmlDoc, "security", 0, logger));
                 //  pane.TechnicalInfo.getValue().setDeviceRequest(getEleValue(xmlDoc, "deviceRequest", 0, logger));
                  
                   
                   logger.info("Technical Info Added");
                   
                   
                   
                
              
              
                
                pane.TechnicalInfo_deviceRequest.getValue().clear();
                var DeviceSet = xmlDoc.getElementsByTagName("deviceRequest");
                var DeviceSetLngth = DeviceSet.length;
                logger.info("Lengh of the incoming array for Records: " + DeviceSetLngth);
                for (var i = 0; i < DeviceSetLngth; i++) {
             
                    var DeviceRecord=factory.com_sfc_fosImpl_dataModel.createDeviceRequest();
                   
                    DeviceRecord.setAddedBy(getEleValue(xmlDoc, "addedBy", i, logger));
                    DeviceRecord.setAddress(getEleValue(xmlDoc, "address", i, logger));
                    DeviceRecord.setDeviceDescription(getEleValue(xmlDoc, "deviceDescription", i, logger));
                    DeviceRecord.setDeviceName(getEleValue(xmlDoc, "deviceName", i, logger));
                    DeviceRecord.setIMEI(getEleValue(xmlDoc, "IMEI", i, logger));
                   
                    DeviceRecord.setIR_Number(getEleValue(xmlDoc, "IR_Number", i, logger));
                    DeviceRecord.setQuantity(getEleValue(xmlDoc, "quantity", i, logger));
                    DeviceRecord.setSFC_Tag_Number(getEleValue(xmlDoc, "SFC_Tag_Number", i, logger));
                    DeviceRecord.setSerial_Number(getEleValue(xmlDoc, "serial_Number", i, logger));
                    DeviceRecord.getSiebelCircuitID(getEleValue(xmlDoc, "siebelCircuitID", i, logger));
                    DeviceRecord.setStatus(getEleValue(xmlDoc, "status", i, logger));
                    DeviceRecord.setType(getEleValue(xmlDoc, "type", i, logger));
                    DeviceRecord.setVLAN(getEleValue(xmlDoc, "VLAN", i, logger));
                    logger.info(DeviceRecord.getVLAN());
                    pane.TechnicalInfo_deviceRequest.getValue().add(DeviceRecord);
                    logger.info("Devices Added");
                    
                }
                
                pane.TechnicalInfo_CPEManagementIPDetails.getValue().clear();
                var CPEDetails = xmlDoc.getElementsByTagName("CPEManagementIPDetails");
                var CPEDetailsLngth = CPEDetails.length;
                logger.info("Lengh of the incoming CPE Details: " + CPEDetailsLngth);
                for(var i = 0; i < CPEDetailsLngth; i++){
                	var CPERecord = factory.com_sfc_fosImpl_dataModel.createCPEManagementIPDetails();
                	CPERecord.setCPEManagementIP(getEleValue(xmlDoc, "CPEManagementIP" ,i,logger));
                	CPERecord.setCPEManagementVLAN(getEleValue(xmlDoc, "CPEManagementVLAN" , i, logger));
                	pane.TechnicalInfo_CPEManagementIPDetails.getValue().add(CPERecord);
                	logger.info("CPE Details added");
                }
                
                pane.TechnicalInfo_serviceIPDetails.getValue().clear();
                var ServiceDetails = xmlDoc.getElementsByTagName("serviceIPDetails");
                var ServiceDetailsLngth = ServiceDetails.length;
                logger.info("Length of the incoming Service IP Details: " + ServiceDetailsLngth);
                for(var i=0; i<ServiceDetailsLngth; i++){
                	var ServiceIPRecord = factory.com_sfc_fosImpl_dataModel.createServiceIPDetails();
                	ServiceIPRecord.setSFCPOPPE(getEleValue(xmlDoc,"SFCPOPPE", i, logger));
                	ServiceIPRecord.setClientIP(getEleValue(xmlDoc,"clientIP", i, logger));
                	ServiceIPRecord.setClientVLAN(getEleValue(xmlDoc,"clientVLAN", i, logger));
                	pane.TechnicalInfo_serviceIPDetails.getValue().add(ServiceIPRecord);
                	logger.info("Service IP details added");
                }
               //pane.pneTechnicalInfo_management_IP_Info.getValue().clear();
                
                pane.TechnicalInfo_management_IP_Info.getValue().clear();
                
                var managementIPSet = xmlDoc.getElementsByTagName("management_IP_Info");
                var managementIPLngth = managementIPSet.length;
                logger.info("Lengh of the incoming array for Records: " + managementIPLngth);
                for (var i = 0; i < managementIPLngth; i++) {
                	var ManagementIPRecord=factory.com_sfc_fosImpl_dataModel.createManagement_IP_List();
                	
                ManagementIPRecord.setAggregation_Point(getEleValue(xmlDoc, "aggregation_Point", i, logger));
                 
                	
                  ManagementIPRecord.setCapacity(getEleValue(xmlDoc, "capacity", i, logger));
                
                  ManagementIPRecord.setCarrier_VLAN(getEleValue(xmlDoc, "carrier_VLAN", i, logger));
                  ManagementIPRecord.setComments(getEleValue(xmlDoc, "comments", i, logger));
                	 
                  ManagementIPRecord.setManagement_Carrier_IP(getEleValue(xmlDoc, "management_Carrier_IP", i, logger));
                  ManagementIPRecord.setManagement_VLAN(getEleValue(xmlDoc, "management_VLAN", i, logger));
                  ManagementIPRecord.setPort_Number(getEleValue(xmlDoc, "port_Number", i, logger));
                  ManagementIPRecord.setCarrierEquipmentType(getEleValue(xmlDoc, "carrierEquipmentType", i, logger));
                  ManagementIPRecord.setCarrierIP(getEleValue(xmlDoc, "carrierIP", i, logger));
                  ManagementIPRecord.setPort_Type(getEleValue(xmlDoc, "port_Type", i, logger));
            		 pane.TechnicalInfo_management_IP_Info.getValue().add(ManagementIPRecord);
              
                 
                  logger.info("Management Ip List Added");
                }
                
                }
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function ldCustomerInfo(factory, pane, control, logger, url, funcName) {
    try {
    	//logger.info("ithe");
    //logger.info("In Customer Call"+control.Provisioning_Data_siebelCircuitID.getValue());
        var tmpURL = url + funcName;
        logger.info(tmpURL);
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info(xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            	logger.info("in IF");
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
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
                xmlDoc.async = false;
                 logger.info("Before Record Set");
                var recordSet = xmlDoc.getElementsByTagName("model:Customer_InformationElement");
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                if (lngth == 0) {
                	
                    alert("No Records Found. Enter Valid Siebel Circuit ID");
                } else {
                    
                         pane.ProvisioningData.getValue().setProjectManager(getEleValue(xmlDoc, "projectManager", 0, logger));
                         pane.ProvisioningData.getValue().setClientName(getEleValue(xmlDoc, "clientName", 0, logger));
                         pane.ProvisioningData.getValue().setAccountManager(getEleValue(xmlDoc, "accountManager", 0, logger));
                         pane.ProvisioningData.getValue().setAccount(getEleValue(xmlDoc, "CustomerName", 0, logger));
                         pane.ProvisioningData.getValue().setContractor(getEleValue(xmlDoc, "contractor", 0, logger));
                         pane.ProvisioningData.getValue().setLocation(getEleValue(xmlDoc, "location", 0, logger));
                         pane.ProvisioningData.getValue().setRegionView(getEleValue(xmlDoc, "regionView", 0, logger));
                         //alert("Rgionview" + getEleValue(xmlDoc, "regionView", 0, logger));
                         pane.ProvisioningData.getValue().setFloor(getEleValue(xmlDoc, "floor", 0, logger));
                         pane.ProvisioningData.getValue().setClientID(getEleValue(xmlDoc, "clientID", 0, logger));
                         pane.ProvisioningData.getValue().setServiceType(getEleValue(xmlDoc, "serviceType", 0, logger));
                         pane.ProvisioningData.getValue().setGPSCoordinates(getEleValue(xmlDoc, "GPSCoordinates", 0, logger));
                         pane.ProvisioningData.getValue().setBandwidthupdown(getEleValue(xmlDoc, "bandwidthupdown", 0, logger));
                         pane.ProvisioningData.getValue().setTechnology(getEleValue(xmlDoc, "technology", 0, logger));
                         pane.ProvisioningData.getValue().setServiceStatus(getEleValue(xmlDoc, "serviceStatus", 0, logger));
                         pane.ProvisioningData.getValue().setBuildingName(getEleValue(xmlDoc, "buildingName", 0, logger));
                         pane.ProvisioningData.getValue().setBuildingID(getEleValue(xmlDoc, "buildingID", 0, logger));
                         pane.ProvisioningData.getValue().setMobile(getEleValue(xmlDoc, "mobile", 0, logger));
                         pane.ProvisioningData.getValue().setContactPerson(getEleValue(xmlDoc, "contactPerson", 0, logger));
                         pane.ProvisioningData.getValue().setSector(getEleValue(xmlDoc, "sector", 0, logger));
                         pane.ProvisioningData.getValue().setEmail(getEleValue(xmlDoc, "email", 0, logger));
                         pane.ProvisioningData.getValue().setServiceStart(getEleValue(xmlDoc, "serviceStart", 0, logger));
                         pane.ProvisioningData.getValue().setServiceEnd(getEleValue(xmlDoc, "serviceEnd", 0, logger));
                         pane.ProvisioningData.getValue().setRequestDate(getEleValue(xmlDoc, "requestDate", 0, logger));
                         pane.ProvisioningData.getValue().setInstallDate(getEleValue(xmlDoc, "installDate", 0, logger));
                         pane.ProvisioningData.getValue().setAccount(getEleValue(xmlDoc, "account", 0, logger));
                         pane.ProvisioningData.getValue().setRecordStatus(getEleValue(xmlDoc, "recordStatus", 0, logger));
                         pane.ProvisioningData.getValue().setEngineer(getEleValue(xmlDoc, "engineer", 0, logger));
                         pane.ProvisioningData.getValue().setAddress(getEleValue(xmlDoc, "email", 0, logger));
                         pane.ProvisioningData.getValue().setLastNotificationBy(getEleValue(xmlDoc, "lastNotificationBy", 0, logger));
                         pane.ProvisioningData.getValue().setLastNotificationDate(getEleValue(xmlDoc, "lastNotificationDate", 0, logger));
                        logger.info("Customer Info Added");
                        
                    
                }
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function ldCommentsHist(factory, pane, control, logger, url, funcName) {
    try {
   
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info(xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
                xmlDoc.async = false;
                logger.info(xm);
                var recordSet = xmlDoc.getElementsByTagNameNS("http://fosImpl.sfc.com/dataModel", "CommentDataCaseElement");
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                pane.CommentHistory.getValue().clear();
            
                for (var i = 0; i < lngth; i++) {
                logger.info("in fot");
                   var record=factory.com_sfc_fosImpl_dataModel.createCommentData();
                   


                    record.setAddedby(getEleValue(xmlDoc, "addedby", i, logger));
                    record.setComments(getEleValue(xmlDoc, "comments", i, logger));
                    record.setStepName(getEleValue(xmlDoc, "taskName", i, logger));
                    record.setTime(getEleValue(xmlDoc, "time", i, logger));
                  
                     pane.CommentHistory.getValue().add(record);
                }
                logger.info("comments added");
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function ldProcessData(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info(xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
                xmlDoc.async = false;
                logger.info(xm);
                var recordSet = xmlDoc.getElementsByTagName("ProcessData");
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                pane.ProcessDetails.getValue().clear();
                for (var i = 0; i < lngth; i++) {
                    var record = factory.com_sfc_fosImpl_dataModel.createProcess_Logging();
                    record.setCustomerName(getEleValue(xmlDoc, "CustomerName", i, logger));
                    record.setProcessType(getEleValue(xmlDoc, "ProcessType", i, logger));
                    record.setProjectManager(getEleValue(xmlDoc, "ProjectManager", i, logger));
                    record.setAccountManager(getEleValue(xmlDoc, "AccountManager", i, logger));
                    record.setTaskName(getEleValue(xmlDoc, "TaskName", i, logger));
                    record.setTaskInitiationTime(getEleValue(xmlDoc, "TaskInitiationTime", i, logger));
                    record.setTaskCompletionTime(getEleValue(xmlDoc, "TaskCompletionTime", i, logger));
                    record.setTotalTimeTaken(getEleValue(xmlDoc, "TotalTimeTaken", i, logger));
                    record.setTaskDefaultSLA(getEleValue(xmlDoc, "TaskSLA", i, logger));
                    record.setSLAStatus(getEleValue(xmlDoc, "SLAStatus", i, logger));
                    pane.ProcessDetails.getValue().add(record);
                }
                if (lngth != 0) {
                    control.projectManager.setValue(record.getAccountManager());
                    control.accountManager.setValue(record.getProjectManager());
                    control.customerName.setValue(record.getCustomerName());
                    control.processType.setValue(record.getProcessType());
                }
                logger.info("comments Info Added");
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}

function getCurrentTask(factory, pane, control, logger, url, funcName) {
    try {
        var tmpURL = url + funcName;
        // code for modern browsers
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', tmpURL, true);
        xmlhttp.onreadystatechange = function() {
            logger.info(xmlhttp.status);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var xm = xmlhttp.responseText;
                var xmlDoc = "";
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xm, "text/xml");
                } else {
                    // code for old IE browsers
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.loadXML(xm);
                }
                xmlDoc.async = false;
                logger.info(xm);
                control.currentTask.setValue(xm);
                logger.info("current task Added");
            } else {
                //alert("Else: Error: Please contact System Administrator");
            }
        };
        result = xmlhttp.send();
    } catch (e) {
        alert("Catch: Error: Please contact System Administrator");
    }
}