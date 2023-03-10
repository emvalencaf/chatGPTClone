import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

export const Wrapper = styled.aside`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		width: ${theme.frameSizes.small};
		padding: ${theme.spacings.small};
		background-color: #202123;

		& ${Button} {
			padding: ${theme.spacings.small};
			border-radius: 5px;
			text-align: left;
			transition: ease-in-out ${theme.transitions.faster} all;
			width: 100%;
			&:hover {
				background-color: rgba(255, 255, 255, 0.1);
			}
		}
	`}
`;
