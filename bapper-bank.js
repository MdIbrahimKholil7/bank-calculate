
// getting input value 
function getInput(input){
    const inputValue=document.getElementById(input);
    const newInputvalue=parseFloat(inputValue.value);
    inputValue.value='';
    return newInputvalue;
}

// update balance 
function updateBalance(input,subTotal){
    const updateValue=document.getElementById(subTotal);
    const newUpdateValue=parseFloat(updateValue.innerText);
    return updateValue.innerText=(newUpdateValue + input);
}

// update total balance 
function updateTotalBalance(input,total,isSatisfy){
    const totalBalance=document.getElementById(total);
    const newTotalBalance=parseFloat(totalBalance.innerText);
    if(isSatisfy){
         return totalBalance.innerText=(newTotalBalance + input);
    }else{
        return totalBalance.innerText=(newTotalBalance - input);
    }
}
// update deposite value 
document.getElementById('deposite-btn').addEventListener('click',function(){
    const input=getInput('deposite-input');
    if(input > 0){
        const balance=updateBalance(input,'deposite-blance');
        updateTotalBalance(input,'total-blance',true)
    }else{
       return alert ("You can't add negative value");
    }
})
// update withdraw value 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const input=getInput('withdraw-input');
    const totalBl=document.getElementById('total-blance');
    const newTotal=parseFloat(totalBl.innerText);
    if(input < 0){
        return alert("You can't add negative value");
    }
    if(input > 0 && input <= newTotal){
        const balance=updateBalance(input,'withdraw-blance');
        updateTotalBalance(input,'total-blance',false)
    }else{
        return alert("You can't withdraw that you have");
    }
    
})






