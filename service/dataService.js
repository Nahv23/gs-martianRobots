const fs = require("fs");
const _ = require('underscore')._;
const configurationController = require('../controllers/configurationController')


const parseInputData = () => {
  var inputData  = fs.readFileSync('./data/data.txt', 'utf8');
  return _.compact(inputData.split("\n"));
};

const getGridDimensions = (data) => {
  let parseGridDimensions = data[0].trim().replace(/ /g, "").split('');
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

module.exports = {
  parseInputData: parseInputData,
  getGridDimensions: getGridDimensions,
  getRobotsData: getRobotsData,
};