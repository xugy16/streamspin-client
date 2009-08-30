package com.streamspin.client;

public class StartService {

	private int serviceId;
	private String name;
	private String startURL;
	
	public StartService(int serviceID, String name, String startUrl)
	{
		this.serviceId = serviceID;
		this.name = name;
		this.startURL = startUrl;
	}
	
	public int getServiceID()
	{
		return serviceId;
	}
	
	public String getName()
	{
		return name;
	}
	
	public String getStartURL()
	{
		return startURL;
	}
	
	public String toString() {
		String result = new String("\nStartService\n");
		result += "\tName: " + name + "\n";
		result += "\tid: " + serviceId + "\n";
		result += "\tStartURL: " + startURL + "\n";

		return result;
	}
	
}


