import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import useEntryDetail from '../hooks/useEntryDetail';

const NewEntryForm = () => {
	const {description, setDescription, value, setValue, isExpense, setIsExpense, addEntry } = useEntryDetail();

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
			<ButtonSaveOrCancel addEntry={addEntry} />
		</Form>
	);
};

export default NewEntryForm;
