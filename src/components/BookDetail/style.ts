import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const fadeInModal = keyframes`
0%{
  opacity: 0;
  transform: translateY(-1rem);
}
100%{
  opacity: 1;
  transform: translateY(-0rem);
}
`;

export const StyleDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: ${fadeIn} 500ms forwards;
  z-index: 1;

  .modal {
    background-color: white;
    padding: 5rem 8rem;
    position: relative;
    animation: ${fadeInModal} 500ms forwards;
    animation-delay: 300ms;
    opacity: 0;
    border: 1px black solid;
    box-shadow: 1rem 1rem 0 black;
    border-radius: 2rem;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .card {
    display: flex;
    gap: 2rem;

    p {
      font-size: var(--font-xs);
    }

    &__img {
      box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
    }

    &__title {
      font-size: var(--font-m);
    }
    &__synopsis {
      width: 30ch;
    }
  }
  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 1.4rem;
    border: none;
    cursor: pointer;
    border-radius: 0 2rem 0;
  }
  .card__add-lecture {
    margin-top: auto;
    margin-bottom: 1px;
    padding: 2rem 4rem;
    background-color: var(--primary-200);
    border: none;
    border-radius: 1rem;
    border: 2px solid black;
    font-size: var(--font-xs);
    cursor: pointer;
  }
`;
