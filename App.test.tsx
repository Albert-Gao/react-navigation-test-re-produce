import * as React from "react";
import App from "./App";
import { render, act } from "react-native-testing-library";
import { flushMicrotasksQueue } from "./testUtils";

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

it("should work", async () => {
  const tree = render(<App />);

  // fix the Warning: An update to ForwardRef(NavigationContainer) inside a test was not wrapped in act(...).
  await act(async () => {
    await flushMicrotasksQueue();
  });

  expect(tree).toBeTruthy();
});
