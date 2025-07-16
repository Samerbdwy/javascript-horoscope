
let birthMonth = "March"; 


let fortunes = [
  "You will have a lucky day!",
  "Something unexpected will make you smile.",
  "Take a chance — it'll pay off!",
  "Someone close to you has good news.",
  "Rest is important — don’t skip it today.",
  "An exciting opportunity is around the corner."
];

let sign = "";

if (birthMonth === "January") {
  sign = "♑ Capricorn";
} else if (birthMonth === "February") {
  sign = "♒ Aquarius";
} else if (birthMonth === "March") {
  sign = "♓ Pisces";
} else if (birthMonth === "April") {
  sign = "♈ Aries";
} else if (birthMonth === "May") {
  sign = "♉ Taurus";
} else if (birthMonth === "June") {
  sign = "♊ Gemini";
} else if (birthMonth === "July") {
  sign = "♋ Cancer";
} else if (birthMonth === "August") {
  sign = "♌ Leo";
} else if (birthMonth === "September") {
  sign = "♍ Virgo";
} else if (birthMonth === "October") {
  sign = "♎ Libra";
} else if (birthMonth === "November") {
  sign = "♏ Scorpio";
} else if (birthMonth === "December") {
  sign = "♐ Sagittarius";
} else {
  sign = "❓ Unknown Month";
}

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];


console.log("Your sign is: " + sign);
console.log("🔮 " + randomFortune);
