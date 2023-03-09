import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
	theme: DefaultTheme;
	user: string;
}

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, user }) => css`
		${user === "chatgpt" && `background-color:#444654;`}
	`}
`;

export const ChatMessageContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: justify;
		padding: ${theme.spacings.small} ${theme.spacings.medium};
	`}
`;

export const Message = styled.div`
	${({ theme }) => css`
		padding-left: 40px;
		padding-right: 40px;
	`}
`;
