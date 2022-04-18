import React from "react";

const ReadOnlyRow = ({el,handleEditClick,handleDeleteClick}) =>{
    return (
        <tr>
            <td>{el.id}</td>
            <td>{el.countryName}</td>
            <td>{el.cityName}</td>
            <td>{el.population}</td>
            <td><button type="button" onClick={(event)=>handleEditClick(event,el)}>Edit</button></td>
            <td><button type="button" onClick={()=>handleDeleteClick(el.id)}>Delete</button></td>
        </tr>
    )
}

export default ReadOnlyRow;