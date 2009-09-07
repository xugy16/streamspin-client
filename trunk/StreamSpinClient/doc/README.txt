The webclient consist of two parts, a google gadget and a webpage.

Since the gadget is made entirely in javascript, using GWT with the gadget library, the webclient cannot 
do TCP or other socket connections as the other StreamSpin clients does. In stead the webclient does GET
requests to a webpage, which then does handles the communication to the StreamSpin service through webservice
calls.


The webpage
Handles GET requests, and if a request needs a response, it is returned as UTF-16 encoded,
version 1.0, XML.
The 'Default.aspx.cs' is the main page and any questions about the specifics of the internal 
structure and logic should be easily answered by starting at 'Default.aspx.cs' and reading 
the C# xml documentation.
The webclient webpage have full xml documentation explaining the purpose of all classes and 
methods.
The webpage is currently (5/9-09) residing in the streamspin1209/website_webclient folder on
the StreamSpin.com server



The Google gadget
First download Google Web Toolkit here: http://code.google.com/webtoolkit/ the webclient
has been build with version 1.7.0 

The gadget project is set up as a Google Web Toolkit (GWT) with the gadget 1.0 API library (v 1.3), and
using the webAppCreators option to generate the project with an Eclipse project file.
See http://code.google.com/webtoolkit/gettingstarted.html to find out how to set 
up a project with GWT (with or without Eclipse)

The Gadget API can be found and downloaded here: 
http://code.google.com/webtoolkit/googleapilibraries.html

The only real requirement for importing the webclient project into you favorite IDE
is that you as minimum have the following jars on you path:
gwt-user.jar
gwt-gadgets.jar
the jars from 1.6+ Java JRE

The script which compiles the project lies in StreamSpinClient/ and is called StreamSpinClient-compile
(there is a script for Linux and a .bat file for windows.)