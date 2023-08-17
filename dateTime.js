let time = new Date();

let g1 = time.getTime();
console.log(g1);

let g2 = 0;
setInterval(() => {
  g2 = time.getTime();
  console.log(g2);
}, 2000);

let diff = (g1 - g2) / 1000;
diff /= 60;

setInterval(() => console.log(Math.abs(Math.round(diff))), 5000);

console.log()