import styled from "styled-components";

export const StyleBookSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .book {
    &__container {
      display: flex;
      justify-content: flex-start;
      min-width: 50%;
      background-color: white;
      box-shadow: 0.4rem 0.4rem 0 currentColor;
      padding: 1rem;
      border-radius: 1rem;
    }
    &__image {
      margin-right: 2.5rem;
      border: 2px solid var(--black);
      border-radius: 0.5rem;
    }
    &__card {
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-family: var(--font-heading);
      font-size: var(--font-m);
    }
    &__container-info {
      display: flex;
      gap: 2rem;
    }
    &__container-buttons {
      margin-top: auto;
    }
  }
  p {
    font-size: var(--font-s);
    color: var(--black-opacity);
  }
`;
