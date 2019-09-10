// In this file you can specify the trial data for your experiment
const utt_prenominal = {utterance1b: "That's a ", utterance2b: " ", utterance1s: "That's a ", utterance2s: " ", condition: "prenominal"}
const utt_predicative = {utterance1b: "That ", utterance2b: " is ", utterance1s: "That ", utterance2s: " is ", condition:"predicative"}


const syntax = _.shuffle([0,1]);
const np_spec = _.shuffle([0, 0, 0, 1, 1, 1]);
const adj_congr = _.shuffle([0, 0, 0, 1, 1, 1]);
const size = _.shuffle([0, 0, 0, 1, 1, 1]);
const items = {
  dogs1: [{np: ["doberman", "dog"],
           adj: ["big", "small"],
           utterance1l: utt_prenominal.utterance1b,
           utterance1r: utt_prenominal.utterance2b,
           utterance2l: utt_predicative.utterance1b,
           utterance2r: utt_predicative.utterance2b,
           picture: "images/dog-parade-basic.png",
           target: "warmup/doberman.png"
           },
           {
             np: ["chihuahua", "dog"],
             adj: ["small", "big"],
             utterance1l: utt_prenominal.utterance1s,
             utterance1r: utt_prenominal.utterance2s,
             utterance2l: utt_predicative.utterance1s,
             utterance2r: utt_predicative.utterance2s,
             picture: "images/dog-parade-basic.png",
             target: "warmup/chihuahua.jpg"
           }
         ],
  dogs2:  [{np: ["great dane", "dog"],
            adj: ["big", "small"],
            utterance1l: utt_prenominal.utterance1b,
            utterance1r: utt_prenominal.utterance2b,
            utterance2l: utt_predicative.utterance1b,
            utterance2r: utt_predicative.utterance2b,
            picture: "images/dog-parade-basic2.png",
            target: "warmup/great-dane.jpg"
            },
            {
              np: ["pug", "dog"],
              adj: ["small", "big"],
              utterance1l: utt_prenominal.utterance1s,
              utterance1r: utt_prenominal.utterance2s,
              utterance2l: utt_predicative.utterance1s,
              utterance2r: utt_predicative.utterance2s,
              picture: "images/dog-parade-basic2.png",
              target: "warmup/pug.jpg"
            }
        ],

  birds: [  {np: ["eagle", "bird"],
             adj: ["big", "small"],
             utterance1l: utt_prenominal.utterance1b,
             utterance1r: utt_prenominal.utterance2b,
             utterance2l: utt_predicative.utterance1b,
             utterance2r: utt_predicative.utterance2b,
             picture: "images/bird-parade-basic.png",
             target: "warmup/eagle.jpg",
           },
           {
             np: ["hummingbird", "bird"],
             adj: ["small", "big"],
             utterance1l: utt_prenominal.utterance1s,
             utterance1r: utt_prenominal.utterance2s,
             utterance2l: utt_predicative.utterance1s,
             utterance2r: utt_predicative.utterance2s,
             picture: "images/bird-parade-basic.png",
             target: "warmup/colibri.jpg"
           }
 ],
  fish:   [ {np: ["swordfish", "fish"],
             adj: ["big", "small"],
             utterance1l: utt_prenominal.utterance1b,
             utterance1r: utt_prenominal.utterance2b,
             utterance2l: utt_predicative.utterance1b,
             utterance2r: utt_predicative.utterance2b,
             picture: "images/fish-parade-basic.png",
             target: "warmup/swordfish.jpg",
           },
           {
             np: ["goldfish", "fish"],
             adj: ["small", "big"],
             utterance1l: utt_prenominal.utterance1s,
             utterance1r: utt_prenominal.utterance2s,
             utterance2l: utt_predicative.utterance1s,
             utterance2r: utt_predicative.utterance2s,
             picture: "images/fish-parade-basic.png",
             target: "warmup/goldfish.png"
           }
          ],
  flowers:  [{np: ["sunflower", "flower"],
              adj: ["big", "small"],
              utterance1l: utt_prenominal.utterance1b,
              utterance1r: utt_prenominal.utterance2b,
              utterance2l: utt_predicative.utterance1b,
              utterance2r: utt_predicative.utterance2b,
              picture: "images/flower-parade-basic.png",
              target: "warmup/sunflower.png",
            },
            {
              np: ["dandelion", "fish"],
              adj: ["small", "big"],
              utterance1l: utt_prenominal.utterance1s,
              utterance1r: utt_prenominal.utterance2s,
              utterance2l: utt_predicative.utterance1s,
              utterance2r: utt_predicative.utterance2s,
              picture: "images/flower-parade-basic.png",
              target: "warmup/dandelion.jpg"
            }
          ],
  trees:   [{np: ["sequoia", "tree"],
             adj: ["big", "small"],
             utterance1l: utt_prenominal.utterance1b,
             utterance1r: utt_prenominal.utterance2b,
             utterance2l: utt_predicative.utterance1b,
             utterance2r: utt_predicative.utterance2b,
             picture: "images/tree-parade-basic.png",
             target: "warmup/sequoia.png",
           },
           {
             np: ["bonsai", "tree"],
             adj: ["small", "big"],
             utterance1l: utt_prenominal.utterance1s,
             utterance1r: utt_prenominal.utterance2s,
             utterance2l: utt_predicative.utterance1s,
             utterance2r: utt_predicative.utterance2s,
             picture: "images/tree-parade-basic.png",
             target: "warmup/bonsai.jpg"
           }
         ]
}


