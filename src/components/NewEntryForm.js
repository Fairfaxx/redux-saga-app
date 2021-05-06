import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const NewEntryForm = ({ addEntry, setDescription, setValue, setIsExpense, description, value, isExpense }) => {
	
	return (
		<Form unstackable>
			<EntryForm 
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
				description={description}
				value={value}
				isExpense={isExpense}
			/>
			<ButtonSaveOrCancel 
				addEntry={addEntry} 
				description={description} 
				value={value} 
				isExpense={isExpense} />
		</Form>
	);
};

export default NewEntryForm;
