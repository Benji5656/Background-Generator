let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementById("gradient")

// console.log(css)
// console.log(color1)
// console.log(color2)

function changeColor() {
	body.style.background = "linear-gradient( to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";" // used instead of innerHTML
}

color1.addEventListener("input", function() {
	changeColor()
});

color2.addEventListener("input", function() {
	changeColor()
});

