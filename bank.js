function getInput(inputId){
   const inputDeild = document.getElementById(inputId);
   const inputDeildText = inputDeild.value;
   const inputDeildAmount = parseFloat(inputDeildText);
   inputDeild.value = '';
   return inputDeildAmount;
}

function update(updateId,depositAmount){
   const totalAmount = document.getElementById(updateId);
   const totalAmountText = totalAmount.innerText;
   const totalAmountAmount = parseFloat(totalAmountText);
   
   totalAmount.innerText = totalAmountAmount + depositAmount;
}

function updateBalanceTotal(depositAmount, isadd){
   const updateBalance = document.getElementById('total-balance');
   const updateBalanceText = updateBalance.innerText;
   const updateBalanceAmount = parseFloat(updateBalanceText);
   if(isadd == true){
      updateBalance.innerText = updateBalanceAmount + depositAmount;
   }
   else{
      updateBalance.innerText = updateBalanceAmount - depositAmount;
   }
}

document.getElementById('deposit-submit').addEventListener('click', function(){
   const depositAmount =getInput('deposit-field');
   if(depositAmount > 0){
      const updateDeposit = update('total-deposit',depositAmount);
      const totalBalance =updateBalanceTotal(depositAmount, true);
   }
})

document.getElementById('withdraw-submit').addEventListener('click', function(){
   const WithdrawAmount = getInput('withdraw-field');
   if(WithdrawAmount > 0){
      const updateWithdraw = update('total-withdraw',WithdrawAmount);
      const totalBalance2 =updateBalanceTotal(WithdrawAmount, false);
   }
})
