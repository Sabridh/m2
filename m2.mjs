let verschil;
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortejaar = await userInput.question('in welke jaar ben je geboren? ');
let toekomstjaar = await userInput.question('in welke jaar wil je het berekenen? ');




verschil = toekomstjaar - geboortejaar;



console.log('in '+ toekomstjaar +', zal ik '+ verschil +' of '+ verschil +' jaar oud zijn');