// demo.test.js
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Demo from "./Demo";

test("Quand je choisis une chose, alors la chose change", async () => {
  render(<Demo />);

  // Confirmez l'état par défaut.
  expect(await screen.findByText(/the thing is: none/i)).toBeInTheDocument();

  // Cliquez sur le MUI "select" (tel que trouvé par l'étiquette).
  const selectLabel = /choose a thing/i;
  const selectEl = await screen.findByLabelText(selectLabel);

  expect(selectEl).toBeInTheDocument();

  userEvent.click(selectEl);

  // Localisez la fenêtre contextuelle correspondante (`listbox`) d'options.
  const optionsPopupEl = await screen.findByRole("listbox", {
    name: selectLabel
  });

  // Cliquez sur une option dans la fenêtre contextuelle.
  userEvent.click(within(optionsPopupEl).getByText(/marshmallow/i));

  // Confirmez le résultat..
  expect(
    await screen.findByText(/the thing is: marshmallow/i)
  ).toBeInTheDocument();
});