import List from './list';
import React, { useState } from "react";
import { useSelector } from 'react-redux';

const FormList = (props) => {
    const { handleEdit, handleDelete } = props;

    const formList = useSelector((state)=>state.list);

    const [ searchFilter, setSearchFilter ] = useState('');
    return (
        <div className="list-group">
        <div className="list-header">
            <h1 className="headerlist">List</h1>
            <div className="filter-post">
                <input type="text"
                    className="filter"
                    placeholder="Search"
                    onChange={ (e) => {
                    setSearchFilter(e.target.value);
                    } }
                />
            </div>
        </div>
            {formList.filter((val) => {
              if( searchFilter === "") {
                return val;
              } else if ( val.title.toLowerCase().includes(searchFilter.toLocaleLowerCase())) {
                return val;
              }
            }).map((list => {
                return(
                    <List
                    list={list} 
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    key={list.id} />  
                )
            }))}      
       </div>
   );
};
 
export default FormList;