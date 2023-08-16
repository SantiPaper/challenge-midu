import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 4rem;
  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 5rem;

    &__div__input {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 20rem;
    }
    &__label {
      font-size: var(--font-xs);
      font-weight: 300;
      margin-bottom: 1rem;
    }
    &__input__search {
      font-size: var(--font-xs);
      border: 1px solid black;
      border-radius: 1rem;
      box-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 1);
      width: 20rem;
      padding: 0.5rem 1.5rem;
    }

    &__select__option {
      padding: 0.5rem 1.5rem;
    }

    &__select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
      font-size: var(--font-xs);
      background-color: white;
      border: none;
      box-shadow: 0.4rem 0.4rem 0 black;
      border-radius: 1rem;
    }
  }
`;
