function mazeRunner(maze, directions) {
  let playerPosition = [];

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        playerPosition = [i, j];
        break;
      }
    }
  }

  for (let direction of directions) {
    switch (direction) {
      case 'N':
        playerPosition = [playerPosition[0] - 1, playerPosition[1]];
        break;
      case 'S':
        playerPosition = [playerPosition[0] + 1, playerPosition[1]];
        break;
      case 'E':
        playerPosition = [playerPosition[0], playerPosition[1] + 1];
        break;
      case 'W':
        playerPosition = [playerPosition[0], playerPosition[1] - 1];
        break;
    }

    if (
      playerPosition[0] < 0 ||
      playerPosition[0] >= maze.length ||
      playerPosition[1] < 0 ||
      playerPosition[1] >= maze[0].length
    ) {
      return 'Dead';
    }

    switch (maze[playerPosition[0]][playerPosition[1]]) {
      case 3:
        return 'Finish';
      case 1:
        return 'Dead';
    }
  }

  return 'Lost';
}

// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!
