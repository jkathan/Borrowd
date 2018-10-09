export default function getVisibleItem(loanList, text) {

	console.log(loanList.loanList);
	console.log(text);
    return loanList.loanList.filter(item => {
    	console.log(item.item.toString().toLowerCase());
        const textMatch =
            item.item.toString().toLowerCase().includes(text) 
            return textMatch;
            console.log(textMatch);

        })
}
