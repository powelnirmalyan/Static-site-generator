/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "Jekyll":
      return "https://jekyllrb.com/";
  case "Pelican":
	return "http://blog.getpelican.com/";
  case "Django":
	return "https://www.djangoproject.com/";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

