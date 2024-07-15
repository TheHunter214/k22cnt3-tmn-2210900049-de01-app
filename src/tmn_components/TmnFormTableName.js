import React, { useEffect, useState } from 'react'
import axios  from '../tmn_apis/tmn-2210900049'

export default function TmnFormTableName({renderTmnTableName, onTmnAdd}) {

    const [tmnId,setTmnId] = useState(renderTmnTableName.tmnId)
    const [tmnTbName,setTmnTbName] = useState(renderTmnTableName.tmnTbName)
    const [tmnTbEmail,setTmnTbEmail] = useState(renderTmnTableName.tmnTbEmail)
    const [tmnTbPhone,setTmnTbPhone] = useState(renderTmnTableName.tmnTbPhone)
    const [tmnTbStatus,setTmnTbStatus] = useState(renderTmnTableName.tmnTbStatus)

    useEffect(()=>{
        setTmnId(renderTmnTableName.tmnId)
        setTmnTbName(renderTmnTableName.tmnTbName)
        setTmnTbEmail(renderTmnTableName.tmnTbEmail)
        setTmnTbPhone(renderTmnTableName.tmnTbPhone)
        setTmnTbStatus(renderTmnTableName.tmnTbStatus)

    },[renderTmnTableName])

    const tmnHandleSubmit = async (tmnEvent)=>{
        tmnEvent.prevenDefault();
        const tmnObjTableName = {
          "tmnTbName": "tmnTbName",
          "tmnTbEmail": "tmnTbEmail",
          "tmnTbPhone": "tmnTbPhone",
          "tmnTbStatus": tmnTbStatus,
          "tmnId": tmnId  
        }
        console.log(tmnObjTableName); 


        // them du lieu trong api 
        await axios.put("tmnTableName/"+tmnObjTableName.tmnId,tmnObjTableName);
        onTmnEdit();
    }
  return (
    <div>
        <h2>Form xu ly du lieu sua thong tin </h2>
        <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="tmnId">tmnId</span>
            <input type="text" className="form-control" placeholder="tmnId" 
                    name='tmnId'
                    value={tmnId}
                    onChange={(tmnEv)=>setTmnId(tmnEv.target.value)}
                    aria-label="tmnId" 
                    aria-describedby="tmnId"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="tmnTbName">tmnTbName</span>
            <input type="text" className="form-control" placeholder="tmnTbName" 
                   name='tmnTbName'
                   value={tmnTbName}
                   onChange={(tmnEv)=>setTmnTbName(tmnEv.target.value)}
                   aria-label="tmnTbName" 
                   aria-describedby="tmnTbName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="tmnTbEmail">tmnTbEmail</span>
            <input type="text" className="form-control" placeholder="namkovui@gmail.com" 
                   name='tmnTbEmail'
                   value={tmnTbEmail}
                   onChange={(tmnEv)=>setTmnTbEmail (tmnEv.target.value)}
                   aria-label="tmnTbEmail" 
                   aria-describedby="tmnTbEmail"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="tmnTbPhone">tmnTbPhone</span>
            <input type="text" className="form-control" placeholder="0868430010" 
                   name='tmnTbPhone'
                   value={tmnTbPhone}
                   onChange={(tmnEv)=>setTmnTbPhone(tmnEv.target.value)}
                   aria-label="tmnTbPhone" 
                   aria-describedby="tmnTbPhone"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="tmnTbStatus">tmnTbStatus</span>
            <select  id='tmnTbStatus' className='form-control'
                    name='tmnTbStatus'
                    value={tmnTbStatus}
                    onChange={(tmnEv)=>setTmnTbStatus(tmnEv.target.value)}
                    >
                    <option value={true}>Active</option>
                    <option value={false}>Non-Active</option>
            </select>    
        </div>
        <button className='btn btn-primary my-3' name='btnTmnSave' onClick={tmnHandleSubmit}>Tmn : Save</button>
        </form>
    </div>
  )
}
