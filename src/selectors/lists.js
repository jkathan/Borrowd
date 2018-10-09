export default function getVisibleItem(loanList, text) {
	console.log(loanList);
	console.log(text);
    return Object.listId(loanList).filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
        })
}
