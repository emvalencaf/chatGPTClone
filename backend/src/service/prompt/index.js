// model
const InputPrompModel = require("../../models/prompt");
// openai API
const openai = require("../../config/openAi");

module.exports = {
    async sendText(prompt) {
        const openaiAI = openai.configuration();
        const inputModel = new InputPrompModel({ prompt });

        return await openaiAI.createCompletion(
            openai.textCompletion(inputModel)
        );
    }
}