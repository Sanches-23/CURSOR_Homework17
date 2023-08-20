import Contact from "./Contact";
// import {useState} from "react";
import ContactsData from "./ContactsData"
import baseStyle from "../styles/Base.module.css"
import switchStyle from "../styles/Switch.module.css"
import inputStyle from "../styles/Input.module.css"

// const Contacts = () => {
//     const [contactList, setContactList] = useState(ContactsData);
//     const [searchContact, setSearchContact] = useState("");
//     const [showMale, setShowMale] = useState(true);
//     const [showFemale, setShowFemale] = useState(true);
//     const [showNotSpecGender, setShowNotSpecGender] = useState(true);
//
//     const handleMaleToggle = () => {
//         setShowMale(prevState => !prevState);
//     };
//     const handleFemaleToggle = () => {
//         setShowFemale(prevState => !prevState);
//     };
//     const handleNotSpecToggle = () => {
//         setShowNotSpecGender(prevState => !prevState);
//     };
//
//     const filteredContacts = contactList.filter(contact =>
//         (contact.firstName.toLowerCase().includes(searchContact.toLowerCase()) ||
//             contact.lastName.toLowerCase().includes(searchContact.toLowerCase()) ||
//             contact.phone.includes(searchContact)) &&
//         ((showMale && contact.gender === "male") ||
//         (showFemale && contact.gender === "female") ||
//         (showNotSpecGender && contact.gender === undefined))
//     );
//
//     return (
//         <div className={baseStyle.content}>
//             <div className={baseStyle.contentTools}>
//                 <h3>Ч</h3>
//                 <label className={switchStyle.switch}>
//                     <input type="checkbox"
//                            checked={showMale}
//                            onChange={handleMaleToggle}/>
//                     <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
//                 </label>
//                 <h3>Ж</h3>
//                 <label className={switchStyle.switch}>
//                     <input type="checkbox"
//                            checked={showFemale}
//                            onChange={handleFemaleToggle}/>
//                     <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
//                 </label>
//                 <h3>Null</h3>
//                 <label className={switchStyle.switch}>
//                     <input type="checkbox"
//                            checked={showNotSpecGender}
//                            onChange={handleNotSpecToggle}/>
//                     <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
//                 </label>
//
//             </div>
//             <div className={`${inputStyle.form__group} ${inputStyle.field}`}>
//                 <input type="text"  className={inputStyle.form__field} placeholder="Search contacts"
//                        value={searchContact}
//                        onChange={event => setSearchContact(event.target.value)}/>
//                 <label className={inputStyle.form__label}>Search contacts</label>
//             </div>
//             {filteredContacts.map((contact, index) => (
//                 <Contact key={index} contact={contact} />
//             ))}
//         </div>
//     );
// };
//
//
//
//
// export default Contacts;

import React from "react";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: ContactsData,
            searchContact: "",
            showMale: true,
            showFemale: true,
            showNotSpecGender: true
        };
    }
    searchContactHandler = (event) => {this.setState({ searchContact: event.target.value });}
    // showMaleHandler = () => {this.setState(prevState => ({ showMale: !prevState.showMale }));}
    // showFemaleHandler = () => {this.setState(prevState => ({ showFemale: !prevState.showFemale }));}
    // showNotSpecGenderHandler = () => {this.setState(prevState => ({ showNotSpecGender: !prevState.showNotSpecGender }));}
    toggleField = (fieldName) => {
        // console.log([fieldName])
        this.setState(prevState => ({ [fieldName]: !prevState[fieldName] }));
    }

    render() {
        const { contactList, searchContact, showMale, showFemale, showNotSpecGender } = this.state;

        const filteredContacts = contactList.filter(contact =>
            (contact.firstName.toLowerCase().includes(searchContact.toLowerCase()) ||
                contact.lastName.toLowerCase().includes(searchContact.toLowerCase()) ||
                contact.phone.includes(searchContact)) &&
            ((showMale && contact.gender === "male") ||
                (showFemale && contact.gender === "female") ||
                (showNotSpecGender && contact.gender === undefined))
        );

        return (
        <div className={baseStyle.content}>
            <div className={baseStyle.contentTools}>
                <h3>Ч</h3>
                <label className={switchStyle.switch}>
                    <input type="checkbox"
                           checked={showMale}
                           onChange={() => this.toggleField("showMale")}/>
                    <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
                </label>
                <h3>Ж</h3>
                <label className={switchStyle.switch}>
                    <input type="checkbox"
                           checked={showFemale}
                           onChange={() => this.toggleField("showFemale")}/>
                    <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
                </label>
                <h3>Null</h3>
                <label className={switchStyle.switch}>
                    <input type="checkbox"
                           checked={showNotSpecGender}
                           onChange={() => this.toggleField("showNotSpecGender")}/>
                    <span className={`${switchStyle.slider} ${switchStyle.round}`}></span>
                </label>

            </div>
            <div className={`${inputStyle.form__group} ${inputStyle.field}`}>
                <input type="text"  className={inputStyle.form__field} placeholder="Search contacts"
                       value={searchContact}
                       onChange={this.searchContactHandler}/>
                <label className={inputStyle.form__label}>Search contacts</label>
            </div>
            {filteredContacts.map((contact, index) => (
                <Contact key={index} contact={contact} />
            ))}
        </div>
    );
    }
}

export default Contacts;