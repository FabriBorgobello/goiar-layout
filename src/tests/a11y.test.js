import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import App from "../App";

it("tests accessibility with jest-axe", async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});
