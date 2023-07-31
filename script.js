const wheel = document.querySelector('.wheel');
const button = document.querySelector('.spinbutton');
const background = document.querySelector('.wrapper');
const display = document.querySelector('.display');
const winner = document.querySelector('.winner');
const okbutton = document.querySelector('.okbutton');
const overlay = document.querySelector('.overlay');
const iconholder = document.querySelector('.iconholder');
const kekwicon = document.querySelector('.kekwicon');
const gifticon = document.querySelector('.gifticon');
const ayayaicon = document.querySelector('.ayayaicon');
const stareicon = document.querySelector('.stareicon');
const susicon = document.querySelector('.susicon');
const kissicon = document.querySelector('.kissicon');
const gachiicon = document.querySelector('.gachiicon');
const fiveheadicon = document.querySelector('.fiveheadicon');
const kekicon = document.querySelector('.kekicon');
const haicon = document.querySelector('.haicon');
const boingicon = document.querySelector('.boingicon');
const swagicon = document.querySelector('.swagicon');
const poticon = document.querySelector('.poticon');
const goldenicon = document.querySelector('.goldenicon');
const vipicon = document.querySelector('.vipicon');

let deg = 0;
var colors = ['red', 'yellow', 'green', 'blue' , 'violet']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
var active = 0;
let rainbow;
let song = document.getElementById("mario");
let pop = document.getElementById('pop');
let kekw = document.getElementById('kekw');
let vip = document.getElementById('vip');
let swag = document.getElementById('swag');
let boing = document.getElementById('boing');
let flex = document.getElementById('flex');
let ha = document.getElementById('ha');
let kek = document.getElementById('kek');
let ayaya = document.getElementById('ayaya');
let kiss = document.getElementById('kiss');
let stare = document.getElementById('stare');
let sus = document.getElementById('sus');
let fivehead = document.getElementById('5head');
let pot = document.getElementById('pot');

const jokes = {
  1: "What did the Buddhist say to the hot dog vendor? 'Make me one with everything.'",
  2: "What do you call a fake noodle? An impasta.",
  3: "Why can't you explain puns to kleptomaniacs? Because they always take things literally.",
  4: "Why did the hipster burn his mouth? He drank the coffee before it was cool.",
  5: "Why did the nurse need a red pen? In case she needed to draw blood.",
  6: "Why don't calculus majors throw house parties? Because they don't want their guests to drink and derive.",
  7: "Want to hear a construction joke? Oh never mind, I'm still working on that one.",
  8: "Why don't scientists trust atoms? Because they make up everything.",
  9: "I poured root beer in a square glass. Now I just have beer.",
  10: "What did the bald man exclaim when he received a comb for a present? Thanks—I'll never part with it.",
  11: "Rest in peace, boiling water. You will be mist.",
  12: "Have you heard about the new restaurant called Karma? There's no menu: You get what you deserve.",
  13: "How does a rabbi make coffee? Hebrews it.",
  14: "What's red and moves up and down? A tomato in an elevator.",
  15: "What do you call a parade of rabbits hopping backwards? A receding hare-line.",
  16: "What is Forrest Gump's password? 1Forrest1.",
  17: "Why do French people eat snails? They don't like fast food.",
  18: "What sits at the bottom of the sea and twitches? A nervous wreck.",
  19: "A woman in labor suddenly shouted, 'Shouldn't! Wouldn't! Couldn't! Didn't! Can't!' 'Don't worry,' the doctor said. 'Those are just contractions.'",
  20: "Why can't male ants sink? They're buoy-ant.",
  21: "What is an astronaut's favorite part on a computer? The space bar.",
  22: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  23: "What does the man on the moon do when his hair gets too long? Eclipse it.",
  24: "What did 0 say to 8? Nice belt.",
  25: "What kind of exercise do lazy people do? Diddly-squats.",
  26: "What's a private investigator's favorite shoe? Sneak-ers.",
  27: "What do you call a pony with a cough? A little horse.",
  28: "Why aren't koalas actual bears? They don't meet the koalafications.",
  29: "Why did the M&M go to school? Because he wanted to be a Smartie.",
  30: "Why do bees have sticky hair? Because they use honeycombs.",
  31: "What do you call a rooster staring at a piece of lettuce? A chicken sees a salad.",
  32: "Why couldn't the leopard play hide-and-seek? Because he was always spotted.",
  33: "What do you call a bear with no teeth? A gummy bear.",
  34: "How do you make a tissue dance? You put a little boogie in it.",
  35: "Why did the chicken cross the playground? To get to the other slide.",
  36: "Why did the teddy bear say no to dessert? Because she was stuffed.",
  37: "Why does Humpty Dumpty love autumn? Because Humpty Dumpty had a great fall.",
  38: "What did one traffic light say to the other? Stop looking at me, I'm changing.",
  39: "What do you call bears with no ears? B.",
  40: "What's a snake's favorite subject in school? Hiss-tory.",
  41: "What's a foot long and slippery? A slipper.",
  42: "What is sticky and brown? A stick.",
  43: "What did the left eye say to the right eye? Between us, something smells.",
  44: "Why won't peanut butter tell you a secret? He's afraid you'll spread it.",
  45: "How do you throw a space party? You planet.",
  46: "Why did the math textbook visit the guidance counselor? It needed help figuring out its problems.",
  47: "Why did the gym close down? It just didn't work out.",
  48: "Why do birds fly south in the winter? It's faster than walking."
};


