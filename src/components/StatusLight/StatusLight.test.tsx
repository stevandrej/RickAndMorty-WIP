import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StatusLight from "./StatusLight";

describe("StatusLight", () => {
  test('Renders with the correct CSS style for "alive" status', () => {
    const { getByTestId } = render(<StatusLight status="alive" />);
    const element = getByTestId("statusLight");

    expect(element).toHaveClass("bg-green-600");
    expect(element).toHaveClass("ring-green-500");
    expect(element).toHaveClass("shadow-green-400");
    expect(element).toHaveClass("animate-pulse");
  });

  test('Renders with the correct CSS style for "dead" status', () => {
    const { getByTestId } = render(<StatusLight status="dead" />);
    const element = getByTestId("statusLight");

    expect(element).toHaveClass("bg-red-800");
    expect(element).toHaveClass("ring-red-600");
    expect(element).toHaveClass(" shadow-red-500");
  });

  test('Renders with the correct CSS style for "unknown" status', () => {
    const { getByTestId } = render(<StatusLight status="unknown" />);
    const element = getByTestId("statusLight");

    expect(element).toHaveClass("bg-gray-600");
    expect(element).toHaveClass("ring-gray-500");
    expect(element).toHaveClass("shadow-gray-500");
  });

  test("Renders with the correct CSS style for empty prop", () => {
    const { getByTestId } = render(<StatusLight />);
    const element = getByTestId("statusLight");

    expect(element).toHaveClass("bg-gray-600");
    expect(element).toHaveClass("ring-gray-500");
    expect(element).toHaveClass("shadow-gray-500");
  });
});
