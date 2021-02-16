const length=document.getElementById('length');
const numbers=document.getElementById('numbers');
const symbols =document.getElementById('symbols');
const upperCase=document.getElementById('upperCase');
const lowerCase=document.getElementById('lowerCase');
//Generator Function 
table.addEventListener('submit', e =>{
    const length=lenth.value
    const numbers=numbers.value;
    const symbols=symbols.value;
    const upperCase=upperCase.value;
    const lowerCase=lowerCase.value;
    const password= generatePassword(length, numbers, symbols, lowerCase, upperCase)

})

function generatePassword(length,numbers,symbols,upperCase,lowerCase) {
    
}