const randomFacts = {
  1: "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not.",
  2: "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion meaning the iron heats up, the particles gain kinetic energy and take up more space.",
  3: "Trypophobia is the fear of closely-packed holes. Or more specifically, 'an aversion to the sight of irregular patterns or clusters of small holes or bumps.' No crumpets for them, then.",
  4: "Allodoxaphobia is the fear of other people's opinions. It's a rare social phobia that's characterised by an irrational and overwhelming fear of what other people think.",
  5: "Australia is wider than the moon. The moon sits at 3400km in diameter, while Australia’s diameter from east to west is almost 4000km.",
  6: "'Mellifluous' is a sound that is pleasingly smooth and musical to hear.",
  7: "The Spice Girls were originally a band called Touch. 'When we first started [with the name Touch], we were pretty bland,' Mel C told The Guardian in 2018. 'We felt like we had to fit into a mould.'",
  8: "Emma Bunton auditioned for the role of Bianca Butcher in Eastenders. Baby Spice already had a small part in the soap back in the 90s but tried out for a full-time role. She was pipped to the post by Patsy Palmer but ended up auditioning for the Spice Girls not long after.",
  9: "Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue.",
  10: "It's illegal to own just one guinea pig in Switzerland. It's considered animal abuse because they're social beings and get lonely.",
  11: "The Ancient Romans used to drop a piece of toast into their wine for good health - hence why we 'raise a toast'.",
  12: "The heart of a shrimp is located in its head. They also have an open circulatory system, which means they have no arteries and their organs float directly in blood.",
  13: "Amy Poehler was only seven years older than Rachel McAdams when she took on the role of 'cool mom' in Mean Girls. Rachel was 25 as Regina George - Amy was 32 as her mum.",
  14: "People are more creative in the shower. When we take a warm shower, we experience an increased dopamine flow that makes us more creative.",
  15: "Baby rabbits are called kits. Cute!",
  16: "The unicorn is the national animal of Scotland. It was apparently chosen because of its connection with dominance and chivalry as well as purity and innocence in Celtic mythology.",
  17: "The first aeroplane flew on December 17, 1903. Wilbur and Orville Wright made four brief flights at Kitty Hawk, North Carolina, with their first powered aircraft, aka the first airplane.",
  18: "Venus is the only planet to spin clockwise. It travels around the sun once every 225 Earth days but it rotates clockwise once every 243 days.",
  19: "Nutmeg is a hallucinogen. The spice contains myristicin, a natural compound that has mind-altering effects if ingested in large doses.",
  20: "A 73-year-old bottle of French Burgundy became the most expensive bottle of wine ever sold at auction in 2018, going for $558,000 (approx £439,300). The bottle of 1945 Romanee-Conti sold at Sotheby for more than 17 times its original estimate of $32,000.",
  21: "Competitive art used to be an Olympic sport. Between 1912 and 1948, the international sporting events awarded medals for music, painting, sculpture and architecture. Shame it didn't catch on, the famous pottery scene in Ghost could have won an Olympic medal as well as an Academy Award for the best screenplay.",
  22: "A chef's hat has 100 pleats. Apparently, it's meant to represent the 100 ways you can cook an egg.",
  23: "In 2014, there was a Tinder match in Antarctica. Two research scientists matched on the global dating app in the most remote part of the world - a man working at the United States Antarctic McMurdo Station and a woman camping a 45-minute helicopter ride away. What are the chances?!",
  24: "The Spanish national anthem has no words. The 'Marcha Real' is one of only four national anthems in the world (along with those of Bosnia and Herzegovina, Kosovo, and San Marino) to have no official lyrics.",
  25: "The Japanese word 'Kuchi zamishi' is the act of eating when you're not hungry because your mouth is lonely. We do this all the time.",
  26: "The probability of a blue lobster existing is widely touted as being one in two million. Bright blue lobsters are so-coloured because of a genetic abnormality that causes them to produce more of a certain protein than others."
};


//var random_key = +random_key + (keys.length - random_key);
//  console.log(random_key);








let zoneSize = 20;

