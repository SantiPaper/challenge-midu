import { render } from "@testing-library/react";
import { Books } from "../../../../src/components/Books";
import { Provider } from "../../../../src/context";
import * as contextModule from "../../../../src/hooks/useBookContext";
import { mockArr } from "../../mock";

describe("Componente books", () => {
  vi.spyOn(contextModule, "useBookContext").mockReturnValue({
    state: { filteredBooks: mockArr },
  });
  test("Renderizan todas las cards", async () => {
    const { container } = render(
      <Provider>
        <Books />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
