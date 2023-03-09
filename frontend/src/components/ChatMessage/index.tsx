// styles
import { Message } from '../../shared-types/message';
import ChatAvatar from '../ChatAvatar';
import * as Styled from './styles';

// types
export type ChatMessageProps = {
	message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
	return (
		<Styled.Wrapper user={message.user}>
			{
				!!message ?
					(
						<Styled.ChatMessageContainer>
							<ChatAvatar isChatGpt={message.user === "gpt"} />
							<Styled.Message>
								{message.message}
							</Styled.Message>
						</Styled.ChatMessageContainer>
					)
					: (
						<>
							<p>
								Due to an internal error, this web page could not be loaded.
							</p>
							<p>
								Try again later
							</p>
						</>
					)
			}
		</Styled.Wrapper>
	);
};

export default ChatMessage;
