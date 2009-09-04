package com.streamspin.client;

/**
 * Captures the notion of a friend in
 * StreamSpin
 * 
 * @author jenslyn
 *
 */
public class Friend {
	private int id;
	private String name;
	
	/**
	 * {@link Friend} constructor
	 * 
	 * @param id The id of the friend
	 * @param name The name of the friend
	 */
	public Friend(int id, String name)
	{
		this.id = id;
		this.name = name;
	}

	/**
	 * Retrieves the friends name
	 * 
	 * @return {@link Friend#name}
	 */
	public String getName() {
		return name;
	}

	/**
	 * Gets the ID of the friend
	 * 
	 * @return {@link Friend#id}
	 */
	public int getId() {
		return id;
	}
	
}
