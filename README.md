# Christmas Dad Joke Puzzle Game 🎄

A tiny browser-based Christmas game where you solve festive puzzles and unlock *gloriously terrible* dad jokes after each one. Finish all the puzzles to reveal a custom Merry Christmas message and an ASCII Christmas tree.

## How to run

1. Download this project (or clone it from GitHub).
2. Make sure the following files are in the same folder:
   - `index.html`
   - `script.js`
3. Open **index.html** in any modern browser (Chrome, Firefox, Edge, Safari).
4. Type in your name (optional) and click **“Start the game”**.
5. Solve each puzzle. Every correct answer unlocks a new dad joke.
6. After the final puzzle, enjoy your Christmas message and ASCII tree. 🎁

> No build tools, servers, or extra installations needed — it’s just HTML + JavaScript.

## Customizing the game

### Change / add puzzles

Open `script.js` and look for this block:

```js
const puzzles = [
  {
    question: "1) Finish the lyric: 'Jingle bells, jingle bells, jingle all the __?'",
    acceptableAnswers: ["way"],
    dadJoke: "Why did the Christmas tree go to the barber? Because it needed a trim-tree!"
  },
  // ...
];
```

Each entry has:
- `question`: The puzzle text shown in the game.
- `acceptableAnswers`: An array of allowed answers (case-insensitive).
- `dadJoke`: The dad joke shown after a correct answer.

To add your own:

```js
{
  question: "5) Your custom puzzle question here",
  acceptableAnswers: ["answer", "another answer"],
  dadJoke: "Your ridiculous Christmas dad joke here."
}
```

Just add another object to the array.

### Change the final message

At the bottom of `script.js`, look for the `endGame()` function:

```js
finalMessageEl.textContent =
  namePart +
  "you solved all the puzzles! May your Christmas be full of cozy moments, bad dad jokes, and very good people.";
```

Edit that message to something more personal (for example, for Audrey or your Aries universe).

### Change the ASCII tree

In the same `endGame()` function you’ll see:

```js
const tree =
  "         *\n" +
  "        /_\\n" +
  "       /_❄_\\n" +
  "      /_\\/_\\n" +
  "     /_❄_/_\\n" +
  "    /_\\/_\\/_\\n" +
  "       ||||\n" +
  "       ||||\n" +
  "    🎁  🎁  🎁";
```

You can redraw the tree or add more decorations/emojis.  
Just remember to keep the `\n` for line breaks.

## Uploading to GitHub & GitHub Pages

1. Create a new GitHub repository.
2. Add `index.html`, `script.js`, and `README.md` to the repo.
3. Commit and push.
4. In your repo settings, enable **GitHub Pages**:
   - Set source to the `main` branch (root directory).
5. GitHub will give you a URL like:  
   `https://your-username.github.io/christmas-dad-joke-game/`
6. Share that link with your favorite human as a Christmas surprise. ✨

---

Have fun, and may your code be bug-free and your dad jokes plentiful. 😄
