import React, { useState ,Fragment} from "react";
import './App.css'
import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from './mock-data.json'
// import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () =>{

    const[contacts,setContacts] = useState(data);
    const[editContactId,setEditContactId] = useState(null);
    const[editFormData,setEditFormData] = useState({
        countryName:"",
        cityName:"",
        population:""
    })

    const handleEditClick = (event, contact)=>{
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            countryName: contact.countryName,
            cityName: contact.cityName,
            population: contact.population
        }
    }

    const handleEditFormChange = (event) =>{
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName]=fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event) =>{
        event.preventDefault();
        const editedContact = {
            id:editContactId,
        countryName:editFormData.countryName,
        cityName:editFormData.cityName,
        population:editFormData.population
    }
    const newContacts = [...contacts];
    const index = contacts.findIndex((el)=>el.id===editContactId)
    newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null)
    }
    const handleCancelClick = () =>{
        setEditContactId(null);
    }

    const handleDeleteClick=(contactId)=>{
        const newContacts = [...contacts];
        const index = contacts.findIndex((el)=>el.id===contactId)

        newContacts.splice(index,1);
        setContacts(newContacts);
    }

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Population</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((el)=>(
                            <Fragment>

                                {editContactId===el.id? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>):(<ReadOnlyRow el={el} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}

                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}




export default App;