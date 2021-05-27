import React, { useMemo } from 'react';
import classes from './IncidentTable.module.css';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const IncidentTable = (props) => {

    const columns = useMemo(() => props.tableColumns, [props.tableColumns]);
    const data = useMemo(() => props.tableData, [props.tableData]);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow }
        = useTable({
            columns,
            data,
            initialState: { pageSize: 4 }
        },
            useSortBy,
            usePagination)

    const { pageIndex } = state
    // const { pageIndex, pageSize } = state

    return (
        <React.Fragment>

            <table {...getTableProps()} className={classes.Table}>
                <thead >
                    {headerGroups.map(headerGroup => {
                        return <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => {
                                    return <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? '⬇' : '⬆') : ''}</span>
                                    </th>
                                })
                            }
                        </tr>
                    })}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row);
                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <div className={classes.PagingControlers}>
                {/* <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span> */}
                <div className={classes.PageNumberControler}>


                    <button onClick={(() => gotoPage(0))} disabled={!canPreviousPage}>{'<<'}</button>
                    {pageOptions.map((page, index) => {
                        return <button onClick={(() => gotoPage(index))} key={index} className={pageIndex === index ? classes.ActivePage : ''}>{index + 1}</button>
                    })}
                    <button onClick={(() => gotoPage(pageCount - 1))} disabled={!canNextPage}>{'>>'}</button>
                </div>

                <div className={classes.NextPrevBtn}>
                    <button onClick={previousPage} disabled={!canPreviousPage}><FaArrowLeft /> Older</button>
                    <button onClick={nextPage} disabled={!canNextPage}>Newer<FaArrowRight /></button>
                </div>
            </div>
        </React.Fragment>
    )
}


export default IncidentTable;