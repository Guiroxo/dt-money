import styled from "styled-components";

const getStyle = (variant: "Text" | "Outlined" | "Contained") => {
  if (variant === "Outlined") {
    return `
      background: #0099FF;
      color: black;
    `;
  }
  if (variant === "Text") {
    return `
      background: #FF8080;
      color: orange;
    `;
  }
  if (variant === "Contained") {
    return `
      background: #00CC99;
      color: blue;
    `;
  }
};

export const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
`;
