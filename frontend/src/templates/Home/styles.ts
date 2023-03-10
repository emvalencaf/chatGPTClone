import styled, { css } from "styled-components";
import { Button } from "../../components/Button/styles";
import { Wrapper as WrapperSideMenu } from "../../components/SideMenu/styles";
import { Input } from "../../components/TextInput/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			& ${WrapperSideMenu} {
				opacity: 0;
				display: none;
				visibility: hidden;
			}
		}
		text-align: center;
		display: flex;
		background-color: #282c34;
		color: ${theme.colors.white};
		height: 100vh;
		max-height: 100vh;

		& ${Input} {
			border-radius: 0px 0px 5px 5x;
		}

		& ${Button} {
			height: 83.4px;
			transform: translateY(-3px);
			padding: 12px;
			border-radius: 0px 5px 5px 0px;
		}
	`}
`;

export const ContainerLog = styled.div`
	${() => css`
		height: 87.8vh;
		max-height: 87.8vh;
		overflow-y: auto;
	`}
`;

export const ContainerForm = styled.div`
	${() => css``}
`;
