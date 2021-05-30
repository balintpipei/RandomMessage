const test = ['a','b','c','d','e','f','g','h'];
//variable of word
const inspirationalMessage = [
  '"Act as if what you do makes a difference. It does."',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    '"Never bend your head. Always hold it high. Look the world straight in the eye."',
    '"What you get by achieving your goals is not as important as what you become by achieving your goals."',
    '"Believe you can and you are halfway there."',
    '"When you have a dream, you have got to grab it and never let go."',
    '"I can not change the direction of the wind, but I can adjust my sails to always reach my destination."',
    '"No matter what you are going through, there is a light at the end of the tunnel."',
    '"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome."'
 ];

//choose a random indexed array
function randomMessage (array) {
    let i = Math.floor(Math.random() * array.length);
    console.log(array[i]);
};


console.log('Random massage test: ');
randomMessage(test);

console.log('Random inspirational message: ');
randomMessage(inspirationalMessage);