import './ContactCard';
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ContactCard(props) {



    return (

        <div className="card mb-3" >
            <div className="row g-0" >

                <div className="col-md-4 d-flex justify-content-center ">

                    <img src="../logo192.png" className="img-fluid rounded-circle " alt="..." />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body d-flex justify-content-between">
                        <div className="nameSpace">
                            <p>{props.name}</p>

                            <p>{props.phone}</p>

                            <p>{props.email}</p>

                            <p>{props.address}</p>
                        </div>





                        <div className='button-body'>
                            <Link to={`/edit-contact/${props.id}`} className='btn btn-primary mx-3'>

                                <FaPencilAlt />
                            </Link>

                            <button type="button" className="btn btn-primary" onClick={() => props.delete(props.id)} >
                                <FaRegTrashAlt />
                            </button>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactCard;
