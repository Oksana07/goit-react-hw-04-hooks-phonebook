import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import dataContacts from "../JsonFile/contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(dataContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    const allReadyPresentContact = contacts.some(
      (elem) => elem.name.toLowerCase() === data.name.toLowerCase()
    );

    if (allReadyPresentContact) {
      return alert(`${data.name} is already in contacts.`);
    }

    setContacts([...contacts, data]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterContact = () => {
    const filterContact = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContact)
    );
  };

  const delContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={handleFilterContact()}
        deleteContact={delContact}
      />
    </div>
  );
}
