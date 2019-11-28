import React, { Component } from "react";
import moment from "moment";

import ReactTable from 'react-table';
import 'react-table/react-table.css';


class CollectionTable extends Component {
    constructor(props) {
        super(props);

        this.filterTable = this.filter = this.filterTable.bind(this);

        this.columns = [
            {
                Header: 'Last Name',
                accessor: 'last_name' // String-based value accessors!
            }, 
            {
                Header: 'First Name',
                accessor: 'first_name'
            }, 
            {
                Header: 'Year',
                id: 'year',
                accessor: card => Number(card.year),
            },
            {
                Header: 'Manufacturer',
                accessor: 'manufacturer'
            },
            {
                Header: 'Card #',
                id: 'cardNumber',
                accessor: card => Number(card.card_number),
            },
            {
                Header: 'Rookie',
                id: 'rookie',
                accessor: card => card.rookie === 'TRUE' ? 'Yes' : 'No'
            },
            {
                Header: 'Date Added',
                id: 'date_added',
                accessor: card => moment(card.date_added).format("MMM D, YYYY")
            },
            {
                Header: 'Sport',
                accessor: 'sport'
            },
            {
                Header: 'Position',
                accessor: 'position_abbreviation'
            },
            {
                Header: 'Team',
                accessor: 'team_mascot'
            }
        ];

        this.state = {
            filteredData: props.data,
        }
    }
    filterTable(event) {
        const filteredData = this.props.data.filter(card => {
            return Object.values(card).some(value => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        });

        this.setState({
            filteredData
        })
    }
    render() {
        return (
            <div id="collectionTable">
                <h2>Collection</h2>
                <input type="text" className="search" placeholder="Search for a card..." onInput={this.filterTable} /> 
                <ReactTable
                    data={this.state.filteredData}
                    columns={this.columns}
                    resolveData={data => data.map(row => row)}
                />
            </div>
        )
    }
};

export default CollectionTable;
