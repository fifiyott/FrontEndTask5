import List from './list';
import React, { useState } from "react";
import { useSelector } from 'react-redux';

const FormList = (props) => {
    const { handleEdit, handleDelete } = props;

    const formList = useSelector((state)=>state.list);

    return (
       <div className="container">
            {formList.map((list => {
                return(
                    <List
                    list={list } 
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    key={list.id}
                        />  
                )
            }))}      
       </div>
   );
};
 
export default FormList;