//your JS code here. If required.
var element = document.getElementById("level");
var n = 0;

while (element != null) {
    n++;
    element = element.parentNode;
}

alert("The level of the element is: " + n);