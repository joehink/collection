import React, { Component } from "react";

import ReactTable from 'react-table';
import 'react-table/react-table.css';


class CollectionTable extends Component {
    constructor(props) {
        super(props);

        this.filterTable = this.filter = this.filterTable.bind(this);

        this.data =  [
            {
                name: 'Tanner Linsley',
                age: 26,
                friend: {
                    name: 'Jason Maurer',
                    age: 23,
                }
            }
        ];

        this.columns = [
            {
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, 
            {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, 
            {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!
            },
            {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
            }
        ];

        this.state = {
            filteredData: this.data,
            
        }
    }
    filterTable(event) {
        const filteredData = this.data.filter(row => {
            return Object.values(row).some(value => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        });

        this.setState({
            filteredData
        })
    }
    render() {
        return (
            <div>
                <input type="text" onInput={this.filterTable} /> 
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
