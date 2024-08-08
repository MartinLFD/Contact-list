

const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contacts: [{
        name: "",
        phone: "",
        email: "",
        address: "",
      }],

    },
    actions: {
      getContact: () => {
        fetch("https://playground.4geeks.com/contact/agendas/MartinLeiva", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json())
          .then((data) => {
            setStore({
              contacts: data.contacts || [],
            });

          })
          .catch((error) => console.log(error))
      },

      handleOnSubmit: (value) => {
        console.log(value)
        fetch("https://playground.4geeks.com/contact/agendas/MartinLeiva/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }).then((response) => response.json())
          .then((data) => {
            console.log(data)
            getActions().getContact();
          })
          .catch((error) => console.log(error));
      },
// handleOnSubmit no añade el contacto


      deletePost: (contactid) => {
        fetch(`https://playground.4geeks.com/contact/agendas/MartinLeiva/contacts/${contactid}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
        }).then((response) => {
          if (response.status !== 204) {
            alert("Tarea no existe");
          } else if (response.status === 204) {
            getActions().getContact()
          }
        })
         .catch((error) => console.log(error))
      },
// deletePost funciona pero solo recargando la página


    },

  };
};

export default getState;