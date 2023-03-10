import CreateFetch from "../../../utils/createFetch";

export default class OpenAiService {
	static async request<T>(prompt: string): Promise<T> {
		const data = {
			prompt,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
		console.log(prompt);
		const url = `${process.env.NEXT_PUBLIC_API_URL}/prompts`;
		return await CreateFetch.dispatch(`${process.env.NEXT_PUBLIC_API_URL}/prompts`, options);
	}
}
