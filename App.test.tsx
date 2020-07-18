import * as React from "react";
import App from "./App";
import { render, act } from "react-native-testing-library";
import { flushMicrotasksQueue } from "./testUtils";

it("should work", async () => {
  const tree = render(<App />);

  // fix the Warning: An update to ForwardRef(NavigationContainer) inside a test was not wrapped in act(...).
  await act(async () => {
    await flushMicrotasksQueue();
  });

  expect(tree).toBeTruthy();
});
