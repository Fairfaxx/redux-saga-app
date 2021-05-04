import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

const initialEntries = [
	{
		id: 1,
		description: 'Work Income',
		value: '$1000,00',
		isExpense: false,
	},
	{
		id: 2,
		description: 'Water Bill',
		value: '$20,00',
		isExpense: true,
	},
	{
		id: 3,
		description: 'Rent',
		value: '$300,00',
		isExpense: true,
	},
	{
		id: 4,
		description: 'Power Bill',
		value: '$30,00',
		isExpense: true,
	},
];

function App() {
	const [ entries, setEntries ] = useState(initialEntries);

	function deleteEntry(id) {
		const result = entries.filter(entry => entry.id !== id)
		console.log('clicked delete entry')
		setEntries(result)
	}

	return (
		<Container>
			<MainHeader title="Budget" type="h1" />
			<DisplayBalance
				size="small"
				color="black"
				style={{ textAlign: 'left' }}
				value="Your Balance: "
				amount="2,557.59"
			/>
			<DisplayBalances />
			<MainHeader title="History" type="h3" />
			<EntryLines entries={entries} deleteEntry={deleteEntry} />	
			<MainHeader title="Add new Transaction" type="h3" />
			<NewEntryForm />
		</Container>
	);
}

export default App;
