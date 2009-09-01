package com.streamspin.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.Widget;

public class ContentPopup extends PopupPanel {

	String content;
	final ContentPopup self;

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
		
		
//		TextArea cc = new TextArea();
//		cc.setText(content);
//		cc.setReadOnly(true);
//		cc.setSize(String.valueOf(Window.getClientWidth()*0.9), String.valueOf(Window.getClientHeight()*0.9));
//		cc.addClickListener(new ClickListener(){
//
//			public void onClick(Widget sender) {
//				self.hide();
//			}		
//		});
//		setWidget(cc);
	}
	
	private void setHTMLContent()
	{
		HTML con = new HTML(content, false);
		con.addClickListener(new ClickListener(){
			public void onClick(Widget sender) {
				self.hide();
			}		
		});
		setWidget(con);
	}
	
	private void openUrl()
	{
		Window.open(content, "_blank", null);
	}
}
