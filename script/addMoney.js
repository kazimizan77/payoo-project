document.getElementById('add-money-btn').addEventListener('click', function () {
    const bankAccount = getValueFromInput('add-money-bank')
    if (bankAccount == 'Select A Bank') {
        alert('Please select a Bank');
        return
    }
    const accno = getValueFromInput('add-money-number');
    if (accno.length != 11) {
        alert('invalid account number');
        return
    }
    const ammount = getValueFromInput('add-money-amount')
    const newBalance = getBalance() + Number(ammount);

    const pin = getValueFromInput('add-money-pin');
    if (pin == '1234') {
        alert(`Add Success from ${bankAccount} at ${new Date()}`)
        alert('add money success');
        setBalance(newBalance)

        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div')
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Add Money Success from ${bankAccount}, acc-no ${accno} at ${new Date()}
        </div>`

        history.append(newHistory);


    } else {
        alert('invalid pin')
        return;
    }

})