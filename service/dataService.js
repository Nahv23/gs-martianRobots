const fs = require("fs");
const _ = require('underscore')._;
const configurationController = require('../controllers/configurationController')


const parseInputData = () => {
  var inputData  = fs.readFileSync('./data/data.txt', 'utf8');
  return _.compact(inputData.split("\n"));
};

const getGridDimensions = (data) => {
  let parseGridDimensions = data[0].trim().replace(/ /g, "").split('');
  parseGridDimensions = [parseInt(parseGridDimensions[0]),parseInt(parseGridDimensions[1])]
  if (configurationController.isCorrectGridConfig(parseGridDimensions)){
    return parseGridDimensions;
  }
}

const getRobotsData = (data, gridDimensions) => {
  let robotsArray = [];
  for( let i = 1; i < data.length; i=i+2){
    let robot = new Object();
    robot.initialPosition = configurationController.isCorrectInitialRobotPosition(data[i].trim().replace(/ /g, "").split(''), gridDimensions);
    robot.moves = configurationController.isMoreThanHundredInstructions(data[i+1].trim());
    robotsArray.push(robot)
  }
  return robotsArray
}

const transformResultToOutput = ((result) => {
  for(let i=0; i < result.length; i++){
    console.log(result[i].toString().replace(/,/g, " ") + '\n' )
    result[i].toString().replace(/ /g, "").split('');
  }
})

module.exports = {
  parseInputData: parseInputData,
  getGridDimensions: getGridDimensions,
  getRobotsData: getRobotsData,
  transformResultToOutput: transformResultToOutput
};