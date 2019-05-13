import { ADD_CONTACT } from './../actionNames';

const phoneBookReducer = (phoneBook = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const lastContact = phoneBook[phoneBook.length - 1];
             const newId = lastContact ? lastContact.id + 1 : 0;
            return [...phoneBook, {...action.payload.contact, id: newId}]
        default:
            return phoneBook
    }
}

export default phoneBookReducer;