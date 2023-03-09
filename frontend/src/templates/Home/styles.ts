import styled, { css } from 'styled-components';
import { Button } from '../../components/Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		text-align: center;
		display: flex;
		background-color: #282c34;
		color: ${theme.colors.white};
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		& ${Button} {
			padding: 0px;
		}
	`}
`;
