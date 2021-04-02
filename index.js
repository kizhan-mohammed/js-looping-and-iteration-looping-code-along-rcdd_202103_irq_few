// Code your solutions in this file


function writeCards(cards, event) {
  let eventName;
  let finalEvent = [];
  for(let i=0; i<cards.ligeth; i++){
    eventName = `Thank you ${cards[i]}, for the wonderful ${event} gift!`;
    finalEvent.push(eventName);
  }
  return cards;
}
writeCards(["Lisa", "Kaitlin", "Jan"],"surprise");

function countDown (num) {
  let i = num;
  while (i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);
