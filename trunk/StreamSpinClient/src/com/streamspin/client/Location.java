package com.streamspin.client;

public class Location {

	private Double lon, lat;
	private String name;
	
	public Location(Double longtitude, Double latitude, String name) {
		this.lon = longtitude;
		this.lat = latitude;
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public Double getLatitude() {
		return lat;
	}
	
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
