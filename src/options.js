async function fetchData(path, output) {
  await fetch(path)
    .then((response) => response.json())
    .then((result) => (output.value = result));
  return true;
}
function capitalizeFirsLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
export { fetchData, capitalizeFirsLetter };
