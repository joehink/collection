import React, { Component } from "react";

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
                accessor: 'year'
            },
            {
                Header: 'Manufacturer', // Custom header components!
                accessor: 'manufacturer'
            },
            {
                Header: 'Card #', // Custom header components!
                accessor: 'card_number'
            },
            {
                Header: 'Rookie', // Custom header components!
                accessor: 'rookie'
            },
            {
                Header: 'Date Purchased', // Custom header components!
                accessor: 'date_purchased'
            },
            {
                Header: 'Sport', // Custom header components!
                accessor: 'sport'
            },
            {
                Header: 'Position', // Custom header components!
                accessor: 'position_abbreviation'
            },
            {
                Header: 'Team', // Custom header components!
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
