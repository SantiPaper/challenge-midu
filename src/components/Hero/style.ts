import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  .hero {
    &__title {
      font-size: var(--font-xl);
      font-family: var(--font-heading);
    }
    &__description {
      font-size: var(--font-s);
      font-weight: 300;
    }
    &__button {
      text-decoration: none;
      color: var(--black);
      margin-top: 2rem;
      font-size: var(--font-s);
      background-color: var(--secondary-400);
      padding: 1.7rem 4rem;
      border-radius: 1rem;
      border: 3px solid currentColor;
      font-weight: 500;
      box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
      transition: background-color 0.15s;

      &:hover,
      &:focus {
        background-color: var(--secondary-200);
      }

      &:focus {
        box-shadow: 0.4rem 0.4rem 0 rgb(0, 0, 0);
        outline: none;
      }

      &:active {
        transform: translate(0.4rem, 0.4rem);
        box-shadow: none;
      }
    }
  }
`;
