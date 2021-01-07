// Mixed Messages 2

console.log('The fortune teller awaits. Continue if you want to learn about your future');

const randomNumber = Math.floor(Math.random() * 5);

const wealth1 = '';
const wealth2 = '';
const wealth3 = '';
const wealth4 = '';
const wealth5 = '';

const enemy1 = '';
const enemy2 = '';
const enemy3 = '';
const enemy4 = '';
const enemy5 = '';

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
    return `Wealth: ${wealthArray[randomNumber]} \n Your foes: ${enemyArray[randomNumber]} \n Your love life: ${loveArray[randomNumber]}\nYour day: ${dayArray[randomNumber]}\nYour week: ${weekArray[randomNumber]}\nYour year: ${yearArray[randomNumber]}`;
    
}