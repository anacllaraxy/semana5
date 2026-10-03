import { render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Home from "../app/page";

test("mostra os itens vindos da API", async () => {
  globalThis.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ status: "ok", items: ["Configurar Docker"] }),
    })
  );

  render(<Home />);

  expect(await screen.findByText("Configurar Docker")).toBeTruthy();
});