// const utterance1 = utterance.question1
// const utterance2 = utterance.question2

const main_trials = {
    dogs1:   {
            context: "You and your friend see the following:",
            context_picture: items.dogs1[size[0]].picture,
            text: "You also see this " + items.dogs1[size[0]].np[0] + "." ,
            target: items.dogs1[size[0]].target,
            question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
            domain: "dogs1",
            item: items.dogs1[size[0]].np[0],
            option1: "very bad",
            option2: "very well",
            // first is prenominal, second is predicative condition
            sentences: ["<b>" + items.dogs1[size[0]].utterance1l + items.dogs1[size[0]].adj[adj_congr[0]] + items.dogs1[size[0]].utterance1r + items.dogs1[size[0]].np[np_spec[0]] + ".</b>",
            "<b>" + items.dogs1[size[0]].utterance2l + items.dogs1[size[0]].np[np_spec[0]] + items.dogs1[size[0]].utterance2r + items.dogs1[size[0]].adj[adj_congr[0]] + ".</b>"],
            // 0 big, 1 small
            target_size: size[0],
            // 0 subordinate, 1 basic level
            np: np_spec[0],
            // 0 congruent, 1 incongruent
            congruence: adj_congr[0]
        },
    dogs2:    {
      context: "You and your friend see the following:",
      context_picture: items.dogs2[size[1]].picture,
      text: "You also see this " + items.dogs2[size[1]].np[0] + "."  ,
      target: items.dogs2[size[1]].target,
      question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
      domain: "dogs2",
      item: items.dogs2[size[1]].np[0],
      option1: "very bad",
      option2: "very well",
      // first is prenominal, second is predicative condition
      sentences: ["<b>" + items.dogs2[size[1]].utterance1l + items.dogs2[size[1]].adj[adj_congr[1]] + items.dogs2[size[1]].utterance1r + items.dogs2[size[1]].np[np_spec[1]] + ".</b>",
      "<b>" + items.dogs2[size[1]].utterance2l + items.dogs2[size[1]].np[np_spec[1]] + items.dogs2[size[1]].utterance2r + items.dogs2[size[1]].adj[adj_congr[1]] + ".</b>"],
      // 0 big, 1 small
      target_size: size[1],
      // 0 subordinate, 1 basic level
      np: np_spec[1],
      // 0 congruent, 1 incongruent
      congruence: adj_congr[1]
        },
    birds:    {
      context: "You and your friend see the following:",
      context_picture: items.birds[size[2]].picture,
      text: "You also see this " + items.birds[size[2]].np[0] + "." ,
      target: items.birds[size[2]].target,
      question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
      domain: "birds",
      item: items.birds[size[2]].np[0],
      option1: "very bad",
      option2: "very well",
      // first is prenominal, second is predicative condition
      sentences: ["<b>" + items.birds[size[2]].utterance1l + items.birds[size[2]].adj[adj_congr[2]] + items.birds[size[2]].utterance1r + items.birds[size[2]].np[np_spec[2]] + ".</b>",
      "<b>" + items.birds[size[2]].utterance2l + items.birds[size[2]].np[np_spec[2]] + items.birds[size[2]].utterance2r + items.birds[size[2]].adj[adj_congr[2]] + ".</b>"],
      // 0 big, 1 small
      target_size: size[2],
      // 0 subordinate, 1 basic level
      np: np_spec[2],
      // 0 congruent, 1 incongruent
      congruence: adj_congr[2]
        },
  fish:      {
    context: "You and your friend see the following:",
    context_picture: items.fish[size[3]].picture,
    text: "You also see this " + items.fish[size[3]].np[0] + ".",
    target: items.fish[size[3]].target,
    question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
    domain: "fish",
    item: items.fish[size[3]].np[0],
    option1: "very bad",
    option2: "very well",
    // first is prenominal, second is predicative condition
    sentences: ["<b>" + items.fish[size[3]].utterance1l + items.fish[size[3]].adj[adj_congr[3]] + items.fish[size[3]].utterance1r + items.fish[size[3]].np[np_spec[3]] + ".</b>",
    "<b>" + items.fish[size[3]].utterance2l + items.fish[size[3]].np[np_spec[3]] + items.fish[size[3]].utterance2r + items.fish[size[3]].adj[adj_congr[3]] + ".</b>"],
    // 0 big, 1 small
    target_size: size[3],
    // 0 subordinate, 1 basic level
    np: np_spec[3],
    // 0 congruent, 1 incongruent
    congruence: adj_congr[3]
        },
  flowers:      {
    context: "You and your friend see the following:",
    context_picture: items.flowers[size[4]].picture,
    text: "You also see this " + items.flowers[size[4]].np[0] + "." ,
    target: items.flowers[size[4]].target,
    question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
    domain: "flowers",
    item: items.flowers[size[4]].np[0],
    option1: "very bad",
    option2: "very well",
    // first is prenominal, second is predicative condition
    sentences: ["<b>" + items.flowers[size[4]].utterance1l + items.flowers[size[4]].adj[adj_congr[4]] + items.flowers[size[4]].utterance1r + items.flowers[size[4]].np[np_spec[4]] + ".</b>",
    "<b>" + items.flowers[size[4]].utterance2l + items.flowers[size[4]].np[np_spec[4]] + items.flowers[size[4]].utterance2r + items.flowers[size[4]].adj[adj_congr[4]] + ".</b>" ] ,
    target_size: size[4],
    // 0 subordinate, 1 basic level
    np: np_spec[4],
    // 0 congruent, 1 incongruent
    congruence: adj_congr[4]
        },
    trees:    {
      context: "You and your friend see the following:",
      context_picture: items.trees[size[5]].picture,
      text: "You also see this " + items.trees[size[5]].np[0] + ".",
      target: items.trees[size[5]].target,
      question: "How well does each of these sentences describe it? (Click on the slider to provide a rating)",
      domain: "trees",
      item: items.trees[size[5]].np[0],
      option1: "very bad",
      option2: "very well",
      // first is prenominal, second is predicative condition
      sentences: ["<b>" + items.trees[size[5]].utterance1l + items.trees[size[5]].adj[adj_congr[5]] + items.trees[size[5]].utterance1r + items.trees[size[5]].np[np_spec[5]] + ".</b>",
      "<b>" + items.trees[size[5]].utterance2l + items.trees[size[5]].np[np_spec[5]] + items.trees[size[5]].utterance2r + items.trees[size[5]].adj[adj_congr[5]] + ".</b>"],
      // 0 big, 1 small
      target_size: size[5],
      // 0 subordinate, 1 basic level
      np: np_spec[5],
      // 0 congruent, 1 incongruent
      congruence: adj_congr[5]
        }
};


