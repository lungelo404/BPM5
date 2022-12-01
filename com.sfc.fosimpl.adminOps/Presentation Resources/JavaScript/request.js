function listUsers(factory,pane,control,logger,url,funct) 
{
logger.info("in list users");
	try {
			var tmpURL = url+funct;
			
			logger.info(tmpURL);
		  var xmlhttp = new XMLHttpRequest();
		xmlhttp.open('GET',tmpURL,true);
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200)	{		
				var xm = xmlhttp.responseText;
				
				
				
				if (window.XMLHttpRequest) {
    // code for modern browsers
    parser=new DOMParser();
    xmlDoc = parser.parseFromString(xm,"text/xml");
  } 
  else {
    // code for old IE browsers
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  
    xmlDoc.loadXML(xm);
}
				//var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				
				logger.info(xm);
				xmlDoc.async = false; 
				
				
				
				var recordSet = xmlDoc.getElementsByTagName("param");
				var lngth = recordSet.length;
				logger.info("Lengh of the incoming array for Records: "+lngth);
				
				
				
			pane.BPMUsers.getValue().clear();
				
							
				for(var i=0;i<lngth;i++) {
					 logger.info("check");
					 var record = factory.com_sfc_fosImpl_adminOps_dataModel.createBPMUsers();
					 
					 logger.info("check");
					 
					recordSet = xmlDoc.getElementsByTagName("loginname");
					if(recordSet[i].childNodes[0]!=null)	{			
						record.setName(recordSet[i].childNodes[0].nodeValue);
						logger.info("loginName"+recordSet[i].childNodes[0].nodeValue);
					}
					
					recordSet = xmlDoc.getElementsByTagName("groupname");
					if(recordSet[i].childNodes[0]!=null)	{			
						record.setGroupName(recordSet[i].childNodes[0].nodeValue);
						logger.info("grpname"+recordSet[i].childNodes[0].nodeValue);
					}
					
					recordSet = xmlDoc.getElementsByTagName("addedby");
					if(recordSet[i].childNodes[0]!=null)	{			
						record.setAddedBy(recordSet[i].childNodes[0].nodeValue);
						logger.info("Aaddedby"+recordSet[i].childNodes[0].nodeValue);
					}
					
					recordSet = xmlDoc.getElementsByTagName("addedon");
					if(recordSet[i].childNodes[0]!=null)	{			
						record.setAddedOn(new Date(recordSet[i].childNodes[0].nodeValue).toString());
						logger.info("addedon"+recordSet[i].childNodes[0].nodeValue);
					}
					
					
					
					
						pane.BPMUsers.getValue().add(record);
						
				}
				
				
			}
				};
		result = xmlhttp.send();
	}
	catch (e) {
		alert("Catch: Error: Please contact System Administrator");
	}



}