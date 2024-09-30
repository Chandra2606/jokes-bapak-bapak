const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const jawabanEl = document.getElementById("jawaban");
const jawabanBtn = document.getElementById("jawabanBtn");


const jokesArray = [
  "Kenapa matahari tenggelam?",
  "Burung, burung apa yang suka nolak? ",
  "Sayuran apa yang dingin?",
  "Nun mati bertemu ain?",
  "Nama kota apa yang banyak bapak-bapaknya?",
  "Semakin dikejar semakin lari, Apakah itu?",
];

const jawabanArray = [
  "Karena tidak bisa berenang",
  "Burung gakgak",
  "Kembang cold",
  "Ain nya terkejut",
  "Purwodaddy",
  "Telinga"
];

const sound = new Audio('./audio/sound.mp3');
const generateJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokesArray.length);
  jokeEl.innerHTML = jokesArray[randomIndex];
  jawabanEl.style.display = "none";
};

const generateJawaban = () => {
  const randomIndex = jokesArray.indexOf(jokeEl.innerHTML);
  jawabanEl.innerHTML = jawabanArray[randomIndex];
  jawabanEl.style.display = "block";
  sound.play();

};

generateJoke();


jokeBtn.addEventListener("click", generateJoke);
jawabanBtn.addEventListener("click", generateJawaban);
