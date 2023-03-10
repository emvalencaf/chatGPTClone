// hooks
import { useRef, useState } from "react";

// components
import ChatMessage from "../../components/ChatMessage";
import ChatBox from "../../components/ChatBox";

// styles
import * as Styled from "./styles";

// types
import { Message } from "../../shared-types/message";
import Form from "../../components/Form";
import TextInput from "../../components/TextInput";
import SideMenu from "../../components/SideMenu";

// icons
import { Send } from "@styled-icons/material-outlined";
import OpenAiController from "../../api/controllers/openai";

const Home = () => {
	// states
	const [promptDisabled, setPromptDisabled] = useState(false);
	const [prompt, setPrompt] = useState("");
	const [chatLog, setChatLog] = useState<Message[]>([
		{
			user: "gpt",
			message: "Como posso te ajudar hoje?",
		},
	]);
	// refs
	const formRef = useRef(null);

	// handle submit
	const handleSubmit = async (): Promise<void> => {
		setChatLog((s) => [
			...s,
			{
				user: "me",
				message: `${prompt}`,
			},
		]);
		setPrompt("");
		setPromptDisabled(true);
		const response = await OpenAiController.request(prompt);

		const gptResponse = response.data
			.split("\n")
			.map((line, index) => <p key={index}>{line}</p>);

		const gptMessage: Message = {
			user: "gpt",
			message: gptResponse,
		};
		setPromptDisabled(false);
		setChatLog((s) => [...s, gptMessage]);
		return;
	};

	return (
		<Styled.Wrapper>
			<SideMenu />
			<ChatBox>
				<Styled.ContainerLog>
					{!!chatLog &&
						chatLog.map((message, index) => (
							<ChatMessage
								key={`${message.user}-${index}`}
								message={message}
							/>
						))}
				</Styled.ContainerLog>
				<Styled.ContainerForm>
					<Form
						btnText=""
						btnIcon={<Send />}
						onSubmit={handleSubmit}
						reference={formRef.current}
					>
						<TextInput
							as="textarea"
							name="prompt"
							value={prompt}
							onInputChange={(v) => setPrompt(v)}
							disabled={promptDisabled}
							label={
								promptDisabled
									? "aguarde a resposta do chatgpt..."
									: "escreva ou pergunte algo..."
							}
						/>
					</Form>
				</Styled.ContainerForm>
			</ChatBox>
		</Styled.Wrapper>
	);
};

export default Home;
