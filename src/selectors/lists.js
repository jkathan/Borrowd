//import moment from 'moment'

export default function getVisibleItem(loanList, sortFilter/*text*/) {
	//console.log(sortFilter.sortFilter);
    return loanList.loanList.returnDate

    /*.filter(item => {
        const textMatch =
            item.item.toString().toLowerCase().includes(text.searchTerm) 
            return textMatch;
        })*/
    .sort((a, b) => {
    	if (sortFilter === "Due Date") {
    		return a - b ;
    	}
    })
}
