package com.streamspin.client;

import com.google.gwt.gadgets.client.IntrinsicFeature;
import com.google.gwt.gadgets.client.event.ContentFetchedHandler;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;

/**
 * Handles all the requests made to StreamSpin
 * 
 * @author jenslyn
 */
public class StreamSpinContact {

	/**
	 * Holds the result returned by StreamSpin
	 */
	private String xml = null;
	/**
	 * Holds a reference to the {@link IntrinsicFeature} initialized in the
	 * main loop
	 */
	private IntrinsicFeature intrinsics = StreamSpinClient.getIntrinsics();

	/**
	 * {@link StreamSpinContact} constructor
	 */
	protected StreamSpinContact() {
	}

	/**
	 * Continuously checks if the client have received an answer from
	 * StreamSpin yet, and if yes, sets the answer in the
	 * {@link AnswerWrapper} object
	 * 
	 * @param requestType 	The type of request made to StreamSpin <br/>
	 *						1. Reserved. (For testing purposes) <br/>
	 *						2. Returns any updates not delivered to client yet <br/>
	 *						3. Used to deliver a message to another online user <br/>
	 *						4. Sets the users interest profile <br/>
	 *						5. Sets the users location <br/>
	 *						6. Retrieves a users list of friends <br/>
	 *						7. Sends a message to another user <br/>
	 *						8. Validates the users credentials and returns all <br/>
	 *						the information the client needs to populate its menus <br/>
	 *						and internal structures at the time of login <p>
	 * 
	 * @param answer 		Callback object which will have its answer set when 
	 * 						{@link StreamSpinContact} receives an answer from 
	 * 						StreamSpin.
	 * 
	 * @param args			Any additional URL GET arguments beside username and
	 * 						password, which is sent with all requests. 
	 * 						arguments are passed as strings in the form
	 * 						<b>"args=value"</b>
	 */
	protected void contactStreamSpin(int requestType, AnswerWrapper answer, String... args) {
		
		contactStreamSpinAsync(requestType, args);

		final AnswerWrapper ans = answer;
		Timer timer = new Timer() {
			public void run() {
				if (xml != null) {
					ans.setAnswer(xml);
					cancel();
				}
			}
		};
		timer.scheduleRepeating(1000);
	}

	/**
	 * Sends a GET request to StreamSpin, and assigns 
	 * the answer to {@link StreamSpinContact#xml} once received.
	 * 
	 * @param requestType 	See {@link StreamSpinContact#contactStreamSpin(int requestType, AnswerWrapper answer, String... args)}
	 * 
	 * @param args 			See {@link StreamSpinContact#contactStreamSpin(int requestType, AnswerWrapper answer, String... args)}
	 */
	private void contactStreamSpinAsync(int requestType, String... args) {
		String getArguments = "";
		for (String s : args) {
			getArguments += "&" + s;
		}

		if (intrinsics == null)
			Window.alert("a problem.. the google url-translation feature has failed..");
		String url = "http://webclient.streamspin.com/Default.aspx?type="
				+ requestType + "&un=" + StreamSpinClient.USERNAME + "&pw="
				+ StreamSpinClient.PASSWORD + getArguments;
		try {
			intrinsics.fetchContent(url, new ContentFetchedHandler() {
				public void onContentFetched(
						ContentFetchedHandler.ContentFetchedEvent event) {
					xml = event.getFetchedContent();
				}
			}, 10); //refresh is probably in sec, NOT milli sec
		} catch (Exception e) {
			Window.alert("Damn!!\nAn Exception getting content from streamspin..\n\n"+ e.toString());
		}
	}
}
