
const turnRight = (( orientation ) => {
  if (orientation === 'N' ){
    return 'E';
  } else if (orientation === 'E') {
    return 'S';
  } else if (orientation === 'S') {
    return 'W';
  } else {
    return 'N';
  }
});

const turnLeft = (( orientation ) => {
  if (orientation === 'N' ){
    return 'W'
  } else if (orientation === 'W') {
    return 'S'
  } else if (orientation === 'S') {
    return 'E'
  } else {
    return 'N'
  }
});


module.exports = {
  turnRight: turnRight,
  turnLeft: turnLeft
};