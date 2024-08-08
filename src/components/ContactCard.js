import './ContactCard';
import { FaRegTrashAlt } from "react-icons/fa";


function ContactCard(props) {

return (

    <div className="card mb-3" >
        <div className="row g-0" key={props.id}>
            
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

                   <button 
                   className='btn btn-primary'
                   onClick={() => props.delete(props.id)} 
                   ><FaRegTrashAlt /></button>
                    </div>
                </div> 
                
            </div>
        </div>
    </div>
)    
}

export default ContactCard;