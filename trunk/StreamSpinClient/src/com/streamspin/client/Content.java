package com.streamspin.client;

public class Content {

	private String headline, content;
	
	public Content(String headline, String content)
	{
		this.headline = headline;
		this.content = content;		
	}
	
	public String getHeadline()
	{
		return headline;
	}
	
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
