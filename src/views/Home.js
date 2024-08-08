import { Link } from "react-router-dom";
import { Context } from "../store/Context";
import { useContext, useEffect } from "react";
import ContactCard from "../components/ContactCard";



function Home() {

  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getContact();
  }, []);


  return (


    <div className="container">
      <div className="button d-flex justify-content-end">

        <Link to={"/contact-list"} className="btn btn-primary my-5 ">Add a new contact</Link>
      </div>

      {store.contacts.length > 0 ? (
        store.contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <ContactCard
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                address={contact.address}
                id={contact.id}
                delete={actions.deletePost}
              />
            </div>
          );
        })
      ) : (
        "You have no Contacts, Add a new one"
      )}


    </div>

  )
}

export default Home;