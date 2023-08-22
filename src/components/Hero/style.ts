import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      margin-bottom: 5rem;

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

  @media (max-width: 600px) {
    .hero {
      &__title {
        font-size: var(--font-l);
        font-family: var(--font-heading);
      }
      &__description {
        font-size: var(--font-xs);
        font-weight: 300;
      }
      &__button {
        display: none;
      }
    }
  }
  @media (max-width: 400px) {
    .hero {
      &__title {
        font-size: 5.5rem;
      }
    }
  }
`;
