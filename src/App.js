import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
	return (
		<Container>
			<MainHeader title="Budget" type="h1" />
			<DisplayBalance size='small' color='black' style={{textAlign: 'left'}} value='Your Balance: ' amount='2,557.59' />
			<DisplayBalances />
			<MainHeader title="History" type="h3" />
			<EntryLine color='red' columns='3' width='10' columnWidth='3' value='Something' amount='$10,00' />
			<EntryLine color='green' columns='3' width='10' columnWidth='3' value='Something Else' amount='$91,09' />
			<EntryLine color='red' columns='3' width='10' columnWidth='3' value='Something' amount='$70,99' />
      <MainHeader title="Add new Transaction" type="h3" />
			<NewEntryForm />
		</Container>
	);
}

export default App;
