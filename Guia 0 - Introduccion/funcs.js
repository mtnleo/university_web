function PromptImageName(text) {
    alert(text)
}

function BiggerImage(id) {
    var elem = document.getElementById(id);
    var oldWidth = elem.style.width;

    if (!oldWidth) {
        oldWidth = getComputedStyle(elem).width;
    }

    var numericWidth = parseFloat(oldWidth);
    var newWidth = numericWidth + numericWidth * 0.05;

    for(var i = numericWidth; i < newWidth; i++) {
        
        numericWidth += 0.5;
        elem.style.width = numericWidth + "px";
    }
    
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