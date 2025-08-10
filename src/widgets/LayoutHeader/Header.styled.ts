import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: var(--header-bg);
  width: 100%;
  color: var(--header-text);
  padding: 20px;
  border-top: 1px solid var(--header-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-container {
    display: flex;
    gap: 10px;
  }

  p {
    margin: 4px 0;
  }
`;

export default HeaderStyled;
