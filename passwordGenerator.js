//DOM elements
const resultsEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('upperCase');
const lowercaseEl = document.getElementById('lowerCase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

    
//Putting all these functions in an object
const randomFunc={
   lower:getRandomLower,
   upper:getRandUpper,
   number:getRandNumber,
   symbol:getRandSymbol
};

// Generate event listen
generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultsEl.innerText = generatePassword(
        hasLower,
         hasUpper,
          hasNumber, 
        hasSymbol,
         length
         );  
});

// Generate Password function
function generatePassword(lower, upper, number, symbol, length){
   // Initialize password variable
   // Allow only  checked
   // loop over length call generator function for ech type
   // Add final pw to pw var and return

   let generatedPassword = '';

   const typesCount = lower + upper +number + symbol;
   console.log('typeCount:', typesCount);

   const typesArr = [ {lower}, {upper}, {number},{symbol}].filter
   {
       item =>Object.values(item)[0]
   };

  // console.log('typesArr: ', typesArr);

   if(typesCount === 0) {
       return '' ;
   }

   for(let i=0; i< length; i+= typesCount){ 
       typesArr.forEach(type => {
        const funcName = Object.keys(type)[0] ;

        generatedPassword += randomFunc[funcName]();
       });
   }

 const finalPassword = generatedPassword.slice(0,length);
return finalPassword;
}

//Generate functions
// 4 different functions needed to generate random numbers, symbols,upperCase and lowerCase

// Getting lowerCase letters
function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() *26)+ 97); //97-120 ASCII values of lowerCase
}


//Getting upperCase letters
function getRandUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+ 65);
}


//Geting Numbers
function getRandNumber(){
    return Math.floor(Math.random()*10 +48);
}

//Getting Symbols
function getRandSymbol(){
  const symbols='!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];
}
