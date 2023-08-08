import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 120rem;
  min-height: 100vh;
  margin: auto;
  .header {
    &__ul {
      display: flex;
      justify-content: center;
      gap: 6rem;
      font-size: var(--font-xxs);
      margin-top: 3rem;
      list-style: none;
      text-transform: uppercase;
      font-weight: 600;
    }
    &__link {
      text-decoration: none;
      color: inherit;
      padding: 1rem 2rem;
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
`;
