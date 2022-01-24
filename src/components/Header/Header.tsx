import { HeaderContainer, HeaderContent, HeaderButton } from "./Header.styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo dtmoney" />
        <HeaderButton type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </HeaderButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
