import { StyledHero } from "./style";

export const Hero = () => {
  return (
    <StyledHero>
      <h1 className="hero__title">Midubooks</h1>
      <p className="hero__description">Encontrá todos tus libros deseados</p>
      <a className="hero__button" href="#">
        ¡Comenzá ya!
      </a>
    </StyledHero>
  );
};
