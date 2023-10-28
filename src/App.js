
import './App.css';
import { useState } from 'react';

function App() {
  const [inputdata,setInputData] = useState('');
  const [arrdata,setArrData] = useState('');

  const addTudo=()=>{
    setArrData ((prev)=>{
      return [...prev,inputdata]
    })
    setInputData("");
  }

  const editData=(i)=>{
    const a = prompt("Enter updated task:");
    const arrNew = [...arrdata]
    arrNew[i]=a;
    setArrData(arrNew);
  }


  const deleteData=(index)=>{
    const a = arrdata.filter((e,i)=>i!==index);
    setArrData(a);
  }

  const deleteAll=()=>{
    setArrData("");
  }


  return (
    <div className='container'>
      <input type='text' placeholder='Enter Tudo' onChange={(e)=>setInputData(e.target.value)} value={inputdata}  className='screen'/>
      <div className='mainbtn'>
      <button onClick={addTudo} className='btn green'>Add</button>
      <button onClick={deleteAll} className='btn red'>DeleteAll</button>
      </div>
     
      <ul>
        {
          arrdata.length? arrdata.map((e,i)=> <li key={i} className='margintop'>{e}  <button onClick={()=>editData(i)} className='btn blue'>Update</button>  <button onClick={()=>deleteData(i)} className='btn red'>Delete</button> </li>):"NO TODOS"
        }
      </ul>
    </div>
  );
}

export default App;
