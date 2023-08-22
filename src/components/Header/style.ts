import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  .header {
    &__ul {
      display: flex;
      justify-content: center;
      gap: 6rem;
      font-size: var(--font-xs);
      margin-top: 3rem;
      list-style: none;
      text-transform: uppercase;
      font-weight: 600;
    }
    &__link {
      text-decoration: none;
      color: inherit;
      padding: 1em 2em;
      border: 2px solid transparent;
      border-radius: 1rem;
      display: inline-block;
      &:hover,
      &:focus {
        border: 2px solid currentColor;
        box-shadow: 0.4rem 0.4rem 0 currentColor;
        outline: none;
      }
      &:active {
        transform: translate(0.4rem, 0.4rem);
        box-shadow: none;
      }
    }
  }
  .hero-container {
    min-height: 45rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
