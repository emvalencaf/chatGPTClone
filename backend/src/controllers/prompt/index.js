
const serviceInput = require("../../service/prompt");
module.exports = {
	async sendText(req, res){
		console.log(req.body);
		const { prompt } = req.body;
		try {
            const response = await serviceInput.sendText(prompt);
			return res.status(200).json({
				sucess: true,
				data: response.data.choices[0].text
			});

		} catch (error) {

			return res.status(400).json({
				sucess: false,
				error: error.response
				? error.response.data
				: 'There was an inssue on the server'
			});

		}
	}

}