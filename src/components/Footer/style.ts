import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 5rem 3rem;

  .contact {
    padding: 5rem 1.5rem;
  }

  .email {
    font-size: 46px;
    font-family: var(--font-heading);
    word-wrap: break-word;
    color: inherit;
    text-decoration: none;
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
