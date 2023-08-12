import { render } from "@testing-library/react";
import App from "../../../src/App";
import { Provider } from "../../../src/context";
import { mockArr } from "../mock";
import { vi } from "vitest";
import * as api from "../../../src/api";
import * as useBookContext from "../../../src/hooks/useBookContext";
import { Context } from "../../../src/types/context";

describe("Componente App", () => {
  //Otra forma
  /* vi.spyOn(api, "getBooks").mockImplementation(() => {
    return Promise.resolve(mockArr);
  }); */

  vi.spyOn(api, "getBooks").mockResolvedValue(mockArr);
  vi.spyOn(useBookContext, "useBookContext").mockReturnValue({
    addBooks: vi.fn(),
  } as unknown as Context);

  test("Renderiza toda la pagina", () => {
    const { container } = render(
      <Provider>
        <App />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
