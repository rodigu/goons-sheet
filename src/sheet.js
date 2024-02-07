function updateSheet() {
  /**@type {HTMLElement} sheet*/
  const sheet = document.getElementById("sheet");
  const goon = Characters[CurrentCharacter];
  sheet.innerHTML = `
  <h2>${goon.name}</h2>
  `;
  console.log("a");
}

const Characters = [Goon.roll("John")];
let CurrentCharacter = 0;

updateSheet();
