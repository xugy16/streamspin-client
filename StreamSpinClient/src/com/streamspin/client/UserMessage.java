package com.streamspin.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

public class UserMessage extends PopupPanel{
	
	private HorizontalPanel rightBottomPanel = new HorizontalPanel();
	private VerticalPanel rightPanel = new VerticalPanel();
	private HorizontalPanel mainPanel = new HorizontalPanel();
	private TextArea messageTextArea = new TextArea();
	private Button submitButton = new Button("Send Message");
	private Button cancelButton = new Button("Cancel");
	private ListBox onlineFriendsListBox = new ListBox(true);
	private String friendsXml = null;
	private ArrayList<Friend> friendList = new ArrayList<Friend>();
	private AnswerWrapper answer;
	final UserMessage self = this;
	
	
	public UserMessage()
	{
		super(false);
		getFriends();
	}
	
	private void getFriends()
	{
		answer = new AnswerWrapper();
		
		new StreamSpinContact().contactStreamSpin(5, answer);
		final Timer timer = new Timer() {
			public void run() {
				if(answer.getAnswer()!=null){
					cancel();
					friendsXml = answer.getAnswer();
					makeInterface();	
					setWidget(mainPanel);
					self.center();
					self.show();	
				}
			}
		};
		
		timer.scheduleRepeating(1000);

	}

	private void makeInterface() {
		
		rightBottomPanel.add(cancelButton);
		rightBottomPanel.add(submitButton);
		rightPanel.add(messageTextArea);
		rightPanel.add(rightBottomPanel);
		mainPanel.add(onlineFriendsListBox);
		mainPanel.add(rightPanel);
		mainPanel.setSize("310px", "320px");
		
		
		submitButton.addClickListener(new ClickListener(){

			public void onClick(Widget sender) {
				sendMessage();
				self.hide();	
			}
		});
		
//		onlineFriendsListBox.addItem("Friend1");
//		onlineFriendsListBox.addItem("Friend2");
//		onlineFriendsListBox.addItem("Friend3");
//		onlineFriendsListBox.addItem("Friend4");
//		onlineFriendsListBox.addItem("Friend5");
//		onlineFriendsListBox.addItem("Friend6");
//		onlineFriendsListBox.addItem("Friend7");
//		onlineFriendsListBox.addItem("Friend8");
//		onlineFriendsListBox.addItem("Friend9");
//		onlineFriendsListBox.addItem("Friend10");
//		onlineFriendsListBox.addItem("Friend11");
//		onlineFriendsListBox.addItem("Dell1","Dell2");
//		onlineFriendsListBox.setTitle("foo");
//		onlineFriendsListBox.addItem("tqg");
//		onlineFriendsListBox.addItem("funny");
//		onlineFriendsListBox.addItem("stuff");
		
		Window.alert(friendsXml);
		if (!friendsXml.isEmpty()) {
			try {
				friendList = XmlParser.instance().friendXmlParsing(friendsXml);
			} catch (Exception e) {
				Window.alert("An Error occurred while retrieving and parsing the list of your friends\n\n"+ e.toString());
			}
		}
		
		if(friendList.isEmpty())
			onlineFriendsListBox.addItem("Empty Friend List",
					"No Friends have been retrieved from StreamSpin");
		else 
		{
			for (Friend friend : friendList) {
				onlineFriendsListBox.addItem(friend.getName(), ""+ friend.getId());
			}
		}
		onlineFriendsListBox.setSize("100px", ""+Window.getClientHeight()*0.8);
		onlineFriendsListBox.setVisibleItemCount(14);
		onlineFriendsListBox.addChangeListener(new ChangeListener(){
			public void onChange(Widget sender) {
				String msg = "Selected items: ";
	    	    for (int i = 0; i < onlineFriendsListBox.getItemCount(); ++i) {
	    	      if (onlineFriendsListBox.isItemSelected(i)) {
	    	        msg += i+": "+onlineFriendsListBox.getItemText(i) + "\n " + onlineFriendsListBox.getValue(i)+"\n";
	    	      }
	    	    }
				Window.alert(msg);		
			}
			
		});
		
		messageTextArea.setSize("100%", ""+((Window.getClientHeight()*0.8)-40));
		rightBottomPanel.setSize("100%", "40px");
		mainPanel.setSize("100%", "100%");

		
	}


	protected void sendMessage() {
		// TODO Auto-generated method stub
		
	}

}
