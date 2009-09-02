package com.streamspin.client;

import java.util.ArrayList;

import com.google.gwt.core.client.GWT;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import com.google.gwt.gadgets.client.Gadget;
import com.google.gwt.gadgets.client.IntrinsicFeature;
import com.google.gwt.gadgets.client.NeedsDynamicHeight;
import com.google.gwt.gadgets.client.NeedsIntrinsics;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.gadgets.client.Gadget.ModulePrefs;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;


/**
 * @author jenslyn
 * @version 0.6.0
 * @gadgetVersion 1.7
 * 
 * StreamSpinClient is the main class which extends Gadget in order
 * for GWT to be able to handle gadget specific features like adjustment
 * of the gadget container height (NeedsDynamicHeight)-
 * 
 * ModulePrefs states the gadget preferences used by the google gadget.
 * 
 * @see com.google.gwt.gadgets.client.NeedsIntrinsics
 * @see com.google.gwt.gadgets.client.NeedsDynamicHeight
 */
@ModulePrefs(title = "StreamSpin Client", author = "jenslyn", author_email = "jenslyn@cs.aau.dk")
public class StreamSpinClient extends Gadget<UserPreferences> implements
		NeedsDynamicHeight, NeedsIntrinsics{

	private DynamicHeightFeature gadgetHeightFeature;
	private static IntrinsicFeature intrinsics;
	private VerticalPanel mainPanel = new VerticalPanel();
	private HorizontalPanel mainMenuPanel = new HorizontalPanel();
	private VerticalPanel mainWindowPanel = new VerticalPanel();
	private ListBox mainTopWindowListBox = new ListBox(false);
	private MenuBar mainLeftMenu = new MenuBar();
	private Label mainStatusLabel = new Label();
	private HTML titleBar = new HTML();
	private VerticalPanel loginPanel = new VerticalPanel();
	private TextBox loginUnTextBox = new TextBox();
	private PasswordTextBox loginPwTextBox = new PasswordTextBox();
	private Button loginButton = new Button();
	private Image daisyPic = new Image(GWT.getModuleBaseURL() + "images/daisy.gif");
	private int CLIENT_ROW_HEIGHT = 20;
	//DO NOT set this value below 20000, the mighty google will not be happy and the program updates will behave weird
	private int UPDATE_FREQ_MILLI_SEC = 25000; 
	protected static int UID = -1;
	protected static String USERNAME;
	protected static String PASSWORD;
	
    AnswerWrapper ssAnswer = new AnswerWrapper();

	/**
	 * (non-Javadoc)
	 * 
	 * @param CLIENT_ROW_HEIGHT		Defines the height of the gadget based on the number of
	 *            					visible update rows in the client.
	 * @param UPDATE_FREQ_MILLI_SEC	Number of milliseconds between each 
	 * 								check for new updates from StreamSpin.
	 * @param UID					The user id of the user logged in.
	 * @param USERNAME				The user name of the user logged in, only used at login time
	 * @param PASSWORD				The password of the user logged in, used with most request to
	 *            					the StreamSpin server
	 * 
	 * @see com.google.gwt.gadgets.client.Gadget#init(com.google.gwt.gadgets.client.UserPreferences)
	 */	


	@Override
	/**
	 * Main entry point, first thing called at program startup
	 */
	protected void init(UserPreferences preferences) {
		showLogin();
	}

	/**
	 * Initializes the {@link DynamicHeightFeature}, enabling the gadget
	 * to adjust its height (it is impossible adjust its width, it is 
	 * determined by the page it is placed on).
	 * 
	 */
	public void initializeFeature(DynamicHeightFeature heightFeature) {
		this.gadgetHeightFeature = heightFeature;
	}

	/**
	 * Initializes the {@link IntrinsicFeature} enabling the compiled
	 * Java Script to call StreamSpin.com, no matter what domain the
	 * gadget is hosted on.
	 * 
	 * @see com.google.gwt.gadgets.client.IntrinsicFeature
	 */
	public void initializeFeature(IntrinsicFeature feature) {
		this.intrinsics = feature;	
	}

	/**
	 * Since the {@link IntrinsicFeature} can only be initialized 
	 * in the main class, this function allows other classes to call
	 * a url. 
	 * @return The {@link IntrinsicFeature} variable
	 */
	public static IntrinsicFeature getIntrinsics() {
		return intrinsics;
	}
	
	/**
	 * Command used in the menu for items not implemented or
	 * "No items" sub-menus.
	 */
	Command ni = new Command() { 
		public void execute() {
		}
	};
	
	/**
	 * Command: Sets the users current location

	 * Based on a predefined location defined
	 * on the StreamSpin webpage, and retrieved
	 * by the client at login time
	 * 
	 * @author jenslyn
	 */
	private class setLocation implements Command
	{
		private Double lon, lat;
		
		/**
		 * setLocation constructor
		 * 
		 * @param longitude Longitude of the location
		 * @param latitude Latitude of the location
		 */
		public setLocation(Double longitude, Double latitude)
		{
			this.lon = longitude;
			this.lat = latitude;
		}
		
		public void execute() {
			final AnswerWrapper answer = new AnswerWrapper();

			new StreamSpinContact().contactStreamSpin(5, answer, "lon="+ lon, "lat" + lat, "uid="+ StreamSpinClient.UID);
			final Timer timer = new Timer() {
				public void run() {
				}
			};
			timer.scheduleRepeating(1000);
		}
	}
	

	/**
	 * Command: starts a service
	 * 
	 * @author jenslyn
	 */
	private class startService implements Command
	{
		private int id;
		private String startURL;
		
		/**
		 * startService constructor
		 * 
		 * @param id The service id
		 * @param StartUrl The service url
		 */
		public startService(int id, String StartUrl)
		{
			this.id = id;
			this.startURL = StartUrl;
		}
		
		public void execute() {
			startURL = startURL+"?userid="+UID+"&serviceid="+id+"&unique="+System.currentTimeMillis();
			Window.open(startURL, "_blank", null);
		}
	}
	
	/**
	 * Command: sets the current interrest profile
	 * of the user.
	 * 
	 * @author jenslyn
	 */
	private class setProfile implements Command
	{
		private int id;
		
		/**
		 * setProfile contructor
		 * 
		 * @param id Profile id
		 */
		public setProfile(int id)
		{
			this.id = id;
		}
		
		public void execute() {
			Window.alert("Id: "+id);
			// TODO make command which sets profile
		}
	}

	/**
	 * Command: makes a new message Object
	 * to allow the user to send a message
	 * to any of his online friends.
	 */
	Command writeMessage = new Command() {
		public void execute() {
			new UserMessage();
		}
	};
	
	/**
	 * ...
	 */
	protected void makePic() {
		daisyPic.setUrl(GWT.getModuleBaseURL() + "images/daisy.gif");
	}

	
	protected void makeMain() {
		
		makeMainMenu();
		makeMainWindowPanel();
		makeMainOnlineStatus(true);

		mainPanel.add(mainMenuPanel);
		mainPanel.add(mainWindowPanel);
		mainPanel.add(mainStatusLabel);

		mainPanel.setHeight("300px");
		mainPanel.setWidth("100%");
		RootPanel.get().add(mainPanel);

		// gadget specific code to adjust height
		gadgetHeightFeature.getContentDiv();
		gadgetHeightFeature.adjustHeight();


	}

	protected void makeWindowTitle(String string) {
		titleBar.setText(string);
	}

	protected void makeMainOnlineStatus(Boolean online) {
		if (online) {
			mainStatusLabel.getElement().setInnerHTML("Status: <b>Online</b>");
		} else {
			mainStatusLabel.getElement().setInnerHTML("Status: <b>Offline</b>");
		}
	}
	

	// TODO add correct method calls for menu items
	protected void makeMainLeftMenu() {
		
		UserInfo menuItems = null;
		//Window.alert(ssAnswer.getAnswer());
		try{
			menuItems = XmlParser.instance().userInfoXmlParsing(ssAnswer.getAnswer());
		} catch (Exception e) {
			Window.alert("Application encountered a problem contacting StreamSpin\nPlease reload the application\n\n"
							+ "If the problem persist StreamSpin may be down for maintenance\n\n"
							+ e.toString());
		}

		MenuBar debugMenu = new MenuBar(true);
		debugMenu.addItem("On", ni);
		debugMenu.addItem("Off", ni);

		MenuBar setLocationMenu = new MenuBar(true);
		setLocationMenu.addItem("Use GPS", ni); // Not needed in web-client, but it seems so assuring to have under the location menu
		if(menuItems.getLocations().isEmpty())
		{
			setLocationMenu.addItem("No Predefined Locations",ni);
		}
		for(Location loc: menuItems.getLocations())
		{
		setLocationMenu.addItem(loc.getName(), new setLocation(loc.getLongtitude(), loc.getLatitude()));
		}
		
		MenuBar startServiceMenu = new MenuBar(true);
		if(menuItems.getStartService().isEmpty())
		{
			startServiceMenu.addItem("No Service Subscriptions found",ni);
		}
		for(StartService sService: menuItems.getStartService())
		{
			startServiceMenu.addItem(sService.getName(),new startService(sService.getServiceID(),sService.getStartURL()));
		}

		MenuBar setProfileMenu = new MenuBar(true);
		if(menuItems.getProfile().isEmpty())
		{
			setProfileMenu.addItem("No Interests Profiles found",ni);
		}
		for(Profile p: menuItems.getProfile())
		{
			setProfileMenu.addItem(p.getName(), new setProfile(p.getID()));
		}

		MenuBar menuMenu = new MenuBar(true);
		menuMenu.addItem("Enable debug Mode", debugMenu);
		menuMenu.addItem("Exit", ni);
		menuMenu.addItem("Write Message", writeMessage);

		menuMenu.addItem("Set Location", setLocationMenu);
		menuMenu.addItem("Start Service", startServiceMenu);
		menuMenu.addItem("Set Profile", setProfileMenu);

		// the main menu
		mainLeftMenu.addItem("Menu", menuMenu);
		mainLeftMenu.setAutoOpen(false);
		mainLeftMenu.setWidth("65px");
	}

	protected void makeMainMenu() {
		makeMainLeftMenu();
		daisyPic.setHeight("40px");
		makeWindowTitle(firstCharCapitalized(USERNAME)+"@StreamSpin");

		mainMenuPanel.add(mainLeftMenu);
		mainMenuPanel.add(titleBar);
		mainMenuPanel.add(daisyPic);
		mainMenuPanel.setCellHorizontalAlignment(mainLeftMenu,HasHorizontalAlignment.ALIGN_LEFT);
		mainMenuPanel.setCellHorizontalAlignment(titleBar,HasHorizontalAlignment.ALIGN_CENTER);
		mainMenuPanel.setCellHorizontalAlignment(daisyPic,HasHorizontalAlignment.ALIGN_RIGHT);
		mainMenuPanel.setWidth("100%");
	}

	protected void makeMainWindowPanel() {
		mainTopWindowListBoxContent();
		mainTopWindowListBox.addClickListener(new ClickListener() {
			public void onClick(Widget sender) {
				final ContentPopup con = new ContentPopup(mainTopWindowListBox.getValue(mainTopWindowListBox.getSelectedIndex()));
				con.setPopupPositionAndShow(new PopupPanel.PositionCallback() {
					public void setPosition(int offsetWidth, int offsetHeight) {
						int left = (Window.getClientWidth()/2 - offsetWidth);
						int right = (Window.getClientHeight()/2 - offsetHeight);
						con.setPopupPosition(left, right);
					}
				});
			}
		});

		mainTopWindowListBox.setVisibleItemCount(CLIENT_ROW_HEIGHT);
		mainTopWindowListBox.setWidth("100%");//
		mainWindowPanel.add(mainTopWindowListBox);
		mainWindowPanel.setHeight("100px");
		mainWindowPanel.setWidth("100%");
	}

	
	protected void mainTopWindowListBoxContent()
	{
		
		Timer timer = new Timer() {
			public void run() {
				AnswerWrapper ans = new AnswerWrapper();
				ans.setAnswer(null);
				new StreamSpinContact().contactStreamSpin(2, ans, "uid="+UID);
				new mainTopWindowListBoxContentupdate(ans).run();
			}
		};
		
		timer.scheduleRepeating(UPDATE_FREQ_MILLI_SEC);
	}
	
	private class mainTopWindowListBoxContentupdate
	{
		private final AnswerWrapper answer;
		
		public mainTopWindowListBoxContentupdate(AnswerWrapper answer) 
		{
			this.answer = answer;
		}
		
		Timer timer = new Timer() {
			public void run() {
				if (answer.getAnswer() != null) {
					cancel();
					//Window.alert("Check"+test+"\n"+answer.getAnswer());
					mainTopWindowListBox.addItem("Check",answer.getAnswer());
					if (!answer.getAnswer().isEmpty()) {
						ArrayList<Content> content = XmlParser.instance().contentXmlParsing(answer.getAnswer());
						for (Content cont : content) {
							mainTopWindowListBox.addItem(cont.getHeadline(),cont.getContent());
						}

					}
				}
			}
		};
		
		public void run()
		{
		timer.scheduleRepeating(500);
		}
	}

	protected void showLogin() {
		makeWindowTitle("Login Screen");

		loginButton.getElement().setInnerHTML("<b>Login</b>");
		loginButton.addClickListener(new ClickListener() {
			public void onClick(Widget sender) {
				if (loginUnTextBox.getText().length() > 0 && loginPwTextBox.getText().length() > 0) {
					StreamSpinClient.USERNAME = loginUnTextBox.getText();
					StreamSpinClient.PASSWORD = loginPwTextBox.getText();
					RootPanel.get().remove(loginPanel);
					new StreamSpinContact().contactStreamSpin(8, ssAnswer);
					new startUpLoadingScreen();
				}
				else Window.alert("Both username and password has to be filled out");
			}
		});
		
		loginPanel.add(titleBar);
		loginPanel.add(loginUnTextBox);
		loginPanel.add(loginPwTextBox);
		loginPanel.add(loginButton);

		RootPanel.get().add(loginPanel);
	}

	// TODO add correct event at button press
	protected void loginFunc(String un, String pw) {
		loginButton.getElement().setInnerText("un: " + un + ", pw: " + pw);
	}

	private class startUpLoadingScreen extends PopupPanel {

		public startUpLoadingScreen() {
			super(false);
			this.show();
			final startUpLoadingScreen self = this;

			HTML cc = new HTML();
			cc.setHTML("</br><center><font size=\"6\" face=\"Times\" color=\"Green\">" +
					"Loading...</font></br></br></br>" +
					"<img border=\"0\" src=\""+GWT.getModuleBaseURL() + "images/ajax-loader.gif\" /> " +
							"</center>");
			cc.setSize("" + Window.getClientWidth() * 0.95, ""+ Window.getClientHeight() * 0.9);
			setWidget(cc);

			final Timer timer = new Timer() {
				public void run() {
					if(ssAnswer.getAnswer()!=null){
						cancel();
						makeMain();	
						self.hide();
					}
				}
			};
			
			timer.scheduleRepeating(1000); //Can be lowered to facilitate faster startup time, but the loading screen is so lovely :)
		}
	}
	
	public static String firstCharCapitalized(String s) {
		return (s.length() > 0) ? Character.toUpperCase(s.charAt(0))+ s.substring(1) : s;
	}
}


