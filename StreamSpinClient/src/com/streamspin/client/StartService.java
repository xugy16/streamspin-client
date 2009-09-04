package com.streamspin.client;

/**
 * Models a service which has to be started manually
 * by the user
 * 
 * @author jenslyn
 */
public class StartService {

	private int serviceId;
	private String name;
	private String startURL;
	
	/**
	 * {@link StartService} constructor
	 * 
	 * @param serviceID Service id
	 * @param name Name of service
	 * @param startUrl URL to call in order to start the service
	 */
	public StartService(int serviceID, String name, String startUrl)
	{
		this.serviceId = serviceID;
		this.name = name;
		this.startURL = startUrl;
	}
	
	/**
	 * Gets the service id
	 * 
	 * @return {@link StartService#serviceId}
	 */
	public int getServiceID()
	{
		return serviceId;
	}
	
	/**
	 * Gets the name of the service
	 * 
	 * @return {@link StartService#name}
	 */
	public String getName()
	{
		return name;
	}
	
	/**
	 * Gets the URL needed to start the service
	 * 
	 * @return {@link StartService#startURL}
	 */
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


