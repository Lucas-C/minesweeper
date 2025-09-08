export const Config = {
  Custom: {
    grid: `
 
  ** *** *** 
 * *   *   * 
   * *** *** 
   * *     * 
   * *** *** 
 `.split('\n').filter(row => row),
  },
  Beginner: {
    rows: 9,
    columns: 9,
    ceils: 81,
    mines: 10,
  },
  Intermediate: {
    rows: 16,
    columns: 16,
    ceils: 256,
    mines: 40,
  },
  Expert: {
    rows: 16,
    columns: 30,
    ceils: 480,
    mines: 99,
  },
};

Config.Custom.rows = Config.Custom.grid.length
Config.Custom.columns = Math.max(...Config.Custom.grid.map(row => row.length))
Config.Custom.mines = Config.Custom.grid.reduce((count, row) => count + row.split('').filter(char => char !== ' ').length, 0);
