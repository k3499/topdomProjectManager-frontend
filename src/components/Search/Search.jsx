import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = ({ data, handlefilteredRows }) => {
  const [dataAll, setDataAll] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data.length !== 0 && dataAll === null) {
      setDataAll(data);
      console.log(data);
    }
  }, [data, dataAll]);

  useEffect(() => {
    if (dataAll !== null) {
      console.log(dataAll);
      const results = dataAll.filter((item) => {
        let nameMatch, floorMatch;

        if (typeof item.name === "string" && typeof searchTerm === "string") {
          nameMatch = item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        } else {
          nameMatch = item.name === searchTerm;
        }

        if (typeof searchTerm === "string") {
          floorMatch = false;
        } else {
          floorMatch = item.floor === searchTerm;
        }

        return nameMatch || floorMatch;
      });
      setSearchResults(results);
      handlefilteredRows(results);
      console.log(results);
    }
  }, [searchTerm, dataAll]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    //handlefilteredRows(filteredData);
  };

  return (
    <>
      <Input
        onChange={handleSearch}
        placeholder="Поиск..."
        prefix={<SearchOutlined />}
        className="input__search"
      />
    </>
  );
};

export default Search;
