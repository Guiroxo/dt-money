import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--blue);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 10rem;
  align-items: center;
  padding-top: 2rem;
`;
export const HeaderButton = styled.button`
  font-size: 1rem;
  color: #fff;
  background: var(--blue-light);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
