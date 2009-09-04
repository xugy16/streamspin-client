package com.streamspin.client;

/**
 * Models an interest profile of a StreamSpin User
 * 
 * @author jenslyn
 */
public class Profile {
	
	private int id;
	private String name;
	
	/**
	 * {@link Profile} constructor
	 * 
	 * @param id The id of the profile
	 * @param name The name/description assigned
	 */
	public Profile(int id, String name)
	{
		this.id = id;
		this.name = name;
	}
	
	/**
	 * Profile id
	 * 
	 * @return {@link Profile#id}
	 */
	public int getID()
	{
		return id;
	}
	
	/**
	 * Profile name
	 * @return {@link Profile#name}
	 */
	public String getName()
	{
		return name;
	}
	
	public String toString()
	{
		String result = new String("\nProfile\n");
		result+= "\tName : "+name+"\n";
		result+= "\tId : "+id+"\n";
		
		return result;
	}
}
