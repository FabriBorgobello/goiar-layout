import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing landing page", () => {
    it("Renders without crashing", () => {
        render(<App />);

        const title = screen.getByRole("heading", {
            name: /somos una empresa de tecnología especializada en integraciones fintech/i,
        });
        expect(title).toBeInTheDocument();
    });
});
