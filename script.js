// Mixed Messages 

console.log('Hello, and welcome to Mixed Messages!\nHave you ever looked a child in the face, and they have asked you to tell them a story, only for you mind to go totally blank because that is a TOTALLY unreasonable request to ask of an adult, and you are in no way prepared?\nWell, here is your solution. The Children\'s Story Random Prompt Generator!');

const animal = ['an Elephant', 'an Owl', 'a Pigeon', 'a Rabbit', 'a T-Rex', 'a Snake', 'a Badger', 'a Dolphin', 'a Chimp'];
const person = ['Child', 'Priest', 'Spy', 'Policeman', 'Postman', 'Pizza Delivery Guy', 'Politician', 'Knight', 'Princess', 'Wizard'];
const setting = ['Forest', 'Shopping Centre', 'Abandoned Building', 'Farm', 'Treehouse', 'Tattoo Parlour', 'Sex Shop', 'Bakery', 'Theme Park', 'School'];
const time = ['bright summer\'s day', 'stormy night', 'breezy autumn afternoon', 'freezing white blizzard'];
const action = ['performed surgery on a pheasant', 'opened a giftwares store', 'audited a family of squirrels', 'played knock-and-run at an old folks home', 'solved a rubiks cube, whilst colourblind', 'joined a cult', 'hacked into a white, middle class family\'s smart home system and began spying on them', 'robbed an ice cream store', 'was robbed after winning $20 from his friend\'s fantasy football league group', 'joined an essential oils pyramid scheme'];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 4);

const generateStory = () => {
  const story = `Once upon a ${time[randomNumber2]}, ${animal[randomNumber1]} ${action[randomNumber1]}. `;
  return story;
}
console.log(generateStory());
