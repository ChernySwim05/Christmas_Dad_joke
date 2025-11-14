// Christmas Dad Joke Puzzle Game logic

// List of puzzles with answers and dad jokes
const puzzles = [
  {
    question: "1) Finish the lyric: 'Jingle bells, jingle bells, jingle all the __?'",
    acceptableAnswers: ["way"],
    dadJoke: "Why did the Christmas tree go to the barber? Because it needed a trim-tree!"
  },
  {
    question: "2) What red-nosed reindeer guides Santa's sleigh?",
    acceptableAnswers: ["rudolph", "rudolf"],
    dadJoke: "Why is it so cold at Christmas? Because it's Decemberrrr! ❄️"
  },
  {
    question: "3) What do you traditionally put on top of a Christmas tree?",
    acceptableAnswers: ["star", "angel", "a star", "an angel"],
    dadJoke: "Why did Santa go to music school? So he could improve his wrapping skills. 🎁"
  },
  {
    question: "4) In the song, what did my true love give to me on the first day of Christmas?",
    acceptableAnswers: [
      "a partridge in a pear tree",
      "partridge in a pear tree",
      "a partridge in the pear tree"
    ],
    dadJoke: "What do snowmen eat for breakfast? Ice Krispies! 🥣"
  }
];

let currentIndex = 0;
let playerName = "";

// Helper to grab elements quickly
function $(id) {
  return document.getElementById(id);
}

const introEl = $("intro");
const startBtn = $("startBtn");
const playerNameInput = $("playerName");

const puzzleSection = $("puzzle-section");
const puzzleCounter = $("puzzle-counter");
const puzzleQuestion = $("puzzle-question");
const answerInput = $("answerInput");
const submitBtn = $("submitBtn");
const messageEl = $("message");

const jokeSection = $("joke-section");
const jokeText = $("joke-text");
const nextPuzzleBtn = $("nextPuzzleBtn");

const finalSection = $("final-section");
const finalMessageEl = $("final-message");
const treeArtEl = $("tree-art");

// Start game
startBtn.addEventListener("click", () => {
  playerName = playerNameInput.value.trim();
  introEl.classList.add("hidden");

  currentIndex = 0;
  showPuzzle();
  puzzleSection.classList.remove("hidden");
  answerInput.focus();
});

// Submit answer
submitBtn.addEventListener("click", checkAnswer);

// Allow Enter key submission
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

// Move to next puzzle
nextPuzzleBtn.addEventListener("click", () => {
  jokeSection.classList.add("hidden");
  currentIndex++;
  if (currentIndex < puzzles.length) {
    showPuzzle();
    puzzleSection.classList.remove("hidden");
    answerInput.focus();
  } else {
    endGame();
  }
});

// Show current puzzle
function showPuzzle() {
  const puzzle = puzzles[currentIndex];
  puzzleCounter.textContent = "Puzzle " + (currentIndex + 1) + " of " + puzzles.length;
  puzzleQuestion.textContent = puzzle.question;
  messageEl.textContent = "";
  answerInput.value = "";
}

// Normalise user answer for comparison
function normaliseAnswer(str) {
  return str.trim().toLowerCase();
}

// Check if given answer is correct
function checkAnswer() {
  const userAnswer = normaliseAnswer(answerInput.value);
  if (!userAnswer) {
    messageEl.textContent = "Type an answer first, festive genius. 😉";
    return;
  }

  const puzzle = puzzles[currentIndex];
  const correct = puzzle.acceptableAnswers.some(
    (ans) => normaliseAnswer(ans) === userAnswer
  );

  if (correct) {
    messageEl.textContent = "Correct! 🎉";
    // Show dad joke
    jokeText.textContent = puzzle.dadJoke;
    puzzleSection.classList.add("hidden");
    jokeSection.classList.remove("hidden");
  } else {
    messageEl.textContent = "Not quite! Try again. 🦌";
  }
}

// Show final message + tree
function endGame() {
  const namePart = playerName ? playerName + ", " : "";
  finalMessageEl.textContent =
    namePart +
    "you solved all the puzzles! May your Christmas be full of cozy moments, bad dad jokes, and very good people.";

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

  treeArtEl.textContent = tree;
}
