import React, { Fragment } from 'react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries, editEntry }) => {
	return (
		<Fragment>
			{entries.map((entry) => (
				<EntryLine
					key={entry.id}
					{...entry}
					editEntry={editEntry}
				/>
			))}
		</Fragment>
	);
};

export default EntryLines;
