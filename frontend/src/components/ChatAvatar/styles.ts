import styled, { css, DefaultTheme } from "styled-components";

type WrapperProps = {
	theme: DefaultTheme;
	isChatGpt: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, isChatGpt }) => css`
		background-color: ${isChatGpt
			? `
				background: #0da37f;
				border-radius: 50%;
				width: 40px;
				height: 40px;
			`
			: `
				background: ${theme.colors.white};
			`};
	`}
`;
