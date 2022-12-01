
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
                logger.info(xm);              
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
                logger.info(xm);
                xmlDoc.async = false;
                var recordSet = xmlDoc.getElementsByTagName("model:Technical_InformationElement");
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                for (var i = 0; i < lngth; i++) {
                    var record = factory.com_sfc_fosImpl_bizData_dataModel.createTechnical_Information();
                    pane.TechnicalInformation.getValue().setCarrierVLAN(getEleValue(xmlDoc, "carrierVLAN", i, logger));
                    pane.TechnicalInformation.getValue().setCarrierIP(getEleValue(xmlDoc, "carrierIP", i, logger));
                    pane.TechnicalInformation.getValue().setAggPoint(getEleValue(xmlDoc, "aggPoint", i, logger));
                    pane.TechnicalInformation.getValue().setPort(getEleValue(xmlDoc, "port", i, logger));
                    pane.TechnicalInformation.getValue().setClientVLAN(getEleValue(xmlDoc, "clientVLAN", i, logger));
                    pane.TechnicalInformation.getValue().setClientIP(getEleValue(xmlDoc, "clientIP", i, logger));
                    pane.TechnicalInformation.getValue().setSFCPOPPE(getEleValue(xmlDoc, "SFCPOPPE", i, logger));
                    pane.TechnicalInformation.getValue().setPortType(getEleValue(xmlDoc, "portType", i, logger));
                    pane.TechnicalInformation.getValue().setModifiedBy(getEleValue(xmlDoc, "modifiedBy", i, logger));
                    pane.TechnicalInformation.getValue().setSiebelCircuitID(getEleValue(xmlDoc, "siebelCircuitID", i, logger));
                    pane.TechnicalInformation.getValue().setRecordStatus(getEleValue(xmlDoc, "recordStatus", i, logger));
                    
                    pane.TechnicalInformation.getValue().setMRR(getEleValue(xmlDoc, "MRR", i, logger));
                    pane.TechnicalInformation.getValue().setSecurity(getEleValue(xmlDoc, "security", i, logger));
    
                    pane.TechnicalInformation.getValue().setIR_Number(getEleValue(xmlDoc, "IR_Number", i, logger));
                    pane.TechnicalInformation.getValue().setClientName(getEleValue(xmlDoc, "clientName", i, logger));
                     pane.TechnicalInformation.getValue().setModifiedDate(getEleValue(xmlDoc, "modifiedDate", i, logger));
                }
                pane.TechnicalInformation_deviceRequest.getValue().clear();
                var DeviceSet = xmlDoc.getElementsByTagName("deviceRequest");
                var DeviceSetLngth = DeviceSet.length;
                logger.info("Lengh of the incoming array for Records: " + DeviceSetLngth);
                for (var i = 0; i < DeviceSetLngth; i++) {
             
                    var DeviceRecord=factory.com_sfc_fosImpl_bizData_dataModel.createDeviceRequest();
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
                    pane.TechnicalInformation_deviceRequest.getValue().add(DeviceRecord);
                    logger.info("Devices Added");
                    
                }
                
                
                pane.TechnicalInformation_equipment.getValue().clear();
                var EquipmentSet = xmlDoc.getElementsByTagName("equipment");
                var EquipmentLngth = EquipmentSet.length;
                logger.info("Lengh of the incoming array for Records: " + EquipmentLngth);
                for (var i = 0; i < EquipmentLngth; i++) {
                    var equipmentRecord = factory.com_sfc_fosImpl_bizData_dataModel.createEquipment_Details();
                    equipmentRecord.setType(getEleValue(xmlDoc, "type", i, logger));
                    equipmentRecord.setAddress(getEleValue(xmlDoc, "address", i, logger));
                    equipmentRecord.setVLAN(getEleValue(xmlDoc, "VLAN", i, logger));
                    pane.TechnicalInformation_equipment.getValue().add(equipmentRecord);
                    logger.info("Equipments Added");
                }
                
               
                pane.TechnicalInformation_management_IP_Info.getValue().clear(); 
               
                var managementIPSet = xmlDoc.getElementsByTagName("management_IP_Info");
                var managementIPLngth = managementIPSet.length;
                logger.info("Lengh of the incoming array for Records: " + managementIPLngth);
                for (var i = 0; i < managementIPLngth; i++) {
                	 var ManagementIPRecord=factory.com_sfc_fosImpl_bizData_dataModel.createManagement_IP_List();
                	
                	 ManagementIPRecord.setAggregation_Point(getEleValue(xmlDoc, "aggregation_Point", i, logger));
                	
                	  ManagementIPRecord.setCapacity(getEleValue(xmlDoc, "capacity", i, logger));
                
                	  ManagementIPRecord.setCarrier_VLAN(getEleValue(xmlDoc, "carrier_VLAN", i, logger));
                	  ManagementIPRecord.setComments(getEleValue(xmlDoc, "comments", i, logger));
                	  
                	  ManagementIPRecord.setManagement_Carrier_IP(getEleValue(xmlDoc, "management_Carrier_IP", i, logger));
                	  ManagementIPRecord.setManagement_VLAN(getEleValue(xmlDoc, "management_VLAN", i, logger));
                	  ManagementIPRecord.setPort_Number(getEleValue(xmlDoc, "port_Number", i, logger));
                	  
                	  ManagementIPRecord.setCarrierEquipmentType(getEleValue(xmlDoc, "carrierEquipmentType", i, logger));
                	  ManagementIPRecord.setPort_Type(getEleValue(xmlDoc, "port_Type", i, logger));
                	  ManagementIPRecord.setCarrierIP(getEleValue(xmlDoc, "carrierIP", i, logger));
                	  
               
                	  
                	  pane.TechnicalInformation_management_IP_Info.getValue().add(ManagementIPRecord);
                	  logger.info("Management Ip List Added");
                }
                
                pane.TechnicalInformation_CPEManagementIPDetails.getValue().clear();
               
                var CPEManagementIPDetailsSet = xmlDoc.getElementsByTagName("CPEManagementIPDetails");
               
                var CPEManagementIPDetailsSetLngth = CPEManagementIPDetailsSet.length;
                logger.info("Lengh of the incoming array for Records: " + CPEManagementIPDetailsSetLngth);
                for (var i = 0; i < CPEManagementIPDetailsSetLngth; i++) {
                	 var CPEManagementIPDetailsRecord =factory.com_sfc_fosImpl_bizData_dataModel.createCPEManagementIPDetails();
                	
                	 CPEManagementIPDetailsRecord.setCPEManagementIP(getEleValue(xmlDoc, "CPEManagementIP", i, logger));
                	logger.info("in");
                	  CPEManagementIPDetailsRecord.setCPEManagementVLAN(getEleValue(xmlDoc, "CPEManagementVLAN", i, logger));
                	  pane.TechnicalInformation_CPEManagementIPDetails.getValue().add(CPEManagementIPDetailsRecord);
                	
               	}
               	logger.info("CPEManagementIPDetails added");
               	
               	 pane.TechnicalInformation_serviceIPDetails.getValue().clear();
               
                var serviceIPDetailsSet = xmlDoc.getElementsByTagName("serviceIPDetails");
                var serviceIPDetailsSetLngth = serviceIPDetailsSet.length;
                logger.info("Lengh of the incoming array for Records: " + serviceIPDetailsSetLngth);
                for (var i = 0; i < serviceIPDetailsSetLngth; i++) {
                	 var serviceIPDetailsRecord =factory.com_sfc_fosImpl_bizData_dataModel.createServiceIPDetails();
                	
                	 serviceIPDetailsRecord.setClientIP(getEleValue(xmlDoc, "clientIP", i, logger));
                	 serviceIPDetailsRecord.setSFCPOPPE(getEleValue(xmlDoc, "SFCPOPPE", i, logger));
                	
                	  serviceIPDetailsRecord.setClientVLAN(getEleValue(xmlDoc, "clientVLAN", i, logger));
                	   	 pane.TechnicalInformation_serviceIPDetails.getValue().add(serviceIPDetailsRecord);
                	
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
                logger.info(xm);
                xmlDoc.async = false;
                var recordSet = xmlDoc.getElementsByTagName("model:Customer_InformationElement");
                var lngth = recordSet.length;
                logger.info("Lengh of the incoming array for Records: " + lngth);
                if (lngth == 0) {
                    alert("No Records Found. Enter Valid Siebel Circuit ID");
                } else {
                    for (var i = 0; i < lngth; i++) {
                        var record = factory.com_sfc_fosImpl_bizData_dataModel.createCustomer_Information();
                        pane.CustomerInformation.getValue().setSiebelCircuitID(getEleValue(xmlDoc, "siebelCircuitID", i, logger));
                        pane.CustomerInformation.getValue().setProjectManager(getEleValue(xmlDoc, "projectManager", i, logger));
                        pane.CustomerInformation.getValue().setClientName(getEleValue(xmlDoc, "clientName", i, logger));
                        pane.CustomerInformation.getValue().setAccountManager(getEleValue(xmlDoc, "accountManager", i, logger));
                        pane.CustomerInformation.getValue().setAccount(getEleValue(xmlDoc, "CustomerName", i, logger));
                        pane.CustomerInformation.getValue().setContractor(getEleValue(xmlDoc, "contractor", i, logger));
                        pane.CustomerInformation.getValue().setLocation(getEleValue(xmlDoc, "location", i, logger));
                        pane.CustomerInformation.getValue().setRegionView(getEleValue(xmlDoc, "regionView", i, logger));
                        pane.CustomerInformation.getValue().setFloor(getEleValue(xmlDoc, "floor", i, logger));
                        pane.CustomerInformation.getValue().setClientID(getEleValue(xmlDoc, "clientID", i, logger));
                        pane.CustomerInformation.getValue().setServiceType(getEleValue(xmlDoc, "serviceType", i, logger));
                        pane.CustomerInformation.getValue().setGPSCoordinates(getEleValue(xmlDoc, "GPSCoordinates", i, logger));
                        pane.CustomerInformation.getValue().setBandwidthupdown(getEleValue(xmlDoc, "bandwidthupdown", i, logger));
                        pane.CustomerInformation.getValue().setTechnology(getEleValue(xmlDoc, "technology", i, logger));
                        pane.CustomerInformation.getValue().setServiceStatus(getEleValue(xmlDoc, "serviceStatus", i, logger));
                        pane.CustomerInformation.getValue().setBuildingName(getEleValue(xmlDoc, "buildingName", i, logger));
                        pane.CustomerInformation.getValue().setBuildingID(getEleValue(xmlDoc, "buildingID", i, logger));
                        pane.CustomerInformation.getValue().setMobile(getEleValue(xmlDoc, "mobile", i, logger));
                        pane.CustomerInformation.getValue().setContactPerson(getEleValue(xmlDoc, "contactPerson", i, logger));
                        pane.CustomerInformation.getValue().setSector(getEleValue(xmlDoc, "sector", i, logger));
                        pane.CustomerInformation.getValue().setEmail(getEleValue(xmlDoc, "email", i, logger));
                        pane.CustomerInformation.getValue().setServiceStart(getEleValue(xmlDoc, "serviceStart", i, logger));
                        pane.CustomerInformation.getValue().setServiceEnd(getEleValue(xmlDoc, "serviceEnd", i, logger));
                        pane.CustomerInformation.getValue().setRequestDate(getEleValue(xmlDoc, "requestDate", i, logger));
                        pane.CustomerInformation.getValue().setInstallDate(getEleValue(xmlDoc, "installDate", i, logger));
                        pane.CustomerInformation.getValue().setAccount(getEleValue(xmlDoc, "account", i, logger));
                        pane.CustomerInformation.getValue().setRecordStatus(getEleValue(xmlDoc, "recordStatus", i, logger));
                        pane.CustomerInformation.getValue().setEngineer(getEleValue(xmlDoc, "engineer", i, logger));
                        pane.CustomerInformation.getValue().setAddress(getEleValue(xmlDoc, "email", i, logger));
                        pane.CustomerInformation.getValue().setLastNotificationBy(getEleValue(xmlDoc, "lastNotificationBy", i, logger));
                        pane.CustomerInformation.getValue().setLastNotificationDate(getEleValue(xmlDoc, "lastNotificationDate", i, logger));
                        pane.CustomerInformation.getValue().setContractor_Engineer(getEleValue(xmlDoc, "contractor_Engineer", i, logger));
                       
                       
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
                pane.CommentsHistory.getValue().clear();
                for (var i = 0; i < lngth; i++) {
                    var record = factory.com_sfc_fosImpl_dataModel.createCommentDataCase();
                    record.setSiebelCircuitID(getEleValue(xmlDoc, "siebelCircuitID", i, logger));
                    record.setComment_Id(getEleValue(xmlDoc, "comment_Id", i, logger));
                    record.setComments(getEleValue(xmlDoc, "comments", i, logger));
                    record.setTaskName(getEleValue(xmlDoc, "taskName", i, logger));
                    record.setAddedby(getEleValue(xmlDoc, "addedby", i, logger));
                    record.setTime(getEleValue(xmlDoc, "time", i, logger));
                    pane.CommentsHistory.getValue().add(record);
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