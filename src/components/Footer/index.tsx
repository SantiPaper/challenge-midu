import { StyledFooter } from "./style";
import { StyledContainer } from "../../style";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <a href="mailto:gonsanto07@yahoo.com" className="email">
          gonsanto07
          <wbr />
          @yahoo.com
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
