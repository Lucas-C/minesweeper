# [Minesweeper](https://mines.now.sh)

Windows XP Minesweepr in React + Hooks.  
Also support mobile.📱🎉

Features:

- Release double mouse press at the same time to open ceils automatically
- **Never** game over for the first click
- Switch difficulty from the menu
- Support mobile! (long press for placing flags)

This **fork** of [ShizukuIchi/minesweeper](https://github.com/ShizukuIchi/minesweeper) just adds a few extra features, _cf._ [src/Minesweeper/config.js](./src/Minesweeper/config.js):

- a custom grid can be defined & used by default
- mines display on "game over" can be disabled
- a specific cell can be revealed at the start of a game
- the `Exit` menu option actually closes the current tab

## Try it now!

Minesweeper 👉 https://lucas-c.github.io/minesweeper

![](https://i.imgur.com/EoSzjCx.png)
![](https://i.imgur.com/ryy5BiC.png)
![](https://i.imgur.com/IdEUMu8.png)

## Launch it on your computer
Using [Corepack](https://yarnpkg.com/corepack) to install `yarn`:

    corepack enable
    corepack install

Installing dependencies with `yarn`:

    yarn install

Launch the web application:

    yarn start
