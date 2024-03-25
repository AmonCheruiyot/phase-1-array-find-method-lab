// code your solution here
function superbowlWin(record) {
    const win = record.find((game) => game.result === "W");
    if (win) { return win.year; } else { return undefined; }
}

// Example of usage of .find
const games = [
{ year: 2015, result: "W" },
{ year: 2014, result: "N/A" },
{ year: 2013, result: "L" },
];

const broncosWinYear = superbowlWin(games);
console.log(broncosWinYear);