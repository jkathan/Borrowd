import moment from 'moment'

export default function getVisibleItem(loanList, {text, sortFilter}) {
	const today = moment().format('YYYY-MM-DD');
    console.log(today);
    return loanList.loanList.filter(item => {
        const textMatch =
            item.item.toString().toLowerCase().includes(text.searchTerm) 
            return textMatch;
        })
}
