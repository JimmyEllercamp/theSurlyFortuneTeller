// Mixed Messages 2

console.log('The fortune teller awaits. Continue if you want to learn about your futureeee ooooOOOOOOooooooohhhhhhh\n\n\n');
let userName = '';
if (!userName){
userName = 'my dear';
}
const randomNumber = Math.floor(Math.random() * 5);

const wealth1 = 'Corn is selling well this season. You should plant some crops in your neighbours front yard, they never use it anyway.';
const wealth2 = 'The housing market will remain out of reach for anyone who isn\'t a boomer, and every boomer will tell you "Now is the time to buy a house, this market right now, Nance and I are always keeping our eye out. Mark my words, now is the time.';
const wealth3 = 'The stock market will continue doing things that none of us really understand anyway, but your older friends will still pretend they understand the \'fluctuations\'.';
const wealth4 = 'You will have trouble finding your wallet, so try not let it out of your sight.';
const wealth5 = 'A wealthy asian businessman will offer money for personal modelling photos, and it would be quite a lucrative business but you will slightly hate yourself for doing it.';

const enemy1 = 'Smartwatches are plotting a hostile takeover of the world, stay away from the new iOS update.';
const enemy2 = 'There is a ninja who has been following you for weeks now. Someone you don\'t even know blamed you for sleeping with his sister. Stay in the light when walking around at night, and steer clear of any alleys, we all know Spiderman is a fictional character, and he ain\'t coming to save you.';
const enemy3 = 'Elon Musk has been spying on you for years.';
const enemy4 = 'You remember that one kid in your grade 2 class who kinda smelled but always gave you weird looks? He still thinks about you with disdain.';
const enemy5 = 'Never insult a monkey weilding a sword. They never forgive';

const love1 = 'Nancy, the 42 year old single lady from the corner store next to the train station lights up when she sees you. You are the happiest part of her day.';
const love2 = 'Never play Fog Of Love with a partner, only ever with a friend. I swear to you on every crystal ball I have, you will end up in a couple fight and hating each other for the rest of the week. You have been warned.';
const love3 = 'You should message your crush to grab a drink this week. They will say yes.';
const love4 = 'No matter how lonely you are, watching Cassablanca will always give you an escape.';
const love5 = 'Get the hell of tinder, it is just as toxic as the last person you blocked and reported on it.';

const day1 = 'Your local cafe will use off milk today. Get black coffee instead.';
const day2 = 'Look both ways before crossing, there is something wrong with people on the road today.';
const day3 = 'Don\'t stand underneath windowsills or awnings, and for the love of every fluffy dog you will see today, do NOT look up if a bird shits on you. It is threatening to.';
const day4 = 'There is a good new special at your local bar, you will enjoy it. Go for a nice meal and a glass of something strong with a book, you will have a wonderful night.';
const day5 = 'You left the stove on.';

const week1 = 'Work will suck this week. Jordan has a massive dried booger that you will not be able to unsee, and your manager is in a shit mood and will take it out on you.';
const week2 = 'There is a new stray cat behind your building. Leave a little food out for it.';
const week3 = 'It will be sunny until the weekend. No, the weatherman has this wrong. Again.';
const week4 = 'There are a family of ducks living in the creek you walk past, and they are planning to stage a coup against the family of turtles to move further up stream.';
const week5 = 'Your lunch today will give you the squirts for the rest of the week.';

const year1 = 'You will realise who your true friends are. That\'s right, I mean the cast from Dawsons Creek. Veg out, binge it.';
const year2 = 'If you work hard, you still won\'t be considered for the promotion you definitely deserve. It will be that cow Sarah. The brown nose.';
const year3 = 'Find a new hobby, you\'ve been feeling stagnant lately, and it will become a strong focus in your life for the forseeable future.';
const year4 = 'Do you like bread? You should totally be into bread. It\'s a good year for bread.....Ok I lied I\'m just really hungry it\'s been a long day aRE WE NOT DONE YET I AM HANGRY-';
const year5 = 'You will stub your toe and it will not heal properly for the rest of the year. Sucker.';

const wealthArray = [wealth1, wealth2, wealth3, wealth4, wealth5];
const enemyArray = [enemy1, enemy2, enemy3, enemy4, enemy5];
const loveArray = [love1, love2, love3, love4, love5];
const dayArray = [day1, day2, day3, day4, day5];
const weekArray = [week1, week2, week3, week4, week5];
const yearArray = [year1, year2, year3, year4, year5];

const generateFortune = () => {
    return `I have seen your future, ${userName}, In my lovely shiny little ball, that you are not allowed to touch, and this is what it holds: \n\nWealth: ${wealthArray[randomNumber]} \n\nYour foes: ${enemyArray[randomNumber]} \n\nYour love life: ${loveArray[randomNumber]}\n\nYour day: ${dayArray[randomNumber]}\n\nYour week: ${weekArray[randomNumber]}\n\nYour year: ${yearArray[randomNumber]}\n\n`;

}
console.log(generateFortune()) 
console.log('\nThat will be $20 and a slice of your pizza thank you..that\'s right...in the jar as well....don\'t WORRY about it just DUMP IT IN I AM SO HUNGRY');

