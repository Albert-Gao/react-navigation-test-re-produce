import * as React from "react";
import App from "./App";
import { render } from "react-native-testing-library";

it("should work", () => {
  const tree = render(<App />);
  expect(tree).toBeTruthy();
});
