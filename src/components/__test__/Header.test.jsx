import { render, screen } from "@testing-library/react";
import Header from "../Header";

// saya ingin komponen header dapat dirender
it("Header component can be render", () => {
  render(<Header />);
  const headerResponse = screen.getByText(/Pemrograman Web Lanjut/i);
  expect(headerResponse).toBeInTheDocument();
});
