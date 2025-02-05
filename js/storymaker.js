// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors. it gets the button elements for each item.
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors. Gets the paragraph element
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyParagraph = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", "kissed"];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', "a fat"];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', "bug", "worm"];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', "in my shoes"];

// Variables for count to grab array elements. It just initializes the counters
let noun1Count = 0, verbCount = 0, adjectiveCount = 0, noun2Count = 0, settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const noun = nouns1[noun1Count];
    choosenNoun1.textContent = noun;

    // if-else to change count setting
    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    const verb = verbs[verbCount];
    choosenVerb.textContent = verb;

    // if-else to change counts setting
    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    // variable to get array element and displaying it
    const adjective = adjectives[adjectiveCount];
    choosenAdjective.textContent = adjective;

    // if-else to change count s setting
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    // variable to get array element and displaying it
    const noun = nouns2[noun2Count];
    choosenNoun2.textContent = noun;

    // if-else to change count setting
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    // variable to get array element and displaying it
    const setting = settings[settingCount];
    choosenSetting.textContent = setting;

    // if-else to change count setting
    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;

    //displays the concatenated words.
    storyParagraph.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `${nouns1[Math.floor(Math.random() * nouns1.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns2[Math.floor(Math.random() * nouns2.length)]} ${settings[Math.floor(Math.random() * settings.length)]}.`;
    storyParagraph.textContent = randomStory;
}

// Function to set student info (student ID/name). I would say statically for now.
function student_info_on_click() {
    document.getElementById('studentId').textContent = 'Student Name: Prince Pun (200589230)';
}

/* Event Listeners for the buttons
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

// New button for showing student info with event listener on click
const studentInfoButton = document.getElementById('showStudentInfo');
studentInfoButton.addEventListener('click', student_info_on_click);