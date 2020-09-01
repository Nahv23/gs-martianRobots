const fs = require("fs");
const _ = require('underscore')._;
const gridController = require('../controllers/configurationController')


const parseInputData = () => {
  var inputData  = fs.readFileSync('./data/data.txt', 'utf8');
  return _.compact(inputData.split("\n"));
};

const getGridDimensions = (data) =>{
  let parseGridDimensions = data[0].replace(/ /g, "").split('');
  if (gridController.isCorrectGridConfig(parseGridDimensions)){
    return parseGridDimensions;
  }
}

module.exports = {
  parseInputData: parseInputData,
  getGridDimensions: getGridDimensions
};