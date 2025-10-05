const fileName = "data.json";

const colors = [
  "coral",
  "tomato",
  "orange",
  "gold",
  "limegreen",
  "mediumseagreen",
  "turquoise",
  "deepskyblue",
  "dodgerblue",
  "royalblue",
  "blueviolet",
  "mediumorchid",
  "fuchsia",
  "deeppink",
  "crimson",
  "red",
  "orangered",
  "springgreen",
  "aqua",
  "chartreuse",
];

const readData = async (fileName) => {
  try {
    const res = await fetch(fileName);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Error reading file", error.message);
    return null;
  }
};

const data = await readData(fileName);

const rootElement = document.getElementById("root");

for (const x of data) {
}
