function changeProperties() {
    let style = document.querySelector("#p").style;
    let red_b = document.getElementById("red-border").value;
    let blue_b = document.getElementById("blue-border").value;
    let green_b = document.getElementById("green-border").value;
    let width = document.getElementById("width-border").value;
    style.border = String(width) + "px solid rgb(" + String(red_b) + ", " + String(green_b) + ", " + String(blue_b) + ")";
    
    let red_back = document.getElementById("red-background").value;
    let blue_back = document.getElementById("blue-background").value;
    let green_back = document.getElementById("green-background").value;
    style.backgroundColor = "rgb(" + String(red_back) + ", " + String(green_back) + ", " + String(blue_back) + ")";
}