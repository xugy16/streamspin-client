package com.streamspin.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Window;
import com.google.gwt.xml.client.Document;
import com.google.gwt.xml.client.Element;
import com.google.gwt.xml.client.XMLParser;
import com.google.gwt.xml.client.NodeList;

public class XmlParser {
	
	static private ArrayList<Content> contentList = null;
	static private UserInfo usrInfo = null;
	static private ArrayList<Friend> friendList = null;
	
	static private XmlParser _instance = null;
	
	
	private XmlParser(){ }
	
	
	static public XmlParser instance()
	{
		if(_instance == null) 
		{
			_instance = new XmlParser();
		}
		return _instance;
	}
	
	public ArrayList<Content> contentXmlParsing(String xml) {
		
		contentList = new ArrayList<Content>();
		
		try {
			Document xmlDoc = XMLParser.parse(xml);
			Element root = xmlDoc.getDocumentElement();

			int msgNum = root.getElementsByTagName("msg").getLength();
			Element headlineElement = null;
			Element contentElement = null;
			String headlineValue = null;
			String contentValue = null;
			for (int i = 0; i < msgNum; i++) 
			{
				headlineElement = (Element) root.getElementsByTagName("headline").item(i);
				contentElement = (Element) root.getElementsByTagName("content").item(i);
				headlineValue = headlineElement.getChildNodes().item(0).toString();
				contentValue = contentElement.getChildNodes().item(0).getNodeValue();
				
				contentList.add(new Content(headlineValue,contentValue));
			}
		} catch (Exception e) {
			Window.alert("Exception!\nCould not parse content update: \n\n" + e.getMessage() + "\n\n"+ e.getStackTrace());
		}

		return contentList;
	}
	
	public UserInfo userInfoXmlParsing(String xml) throws Exception {

		usrInfo = new UserInfo(-1, new ArrayList<Location>(), null, -1,
				new ArrayList<StartService>(), new ArrayList<Profile>(),
				new ArrayList<ServiceProfile>());

		try {
			Document xmlDoc = XMLParser.parse(xml);
			Element root = xmlDoc.getDocumentElement();

			usrInfo.setUid(Integer.parseInt(root.getAttribute("uid")));
			StreamSpinClient.UID = usrInfo.getUid();

			int numLocations = root.getElementsByTagName("locations").item(0).getChildNodes().getLength();
			NodeList location;
			Double lon;
			Double lat;
			String locName;
			
			for (int j = 0; j < ((numLocations - 1) / 2); j++) {
				location = root.getElementsByTagName("location").item(j).getChildNodes();
				locName = location.item(1).getChildNodes().toString();
				lon = Double.parseDouble(location.item(3).getChildNodes().toString());
				lat = Double.parseDouble(location.item(5).getChildNodes().toString());

				usrInfo.addLocation(new Location(lon, lat, locName));
			}
			
			Boolean defaulton = Boolean.valueOf(root.getElementsByTagName("defaulton").item(0).getChildNodes().item(0).getNodeValue());
			usrInfo.setGpsDefault(defaulton);

			int treshhold = Integer.parseInt(root.getElementsByTagName("treshhold").item(0).getChildNodes().item(0).getNodeValue());
			usrInfo.setGpsThreshold(treshhold);

			int numSServices = root.getElementsByTagName("startservices").item(0).getChildNodes().getLength();
			NodeList service;

			for (int i = 0; i < (numSServices - 1) / 2; i++) {
				service = root.getElementsByTagName("startservice").item(i).getChildNodes();
				int id = Integer.parseInt(service.item(1).getChildNodes().toString());
				String name = service.item(3).getChildNodes().toString();
				String url = service.item(5).getChildNodes().toString();

				usrInfo.addStartService(new StartService(id, name, url));
			}

			int numProfiles = root.getElementsByTagName("profiles").item(0).getChildNodes().getLength();
			Element profile;

			for (int j = 0; j < ((numProfiles - 1) / 2); j++) {
				profile = (Element) root.getElementsByTagName("profile").item(j);
				usrInfo.addProfile(new Profile(Integer.parseInt(profile.getAttribute("id")), profile.getChildNodes().item(0).getNodeValue()));
			}

			int numSProfile = root.getElementsByTagName("serviceprofiles").item(0).getChildNodes().getLength();
			NodeList serviceProfile;

			for (int i = 0; i < (numSProfile - 1) / 2; i++) {
				serviceProfile = root.getElementsByTagName("serviceprofile").item(i).getChildNodes();
				String name = serviceProfile.item(1).getChildNodes().toString();
				String xmlScript = serviceProfile.item(3).getChildNodes().toString();
				String serviceId = serviceProfile.item(5).getChildNodes().toString();
				String scriptUrl = serviceProfile.item(7).getChildNodes().toString();
				
				usrInfo.addServiceProfile(new ServiceProfile(name,xmlScript,serviceId,scriptUrl));
			}

		} catch (Exception e) {
			throw(e);	
			//Window.alert("There is an exception:\n" + e.getMessage() + "\n\n"+ e.getStackTrace());
		}
		
		return usrInfo;
	}
	
	public ArrayList<Friend> friendXmlParsing(String xml) throws Exception{
		
		friendList = new ArrayList<Friend>();
		
		try {
			Document xmlDoc = XMLParser.parse(xml);
			Element root = xmlDoc.getDocumentElement();

			int msgNum = root.getElementsByTagName("friend").getLength();
			Element idElement = null;
			Element nameElement = null;
			int idValue;
			String nameValue = null;
			for (int i = 0; i < msgNum; i++) 
			{
				idElement = (Element) root.getElementsByTagName("id").item(i);
				nameElement = (Element) root.getElementsByTagName("name").item(i);
				idValue = Integer.parseInt(idElement.getChildNodes().item(0).toString());
				nameValue = nameElement.getChildNodes().item(0).getNodeValue();
				
				friendList.add(new Friend(idValue,nameValue));
			}
		} catch (Exception e) {
			throw(e);
		}
		
		return friendList;
		
	}
}
