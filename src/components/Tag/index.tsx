import { StyledTag } from "./style";

type Props = {
  text: string;
};

export const Tag = ({ text }: Props) => {
  return (
    <StyledTag>
      <p>{text}</p>
    </StyledTag>
  );
};
