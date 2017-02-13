/*
 * JavaScript Sliding Nav List
 * Author: Addison C. Quijano Sorca
 * Email: addison.sorca@nv.ccsd.net
 * Description: If used with a properly formatted HTML document, this script will, upon the user clicking on a button, activate a CSS transition that will move a div located offscreen to the left into the viewport.
 * Version 0.9.0
 */

/* Notes
    This script is repurposed from an attempted swcta.net redesign. It requires a nav element, a button (can be a div) with an id of "nav-button", a 100% width div with the id "nav-button-container", and a main element.
    
    Important: It is the navButtonContainer that is translated, NOT the navButton itself.
*/

// Declaration of variables for DOM elements and onpage
var nav = document.getElementsByTagName("nav")[0],
    navButton = document.getElementById("nav-button"),
    navButtonContainer = document.getElementById("nav-button-container"),
    main = document.getElementsByTagName("main")[0],
    onpage = false; // Decides if Nav is in view of user

// Puts Nav on page
function slidein() {
    'use strict'; // I hate JSLint
    nav.style.transform = "translate(100%)";
    navButtonContainer.style.transform = "translate(100%)";
    navButton.style.backgroundImage = "url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'><rect width='30' height='6'/><rect y='24' width='30' height='6'/><rect y='12' width='30' height='6'/></svg>)";
    onpage = true;
}

// Takes Nav off Page
function slideout() {
    'use strict';
    nav.style.transform = "translate(0)";
    navButtonContainer.style.transform = "translate(0)";
    navButton.style.backgroundImage = "url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'><rect width='30' height='6'/><rect y='24' width='30' height='6'/><rect y='12' width='30' height='6'/></svg>)";
    onpage = false;
}

// If statement for Nav Button
// Activates slidein() or slideout() depending on value of onpage
function slide() {
    'use strict';
    if (onpage) {
        slideout();
    } else {
        slidein();
    }
}

// Slides out Nav if on page
function slideoutclick() {
    'use strict';
    if (onpage) {
        slideout();
    }
}

// Onclick of Nav Button (slidein and slideout)
navButton.addEventListener("click", slide);

// Onclick of Main (slideoutclick)
main.addEventListener("click", slideout);

// Unload (slideoutclick)
window.addEventListener("beforeunload", slideout);

// For fun
function crashBrowser() {
    'use strict';
    while (true) {
        window.console.log("Haha");
    }
}
if (document.getElementById("do-not-click") !== null) {
    document.getElementById("do-not-click").addEventListener("click", crashBrowser);
}