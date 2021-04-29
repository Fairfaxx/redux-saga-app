import React, { Fragment } from 'react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries }) => {
	return (
		<Fragment>
			{entries.map((entry) => (
				<EntryLine
					key={entry.id}
					entry={entry}
				/>
			))}
		</Fragment>
	);
};

export default EntryLines;
