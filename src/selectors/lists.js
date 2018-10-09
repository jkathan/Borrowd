export default (loanList, { text }) => {
    return LoanList.filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
        })
}
