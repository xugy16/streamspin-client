package com.streamspin.client;

public class Profile {
	
	private int id;
	private String name;
	
	public Profile(int _id, String _name)
	{
		this.id = _id;
		this.name = _name;
	}
	
	public int getID()
	{
		return id;
	}
	
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
