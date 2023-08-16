import styled from "styled-components";

export const StyleBookSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .books__length {
    font-size: var(--font-m);
    margin: 5rem;
    font-family: var(--font-heading);
    padding: 3rem 6rem;
  }

  .container__books {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem 2rem;
    margin-bottom: 4rem;
  }
  .book {
    &__container {
      display: flex;
      justify-content: flex-start;
      width: 60rem;
      background-color: white;
      box-shadow: 0.4rem 0.4rem 0 currentColor;
      padding: 2.4rem 1.7rem;
      border-radius: 1.6rem;
      border: 2px solid var(--black);
    }
    &__image {
      margin-right: 2.5rem;
      border: 3px solid var(--black);
      border-radius: 0.9rem;
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
      margin-bottom: 1rem;
    }
    &__container-buttons {
      display: flex;
      gap: 2rem;
      margin-top: auto;
    }
    &__button-ls,
    &__button-wm {
      padding: 0.8rem 2rem;
      background-color: var(--primary-200);
      border-radius: 1rem;
      border: 3px solid black;
      font-family: inherit;
      box-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      font-weight: 500;
      font-size: var(--font-xs);
    }

    &__button-wm {
      background-color: var(--secondary-400);
    }
  }
  p {
    font-family: var(--font-body);
    font-size: var(--font-s);
    color: var(--black-opacity);
    font-weight: 300;
  }
`;
