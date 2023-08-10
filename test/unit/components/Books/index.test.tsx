import { render } from "@testing-library/react";
import { Books } from "../../../../src/components/Books";
import { Provider } from "../../../../src/context";
import * as contextModule from "../../../../src/hooks/useBookContext";

const mockArr = [
  {
    title: "Juego de Tronos",
    pages: 694,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
    synopsis:
      "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
    year: 1996,
    ISBN: "978-0553103540",
    author: {
      name: "George R. R. Martin",
      otherBooks: [
        "Choque de Reyes",
        "Tormenta de Espadas",
        "Festín de Cuervos",
      ],
    },
  },
  {
    title: "Harry Potter y la piedra filosofal",
    pages: 223,
    genre: "Fantasía",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
    synopsis:
      "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
    year: 1997,
    ISBN: "978-0747532699",
    author: {
      name: "J.K. Rowling",
      otherBooks: [
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
      ],
    },
  },
];

describe("Componente books", () => {
  vi.spyOn(contextModule, "useBookContext").mockReturnValue({
    state: { books: mockArr },
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
