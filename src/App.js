import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';
import {getAllEntries} from './actions/entries.actions';
import { useDispatch } from 'react-redux';

function App() {
	const [ totalIncomes, setTotalIncomes ] = useState(0);
	const [ totalExpenses, setTotalExpenses ] = useState(0);
	const [ total, setTotal ] = useState(0);
	const [ entry, setEntry ] = useState();
	const entries = useSelector((state) => state.entries);
	const { isOpen, id } = useSelector((state) => state.modals);

	useEffect(() => {
			const index = entries.findIndex((entry) => entry.id === id);
			setEntry(entries[index]);
		},
		[isOpen, id, entries]
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

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllEntries())
	},[])

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
			<EntryLines entries={entries} />
			<MainHeader title="Add new Transaction" type="h3" />
			<NewEntryForm />
			<ModalEdit isOpen={isOpen} {...entry} />
		</Container>
	);
}

export default App;
