// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names){
    let message = [];
    for(let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        // console.log(message)
    }
    return message;

    }
    writeCards(names)



function countDown(){
    let counter = 10;
    while(counter >= 0){
        console.log(counter --)
    }
}










    /*

function countDown(){
    let counter = 0;
        while(counter < 11){
        console.log(counter)
        counter = counter + 1;
        }
    return counter
    }
    countDown() 

    */

   















 
 

     


      /*
 function countDown(){
        let counter = 10;
         while(counter > 0){
          console.log(counter)
          counter = counter - 1;
        }
        return counter
      }
      countDown()

      */