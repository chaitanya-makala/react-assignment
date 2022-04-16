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
        country:"",
        city:"",
        population:""
    })

    const handleEditClick = (event, contact)=>{
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            country: contact.country,
            city: contact.city,
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

    return (
        <div className="app-container">
            <form action="">

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

                                {editContactId===el.id? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>):(<ReadOnlyRow el={el} handleEditClick={handleEditClick}/>)}

                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}




export default App;