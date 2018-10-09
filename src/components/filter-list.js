import React from 'react';
import { connect } from 'react-redux';
import { filterText } from '../actions/filter';

class ListFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ marginBottom: 15 }}>
                <input type='text' placeholder='search' value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(filterText(e.target.value));
                    }}></input>
                <br /><br />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //return {
        filters: state.filters
    //}
}

export default connect(mapStateToProps)(ListFilters);