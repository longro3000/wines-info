import React from 'react';

interface TableHeaderProps {
    headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps) => {
    function renderHeader() {
        return headers.map(header => (
            <th
                key={header}
                className='table__header'
            >
              <h4>
                {header}
              </h4>
            </th>
        ));
    }

    return <tr>{renderHeader()}</tr>;
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;