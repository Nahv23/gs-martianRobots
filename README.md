# gs-martianRobots

This application shows the moves of the robots by the terminal output. This result is based on the dimension terrain, the initial position of the robot, and its movements provided in a file, with a concrete format.

The output will follow this rule:

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word "LOST" should be printed after the position and orientation.


## To Launch it 🚀

To launch it, please follow these steps:

&nbsp;&nbsp;1- Copy this folder gs-martianRobots to your computer.

&nbsp;&nbsp;2- Leave you instructions in the data folder witn the name ```data.txt``` following the rules below.
 
&nbsp;&nbsp;3- On your computer terminal, in the root folder of the app, type ```npm start```



## Rules

The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters "L", "R", and "F" on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.

Sample Input <br>

```
1 1 E
3 3 N LOST
2 3 S
```
