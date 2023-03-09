// services
import { ResponseRequest } from "../../../shared-types/response";
import OpenAiService from "../../services/openai";

export default class OpenAiController{
	static async request (prompt: string) {

		if (!prompt) return;
		console.log(prompt);
		return await OpenAiService.request<ResponseRequest>(prompt);
	}
}
