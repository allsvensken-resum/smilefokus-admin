import React, { useMemo, useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './Table.css';
import { IconButton, Select, MenuItem, FormControl } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import YearPicker from 'react-year-picker';

function Table() {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA.data.list, []);
  const [view, setView] = useState('year');
  const [startDate, setStartDate] = useState(new Date());

  const tableInstance = useTable(({
    columns,
    data
  }), usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOption,
    goToPage,
    setPageSize,
    pageCount,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  const handleChange = (date) => {
    setStartDate(date);
  }

  useEffect(() => {
    setPageSize(5);
  }, [])

  const handleView = (e) => {
    setView(e.target.value);
  }

  return (
    <div className='table'>
      <div className='table__year'>
        <h3>Yearly Member 01-Jan-2020 to 31-Dec-2020</h3>
        <div className='table__year__right'>
          <FormControl style={{ height: '100%' }} color='orange' variant='outlined'>
            <Select style={{ height: '22px', width: '110px', color: 'orange' }}
              value={view}
              onChange={handleView}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'year'}>Year</MenuItem>
            </Select>

          </FormControl>
          <YearPicker value={startDate} onChange={handleChange} />
        </div>
      </div>
      <div className='abovetable'>
        <div className='abovetable__left'>
          <div className='abovetable__content'>
            <p>TotalMembers : </p>
            <p>{MOCK_DATA.data.total}</p>
          </div>
          <div className='abovetable__content'>
            <p>Total Rev.<span style={{ fontSize: '0.8rem', fontWeight: '500' }}>(THB)</span> : </p>
            <p>{`${MOCK_DATA.data.summarytier[0].total_amount}K`}</p>
          </div>
        </div>
        <div className='abovetable__right'>
          <div className='abovetable__right__header'>{MOCK_DATA.data.summarytier[0].tier_name}</div>
          <div className='abovetable__content'>
            <p>Total Members : </p>
            <p>{MOCK_DATA.data.summarytier[0].total_members}</p>
          </div>
          <div className='abovetable__content'>
            <p>Total Rev.<span style={{ fontSize: '0.8rem', fontWeight: '500' }}>(THB)</span> : </p>
            <p>{`${MOCK_DATA.data.summarytier[0].total_amount}K`}</p>
          </div>
        </div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  if (index >= 1 && index <= 2) {
                    return <td className='text__center' {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  } else if (index > 2) {
                    return <td className='text__right' {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  } else {
                    return <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='table__pagination'>
        <p>{`${(pageSize * (pageIndex + 1) - (pageSize - 1))} - ${pageSize * (pageIndex + 1)} of ${rows.length}`}</p>
        <IconButton size='small' disabled={!canPreviousPage} onClick={() => goToPage(0)}><SkipPreviousIcon /></IconButton>
        <IconButton size='small' disabled={!canPreviousPage} onClick={() => previousPage()}><NavigateBeforeIcon /></IconButton>
        <IconButton size='small' disabled={!canNextPage} onClick={() => nextPage()}><NavigateNextIcon /></IconButton>
        <IconButton size='small' disabled={!canNextPage} onClick={() => goToPage(pageCount - 1)}><SkipNextIcon /></IconButton>
      </div>
      <div className='table__total'>
        <p className='total__header'>Total</p>
        <p className='total__lifetimevalue text__right'>{MOCK_DATA.data.summary.lifetimevalue}</p>
        <p className='total__transaction text__right'>{MOCK_DATA.data.summary.totaltransaction}</p>
        <p className='total__point text__right'>{MOCK_DATA.data.summary.totalpoint}</p>
        <p className='total__remainingpoint text__right' >{MOCK_DATA.data.summary.remainingpoint}</p>
      </div>
    </div>
  )
}

export default Table;
