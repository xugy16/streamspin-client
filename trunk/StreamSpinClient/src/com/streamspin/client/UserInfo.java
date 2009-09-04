package com.streamspin.client;

import java.util.ArrayList;
import java.util.List;

/**
 * Contains all the information needed
 * by the client at startup-/login-time.
 * 
 * @author jenslyn
 */
public class UserInfo {

	private int uid;
	private List<Location> loc = new ArrayList<Location>();
	private Boolean gpsDefault;
	private int gpsThreshold;
	private List<StartService> startService = new ArrayList<StartService>();
	private List<Profile> profile = new ArrayList<Profile>();
	private List<ServiceProfile> servProfile = new ArrayList<ServiceProfile>();
	

	/**
	 * {@link UserInfo} constructor
	 *  
	 * @param uid 				User id.
	 * @param locations			List of preset locations.
	 * @param gpsDefault		If user wants to use GPS as default.
	 * @param gpsThreshold		The threshold for which the client should 
	 * 							send its GPS position. 
	 * @param sService			List of services which needs to be started 
	 * 							manually.
	 * @param profiles			List of user interest profiles.
	 * @param serviceProfiles	List of services which can contain scripts.
	 */
	public UserInfo(int uid, ArrayList<Location> locations, Boolean gpsDefault, int gpsThreshold, ArrayList<StartService> sService, ArrayList<Profile> profiles, ArrayList<ServiceProfile> serviceProfiles)
	{
		this.uid = uid;
		this.loc = locations;
		this.gpsDefault = gpsDefault;
		this.gpsThreshold = gpsThreshold;
		this.startService = sService;
		this.profile = profiles;
		this.servProfile = serviceProfiles;
	}
	
	/**
	 * Sets the user id
	 * 
	 * @param uid User id
	 */
	public void setUid(int uid) {
		this.uid = uid;
	}

	/**
	 * Gets the user id
	 * 
	 * @return {@link UserInfo#uid}
	 */
	public int getUid() {
		return uid;
	}

	/**
	 * Adds A location to the list of locations
	 * 
	 * @param location A {@link Location} object
	 */
	public void addLocation(Location location)
	{
		loc.add(location);
	}
	
	/**
	 * Gets the list of locations
	 * 
	 * @return List of {@link Location} objects
	 */
	public List<Location> getLocations() {
		return loc;
	}

	/**
	 * Sets the GPS threshold for which the client
	 * should report its location.
	 * 
	 * @param gpsThreshold 	Threshold for which the client
	 * 						should report its location.
	 */
	public void setGpsThreshold(int gpsThreshold) {
		this.gpsThreshold = gpsThreshold;
	}

	/**
	 * Gets the GPS threshold
	 * 
	 * @return {@link UserInfo#gpsThreshold}
	 */
	public int getGpsThreshold() {
		return gpsThreshold;
	}

	/**
	 * Sets whether the GPS is used per default to specify
	 * current location.
	 * 
	 * @param gpsDefault True if GPS is used as default,
	 * otherwise false
	 */
	public void setGpsDefault(Boolean gpsDefault) {
		this.gpsDefault = gpsDefault;
	}

	/**
	 * Gets whether the GPS is used per default to specify
	 * current location.
	 * 
	 * @return 	{@link UserInfo#gpsDefault} as True if GPS 
	 * 			is used as default 
	 */
	public Boolean getGpsDefault() {
		return gpsDefault;
	}

	/**
	 * Adds a service which needs to be started
	 * manually by the user.
	 * 
	 * @param startservice The manual startup service
	 */
	public void addStartService(StartService startservice)
	{
		this.startService.add(startservice);
	}
	
	/**
	 * Gets the list of manual startup services 
	 * 
	 * @return List of {@link UserInfo#startService} objects
	 */
	public List<StartService> getStartService() {
		return startService;
	}

	/**
	 * Adds a user interest profile
	 * 
	 * @param profile Interest profile
	 */
	public void addProfile(Profile profile)
	{
		this.profile.add(profile);
	}
	
	/**
	 * Gets the list of user interest profiles
	 * 
	 * @return List of {@link UserInfo#profile}
	 */
	public List<Profile> getProfile() {
		return profile;
	}

	/**
	 * Adds a service profile
	 * 
	 * @param serviceProfile A service profile
	 */
	public void addServiceProfile(ServiceProfile serviceProfile)
	{
		this.servProfile.add(serviceProfile);
	}
	
	/**
	 * Gets the list of service profiles
	 * 
	 * @return List of {@link UserInfo#servProfile} objects
	 */
	public List<ServiceProfile> getServProfile() {
		return servProfile;
	}

	public String toString()
	{
		String result = new String("------------------------------\n--- User Information ---\n------------------------------\n");
		result += "User id: "+uid+"\n";
		for(Location locs: loc) result += locs.toString();
		result += "GPS Default: "+gpsDefault+"\n";
		result+= "GPS Threshhold: "+gpsThreshold+"\n";
		for(StartService sServ: startService) result+= sServ.toString();
		for(Profile profiles: profile) result+= profiles.toString();
		for(ServiceProfile serviceProfile: servProfile) result+= serviceProfile.toString();
		return result;
	}
}