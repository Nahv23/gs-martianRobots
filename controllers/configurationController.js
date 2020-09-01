
const isCorrectGridConfig = (dimension) => {
  if ( dimension[0] > 0 && dimension[1] > 0 && dimension[0] < 50 && dimension[1] < 50 ) {
    return true;
  } else {
    throw new Error("The grid size must be between 0 and 50 in both axis");
  }
};

module.exports = {
  isCorrectGridConfig: isCorrectGridConfig,
};
