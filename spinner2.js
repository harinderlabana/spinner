const reel = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
];

let delay = 100;
//scan through the sentence and print each character with a delay that increase by 50ms for each letter
for (const frame of reel) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, (delay += 200));
}
//when all letters are printed start a new line
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
