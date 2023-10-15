import { render, screen } from "@testing-library/react";
import {
  AddButton,
  DirectButton,
  MinButton,
  ResetButton,
  ScrollTop,
  SendButton,
} from "../Button";

// saya ingin tombol tambah dapat tampil dengan baik
it("Add Button can be render", () => {
  render(<AddButton />);
  const addButtonResponse = screen.getByRole("button", { name: /tambah/i });
  expect(addButtonResponse).toHaveClass("add");
});

// saya ingin tombol direct dapat tampil dengan baik
it("Direct Button can be render", () => {
  render(<DirectButton text={"Ini direct button"} />);
  const directButtonResponse = screen.getByText(/ini direct button/i);
  expect(directButtonResponse).toHaveClass("direct");
});

// saya ingin tombol kurang dapat tampil dengan baik
it("Min Button can be render", () => {
  render(<MinButton />);
  const minButtonResponse = screen.getByRole("button", { name: /kurang/i });
  expect(minButtonResponse).toHaveClass("delete");
});

// saya ingin tombol scroll ke atas dapat tampil dengan baik
it("Scroll Button can be render", () => {
  render(<ScrollTop />);
  const scrollButtonResponse = screen.getByRole("button");
  expect(scrollButtonResponse).toHaveClass("back-to-top");
});

// saya ingin tombol reset dapat tampil dengan baik
it("Reset Button can be render", () => {
  render(<ResetButton />);
  const resetButtonResponse = screen.getByRole("button", { name: /reset/i });
  expect(resetButtonResponse).toHaveClass("reset");
});

// saya ingin tombol kirim dapat tampil dengan baik
it("Send Button can be render", () => {
  render(<SendButton />);
  const sendButtonResponse = screen.getByRole("button", { name: /kirim/i });
  expect(sendButtonResponse).toHaveClass("send");
});
