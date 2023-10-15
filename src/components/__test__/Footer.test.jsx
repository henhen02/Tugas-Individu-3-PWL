import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

// saya ingin komponen footer dapat dirender dengan baik
it("Footer component can be render", () => {
  render(<Footer />);
  const footerResponse = screen.getByText(
    /Tugas Pemrograman Web Lanjut © 2023/i
  );
  expect(footerResponse).toBeInTheDocument();
});
