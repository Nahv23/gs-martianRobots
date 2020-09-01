let readData = require('./service/dataService');

const configurationData = readData.parseInputData();

const gripDimensions = readData.getGridDimensions(configurationData);



if (gripDimensions){
  console.log ('Correcto -> ', gripDimensions)
} else{
  console.log ('Incorrecto')
}
