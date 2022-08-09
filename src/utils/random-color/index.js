const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
  "brown",
];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

export default getRandomColor;
