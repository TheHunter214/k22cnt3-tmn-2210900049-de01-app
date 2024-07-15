import React, { useEffect, useState } from 'react'
import TmnListTableName from './tmn_components/TmnListTableName'
import axios from './tmn_apis/tmn-2210900049'
import TmnFormTableName from './tmn_components/TmnFormTableName'


export default function TmnApp() {
  // Doc du lieu qua api 
  const [tmnListTableName, setTmnListTableName]= useState([])
  const tmnGetTableName = async ()=>{
    let tmnResp = axios.get("tmnTableName");
    console.log("App list:",tmnResp.data);
    setTmnListTableName(tmnResp.data);
  }
  useEffect(()=>{
    tmnGetTableName();
  },[])
  
  // Ham xoa
  const tmnHandleDelete= async (tmnId)=>{
    let tmnRes = await axios.delete("tmnTableName/"+tmnId);
    tmnGetTableName();
  }

  const tmnObjTableName = {
      "tmnTbName": "Tran Minh Nam",
      "tmnTbEmail": "namkovui@gmail.com",
      "tmnTbPhone": "0868430010",
      "tmnTbStatus": true,
      "tmnId": "2210900049"  
  };
  const[tmnTableName,setTmnTableName] = useState( tmnObjTableName);

  const tmnHandleAdd = ()=>{
    
  }

  return (
    <div className='container border my -3'>
      <h1>Bài đánh giá hết học phần - Trần Minh Nam: 2210900049 </h1>
      <hr/>
       <TmnListTableName renderTmnListTableName={tmnListTableName} onTmnDelete={tmnHandleDelete}/>
      <hr/> 
       <TmnFormTableName renderTmnTableName={tmnTableName} onTmnAdd={tmnHandleAdd} />
    </div>
  )
}
