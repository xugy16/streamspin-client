package com.streamspin.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * Popup which shows the content of a StreamSpin update,
 * which disappears if you press it again.
 * Can also open a new browser window if the content of
 * an update is a URL.
 * 
 * @author jenslyn
 */
public class ContentPopup extends PopupPanel {

	/**
	 * HTML content to be shown in the popup
	 */
	private String content;
	/**
	 * Reference to the {@link ContentPopup} object, 
	 * used when hiding the popup as a result of mouse
	 * click
	 */
	private final ContentPopup self;

	/**
	 * {@link ContentPopup} constructor
	 * 
	 * @param content HTML content to be shown in the popup or used as URL
	 * to open a new browser window
	 */
	public ContentPopup(String content) {
		// PopupPanel's constructor takes 'auto-hide' as its boolean parameter.
		// If this is set, the panel closes itself automatically when the user
		// clicks outside of it.
		super(true);
		this.content = content;
		this.self = this;

		if(content.startsWith("http://"))
			openUrl();
		else
			setHTMLContent();
	}
	
	/**
	 * Shows the {@link ContentPopup#content} in a popup window
	 */
	private void setHTMLContent()
	{
		HTML con = new HTML(content, true);
		con.setSize(String.valueOf(Window.getClientWidth()*0.9), String.valueOf(Window.getClientHeight()*0.9));
		con.addClickListener(new ClickListener(){
			public void onClick(Widget sender) {
				self.hide();
			}		
		});
		setWidget(con);
	}
	
	/**
	 * Uses the {@link ContentPopup#content} as the URL to open
	 * a new browser window.
	 */
	private void openUrl()
	{
		Window.open(content, "_blank", null);
	}
}
