import styled, { css } from "styled-components";

export const Wrapper = styled.section`
	${() => css`
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #353541;
	`}
`;

export const ChatLog = styled.section`
	${() => css`
		text-align: left;
		white-space: "pre-wrap";
	`}
`;
