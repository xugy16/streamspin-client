package com.streamspin.client;

import com.google.gwt.gadgets.client.IntrinsicFeature;
import com.google.gwt.gadgets.client.event.ContentFetchedHandler;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;

public class StreamSpinContact{

	private String xml = null;
	private IntrinsicFeature intrinsics  = StreamSpinClient.getIntrinsics();
	
	protected StreamSpinContact(){ }
	
	
protected void contactStreamSpin(int requestType, AnswerWrapper answer, String ... args)
{
	contactStreamSpinAsync(requestType, args);
	
	final AnswerWrapper ans = answer;
	Timer timer = new Timer() {
		public void run() {
			if(xml!=null){
				ans.setAnswer(xml);
				//Window.alert("contactStreamSpin AS timer\n"+ans.getAnswer()+"\n");
				xml = null;
				cancel();
			}	
		}
	};
	
	timer.scheduleRepeating(1000);
}

	
	private void contactStreamSpinAsync(int requestType, String ... args) {
		String arg ="";
		for(String s: args)
		{
			arg += "&"+s;
		}

		if(intrinsics == null) Window.alert("a problem.. the google url-translation feature has failed..");
		//Window.alert("contactStreamSpinAsync "+xml);
		String url = "http://webclient.streamspin.com/Default.aspx?type="+requestType
		+"&un="+StreamSpinClient.USERNAME+"&pw="+StreamSpinClient.PASSWORD+arg;
		//String altUrl = "http://streamspin-client.googlecode.com/svn/trunk/StreamSpinClient/www/com.streamspin.StreamSpinClient/content.xml";
		//Window.alert("url "+url);
		try {
			intrinsics.fetchContent(url, new ContentFetchedHandler() {
				public void onContentFetched(ContentFetchedHandler.ContentFetchedEvent event) {					
					xml = event.getFetchedContent();
				}
			}, 10);
		} catch (Exception e) {
			Window.alert("Damn!!\nAn Exception getting content from streamspin..\n\n"+ e.toString());
		}	
	}
}
