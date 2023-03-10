import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${() => css``}
`;

export const Input = styled.input`
	${() => css`
		background-color: #40414f;
		width: 90%;
		padding: 12px;
		color: white;
		font-size: 1.5em;
		border-radius: 5px;
		border: none;
		border-color: none;
		margin: 12px;
		outline: none;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0.25);
		resize: none;
	`}
`;
