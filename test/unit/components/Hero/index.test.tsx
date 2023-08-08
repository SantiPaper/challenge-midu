import { render } from "@testing-library/react";
import { Hero } from "../../../../src/components/Hero";

describe("Componente Hero", () => {
  test("Renderiza correctamente", () => {
    const { container } = render(<Hero />);

    expect(container).toMatchSnapshot();
  });
});
