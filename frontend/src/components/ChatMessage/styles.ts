import styled, { css, DefaultTheme } from "styled-components";

type WrapperProps = {
	theme: DefaultTheme;
	user: string;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ user }) => css`
		${user === "gpt" && `background-color:#444654;`}
		& ${ChatMessageContainer} {
			justify-content: ${user == "gpt" ? "left" : "right"};
		}
	`}
`;

export const ChatMessageContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-align: justify;
		margin: ${theme.spacings.mediumSmall};
		padding: ${theme.spacings.small} ${theme.spacings.medium};
	`}
`;

export const Message = styled.div`
	${() => css`
		padding-left: 40px;
		padding-right: 40px;
	`}
`;
