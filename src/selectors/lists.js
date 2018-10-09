export default function getVisibleItem(loanList, text) {
	console.log(Object.keys(loanList));
	console.log(loanList.loanList);
	console.log(text);
    return loanList.loanList.filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
            console.log(textMatch);

        })
}
