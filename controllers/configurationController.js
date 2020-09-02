
const isCorrectGridConfig = (dimension) => {
  if ( dimension[0] > 0 && dimension[1] > 0 && dimension[0] < 50 && dimension[1] < 50 ) {
    return true;
  } else {
    throw new Error("The grid size must be between 0 and 50 in both axis");
  }
};

const isCorrectInitialRobotPosition = (coordinates, gridDimension) => { 
  if( coordinates[0] < 0 || coordinates[1] < 0){
    throw new Error("The initial coordinates must be more than 0");
  } else if (coordinates[0] > gridDimension[0] || coordinates[1] > gridDimension[1]){
    throw new Error("The robot must be inside the grid");
  } else if ( coordinates[2] !== 'N' && coordinates[2] !== 'W' && coordinates[2] !== 'E' && coordinates[2] !== 'E'){
    throw new Error("Error, indicating the orientation. Please verify (N for north, S for south,W for east, and W for west)");
  } else{
    return coordinates;
  }
}

const isMoreThanHundredInstructions = (instructions) => {
  let regex = /[0-9]|[a-z]|[A-E]|[G-K]|[M-Q]|[S-Z]/;
  if (instructions.length > 100){
    throw new Error("Robot instructions must be less than 100 movements");
  } else if ( typeof instructions === 'String'){
    throw new Error("The Instructions must be a string");
  } else if ( instructions.search(regex) !== -1 ){
    throw new Error("The instructions must contain only these letters F, L or R ");
  }
  return instructions;
}

module.exports = {
  isCorrectGridConfig: isCorrectGridConfig,
  isCorrectInitialRobotPosition: isCorrectInitialRobotPosition,
  isMoreThanHundredInstructions: isMoreThanHundredInstructions

};
