package com.streamspin.client;

/**
 * Encapsulates a location with a name, longitude, and latitude
 * 
 * @author jenslyn
 */
public class Location {

	private Double lon, lat;
	private String name;
	
	/**
	 * {@link Location} constructor
	 * 
	 * @param longtitude Location longitude
	 * @param latitude Location Latitude
	 * @param name Location Name
	 */
	public Location(Double longtitude, Double latitude, String name) {
		this.lon = longtitude;
		this.lat = latitude;
		this.name = name;
	}

	/**
	 * Gets name of location
	 * 
	 * @return {@link Location#name}
	 */
	public String getName() {
		return name;
	}
	
	/**
	 * Gets latitude of location
	 * 
	 * @return {@link Location#lat}
	 */
	public Double getLatitude() {
		return lat;
	}
	
	/**
	 * Gets longitude of location
	 * 
	 * @return {@link Location#lon}
	 */
	public Double getLongtitude() {
		return lon;
	}
	
	public String toString()
	{
		String result = new String("\nLocation\n");
		result+= "\tName : "+name+"\n";
		result+= "\tLongtitude: "+lon+"\n";
		result+= "\tLatitude: "+lat+"\n";
		
		return result;
	}


}
