import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({ setDescription, setValue, setIsExpense, description, value, isExpense }) => {
	return (
		<Fragment>
			<Form.Group>
				<Form.Input
					label="Description"
					placeholder="New shinny thing"
					icon="tags"
					width={12}
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<Form.Input
					label="Value"
					placeholder="100.00"
					icon="dollar"
					width={4}
					iconPosition="left"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</Form.Group>
			<Segment compact>
				<Checkbox
					toggle
					label="Is Expense"
					checked={isExpense}
					onChange={() => setIsExpense((oldState) => !oldState)}
				/>
			</Segment>
		</Fragment>
	);
};

export default EntryForm;
