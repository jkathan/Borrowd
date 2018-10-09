export default function getVisibleItem(loanList, text) {
	console.log(loanList);
    return loanList.filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
        })
}
