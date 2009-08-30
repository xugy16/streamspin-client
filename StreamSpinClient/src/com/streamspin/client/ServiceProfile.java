package com.streamspin.client;

public class ServiceProfile {
	
	private String name, xmlScript, serviceId, scriptUrl;

	public ServiceProfile(String name, String xmlScript, String serviceID, String scriptURL)
	{
		this.name = name;
		this.xmlScript = xmlScript;
		this.serviceId = serviceID;
		this.scriptUrl = scriptURL;
	}
	
	public String  getName()
	{
		return name;
	}
	
	public String getXmlScript()
	{
		return xmlScript;
	}
	
	public String getServiceID()
	{
		return serviceId;
	}
	
	public String getScriptUrl()
	{
		return scriptUrl;
	}
	
	public String toString() {
		String result = new String("\nServiceProfile\n");
		result += "\tName: " + name + "\n";
		result += "\tService id: " + serviceId + "\n";
		result += "\tXml Script: " + xmlScript + "\n";
		result += "\tScript Url: " + scriptUrl + "\n";

		return result;
	}
	
	
}
