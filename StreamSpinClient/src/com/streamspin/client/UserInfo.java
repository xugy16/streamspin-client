package com.streamspin.client;

import java.util.ArrayList;
import java.util.List;

public class UserInfo {

	private int uid;
	private List<Location> loc = new ArrayList<Location>();
	private Boolean gpsDefault;
	private int gpsThreshold;
	private List<StartService> startService = new ArrayList<StartService>();
	private List<Profile> profile = new ArrayList<Profile>();
	private List<ServiceProfile> servProfile = new ArrayList<ServiceProfile>();
	

	public UserInfo(int uid, ArrayList<Location> locations, Boolean gpsDefault, int gpsThreshold, ArrayList<StartService> sService, ArrayList<Profile> profiles, ArrayList<ServiceProfile> serviceProfiles)
	{
		this.setUid(uid);
		this.setLocation(locations);
		this.setGpsDefault(gpsDefault);
		this.setGpsThreshold(gpsThreshold);
		this.setStartService(sService);
		this.setProfile(profiles);
		this.setServiceProfile(serviceProfiles);
	}
	
	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getUid() {
		return uid;
	}

	/***
	 * Should only be used initially as it will overwrite
	 * any previously added locations
	 * 
	 * @param loc a list containing locations
	 */
	private void setLocation(List<Location> loc) {
		this.loc = loc;
	}

	public void addLocation(Location location)
	{
		loc.add(location);
	}
	
	public List<Location> getLocations() {
		return loc;
	}

	public void setGpsThreshold(int gpsThreshold) {
		this.gpsThreshold = gpsThreshold;
	}

	public int getGpsThreshold() {
		return gpsThreshold;
	}

	public void setGpsDefault(Boolean gpsDefault) {
		this.gpsDefault = gpsDefault;
	}

	public Boolean getGpsDefault() {
		return gpsDefault;
	}

	private void setStartService(List<StartService> startService) {
		this.startService = startService;
	}

	public void addStartService(StartService startservice)
	{
		this.startService.add(startservice);
	}
	
	public List<StartService> getStartService() {
		return startService;
	}

	private void setProfile(List<Profile> profile) {
		this.profile = profile;
	}
	
	public void addProfile(Profile profile)
	{
		this.profile.add(profile);
	}

	public List<Profile> getProfile() {
		return profile;
	}

	private void setServiceProfile(List<ServiceProfile> servProfile) {
		this.servProfile = servProfile;
	}

	public void addServiceProfile(ServiceProfile serviceProfile)
	{
		this.servProfile.add(serviceProfile);
	}
	
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