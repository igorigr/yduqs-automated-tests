export const EL_UTILS = {
  reactSelect: 'input[id*="react-select"]',
  reactSelectOption: (index) => `div[id*="react-select-${index}-option"]`,
  reactSelectOptionElement: (index, element) => `div[id*="react-select-${index}-option-${element}"]`,
  divReactSelectOption: 'div[id*="react-select"]'
};
