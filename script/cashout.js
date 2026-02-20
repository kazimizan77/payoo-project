document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length != 11) {
        alert('Invalid Agent Number');
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    const pin = getValueFromInput('cashout-pin')
    if (pin === '1234') {
        alert('cashout sucessfull');
        setBalance(newBalance);
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div')
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} Taka Success to ${cashoutNumber}, at ${new Date()}
        </div>`

        history.append(newHistory);

    } else {
        alert('invalid pin');
        return;
    }
})





// document.getElementById('cashout-btn').addEventListener('click', function () {
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber)

//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)
//     if(cashoutNumber.length !=11){
//         alert('Invalid Agent Number');
//         return
//     }

//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     const newBalance = Number(balance) - Number(cashoutAmount);


//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }

//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if (pin === '1234') {
//         alert('cashout sucessfull');
//         console.log('new balance', newBalance)
//         balanceElement.innerText= newBalance

//     } else {
//         alert('invalid pin');
//         return;
//     }
// })