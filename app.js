let dataService = require('./service/dataService');
let robotController = require('./controllers/robotController');

const configurationData = dataService.parseInputData();

const gridDimensions = dataService.getGridDimensions(configurationData);

const dataRobots = dataService.getRobotsData(configurationData, gridDimensions);


let result = dataRobots.map(( robot ) => {
  let finalPosition = robot.initialPosition
  for (let i = 0 ; i < robot.moves.length; i++){
    if(robot.moves[i] === 'R' ){
      finalPosition[2] = robotController.turnRight(finalPosition[2]);
    } else if( robot.moves[i] === 'L' ){
      finalPosition[2] = robotController.turnLeft(finalPosition[2]);
    } else{
        if (finalPosition[2] === 'N' ){
          finalPosition[1] = parseInt(finalPosition[1])+1;
          if(finalPosition[1] > gridDimensions[1]){ 
              finalPosition[1]--;
              finalPosition[3] = 'LOST';
            return finalPosition;
          }
        } else if (finalPosition[2] === 'W') {
          finalPosition[0] = parseInt(finalPosition[0])-1;
          if(finalPosition[0] < 0){
             finalPosition[0]++;
             finalPosition[3] = 'LOST';
             return finalPosition;
          }

        } else if (finalPosition[2] === 'S') {
          finalPosition[1] = parseInt(finalPosition[1])-1;
          if(finalPosition[1] < 0){
              finalPosition[1]++;
             finalPosition[3] = 'LOST';
             return finalPosition;
          }
        } else {
          finalPosition[0] = parseInt(finalPosition[0])+1;
          if(finalPosition[0] > gridDimensions[0]){
             finalPosition[0]--;
             finalPosition[3] = 'LOST';
             return finalPosition;
          }
      }
    }
  }
  return finalPosition ;
})

dataService.transformResultToOutput(result);

