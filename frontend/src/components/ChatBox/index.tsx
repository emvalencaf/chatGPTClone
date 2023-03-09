// styles
import * as Styled from './styles';

// types
export type ChatBoxProps = {
	children: React.ReactNode;
};

const ChatBox = ({ children }: ChatBoxProps) => {
	return (
		<Styled.Wrapper>
			<Styled.ChatLog>
				{children}
			</Styled.ChatLog>
		</Styled.Wrapper>
	);
};

export default ChatBox;
