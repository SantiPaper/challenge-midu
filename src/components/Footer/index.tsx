import { StyledFooter } from "./style";
import { StyledContainer } from "../../style";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <a href="mailto:santiagovitelli01@gmail.com" className="email">
          santiagovitelli01
          <wbr />
          @gmail.com
        </a>
        <p className="socials">
          <a href="https://www.linkedin.com/in/santiagovitelli/">Linkedin</a>{" "}
          <a href="https://github.com/SantiPaper">Github</a>{" "}
          <a href="https://twitter.com/SantDevelopment">Twitter</a>
        </p>
      </StyledContainer>
    </StyledFooter>
  );
};
