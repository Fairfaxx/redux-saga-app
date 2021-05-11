import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

const initialEntries = [
	{
		id: 1,
		description: 'Work Income',
		value: 1000.00,
		isExpense: false
	},
	{
		id: 2,
		description: 'Water Bill',
		value: 20.00,
		isExpense: true
	},
	{
		id: 3,
		description: 'Rent',
		value: 300.00,
		isExpense: true
	},
	{
		id: 4,
		description: 'Power Bill',
		value: 30.00,
		isExpense: true
	}
];

function App() {
	const [ entries, setEntries ] = useState(initialEntries);
	const [ description, setDescription ] = useState('');
	const [ value, setValue ] = useState('');
	const [ isExpense, setIsExpense ] = useState(true);
	const [ isOpen, setIsOpen ] = useState(false);
	const [ entryId, setEntryId ] = useState();
	const [ totalIncomes, setTotalIncomes ] = useState(0);
	const [ totalExpenses, setTotalExpenses ] = useState(0);
	const [ total, setTotal ] = useState(0);


	useEffect(
		() => {
			if (!isOpen && entryId) {
				const index = entries.findIndex((entry) => entry.id === entryId);
				const newEntries = [ ...entries ];
				newEntries[index].description = description;
				newEntries[index].value = value;
				newEntries[index].isExpense = isExpense;
				setEntries(newEntries);
				resetEntries();
			}
		},
		[ isOpen ]
	);

	useEffect(() => {
		let totalIncomes = 0;
		let totalExpenses = 0;

		entries.map((entry) => {
			if(entry.isExpense){
				return totalExpenses += Number(entry.value);
			} else {
				return totalIncomes += Number(entry.value);
			}
		})
		setTotal(totalIncomes - totalExpenses);
		setTotalExpenses(totalExpenses);
		setTotalIncomes(totalIncomes);

	}, [entries]);

	function deleteEntry(id) {
		const result = entries.filter((entry) => entry.id !== id);
		setEntries(result);
	}

	function editEntry(id) {
		if (id) {
			const index = entries.findIndex((entry) => entry.id === id);
			const entry = entries[index];
			setEntryId(id);
			setDescription(entry.description);
			setValue(entry.value);
			setIsExpense(entry.isExpense);
			setIsOpen(true);
		}
		console.log(id);
	}

	function addEntry() {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense
		});
		setEntries(result);
		resetEntries();
	}

	function resetEntries() {
		setDescription('');
		setValue('');
		setIsExpense(true);
	}

	return (
		<Container>
			<MainHeader title="Budget" type="h1" />
			<DisplayBalance
				size="small"
				color="black"
				style={{ textAlign: 'left' }}
				value="Your Balance: "
				amount={`$${total}`}
			/>
			<DisplayBalances totalExpenses={totalExpenses} totalIncomes={totalIncomes} />
			<MainHeader title="History" type="h3" />
			<EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
			<MainHeader title="Add new Transaction" type="h3" />
			<NewEntryForm
				addEntry={addEntry}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
				description={description}
				value={value}
				isExpense={isExpense}
			/>
			<ModalEdit
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				addEntry={addEntry}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
				description={description}
				value={value}
				isExpense={isExpense}
			/>
		</Container>
	);
}

export default App;
