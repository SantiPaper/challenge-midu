import { render } from "@testing-library/react";
import { Header } from "../../../../src/components/Header";

describe("Componente Header", () => {
  test("Renderiza header", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
