
const sentence = "hello there from lighthouse labs\n";
let delay = 100;

//Using for each..
sentence.split('').forEach(element => {
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 100;
});

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, delay);
//   delay += 50;
// }