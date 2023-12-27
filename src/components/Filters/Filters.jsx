import React, { useState } from 'react';
import './Filters.css';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Filters = ({ data, handlefilteredRows }) => {

  const handleSearch = (e) => {
    e.preventDefault();
    let search = e.target.value;
    const filteredData = data.filter(item => {
      let titleMatch, floorsMatch;

      if (typeof item.title === 'string' && typeof search === 'string') {
        titleMatch = item.title.toLowerCase().includes(search.toLowerCase());
      } else {
        titleMatch = item.title === search;
      }

      if ( typeof search === 'string') {
        floorsMatch = false;
      } else {
        floorsMatch = item.floors === search;
      }

      return titleMatch || floorsMatch;
    });
    
    handlefilteredRows(filteredData);
  }
  return (
   <div className="filters__wrapper">
      <Input 
          onChange={handleSearch}
          placeholder="Поиск..." 
          prefix={<SearchOutlined/>}
          className='input__search'
      />
      <Button type="primary" className='addButton'>Добавить</Button>
   </div>
  );
};

export default Filters;