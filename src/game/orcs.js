// Orc names/clans
const listOfOrcs = Array.from({ length: 10 }, () => ({
  name: getRandomName(),
  clan: getRandomOrcClan(),
}));
function getRandomOrcClan() {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  const firstConsonant =
    consonants[Math.floor(Math.random() * consonants.length)].toUpperCase();
  const secondVowel = vowels[Math.floor(Math.random() * vowels.length)];
  let middleLetters = "";
  for (let i = 0; i < 3; i++) {
    middleLetters += consonants[Math.floor(Math.random() * consonants.length)];
    middleLetters += vowels[Math.floor(Math.random() * vowels.length)];
  }
  return firstConsonant + secondVowel + "'" + middleLetters;
}
function getRandomName() {
  const firstNames = [
    "alice",
    "bob",
    "charlie",
    "david",
    "eve",
    "frank",
    "grace",
    "hannah",
    "ian",
    "julia",
  ];
  const lastNames = [
    "smith",
    "jones",
    "brown",
    "davis",
    "white",
    "black",
    "green",
    "harris",
    "martin",
    "thompson",
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}
