import React, { useState } from 'react';
import './Filters.css';
import { Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Filters = ({ data, handlefilteredRows }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    let search = e.target.value;
    const filteredData = data.filter(item => {
      const firstNameMatch = item.firstName.toLowerCase().includes(search.toLowerCase());
      const lastNameMatch = item.lastName.toLowerCase().includes(search.toLowerCase());
      return firstNameMatch || lastNameMatch;
    });
    setSearchText(search);
    console.log(handlefilteredRows);
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
   </div>
  );
};

export default Filters;