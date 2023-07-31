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

  let keys = Object.keys(jokes);
  var random_key = keys[Math.floor(Math.random() * keys.length)]
  console.log(random_key, jokes[random_key]);

  function gnerateKey (){
    let random_key = keys[Math.floor(Math.random() * keys.length)] 
  }