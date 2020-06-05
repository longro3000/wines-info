import React from 'react';

import { Wine } from 'store/types'

interface TableRowProps {
    wine: Wine
}
const TableRow = ({wine}: TableRowProps) => {
    return (
        <>
            <td>
                {wine.score}
            </td>
            <td>
                {wine.name}
            </td>
            <td>
                {wine.grape}
            </td>
            <td>
                {wine.country}
            </td>
            <td>
                {wine.year}
            </td>
        </>
    )
}

TableRow.displayName = "TableRow";

export default TableRow;