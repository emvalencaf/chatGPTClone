import styled, { css, DefaultTheme } from "styled-components";

type WrapperProps = {
	theme: DefaultTheme;
	user: string;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ user }) => css`
		${user === "chatgpt" && `background-color:#444654;`}
		& ${ChatMessageContainer} {
			justify-content: ${user === "chatgpt"
				? `justify-content: left;`
				: `justify-content: right;`};
		}
	`}
`;

export const ChatMessageContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-align: justify;
		padding: ${theme.spacings.small} ${theme.spacings.medium};
	`}
`;

export const Message = styled.div`
	${() => css`
		padding-left: 40px;
		padding-right: 40px;
	`}
`;
