/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  return string.substr(0, firstIndex) +
    string[secondIndex] +
    string.substring(firstIndex + 1, secondIndex) +
    string[firstIndex] +
    string.substr(secondIndex + 1);
}
