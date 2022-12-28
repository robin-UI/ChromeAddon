const widget = document.querySelector('#widget')
widget.style.display = "none"

const mouse = {
    x: undefined,
    y: undefined
}


//Code for select the text
var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    document.getElementById('input').value = t;
    mouse.x = e.x;
    mouse.y = e.y;
    displayWidget();
}
document.onmouseup = gText;

if (!document.all) document.captureEvents(Event.MOUSEUP);

//find the mouse position
function displayWidget() {
    widget.style.display = "block";
    widget.style.left = mouse.x + "px";   
    widget.style.top = mouse.y + "px";
    console.log(mouse)
}

mouse.x && window.addEventListener("click", (e) => {
    mouse.x = undefined;
    mouse.y = undefined;
    console.log(mouse);
    widget.style.display = "none";
})