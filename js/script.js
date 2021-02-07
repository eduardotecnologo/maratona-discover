const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description:'Luz',
        amount: -50000,
        date:'05/02/2021',
    },
    {
        id: 2,
        description:'Developer',
        amount: 50000,
        date:'05/02/2021',
    },
    {
        id: 1,
        description:'Internet',
        amount: -10000,
        date:'05/02/2021',
    },
]

const Transaction = {
    incomes(){
        // Somando as entrada
    },
    expenses(){
        // Somar as Saídas
    },
    total(){
        // Entradas - Saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction)
    {

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const html = `
                <td class="description">${transaction.description}</td>
                <td class="${CSSclass}">${transaction.amount}</td>
                <td class="date">${transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="Apagar tranzação">
                </td>
        `
        return html;
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        value = String()

        console.log()
    }
}

transactions.forEach(function (transaction){
    DOM.addTransaction(transaction)
});