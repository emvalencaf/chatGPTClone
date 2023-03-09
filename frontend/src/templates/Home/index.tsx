// hooks
import { useState } from "react";

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

const Home = () => {
	const [ prompt, setPrompt ] = useState("");
	const [chatLog, setChatLog] = useState<Message[]>([{
		user: "gpt",
		message: "Como posso te ajudar hoje?"
	}]);

	return (
		<Styled.Wrapper>
			<SideMenu />
			<ChatBox>
				{
					!!chatLog && chatLog.map((message, index) => (
						<ChatMessage
							key={`${message.user}-${index}`}
							message={message}
						/>
					))
				}
				<Form
					btnText=""
					btnIcon={<Send />}
				>
					<TextInput as="textarea" name="prompt" value={prompt} onInputChange={((v) => setPrompt(v))} label={"escreva ou pergunte algo..."} />
				</Form>
			</ChatBox>
		</Styled.Wrapper>
	);
};

export default Home;
