var first = document.getElementById('color1')
var sec = document.getElementById('color2')
var body = document.getElementById("body")
var cssText = document.querySelector("h3")


function onColorChange() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + "," + color2.value + ")"
	cssText.textContent = body.style.background + ";";
}
first.addEventListener("input", onColorChange)
sec.addEventListener("input", onColorChange)