export default (item, { text }) => {
    return item.filter(book => {
        const textMatch =
            item.title.toLowerCase().includes(text.toLowerCase()) ||
            item.description.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        })
}
