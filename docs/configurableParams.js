configurableParams = [
  {
    "name": "seed",
    "label": "Random Seed",
    "category": "gameplay",
    "type": "text",
    "help": "Allows you to play the same version as a friend, simply enter the same seed as them and you will be playing the exact same ROM."
  },
  {
    "name": "shuffle-paintings",
    "label": "Painting (Art) randomization",
    "category": "aesthetics",
    "type": "select",
    "default": "match",
    "options": [
      {
        "value": "vanilla",
        "label": "Off"
      },
      {
        "value": "match",
        "label": "Match Levels"
      },
      {
        "value": "random",
        "label": "Randomized"
      }
    ],
    "help": "Change the behaviour of how the paintings in the castle are shuffled (\"match\" - matches randomized levels, i.e. painting = level, \"random\" - independently randomize paintings, \"off\" - leave paintings untouched)"
  },
  {
    "name": "shuffle-entries",
    "label": "Entrance Randomizer",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffles the levelentries. When you enter a level, you will end up at a random one."
  },
  {
    "name": "shuffle-mario-outfit",
    "label": "Mario's Outfit Randomizer",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Randomizes parts of Marios Outfit."
  },
  {
    "name": "shuffle-music",
    "label": "Music Randomizer",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": false
    },
    "help": "Randomizes most songs in the game."
  },
  {
    "name": "shuffle-objects",
    "label": "Object Shuffle",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffles Objects in Levels"
  },
  {
    "name": "shuffle-colors",
    "label": "Randomize Colors",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffle various colors in the game"
  },
  {
    "name": "shuffle-text",
    "label": "Randomize Dialog/Text",
    "category": "aesthetics",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Shuffle Dialog text, for signs, npc dialog, level dialog and prompts."
  },
  {
    "name": "disable-cutscenes",
    "label": "Disable Cutscenes/Intro",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": true
    },
    "help": "Disables some of the games cutscenes. (Peach Intro, Lakitu Intro, Bowser-Text on Entry)"
  },
  {
    "name": "disable-starwarp",
    "label": "Disable Star-Warp",
    "category": "gameplay",
    "type": "checkbox",
    "default": {
      "CLI": false,
      "WEB": false
    },
    "help": "Disables automatically leaving the level when you collect a star. This way, all stars act like a 100-Coin star or a Bowser 8-Reds Star"
  },
  {
    "name": "stardoor-requirements",
    "label": "Stardoor Requirements",
    "category": "gameplay",
    "disabled": "work-in-progress",
    "type": "select",
    "options": [
      {
        "value": "vanilla",
        "label": "Vanilla"
      },
      {
        "value": "random",
        "label": "Random"
      },
      {
        "value": "open",
        "label": "All Open"
      }
    ],
    "default": "vanilla",
    "help": "Changes how the doors to levels require different amounts of stars to be collected beforehand. Random means all doors require stars, but the amount will be random. Open simply means all doors are open from the start."
  }
]