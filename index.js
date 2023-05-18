const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector("#btn").onclick = () => {
  let hex1 = "#";
  let hex2 = "#";
  let hex3 = "#";

  for (let i = 0; i < 6; i++) {
    let contentForHex1 = Math.floor(Math.random() * hexValues.length);
    let contentForHex2 = Math.floor(Math.random() * hexValues.length);
    let contentForHex3 = Math.floor(Math.random() * hexValues.length);
    hex1 += hexValues[contentForHex1];
    hex2 += hexValues[contentForHex2];
    hex3 += hexValues[contentForHex3];
  }
  document.body.style.background =
    "linear-gradient(" + "45deg, " + hex1 + "," + hex2 + "," + hex3 + ")";
};
