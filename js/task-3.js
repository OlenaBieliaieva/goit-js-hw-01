function getElementWidth(content, padding, border) {
  return (
    parseFloat(content.replace("px", "")) +
    parseFloat(padding.replace("px", "")) * 2 +
    parseFloat(border.replace("px", "")) * 2
  );
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
