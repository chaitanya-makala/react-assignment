import React from "react";

const EditableRow = ({editFormData,handleEditFormChange}) =>{
    return (
        <tr>
            <td></td>
            <td>
                <input type="text"  required="requierd" placeholder="enter country"
                name="countryName" value={editFormData.countryName} onChange={handleEditFormChange}/>
            </td>
            <td><input type="text"  required="requierd" placeholder="enter city"
                name="cityName" value={editFormData.cityName} onChange={handleEditFormChange}/></td>
            <td>
                <input type="number" required="required" placeholder="enter population" name="population" value={editFormData.population} onChange={handleEditFormChange}/>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRow;