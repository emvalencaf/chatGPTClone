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
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		& ${Input} {
			border-radius: 0px 0px 5px 5x;
		}

		& ${Button} {
			height: 83.4px;
			transform: translateY(-3px);
			margin: 12px;
			padding: 12px;
			border-radius: 0px 5px 5px 0px;
		}
	`}
`;
