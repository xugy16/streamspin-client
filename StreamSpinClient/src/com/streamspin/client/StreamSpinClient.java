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
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;


/**
 * @author jenslyn
 * @version 0.3.5
 *
 */
@ModulePrefs(title = "StreamSpin Client", author = "jenslyn", author_email = "jenslyn42@gmail.com")
public class StreamSpinClient extends Gadget<UserPreferences> implements
		NeedsDynamicHeight, NeedsIntrinsics{

	private DynamicHeightFeature gadgetHeightFeature;
	private static IntrinsicFeature intrinsics;
	private VerticalPanel mainPanel = new VerticalPanel();
	private HorizontalPanel mainMenuPanel = new HorizontalPanel();
	private VerticalPanel mainWindowPanel = new VerticalPanel();
	private ListBox mainTopWindowListBox = new ListBox(false);
	private TextArea mainBottomWindowTextArea = new TextArea();
	private MenuBar mainLeftMenu = new MenuBar();
	private Button mainRightButton = new Button("someTest");
	private Label mainStatusLabel = new Label();
	private HTML titleBar = new HTML();
	private VerticalPanel loginPanel = new VerticalPanel();
	private TextBox loginUnTextBox = new TextBox();
	private PasswordTextBox loginPwTextBox = new PasswordTextBox();
	private Button loginButton = new Button();
	private Image pic = new Image(GWT.getModuleBaseURL() + "images/daisy.gif");
	private int CLIENT_ROW_HEIGHT = 20;
	private int UPDATE_FREQ_MILLI_SEC = 25000; //DO NOT set this value below 20000, google will not be happy and the program will behave weird
	public static int UID = -1;
	public static String USERNAME = "jeppe";
	public static String PASSWORD = "jeppejeppe";
	
	int test = 0;
	//private ArrayList<ContentPopup> contentList = new ArrayList<ContentPopup>();
    AnswerWrapper ssAnswer = new AnswerWrapper();

	// Image image = new Image(GWT.getModuleBaseURL() + "images/somePic.gif");
	/*
	 * (non-Javadoc)
	 * 
	 * @see *
	 * com.google.gwt.gadgets.client.Gadget#init(com.google.gwt.gadgets.client *
	 * .UserPreferences)
	 */	


	@Override
	protected void init(UserPreferences preferences) {
		showLogin();
	}

	public void initializeFeature(DynamicHeightFeature heightFeature) {
		this.gadgetHeightFeature = heightFeature;
	}

	public void initializeFeature(IntrinsicFeature feature) {
		this.intrinsics = feature;	
	}

	public static IntrinsicFeature getIntrinsics() {
		return intrinsics;
	}
	
	//Used for empty menu items, not meant to be choosen
	Command cmd = new Command() {
		public void execute() {}
	};
	
	//Not Implemented command, used for 
	Command ni = new Command() { 
		public void execute() {
			Window.alert("You selected a menu item which has not yet been implemented!");
		}
	};
	
	private class setLocation implements Command
	{
		private Double lon, lat;
		
		public setLocation(Double longtitude, Double latitude)
		{
			this.lon = longtitude;
			this.lat = latitude;
		}
		
		public void execute() {
			Window.alert("Longtitude: "+lon+"\nLatitude: "+lat);
			// TODO make command which sets location
		}
	}
	
	private class startService implements Command
	{
		private int id;
		private String startURL;
		
		public startService(int id, String StartUrl)
		{
			this.id = id;
			this.startURL = StartUrl;
		}
		
		public void execute() {
			Window.open(startURL, "_blank", null);
		}
	}
	
	private class setProfile implements Command
	{
		private int id;
		
		public setProfile(int id)
		{
			this.id = id;
		}
		
		public void execute() {
			Window.alert("Id: "+id);
			// TODO make command which sets profile
		}
	}

	Command writeMessage = new Command() {
		public void execute() {
			new UserMessage();
		}
	};
	
	protected void makePic() {
		pic.setUrl(GWT.getModuleBaseURL() + "images/daisy.gif");
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
		setLocationMenu.addItem("Use GPS", cmd); // Not needed in web-client, but it seems so assuring to have under the location menu
		if(menuItems.getLocations().isEmpty())
		{
			setLocationMenu.addItem("No Predefined Locations",cmd);
		}
		for(Location loc: menuItems.getLocations())
		{
		setLocationMenu.addItem(loc.getName(), new setLocation(loc.getLongtitude(), loc.getLatitude()));
		}
		
		MenuBar startServiceMenu = new MenuBar(true);
		if(menuItems.getStartService().isEmpty())
		{
			startServiceMenu.addItem("No Service Subscriptions found",cmd);
		}
		for(StartService sService: menuItems.getStartService())
		{
			startServiceMenu.addItem(sService.getName(),new startService(sService.getServiceID(),sService.getStartURL()));
		}

		MenuBar setProfileMenu = new MenuBar(true);
		if(menuItems.getProfile().isEmpty())
		{
			setProfileMenu.addItem("No Interests Profiles found",cmd);
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
	
	// TODO add correct event at button press
	protected void makeMainRightButton() {
		mainRightButton.addClickListener(new ClickListener() {
			public void onClick(Widget sender) {
				// testConnection();
				mainBottomWindowTextArea.setText(ssAnswer.getAnswer());
			}
		});
		mainRightButton.getElement().setInnerText("Send Message");
		mainRightButton.setTitle("You can send messages to your friends with this");
	}

	protected void makeMainMenu() {
		makeMainLeftMenu();
		makeMainRightButton();
		makeWindowTitle(USERNAME+"@StreamSpin");

		mainMenuPanel.add(mainLeftMenu);
		mainMenuPanel.add(titleBar);
		mainMenuPanel.add(mainRightButton);
		mainMenuPanel.setCellHorizontalAlignment(mainLeftMenu,HasHorizontalAlignment.ALIGN_LEFT);
		mainMenuPanel.setCellHorizontalAlignment(titleBar,HasHorizontalAlignment.ALIGN_CENTER);
		mainMenuPanel.setCellHorizontalAlignment(mainRightButton,HasHorizontalAlignment.ALIGN_RIGHT);
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
				test++;
				AnswerWrapper ans = new AnswerWrapper();
				ans.setAnswer(null);
				new StreamSpinContact().contactStreamSpin(2, ans, "uid="+UID);
				new mainTopWindowListBoxContentupdate(ans, test).run();
			}
		};
		
		timer.scheduleRepeating(UPDATE_FREQ_MILLI_SEC);
	}
	
	private class mainTopWindowListBoxContentupdate
	{
		private final AnswerWrapper answer;
		
		public mainTopWindowListBoxContentupdate(AnswerWrapper answer, int test) 
		{
			this.answer = answer;
		}
		
		Timer timer = new Timer() {
			public void run() {
				if (answer.getAnswer() != null) {
					cancel();
					//Window.alert("Check"+test+"\n"+answer.getAnswer());
					mainTopWindowListBox.addItem("Check"+test,answer.getAnswer());
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
}


