// set up text to print, each item in array is new line
var aText = new Array(
    "Hi, iam Arnav G"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

































function projects() { 
    window.scroll(0,  
findPosition(document.getElementById("projects"))); 
} 
function findPosition(obj) { 
    var currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop]; 
    } 
} 

function credits() { 
    window.scroll(0,  
findPosition(document.getElementById("credits"))); 
} 
function findPosition(obj) { 
    var currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop]; 
    } 
} 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// credits: https://getwallpapers.com/wallpaper/full/3/2/2/1069448-full-size-funky-wallpaper-1920x1200-for-mac.jpg- wallpaper
            //https://www.pngfind.com/download/wmRoTJ_code-png-code-logo-png-transparent-png/ -image of code logo