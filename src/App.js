import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useSelector} from 'react-redux';


function App() {
	const [ description, setDescription ] = useState('');
	const [ value, setValue ] = useState('');
	const [ isExpense, setIsExpense ] = useState(true);
	const [ isOpen, setIsOpen ] = useState(false);
	const [ entryId, setEntryId ] = useState();
	const [ totalIncomes, setTotalIncomes ] = useState(0);
	const [ totalExpenses, setTotalExpenses ] = useState(0);
	const [ total, setTotal ] = useState(0);
	
	const entries = useSelector(state => state.entries)



	useEffect(
		() => {
			if (!isOpen && entryId) {
				const index = entries.findIndex((entry) => entry.id === entryId);
				const newEntries = [ ...entries ];
				newEntries[index].description = description;
				newEntries[index].value = value;
				newEntries[index].isExpense = isExpense;
				//setEntries(newEntries);
				resetEntries();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ isOpen ]
	);

	useEffect(
		() => {
			let totalIncomes = 0;
			let totalExpenses = 0;

			entries.map((entry) => {
				if (entry.isExpense) {
					return (totalExpenses += Number(entry.value));
				} else {
					return (totalIncomes += Number(entry.value));
				}
			});
			setTotal(totalIncomes - totalExpenses);
			setTotalExpenses(totalExpenses);
			setTotalIncomes(totalIncomes);
		},
		[ entries ]
	);

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
		//setEntries(result);
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
			<EntryLines entries={entries} editEntry={editEntry} />
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