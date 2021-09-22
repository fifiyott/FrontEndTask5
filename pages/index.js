import Head from 'next/head'
import React, { useState } from "react";
import List from "../components/list";
import { useDispatch } from "react-redux";
import FormList from '../components/formList';
import { addList, updateList } from "../redux/listSlice";

export default function Home() {

  const dispatch = useDispatch()

  const[updateData, setUpdateData] = useState({id:null, status:false});
  
  const [formInput, setFormInput] = useState({
    title :"",
    quantity:"",
    price:"",
  });


  function handleChange(e){
    let dataList = {...formInput};
    dataList[e.target.name] = e.target.value;
    setFormInput(dataList);
  }  
  
function handleSubmit(e) {
  e.preventDefault();
  if (formInput.title === ""){
    return false;
  }
  if (formInput.quantity === ""){
    return false;
  }
  if (formInput.price === ""){
    return false;
  }

  if(updateData.status){
    dispatch(
      updateList({
          id : updateData.id,
          title : formInput.title,
          quantity : formInput.quantity,
          price : formInput.price,
        }));
      alert("Data Berhasil Diedit..");
    }
    else{
    dispatch(
      addList({
        title: formInput.title,
        quantity: formInput.quantity,
        price: formInput.price,
      })
    );
    alert("Data Berhasil Tersimpan !");
  }
    setFormInput({title:"", price: "", quantity:""});
    setUpdateData({ id: null, status: false });
  };

  
  const handleEdit = (list) => {
    setFormInput({
      title: list.title,
      quantity: list.quantity,
      price: list.price,
    });
    setUpdateData({ id: list.id, status: true });
  };

  return (
   
    <div className='container'>
      <Head>
        <title>List Form</title>
        <meta name="keywords" content="list"></meta>
      </Head>

      <form onSubmit={handleSubmit} className="form-universal">
        <div className="form-group">
          <input 
            type="text"  
            onChange={handleChange}
            value={formInput.title} 
            name="title"
            className="input"
            placeholder="Title" />
        </div>
        <div className="form-group">
          <input 
            type="text"  
            onChange={handleChange}
            value={formInput.quantity} 
            name="quantity" 
            className="input"
            placeholder="Quantity"/>
        </div>
        <div className="form-group">
          <input 
            type="text"  
            onChange={handleChange}
            value={formInput.price} 
            name="price"
            className="input"
            placeholder="Price" />
        </div>
        <div>
          <button type="submit" className="btnSubmit">
            Submit
          </button>
        </div>
      </form>
      
    <FormList list={List} handleEdit={handleEdit} />
    </div>
   )
 }