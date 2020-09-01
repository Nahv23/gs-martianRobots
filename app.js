let readData = require('./service/dataService');

const configurationData = readData.parseInputData();

const gridDimensions = readData.getGridDimensions(configurationData);

const dataRobots = readData.getRobotsData(configurationData, gridDimensions);



if (gridDimensions){
  console.log ('Dimensiones GRI -> ', gridDimensions, ' robots ->', dataRobots )
} else{
  console.log ('Incorrecto')
}
