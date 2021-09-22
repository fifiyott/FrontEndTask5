import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../redux/listSlice'; 

const List = (props) => {
    const dispatch = useDispatch();
    const { list, handleEdit,  } = props;
  
    const handleDelete =()=>{
        dispatch(deleteList({id:list.id}),
        alert(list.title + " " + "Berhasil Dihapus"));
    }
  
    return (
       <div className="flex-container">
           <div className="flex-left">
                <h5>{list.title}</h5>
                <p>{list.quantity}</p>
                <p>{list.price}</p>
           </div>
           <div className="flex-right">
                <button className="btnEdit" onClick={()=> handleEdit(list)} >Edit</button>
                <button className="btnDel" onClick={()=> handleDelete(list)} >Delete</button>
            </div> 
       </div>
   );
};
 
export default List;