import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
	${({ theme }) => css`
		flex: 1;
		background-color: #353541;
		position: relative;
		overflow-y: auto;
	`}
`;


export const ChatLog = styled.section`
	${({ theme }) => css`
		text-align: left;
		white-space: "pre-wrap";
	`}
`;

