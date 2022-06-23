const fillers = {
    Servant: ["Saber","Archer","Lancer","Rider","Caster","Assassin","Berserker","Ruler","Avenger","Alter Ego","Moon Cancer","Foreigner","Pretender"],
    Class: ["Druid","Hunter","Mage","Paladin","Priest","Rouge","Shaman","Warlock"],
    LastName: ["Tadokoro","Lee","Tadano","Minato","Shiroue","Tokoyami","Usada","Amane","Akai","Hoshikawa","Lize","Inui","Ange","Aiba","Emma"],
    FirstName: ["Kouji","Tadokoro","Kazuhito","Aqua","Fubuki","Towa","Pekora","Kanata","Haato","Sora","Helesta","Katrina","Toko","Uiha","August"],
    Item: ["Power","Speed","Strength","Mana","Healing","Kemono"],
    Num: ["114","514","1919","810","114514","1145141919810","773","0","∞","2434","7"],
    Location: ["Shimo-kitazawa","Gensoukyou","Azeroth","Hololive","Fuyuki","Nijisanji","YYUT's Home"],
    Events: ["War","GV","Virtual Live","Animation",],
    Currency: ["Dollar","Yen","Ringo","Chinko","Mango","Coin"],
    Feeling: ["Cool","Sad","Bastard","UHHHHHH","Wonderful","Unbelievable","Unimaginable","Uncomfortbale","IIYO","Good","Fnatic","Lunatic","Nothingness","Void"],
    
  };
  
  const template = `Uni:"Welcome to Uni's Magic Shop!, I am Uni, a (an) $Servant in $Location ~ What can I help you today?"
  "Hi! I am $LastName $FirstName, a (an) $Class in $Location, I want to buy $Item Potions today."
  "Sounds Good!, These potions cost $Num $Currency!”
  "Ok!...... Hey Uni, Do you know the latest big news in $Location ? The $Events occurs between $LastName and $LastName !"
  "I Know it! It is so $Feeling for me! .............. Here is you potions and $Currency for change."
  "Thank you so much! I love you Uni ~"
  "??????"
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
