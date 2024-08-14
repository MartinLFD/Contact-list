import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";



const ContactForm = () => {

    const { actions } = useContext(Context);
    const [value, setValue]= useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
   

    const handleOnSubmit = (e) => {
        e.preventDefault();
        actions.handleOnSubmit(value);

    };

   
    return (
        <>
            <div className="container">
                <h1>Form to add a New Contact</h1>
                <form onSubmit={handleOnSubmit}>

                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Full name</label>
                        <input name="name" type="text" value={value.name} onChange={(e) => setValue({...value,name:e.target.value})}  className="form-control" id="nameInput" placeholder="Your Full Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input name="email" type="email" value={value.email}  onChange={(e) => setValue({...value,email:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone number</label>
                        <input name="phoneNumber" type="text" value={value.phone} onChange={(e) => setValue({...value,phone:e.target.value})} className="form-control" id="exampleFormControlTextarea1" placeholder="Your number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AdressInput" className="form-label">Adress</label>
                        <input name="Address" type="text" value={value.address} onChange={(e) => setValue({...value,address:e.target.value})} className="form-control" id="AdressInput" placeholder="Your Adress" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Contact</button>

                </form>
                <Link to={"/"}>Dame click para ir a la lista de Contactos</Link>
            </div>
        </>
    )
}

export default ContactForm;