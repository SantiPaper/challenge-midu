import styled from "styled-components";

export const StyledTag = styled.div`
  width: fit-content;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background-color: #c5afe4;
  p {
    font-size: var(--font-xs);
    color: #370172;
  }

  @media (max-width: 650px) {
    margin: auto;
    margin-bottom: 1rem;
  }
`;
