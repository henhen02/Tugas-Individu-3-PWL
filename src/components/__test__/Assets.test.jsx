import { render, screen } from "@testing-library/react";
import {
  PPGithubHendri,
  Curious,
  LayoutOFBeranda,
  LayoutOFTK,
} from "../Assets";

// saya ingin foto github dapat dirender dengan baik
it("My Profile pictures can be render", () => {
  render(<PPGithubHendri />);
  const ppGithubResponse = screen.getByRole("img");
  expect(ppGithubResponse).toBeInTheDocument();
});

// saya ingin gambar dari web rafiki dapat dirender dengan baik
it("My Rafiki curious can be render", () => {
  render(<Curious />);
  const curiousResponse = screen.getByRole("img");
  expect(curiousResponse).toBeInTheDocument();
});

// saya ingin gambar contoh layout dari beranda dapat dirender dengan baik
it("My Example for beranda can be render", () => {
  render(<LayoutOFBeranda />);
  const layoutBerandaResponse = screen.getByRole("img");
  expect(layoutBerandaResponse).toBeInTheDocument();
});

// saya ingin contoh halaman layout tentang dan kontak dapat dirender dengan baik
it("My Example for Tentang & Kontak Page can be render", () => {
  render(<LayoutOFTK />);
  const layoutOfTKResponse = screen.getByRole("img");
  expect(layoutOfTKResponse).toBeInTheDocument();
});
