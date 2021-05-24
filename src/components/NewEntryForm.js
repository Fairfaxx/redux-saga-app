import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import { addEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4, v4 } from 'uuid';

const NewEntryForm = () => {
	const [ description, setDescription ] = useState('');
	const [ value, setValue ] = useState('');
	const [ isExpense, setIsExpense ] = useState(true);
	const dispatch = useDispatch();

	function addEntry() {
		dispatch(
			addEntryRedux({
				id: v4(),
				description,
				value,
				isExpense,
			})
		);
		setDescription('');
		setValue('')
		setIsExpense(true)
	}

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
