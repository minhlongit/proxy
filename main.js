var result = [],
	input = document.getElementById("content-input"),
	output = document.getElementById("content-target");

function convert() {
	convertProxy(input.value.replaceAll(/\s/g, ",").replaceAll(",,", ","));
	let format = result.toString().replaceAll(",", "\n");
	output.value = format
}

function convertProxy(proxy) {
	const array = proxy.replaceAll(/\s/g, "").split(",").map(String);
	array.map(element => {
		let el = element.split(":");
		console.log(el);
		const px = `${el[2]}:${el[3]}@${el[0]}:${el[1]}`;
		result.push(px)
	})
}

function copy() {
	document.getElementById("content-target").select(), document.execCommand("copy")
}

document.getElementById("clear").addEventListener("click", function() {
	input.value = "";
	output.value = "";
});

