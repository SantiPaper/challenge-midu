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
      font-size: var(--font-s);
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
    padding: 0.8rem 2rem;
    background-color: var(--primary-200);
    border-radius: 1rem;
    border: 2px solid black;
    font-family: inherit;
    box-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-weight: 500;
    font-size: var(--font-xs);
    margin-top: auto;
  }

  @media (max-width: 1000px) {
    .modal {
      padding: 2.5rem 5rem;
      img {
        width: 10rem;
      }
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .modal {
      padding: 1rem 1rem;

      .card {
        p {
          font-size: var(--font-xs);
          width: 28ch;
        }
        &__title {
          font-size: var(--font-s);
        }
      }
      .card__add-lecture {
        font-size: var(--font-xs);
      }
    }
  }
`;
