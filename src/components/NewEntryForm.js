import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import {Form} from 'semantic-ui-react';

const NewEntryForm = () => {
	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input label="Description" placeholder="New shinny thing" icon="tags" width={12} />
				<Form.Input label="Value" placeholder="100.00" icon="dollar" width={4} iconPosition="left" />
			</Form.Group>
      <ButtonSaveOrCancel />
		</Form>
	);
};

export default NewEntryForm;
