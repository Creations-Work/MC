function sendMessage() {
	var request = new XMLHttpRequest();
	request.open("POST", "https://discordapp.com/api/webhooks/707767046531842048/3TRBiyFPlym0Ld2_5rBB2YH10Woz9EKP-9wzunl4QUavclxRZXqPaS3o3jMgvmsaYX0_");

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