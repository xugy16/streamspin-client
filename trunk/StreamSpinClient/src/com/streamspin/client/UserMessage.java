package com.streamspin.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * An overlay window showing the interface
 * where the user can send messages to any 
 * of his friends, which are online.
 * 
 * @author jenslyn
 *
 */
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
	/**
	 * Reference to the {@link UserMessage} object, to be able to
	 * reference the object inside a {@link Timer}
	 * 
	 * @see com.google.gwt.user.client.Timer
	 */
	final UserMessage self = this;
	
	/**
	 * {@link UserMessage} constructor
	 */
	public UserMessage()
	{
		super(false);
		getFriends();
	}
	
	/**
	 * Retrieves all online friends
	 */
	private void getFriends()
	{
		final AnswerWrapper answer = new AnswerWrapper();
		
		new StreamSpinContact().contactStreamSpin(6, answer,"uid="+StreamSpinClient.UID);
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

	/**
	 * Constructs the UserMessage interface
	 */
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
				for (int i = 0; i < onlineFriendsListBox.getItemCount(); ++i) {
		    	      if (onlineFriendsListBox.isItemSelected(i)) {
		    	    	  	sendMessage(messageTextArea.getText(), Integer.parseInt(onlineFriendsListBox.getValue(i)));
		    	      }
				}
			}
		});
		
		cancelButton.addClickListener(new ClickListener(){
			public void onClick(Widget sender) {
				self.hide();
			}
		});
		
		if (!friendsXml.isEmpty()) {
			try {
				friendList = XmlParser.instance().onlineFriendsXmlParsing(friendsXml);
			} catch (Exception e) {
				Window.alert("An Error occurred while retrieving and parsing the list of your friends\n\n"+ e.toString());
			}
		}
		
		if(friendList.isEmpty())
			onlineFriendsListBox.addItem("Empty Friend List","No Friends have been retrieved from StreamSpin");
		else 
		{
			for (Friend friend : friendList) {
				onlineFriendsListBox.addItem(friend.getName(), ""+ friend.getId());
			}
		}
		
		onlineFriendsListBox.setSize("100px", ""+Window.getClientHeight()*0.8);
		messageTextArea.setSize("100%", ""+((Window.getClientHeight()*0.8)-30));
		rightBottomPanel.setSize("100%", "30px");
		mainPanel.setSize("100%", "100%");

		
	}

	/**
	 * Sends a messages to another user
	 * 
	 * @param message The message to the other user
	 * @param receiverID The id of the user receiving the message
	 */
	protected void sendMessage(String message, int receiverID) {
		final AnswerWrapper answer = new AnswerWrapper();
		
		new StreamSpinContact().contactStreamSpin(3, answer, "msg="+message, "rcv"+receiverID, "uid="+StreamSpinClient.UID);
		final Timer timer = new Timer() {
			public void run() {
				if(answer.getAnswer()!=null){
					cancel();
					if(answer.getAnswer().equalsIgnoreCase("true"))
						Window.alert("The Msg Ans: "+answer.getAnswer());
					else if(answer.getAnswer().equalsIgnoreCase("false") || answer.getAnswer().isEmpty())
						Window.alert("The Message was not sent:\n\n"+answer.getAnswer());
				}
			}
		};
		
		timer.scheduleRepeating(1000);
	}
}
