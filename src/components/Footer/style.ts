import styled from "styled-components";

export const StyledFooter = styled.section`
  background-color: black;
  color: white;

  .contact {
    padding: 5rem 0;
  }

  .email {
    font-size: 46px;
    font-family: var(--font-heading);
  }

  .socials {
    font-size: var(--font-m);
    margin-top: 3rem;
    text-transform: uppercase;

    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 600px) {
    .email {
      font-size: var(--font-m);
    }
    .socials {
      font-size: var(--font-s);
    }
  }

  @media (max-width: 400px) {
    .email {
      font-size: var(--font-s);
    }
    .socials {
      font-size: var(--font-xs);
    }
  }
`;
