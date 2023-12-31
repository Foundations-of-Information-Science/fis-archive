if (!exclude) {

	var menuALIGN = "left";		// alignment
	var absLEFT = 8;		// absolute left or right position (if not center)
	var absTOP = 51; 		// absolute top position

	var staticMENU = false;		// static positioning mode (ie5/6 and ns4 only)

	var stretchMENU = false;	// show empty cells
	var showBORDERS = false;	// show empty cell borders

	var basePATH = "/";
	var baseHREF = "scripts/";	// base path (published)
	var zORDER = 1000;		// base z-order of nav structure (not ns4)

	var mCOLOR = "#FFFFFF";	// main nav cell color
	var rCOLOR = "#8794A3";	// main nav cell rollover color
	var keepLIT = true;		// keep rollover color when browsing menu
	var bSIZE = 0;		// main nav border size
	var bCOLOR = "#000000"	// main nav border color
	var aLINK = "#000000";	// main nav link color
	var aHOVER = "";		// main nav link hover-color (dual purpose)
	var aDEC = "none";		// main nav link decoration
	var fFONT = "Verdana, Helvetica, sans-serif";	// main nav font face		
	var fSIZE = 11;		// main nav font size (pixels)	
	var fWEIGHT = "normal"	// main nav font weight
	var tINDENT = 8;		// main nav text indent (if text is left or right aligned)
	var vPADDING = 2;		// main nav vertical cell padding
	var vtOFFSET = 1;		// main nav vertical text offset (+/- pixels from middle)

	var vOFFSET = 0;		// shift the submenus vertically
	var hOFFSET = 0;		// shift the submenus horizontally

	var smCOLOR = "FFFFFF";	// submenu cell color
	var srCOLOR = "#8794A3";	// submenu cell rollover color
	var sbSIZE = 1;		// submenu border size
	var sbCOLOR = "#000000";	// submenu border color
	var saLINK = "#000000";	// submenu link color
	var saHOVER = "#000000";	// submenu link hover-color (dual purpose)
	var saDEC = "none";		// submenu link decoration
	var sfFONT = "Verdana, Helvetica, sans-serif";// submenu font face		
	var sfSIZE = 11;		// submenu font size (pixels)	
	var sfWEIGHT = "normal"	// submenu font weight
	var stINDENT = 5;		// submenu text indent (if text is left or right aligned)
	var svPADDING = 2;		// submenu vertical cell padding
	var svtOFFSET = 0;		// submenu vertical text offset (+/- pixels from middle)

	var shSIZE = 3;		// menu drop shadow size 
	var shCOLOR = "#bcbcbc";	// menu drop shadow color
	var shOPACITY = 100;		// menu drop shadow opacity (ie5/6 only)

	var keepSubLIT = true;		// keep submenu rollover color when browsing child menu	
	var chvOFFSET = -3;		// shift the child menus vertically 			
	var chhOFFSET = -5;		// shift the child menus horizontally 		

	var closeTIMER = 330;		// menu closing delay time

	var cellCLICK = true;		// links activate on TD click
	var aCURSOR = "hand";		// cursor for active links (ie only)

	var altDISPLAY = "title";	// where to display alt text

	//** LINKS ***********************************************************
	// add main link item ("url","Link name",width,"text-alignment","target")
	addMainItem(basePATH + "fis2002/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> FIS 2002", 80, "left", "");
	// define submenu properties (width,"align to edge","text-alignment")
	defineSubmenuProperties(140, "left", "left");
	// add submenu link items ("url","Link name","target")
	addSubmenuItem(basePATH + "fis2002/prediscussion.html", "Pre 2002 Discussion", "");
	addSubmenuItem(basePATH + "fis2002/discussion.html", "Discussion", "");
	addSubmenuItem(basePATH + "fis2002/postdiscussion.html", "Post 2002 Discussion", "");
	//	addSubmenuItem(basePATH+"fis2002/introduction.html","(Introduction)","");
	//	addSubmenuItem(basePATH+"fis2002/proceedings.html","(Proceedings)","");

	addMainItem(basePATH + "fis98/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> FIS 98", 65, "left", "");
	defineSubmenuProperties(130, "left", "left");
	addSubmenuItem(basePATH + "fis98/discussion.html", "Discussion", "");
	addSubmenuItem(basePATH + "fis98/postdiscussion.html", "Post 98 Discussion", "");

	addMainItem(basePATH + "fis96/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> FIS 96", 70, "center", "");
	defineSubmenuProperties(100, "left", "left");
	addSubmenuItem(basePATH + "fis96/introduction.html", "Introduction", "");
	addSubmenuItem(basePATH + "fis96/programme.html", "Programme", "");
	addSubmenuItem(basePATH + "fis96/participants.html", "Participants", "");
	addSubmenuItem(basePATH + "fis96/proceedings.html", "Proceedings", "");

	addMainItem(basePATH + "fis94/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> FIS 94", 70, "left", "");
	defineSubmenuProperties(100, "left", "left");
	addSubmenuItem(basePATH + "fis94/introduction.html", "Introduction", "");
	addSubmenuItem(basePATH + "fis94/proceedings.html", "Proceedings", "");

	addMainItem(basePATH + "other_conferences.html", "<img src='" + basePATH + "images/dot.gif' border='0'> Other Conferences", 135, "left", "");
	defineSubmenuProperties(170, "left", "left");
	addSubmenuItem(basePATH + "emcsr02/index.html", "EMCSR 2002", "");
	addSubmenuItem(basePATH + "iass99/index.html", "IASS-AIS 99", "");
	addSubmenuItem(basePATH + "isss99/index.html", "ISSS 99", "");

	addMainItem(basePATH + "resources/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> Resources", 85, "left", "");
	defineSubmenuProperties(110, "left", "left");
	addSubmenuItem(basePATH + "resources/papers.html", "Papers", "");
	addSubmenuItem(basePATH + "resources/preprints.html", "Preprints", "");
	addSubmenuItem(basePATH + "resources/teaching.html", "Teaching", "");
	addSubmenuItem(basePATH + "resources/biographies.html", "Biographies", "");
	addSubmenuItem(basePATH + "resources/obituaries.html", "Obituaries", "");

	addMainItem(basePATH + "archive/index.html", "<img src='" + basePATH + "images/dot.gif' border='0'> <font color='red'>Archive</font>", 70, "left", "");
	defineSubmenuProperties(110, "left", "left");
	addSubmenuItem("https://fis-archive.netlify.app/", "Mail Archive", "");

	addMainItem(basePATH + "contact.html", "<img src='" + basePATH + "images/dot.gif' border='0'> Contact", 70, "left", "");

}