const DFS = (grid, r, c, startPixel, newColor) => {
    const nr = grid.length;
    const nc = grid[0].length;

    let dirs = [[0,1], [1,0], [0,-1], [-1,0]];
    
    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] != startPixel)
      return;
    
    grid[r][c] = newColor;
    
    DFS(grid, r - 1, c, startPixel, newColor); // top
    DFS(grid, r, c - 1, startPixel, newColor); // left
    DFS(grid, r, c + 1, startPixel, newColor); // right
    DFS(grid, r + 1, c, startPixel, newColor); // bottom
    
    return grid;
  }
  
  var floodFill = function(image, sr, sc, newColor) {
    
    let startPixel = image[sr][sc];
    if (startPixel == newColor) return image;
    
    return DFS(image, sr, sc, startPixel, newColor)  
  };