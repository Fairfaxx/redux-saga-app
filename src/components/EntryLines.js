import React, { Fragment } from 'react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
	return (
		<Fragment>
			{entries.map((entry) => (
				<EntryLine
					key={entry.id}
					{...entry}
					deleteEntry={deleteEntry}
					editEntry={editEntry}
				/>
			))}
		</Fragment>
	);
};

export default EntryLines;
