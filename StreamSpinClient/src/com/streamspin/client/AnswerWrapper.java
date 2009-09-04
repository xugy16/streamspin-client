package com.streamspin.client;

/**
 * Wraps the answer returned by the StreamSpin
 * server
 * 
 * @author jenslyn
 *
 */
public class AnswerWrapper {

	private String answer = null;
	
	/**
	 * {@link AnswerWrapper} constructor
	 */
	public AnswerWrapper() {}
	
	/**
	 * Sets the answer received from the
	 * StreamSpin service
	 * 
	 * @param answer The answer from StreamSpin
	 */
	public void setAnswer(String answer)
	{
		this.answer = answer;
	}
	
	/**
	 * Gets the answer received from the
	 * StreamSpin service
	 * 
	 * @return The answer from StreamSpin
	 */
	public String getAnswer()
	{
		return answer;
	}
}
