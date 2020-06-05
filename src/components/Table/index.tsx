import React from 'react';
import { useDispatch } from 'react-redux'
import { map } from 'lodash'

import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import { Wines } from 'store/types'
import { fetchWine } from 'store/actions'
import './styles.scss'

interface TableProps {
  wines: Wines
}
const Table = ({ wines }: TableProps) => {
    const headers = ['Score', 'Title', 'Grape', 'Country', 'Year'];
    const dispatch = useDispatch();

    const onButtonClick = (id: string) => {
      dispatch(fetchWine(id))
    }
    
    const renderTableRow = () => {
        return map(wines, (wine, id) => {
            return (
                <tr key={id} className='table__row' onClick={() => onButtonClick(id)}>
                        <TableRow 
                            wine={wine}
                        />
                </tr>
            );
        }

        );
    }
    return (
        <div>
            <table className='table'>
                <thead>
                    <TableHeader
                        headers={headers}
                    />
                </thead>
                <tbody>{ wines && renderTableRow()}</tbody>
            </table> 
        </div>
    )
}

Table.displayName = "Table";

export default Table;