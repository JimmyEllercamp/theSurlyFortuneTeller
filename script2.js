// Mixed Messages 2

console.log('The fortune teller awaits. Continue if you want to learn about your future');

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

const love1 = '';
const love2 = '';
const love3 = '';
const love4 = '';
const love5 = '';

const day1 = '';
const day2 = '';
const day3 = '';
const day4 = '';
const day5 = '';

const week1 = '';
const week2 = '';
const week3 = '';
const week4 = '';
const week5 = '';

const year1 = '';
const year2 = '';
const year3 = '';
const year4 = '';
const year5 = '';

const wealthArray = [wealth1, wealth2, wealth3, wealth4, wealth5];
const enemyArray = [enemy1, enemy2, enemy3, enemy4, enemy5];
const loveArray = [love1, love2, love3, love4, love5];
const dayArray = [day1, day2, day3, day4, day5];
const weekArray = [week1, week2, week3, week4, week5];
const yearArray = [year1, year2, year3, year4, year5];

const generateFortune = () => {
    return `I have seen your future, In my lovely shiny little ball, that you are not allowed to touch, and this is what it holds: \nWealth: ${wealthArray[randomNumber]} \nYour foes: ${enemyArray[randomNumber]} \nYour love life: ${loveArray[randomNumber]}\nYour day: ${dayArray[randomNumber]}\nYour week: ${weekArray[randomNumber]}\nYour year: ${yearArray[randomNumber]}\n\n`;

}
