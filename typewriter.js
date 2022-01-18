const sentence = "this text will appear one character at a time\n";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}