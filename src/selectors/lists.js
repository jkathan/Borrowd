export default function getVisibleItem(loanList, text) {
	console.log(Object.keys(loanList));
	console.log(loanList.loanList);
	console.log(text.toString().toLowerCase());
    return loanList.loanList.filter(item => {
    	console.log(item.item);
        const textMatch =
            item.item.toString().toLowerCase().includes(text.toString().toLowerCase()) 
            return textMatch;
            console.log(textMatch);

        })
}
