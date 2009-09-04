package com.streamspin.client;

/**
 * Models a StreamSpin update with headline and
 * some content
 * 
 * @author jenslyn
 */
public class Content {

	private String headline, content;
	
	/**
	 * {@link Content} constructor
	 * 
	 * @param headline The headline of a StreamSpin update
	 * @param content The content of a StreamSpin update
	 */
	public Content(String headline, String content)
	{
		this.headline = headline;
		this.content = content;		
	}
	
	/**
	 * Returns the headline
	 * 
	 * @return content headline
	 */
	public String getHeadline()
	{
		return headline;
	}
	
	/**
	 * Returns content
	 * @return The content of an update
	 */
	public String getContent()
	{
		return content;
	}
	
	public String toString()
	{
		String result = new String("\nContent\n");
		result+= "\tHeadline : "+headline+"\n";
		result+= "\tContent : "+content+"\n";
		
		return result;
	}
}
