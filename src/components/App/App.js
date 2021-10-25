import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import contactsArray from "../contacts.json";
import "./App.css";

function App() {
  const useLs = (contactsArray) => {
    const [contacts, setContacts] = useState(
      () => JSON.parse(localStorage.getItem("saveContacts")) ?? contactsArray
    );
    useEffect(
      () => localStorage.setItem("saveContacts", JSON.stringify(contacts)),
      [contacts]
    );
    return [contacts, setContacts];
  };

  const [contacts, setContacts] = useLs(contactsArray);
  const [filter, setFilter] = useState("");

  const addContacts = (info) => {
    const searchSameName = contacts
      .map((el) => el.name.toLowerCase())
      .includes(info.name.toLowerCase());

    if (searchSameName) {
      alert(`${info.name} is already in contacts`);
    } else {
      const newContact = { ...info, id: uuidv4() };
      setContacts([newContact, ...contacts]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  const setFilteredContacts = (e) => {
    setFilter(e.target.value);
  };
  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilteredContacts} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
