import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login form", () => {
  test("the form loads", () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
 
  test("happy path", async () => {
    const USER = "some-username";
    const PASS = "some-pass";
    

    render(<Login />);

    const userInput = screen.getByLabelText(/username/i);
    

    const passwordInput = screen.getByLabelText(/password/i);
  

    const submitButton = screen.getByText(/submit/i);
    

    expect(await screen.findByText(/your username/i)).toBeInTheDocument();
    expect(await screen.findByText(/your password/i)).toBeInTheDocument();
  });
});
