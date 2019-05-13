import React from 'react';
import PhonebookReduxForm from './phonebookForm';
import {connect} from 'react-redux';
import {addContactAction} from './../../redux/actionsCreators'
import PhonebookList from './phonebookList';

const Phonebook = (props) => {
    return (
        <>
            <PhonebookReduxForm addContact={props.addContact} />
            <PhonebookList phonebook={props.phonebook}/>
        </>
    );
};

const mapStateToProps = state => ({
    phonebook: state.phonebook
});

const mapDispatchToProps = dispatch => ({
    addContact: (contact) => dispatch(addContactAction(contact))
});

export default  connect(mapStateToProps, mapDispatchToProps)(Phonebook);