// code your solution here
function superbowlWin(record) {
    const win = record.find((record) => record.result === "W");
    if (win) { return win.year; } else { return undefined; }
}

// Example of usage of .find
const record = [
{ year: 2015, result: "W" },
{ year: 2014, result: "N/A" },
{ year: 2013, result: "L" },
];

const broncosWinYear = superbowlWin(record);
console.log(broncosWinYear);