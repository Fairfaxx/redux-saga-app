import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './NewEntryForm';

const ModalEdit = ({ isOpen, setIsOpen, addEntry, setDescription, setValue, setIsExpense, description, value, isExpense  }) => {
	return <Modal open={isOpen}>
    <Modal.Header>Edit Entry</Modal.Header>
    <Modal.Content>
      <EntryForm isOpen={isOpen} 
				setIsOpen={setIsOpen} 
				addEntry={addEntry}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
				description={description}
				value={value}
				isExpense={isExpense} />
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={() => setIsOpen(false)} positive>Confirm</Button>
    </Modal.Actions>
  </Modal>;
};

export default ModalEdit;
