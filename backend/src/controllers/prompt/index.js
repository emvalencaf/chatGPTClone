
const serviceInput = require("../../service/prompt");
module.exports = {
	async sendText(req, res){

		try {
            const { data } = await serviceInput.sendText(req.body.prompt);

			return res.status(200).json({
				sucess: true,
				data: data.choices[0].text
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