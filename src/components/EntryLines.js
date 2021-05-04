import React, { Fragment } from 'react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries, deleteEntry }) => {
	return (
		<Fragment>
			{entries.map((entry) => (
				<EntryLine
					key={entry.id}
					{...entry}
					deleteEntry={deleteEntry}
				/>
			))}
		</Fragment>
	);
};

export default EntryLines;
