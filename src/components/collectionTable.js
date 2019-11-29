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
                accessor: 'last_name'
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
                accessor: 'rookie',
            },
            {
                Header: 'Date Added',
                id: 'date_added',
                accessor: card => moment(new Date(card.date_added)).format("MMM D, YYYY")
            },
            {
                Header: 'Sport',
                accessor: 'sport'
            },
            {
                Header: 'Position',
                accessor: 'position',
                show: false
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
        const searchTerms = event.target.value.toLowerCase().split(' ');
    
        const filteredData = this.props.data.filter(card => {
            const cardPropertiesStr = Object.values(card).join(' ').toLowerCase();
            return searchTerms.every(term => cardPropertiesStr.includes(term));
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
