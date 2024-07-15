import React from 'react'

export default function TmnListTableName({ renderTmnListTableName, onTmnDelete }) {
    console.log("List:", renderTmnListTableName);

    // Su kien xoa
    const tmnHandleDelete = (tmnId) => {
        if(window.confirm('Ban co muon xoa du lieu co tmnId='+ tmnId)){
        onTmnDelete(tmnId);
        }
    };

    // Hiển thị dữ liệu 
    const tmnElementTableName = renderTmnListTableName.map((tmnItem, tmnIndex) => {
        return (
            <tr key={tmnIndex}>
                <td>{tmnItem.tmnId}</td>
                <td>{tmnItem.tmnTbName}</td>
                <td>{tmnItem.tmnTbEmail}</td>
                <td>{tmnItem.tmnTbPhone}</td>
                <td>{tmnItem.tmnTbStatus ? "Active" : "Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'>tmn-edit</button>
                    <button className='btn btn-danger'
                        onClick={() => tmnHandleDelete(tmnItem.tmnId)}
                    >tmn-delete</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách thông tin....</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>tmnId</th>
                        <th>tmnTbName</th>
                        <th>tmnTbEmail</th>
                        <th>tmnTbPhone</th>
                        <th>tmnTbStatus</th>
                        <th>tmn :Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {tmnElementTableName}
                </tbody>
            </table>
        </div>
    )
}
