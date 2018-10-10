//import moment from 'moment'

export default function getVisibleItem(loanList, text) {
	//console.log(sortFilter.sortFilter);

    return loanList.loanList

    .filter(item => {
        const textMatch =
            item.item.toString().toLowerCase().includes(text.searchTerm) 
            return textMatch;
        })
    /*.sort((a, b) => {
    	var key1 = a.returnDate;
    	var key2 = b.returnDate;
    	if (sortFilter === 'Due Date') {
    		if (key1 < key2) {
        return -1;
    } else if (key1 == key2) {
        return 0;
    } else {
        return 1;
    }
    	}
    })*/
}




