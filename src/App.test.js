import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/testimonial/Testimonials", () => () => (
  <section>Testimonials</section>
));

test("renders the portfolio navigation", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Fidly" })).toBeInTheDocument();
  expect(screen.getAllByRole("heading", { name: "Fidly" }).length).toBeGreaterThan(0);
  expect(
    screen.getByRole("link", { name: "Rata.in, view case study" })
  ).toHaveAttribute("href", "/project/rata-in");
  expect(screen.getAllByRole("link", { name: /view case study/i })).toHaveLength(1);
});

test("renders the Rata.in case study route", () => {
  window.history.pushState({}, "", "/project/rata-in");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: "Rata.in", level: 1 })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Melaporkan jalan rusak jadi lebih mudah, progresnya pun bisa dipantau.",
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Mari berkarya bersama." })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /nbfidly@gmail\.com/i })
  ).toHaveAttribute("href", "mailto:nbfidly@gmail.com");
  expect(document.documentElement.lang).toBe("id");

  window.history.replaceState({}, "", "/");
});
