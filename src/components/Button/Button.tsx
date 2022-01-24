import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  variant: "Outlined" | "Text" | "Contained";
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return <ButtonContainer className={className}>{children}</ButtonContainer>;
}
