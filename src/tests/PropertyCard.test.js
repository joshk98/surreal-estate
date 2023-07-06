import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
