import styled, { css } from "styled-components";
import { Button } from "../../components/Button/styles";
import { Wrapper as WrapperSideMenu } from "../../components/SideMenu/styles";
import { Input } from "../../components/TextInput/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			display: flex;
			flex-direction: column;
			& ${WrapperSideMenu} {
				width: 100%;
				padding: ${theme.spacings.small} ${theme.spacings.medium};
				max-height: ${theme.spacings.huge};
				& ${Button} {
					border: none;
					outline: none;
					background-color: inherit;
					padding: none;
					max-height: ${theme.spacings.mediumLarge};
				}
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