const symbolZones = {
  0: "KEKW",
  1: "Timeout",
  2: "KEK",
  3: "Gifted Sub",
  4: "KEKW",
  5: "Random BAD joke",
  6: "Flex!",
  7: "Random Fact",
  8: "Golden KEKW",
  9: "Pot Time!",
  10: "Gifted Sub",
  11: "xddKiss",
  12: "Timeout a chatter",
  13: "Stare",
  14: "KEKW",
  15: "Swag Thijs",
  16: "AYAYA",
  17: "Become VIP",
  18: "KEKW"
}

function playAudio(){
  song.volume = 0.5;
  song.play();
}
function playPop(){
  pop.volume = 0.5;
  pop.play();
}
function pauseAudio(){
  song.pause();
  song.currentTime = 0;
}

function playKekw(){
  kekw.volume = 0.7;
  kekw.play();
}

function playVip(){
  vip.volume = 0.7;
  vip.play();
}

function playSwag(){
  swag.volume = 0.7;
  swag.play();
}

function playBoing(){
  boing.volume = 0.7;
  boing.play();
}
function playPot(){
  pot.volume = 0.7;
  pot.play();
}

function playFlex(){
  flex.volume = 1;
  flex.play();
}

function playHa(){
  ha.volume = 0.7;
  ha.play();
}

function playKek(){
  kek.volume = 0.7;
  kek.play();
}

function playAyaya(){
  ayaya.volume = 0.3;
  ayaya.play();
}

function playKiss(){
  kiss.volume = 0.7;
  kiss.play();
}
function playStare(){
  stare.volume = 0.7;
  stare.play();
}
function playSus(){
  sus.volume = 0.3;
  sus.play();
}
function playFivehead(){
  sus.volume = 0.4;
  fivehead.play();
}
function popup (){
  display.classList.toggle('active');
  overlay.classList.toggle('active');
}

function getIcon (icon){
  iconholder.append(icon);
}






function removeIcon (){
  iconholder.innerHTML = '';
}

function handleWin (actualDeg){
  const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
  winner.innerHTML = symbolZones[winningSymbolNr];

}

button.addEventListener('click', () => {
  
  button.style.pointerEvents = 'none';
  winner.innerHTML = "-";
  deg = Math.floor(5000 + Math.random() * 5000)
  wheel.style.transition = 'transform 15s cubic-bezier(0.1, -0.01, 0, 1)';
  wheel.style.transform = `rotate(${deg}deg)`;
  playAudio();
  rainbow = setInterval(function rainbow(){
    background.style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 300);
})

wheel.addEventListener('transitionend', () => {
clearInterval(rainbow);
pauseAudio();
background.style.background = 'rgb(26, 26, 26)';
button.style.pointerEvents = 'auto';
wheel.style.transition = 'none';
const actualDeg = deg % 360;
wheel.style.transform = `rotate(${actualDeg}deg)`
popup();
handleWin(actualDeg);
let winningNr = Math.ceil(actualDeg / zoneSize);
console.log(winningNr);
if (winningNr == 4 || winningNr == 14 || winningNr == 18 || winningNr == 0){
  playKekw();
  getIcon(kekwicon); 
}
if (winningNr == 3 || winningNr == 10){
  playVip();  
  getIcon(gifticon);
}
if (winningNr == 17){
  playVip();  
  getIcon(vipicon);
}
if (winningNr == 15){
  playSwag(); 
  getIcon(swagicon);  
}
if (winningNr == 8){
  playKekw(); 
  getIcon(goldenicon);  
}
if (winningNr == 1){
  playBoing(); 
  getIcon(boingicon); 
}
if (winningNr == 6){
  playFlex(); 
  getIcon(gachiicon); 
}
if (winningNr == 5){
  playHa();  
  let keys = Object.keys(jokes);
  var random_key = keys[Math.floor(Math.random() * keys.length)];
  var currentJoke = jokes[random_key];
  console.log(random_key, currentJoke);
  
  function printJoke (){
    iconholder.innerHTML = currentJoke;
  }
  

  printJoke();
  console.log(random_key, currentJoke);
}
if (winningNr == 16){
  playAyaya();  
  getIcon(ayayaicon);
}
if (winningNr == 11){
  playKiss(); 
  getIcon(kissicon); 
}
if (winningNr == 13){
  playStare();  
  getIcon(stareicon);
}
if (winningNr == 2){
  playKek();
  getIcon(kekicon);   
}
if (winningNr == 12){
  playSus();  
  getIcon(susicon);
}
if (winningNr == 7){
  playFivehead(); 

  let keys = Object.keys(randomFacts);
  var random_key = keys[Math.floor(Math.random() * keys.length)];
  var currentFact = randomFacts[random_key];
  console.log(random_key, currentFact);
  
  function printFact (){
    iconholder.innerHTML = currentFact;
  }
  

  printFact();

  

}
if (winningNr == 9){
  playPot();
  getIcon(poticon); 
}
})



okbutton.addEventListener('click', () => {
  playPop();
  removeIcon();
  popup();
  
 
}
)