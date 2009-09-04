package com.streamspin.client;

/**
 * Models a service which contains a script which 
 * can both change look and behavior of the client
 * 
 * @author jenslyn
 */
public class ServiceProfile {
	
	private String name, xmlScript, serviceId, scriptUrl;

	/**
	 * {@link ServiceProfile} constructor
	 * 
	 * @param name Name of service
	 * @param xmlScript Script which can change behavior and look of client
	 * @param serviceID URL to start service with
	 * @param scriptURL URL to get script
	 */
	public ServiceProfile(String name, String xmlScript, String serviceID, String scriptURL)
	{
		this.name = name;
		this.xmlScript = xmlScript;
		this.serviceId = serviceID;
		this.scriptUrl = scriptURL;
	}
	
	/**
	 * Gets name of service
	 * 
	 * @return {@link ServiceProfile#name}
	 */
	public String  getName()
	{
		return name;
	}
	
	/****
	 * Gets the service script
	 * 
	 * @return {@link ServiceProfile#xmlScript}
	 */
	public String getXmlScript()
	{
		return xmlScript;
	}
	
	/**
	 * Gets service id
	 * 
	 * @return {@link ServiceProfile#serviceId}
	 */
	public String getServiceID()
	{
		return serviceId;
	}
	
	/**
	 * Gets URL of service script
	 * 
	 * @return {@link ServiceProfile#scriptUrl}
	 */
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
