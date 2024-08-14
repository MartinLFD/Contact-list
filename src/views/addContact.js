
import { Context } from "../store/Context";
import { useContext, useState,  } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";





const EditContact = () => {

    const { id } = useParams();
    const { actions } = useContext(Context)
    const [edit, setEdit] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        id: "",
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        actions.editPost(id, edit);
    }

    return (
        <>
            <div className="container">
                <h1>Form to Edit contacts</h1>
                <form onSubmit={handleOnSubmit}>

                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Edit Your name</label>
                        <input name="name" type="text" value={edit.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })} className="form-control" id="nameInput" placeholder="Your Full Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"> Edit Email</label>
                        <input name="email" type="email" value={edit.email} onChange={(e) => setEdit({ ...edit, email: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Edit Phone number</label>
                        <input name="phoneNumber" type="text" value={edit.phone} onChange={(e) => setEdit({ ...edit, phone: e.target.value })} className="form-control" id="exampleFormControlTextarea1" placeholder="Your number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AdressInput" className="form-label">Adress</label>
                        <input name="Address" type="text" value={edit.address} onChange={(e) => setEdit({ ...edit, address: e.target.value })} className="form-control" id="AdressInput" placeholder="Your Adress" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Edited Contact</button>

                </form>
                <Link to={"/"}>Dame click para ir a la lista de Contactos</Link>
            </div>
        </>

    )
}

export default EditContact;