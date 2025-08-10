import styled from 'styled-components';

const PostCardStyled = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  p {
    margin: 6px 0;
  }

  p:first-child {
    font-weight: bold;
    color: #ffd700;
  }

  p:nth-child(2) {
    font-size: 1.1rem;
    font-weight: 500;
  }

  p:last-child {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

export default PostCardStyled;