const warmup_trials = {dogs1: {
  item: "dogs",
  picture1: "warmup/chihuahua.jpg",
  picture2: "warmup/doberman.png",
  correct1: ["chihuahua"],
  correct2: ["doberman"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"

},
dogs2: {
  item: "dogs",
  picture1: "warmup/pug.jpg",
  picture2: "warmup/great-dane.jpg",
  correct1: ["pug"],
  correct2: ["great dane"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
birds: {
  item: "birds",
  picture1: "warmup/colibri.jpg",
  picture2: "warmup/eagle.jpg",
  correct1: ["hummingbird"],
  correct2: ["eagle"],
  correct3: ["birds"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is an ",
  question2: "These are both"
},
flowers: {
  item: "flowers",
  picture1: "warmup/dandelion.jpg",
  picture2: "warmup/sunflower.png",
  correct1: ["dandelion"],
  correct2: ["sunflower"],
  correct3: ["flowers"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
fish: {
  item: "fish",
  picture1: "warmup/swordfish.jpg",
  picture2: "warmup/goldfish.png",
  correct1: ["swordfish"],
  correct2: ["goldfish"],
  correct3: ["fish"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},

trees: {
  item: "trees",
  picture1: "warmup/sequoia.png",
  picture2: "warmup/bonsai.jpg",
  correct1: ["redwood", "sequoia"],
  correct2: ["bonsai"],
  correct3: ["trees"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
}
}

const trials = _.shuffle([ {x: warmup_trials.dogs1, y:main_trials.dogs1}, {x: warmup_trials.dogs2, y:main_trials.dogs2},
  {x:warmup_trials.birds, y:main_trials.birds},
  {x:warmup_trials.flowers, y:main_trials.flowers},
  {x:warmup_trials.fish, y:main_trials.fish},
  {x:warmup_trials.trees, y: main_trials.trees}])

  const trial_info = {

       main1: [

         trials[0].y,
         trials[1].y,
         trials[2].y

    ],
    main2 :[
      trials[3].y,
      trials[4].y,
      trials[5].y
    ],
     warmup1: [
       trials[0].x,
       trials[1].x,
       trials[2].x
    ],
    warmup2: [
      trials[3].x,
      trials[4].x,
      trials[5].x
    ]
  };
