package com.streamspin.client;


import com.google.gwt.core.client.GWT;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.gadgets.client.Gadget.ModulePrefs;
import com.google.gwt.user.client.*;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.VerticalSplitPanel;
import com.google.gwt.user.client.ui.Widget;


@ModulePrefs(title = "StreamSpin Client", author = "jenslyn", author_email = "jenslyn42@gmail.com")
public class StreamSpinClient extends Gadget<UserPreferences> {

	private VerticalPanel mainPanel = new VerticalPanel();
	private HorizontalPanel mainMenuPanel = new HorizontalPanel();
	private VerticalSplitPanel mainWindowPanel = new VerticalSplitPanel();
	private ListBox mainTopWindowListBox = new ListBox();
	private TextArea mainBottomWindowTextArea = new TextArea();
	private MenuBar mainRightMenu = new MenuBar();
	private Button mainLeftButton = new Button();
	private Label mainStatusLabel = new Label();
	private HTML mainTitleBar = new HTML();
	//Image image = new Image(GWT.getModuleBaseURL() + "images/somePic.gif");
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.google.gwt.gadgets.client.Gadget#init(com.google.gwt.gadgets.client
	 * .UserPreferences)
	 */
	@Override
	protected void init(UserPreferences preferences) {

		Command cmd = new Command() {
			public void execute() {
				Window.alert("You selected a menu item!");
			}
		};

		mainStatusLabel.setText("online stuff");

		MenuBar debugMenu = new MenuBar(true);
		debugMenu.addItem("the", cmd);
		debugMenu.addItem("foo", cmd);

		MenuBar setLocationMenu = new MenuBar(true);
		setLocationMenu.addItem("Use GPS", cmd); // probably not needed for web
		// client
		setLocationMenu.addItem("the", cmd);
		setLocationMenu.addItem("bar", cmd);
		setLocationMenu.addItem("menu", cmd);

		MenuBar startServiceMenu = new MenuBar(true);
		startServiceMenu.addItem("the", cmd);
		startServiceMenu.addItem("bar", cmd);
		startServiceMenu.addItem("menu", cmd);

		MenuBar setProfileMenu = new MenuBar(true);
		setProfileMenu.addItem("Profile 1", cmd);
		setProfileMenu.addItem("Profile 2", cmd);

		// the main menu
		mainRightMenu.addItem("Enable debug Mode", debugMenu);
		mainRightMenu.addItem("Exit", cmd);
		mainRightMenu.addItem("SetLocation", setLocationMenu);
		mainRightMenu.addItem("Start Service", startServiceMenu);
		mainRightMenu.addItem("Set Profile", setProfileMenu);

		mainLeftButton.addClickListener(new ClickListener() {
			public void onClick(Widget sender) {
				showMessagePanel();
			}
		});
		mainLeftButton.setText("Send Message");
		mainLeftButton.setTitle("You can send messages to your friends with this");

		mainMenuPanel.add(mainLeftButton);
		mainMenuPanel.add(mainRightMenu);
		
		mainWindowPanel.add(mainTopWindowListBox);
		mainWindowPanel.add(mainBottomWindowTextArea);
		
		mainTitleBar.setText("buhu");

		mainPanel.add(mainTitleBar);
		mainPanel.add(mainWindowPanel);
		mainPanel.add(mainStatusLabel);
		mainPanel.add(mainMenuPanel);
		
		
		RootPanel.get("ssClient").add(mainPanel);

	}

	protected void showMessagePanel() {
		// TODO Auto-generated method stub
		
	}

}
