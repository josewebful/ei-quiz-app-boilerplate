/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the NBA team LeBron James has not played for?',
      answers: [
        'Cleveland Cavaliers',
        'Los Angeles Lakers',
        'Minnesota Timberwolves',
        'Miami Heat'
      ],
      correctAnswer: 'Minnesota Timberwolves'
    },
    {
      question: 'Who won the 2020 NBA Defensive player of the year?',
      answers: [
        'Rudy Gobert',
        'Anthony Davis',
        'Marcus Smart',
        'Giannis Antetokounmpo'
      ],
      correctAnswer: 'Giannis Antetokounmpo'
    },
    {
      question: 'Who won the 2020 NBA Rookie of the Year?',
      answers: [
        'Ja Morant',
        'Brandon Clarke',
        'Zion Williamson',
        'Tyler Herro'
      ],
      correctAnswer: 'Ja Morant'
    },
    {
      question: 'How many NBA Finals MVPs does Steph Curry have? ',
      answers: [
        '0',
        '1',
        '2',
        '3'
      ],
      correctAnswer: '0'
    },
    {
      question: 'Who is the NBA logo made after?',
      answers: [
        'Michael Jordan',
        'Larry Bird',
        'Jerry West',
        'Magic Johnson'
      ],
      correctAnswer: 'Jerry West'
    },
  ],
  
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)