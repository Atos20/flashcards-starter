# FlashCards Starter Kit

## Contributors

  [Orlando Murcio](https://www.github.com/atos20)

## Context

The goal of this project is to being able to practice OOP while using the `mocha` framework in conjuction with the `chai` testing library to write the test first and then write the implementation class to pass each test.

#### Technologies used:

    * JavaScript
    * Terminal
    * GitHub

## Challenges

    * Atomic commits (capitalizing the first letter)
    * Writting te test before the implementation
    * Connectiong between classes
    * Knowing where to instantiate the `game` class


## Wins
- Being able to work through the logic of the game
- Make use of the testing librarie and run the implementation test using the terminal
- Having a functional game using the terminal
- Using the project board * issues, labels and tickets* to keep track of my progress

## Future Goals

  * Add timer to the project, so the user can know the length of the game
  * Add another deckof cards

## In Action

  #### Take 1

* Playing through the game using the terminal; the user runs the `node indes.js` comand which initializes the game. After the game has been initialized the user uses the key up or down to select the answer from the 3 possible questions. Once the user pick the answer the terminal responds with a written feedback of 'correct' or incorrect' depending ig the answers is righ or wrong. Once the user finish all the cards in the deck a message with the percentage of the correct answers is displayed announcing the end of the round

  <img src="https://media.giphy.com/media/L13aZALsp8KdB8Wvlz/giphy.gif" alt="Playing through the game using hte terminal, the user runs the node indes.js comand which initializes the game. After the game is initializes the user uses the key up or down to select the answer from the 3 possible questions. Once the user pick the answer the terminal responds with a written feedback of 'correct' or incorrect' depending ig the answers is righ or wrong. Once the user finish all the cards in the deck a message with the percentage of the correct answers is displayed announcing the end of the round" height=auto width=75%/>


## Project directions

[FlashCards specifications](https://frontend.turing.io/projects/flash-cards.html)


### Contribute to the project
If you want to contribute

>   - clone the repository to your computer `git clone <URL>`
>   - cd into the repository `cd <repo-name>`
>   - create a new branch with `git checkout -b <new branch name>`
>   - open your text editor and add or remove functionalities to the site.
>   - `git add` and `git commit -m "<your commit meessage>"` to save the changes to your local repository
>   - `git push` your changes
>   - create a new pull request!

### Project Managers

[???](https://github.com/)
## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000

```
## Where to Add Your Code

### JavaScript

**Create all of your feature code files in the `src` directory.**

We will be using the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to start your server to test your functionality.
In the terminal, run:

```bash
node index.js
```
