// Mixed Messages 1

console.log('Hello, and welcome to Mixed Messages!\nHave you ever looked a child in the face, and they have asked you to tell them a story, only for you mind to go totally blank because that is a TOTALLY unreasonable request to ask of an adult, and you are in no way prepared?\nWell, here is your solution. The Children\'s Story Prompt Generator! We will give you a Person, Place and Scenario, to take all the work out of storytime. Here goes!\n \n \n');

const person = ['Superman', 'Kevin Bacon', 'Hugh Grant', 'Winnie the Pooh', 'Santa', 'Pepper Pig', 'Don Draper', 'Sailor Moon', 'The Godfather', 'Wonder Woman'];
const place = ['The North Pole', 'Pleasantville', ];
const scenario = [];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 4);

const generateStory = () => {
  const storyPrompt = `Your story prompt: Once upon a ${time[randomNumber2]}, a ${person[randomNumber1]} came across ${animal[randomNumber1]} in ${setting[randomNumber1]} who had ${action[randomNumber1]}. The rest is up to you!`;
  return storyPrompt;
}
console.log(generateStory());
