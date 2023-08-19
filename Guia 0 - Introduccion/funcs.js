/*
function BiggerImage(id) {
    var elem = document.getElementById(id);
    var oldWidth = elem.style.width;

    if (!oldWidth) {
        oldWidth = getComputedStyle(elem).width;
    }

    var numericWidth = parseFloat(oldWidth);
    var newWidth = numericWidth + numericWidth * 0.05;

    elem.style.width = newWidth + "px";
    
}

function SmallerImage(id) {
    var elem = document.getElementById(id);
    var oldWidth = elem.style.width;

    if (!oldWidth) {
        oldWidth = getComputedStyle(elem).width;
    }

    var numericWidth = parseFloat(oldWidth);
    var newWidth = numericWidth - numericWidth * 0.05;

    elem.style.width = newWidth + "px";
}
*/