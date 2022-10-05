import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

// const addListener = (onFocusChange: (isFocused: boolean) => void) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

//   window.addEventListener("blur", () => {
//     onFocusChange(false);
//   });
// };

// const addListener = (onFocusChange: (arg0: boolean) => void) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

//   window.addEventListener("blur", () => {
//     onFocusChange(false);
//   });
// };

// const addListener = (fn: (onFocusChange: boolean) => void) => {
//   window.addEventListener("focus", () => {
//     fn(true);
//   });

//   window.addEventListener("blur", () => {
//     fn(false);
//   });
// };

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
