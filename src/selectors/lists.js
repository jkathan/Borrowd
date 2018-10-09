export default function getVisibleItem(loanList, text) {
    return loanList.filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
        })
}
