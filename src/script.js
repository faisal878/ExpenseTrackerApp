const balance = document.getElementById('balance');
const mony_plus = document.getElementById('mony-plus');
const mony_minus = document.getElementById('mony-minus');
const list = document.getElementById("list");
const form = document.getElementById("form");
const text =document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions =[
//     {id:1, text: "flower", amount: -20},
//     {id:2, text: "Salary", amount: 2000},
//     {id:3, text: "Book", amount: -20},
//     {id:4, text: "Borrow", amount: 200},
// ];
let transactions = [];


//addTransaction
function addTransaction(e){
    e.preventDefault();
    if(
        text.value.trim() === "" || amount.value.trim() === ""
    ){
        alert('Please Enter the value');
    } else{
        const transaction={
            id:generateID(),
            text: text.value,
            amount: + amount.value,
        };
        transactions.push(transaction);
        addTransactionDom(transaction);
        updatedValues();
        text.value="";
        amount.value="";
    }

}

// generateId
function generateID(){
    return Number(Math.floor(1 + Math.random()*10000));
}

function addTransactionDom(transaction){
    const sign = transaction.amount <0 ? "-": "+";
    const item = document.createElement("li");

    item.id = transaction.id;

    item.classList.add(transaction.amount < 0? "minus":"plus")
    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
    `
    list.appendChild(item)
}
//Removetransaction:
function removeTransaction(id){
    transactions= transactions.filter(transaction =>transaction.id !== id);
    init();

}

function updatedValues(){
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc += item),0).toFixed(2);
    const income= amounts.filter(item=>item >0).reduce((acc,item)=>(acc += item),0).toFixed(2);
    const expence=
    (amounts.filter(item => item< 0).reduce((acc,item)=>(acc,item),0)*-1).toFixed(2);

    balance.innerText= `$${total}`;
    mony_plus.innerText = `$${income}`;
    mony_minus.innerText = `$${expence}`;

}

function deleteDelTransc(transID){
    transactions.forEach(function(item) {
        if(item.id == transID) { 
            delete item; 
        }
    });
    console.log(transactions);
}

//initApp

function init(){
    list.innerHTML="";
    transactions.forEach(addTransactionDom);
    updatedValues();
}
init();
form.addEventListener("submit", addTransaction);
// addTransactionDom(Transactions)


