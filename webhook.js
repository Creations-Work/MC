function sendMessage() {
	var request = new XMLHttpRequest();
	request.open("POST", null);

	request.setRequestHeader('Content-type', 'application/json');

	var myEmbed = {
		author: {
			name: "testing"
		},
		title: "testing",
		description: "testing",
		color: hexToDecimal("#d1156a")
	}

	var params = {
		username: "Support Bot",
		embeds: [myEmbed]
	}

	request.send(JSON.stringify(params));
}

function hexToDecimal(hex) {
	return parseInt(hex.replace("#", ""), 16)
}