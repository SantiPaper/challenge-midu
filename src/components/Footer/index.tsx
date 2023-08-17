import { StyledFooter } from "./style";
import { StyledContainer } from "../../style";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className="contact">
          <h2 className="email">gonsanto07@yahoo.com</h2>
          <p className="socials">
            <a href="https://www.linkedin.com/in/santiagovitelli/">Linkedin</a>{" "}
            <a href="https://github.com/SantiPaper">Github</a>{" "}
            <a href="https://twitter.com/SantDevelopment">Twitter</a>
          </p>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
};
