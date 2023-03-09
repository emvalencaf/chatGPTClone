// component
import Button from '../Button';

// styles
import * as Styled from './styles';

// types
export type SideMenuProps = {
	title?: string;
};

const SideMenu = ({ title = '' }: SideMenuProps) => {
	return (
		<Styled.Wrapper>
			<Button>Novo Chat</Button>
		</Styled.Wrapper>
	);
};

export default SideMenu;
