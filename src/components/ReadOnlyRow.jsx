import React from "react";

const ReadOnlyRow = ({el,handleEditClick}) =>{
    return (
        <tr>
            <td>{el.id}</td>
            <td>{el.country}</td>
            <td>{el.city}</td>
            <td>{el.population}</td>
            <td><button type="button" onClick={(event)=>handleEditClick(event,el)}>Edit</button></td>
        </tr>
    )
}

export default ReadOnlyRow;