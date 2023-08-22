import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: transparent;
  padding: 1rem;
  margin-bottom: 3rem;
  max-width: 120rem;

  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 5rem;
    border-radius: 1rem;

    &__div__input {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
    &__label {
      font-size: var(--font-xs);
      font-weight: 400;
      margin-bottom: 1rem;
    }
    &__input__search,
    &__select {
      font-size: var(--font-xs);
      border: 1px solid black;
      border-radius: 1rem;
      width: 20rem;
      padding: 1rem 2rem;
      box-shadow: 0.4rem 0.4rem 0 black;
      border-radius: 1rem;
      background-color: white;
      font-family: inherit;
    }

    &__input__search {
      width: 25rem;
    }

    &__select__option {
      padding: 0.5rem 1.5rem;
    }

    &__select {
    }
  }

  @media (max-width: 800px) {
    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      &__label {
        clip: rect(0 0 0 0);
        border: 0;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
      &__input__search {
        width: 20rem;
      }
    }
  }
`;
