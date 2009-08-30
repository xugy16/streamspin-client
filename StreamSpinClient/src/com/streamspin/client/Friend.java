package com.streamspin.client;

public class Friend {
	private int id;
	private String name;
	
	public Friend(int id, String name)
	{
		this.id = id;
		this.name = name;
	}

	private void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	private void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}
	
}
