import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
	return (
		<Container>
			<Header as="h1">Budget</Header>
			<Statistic size="small">
				<Statistic.Label>Your Balance: </Statistic.Label>
				<Statistic.Value>2,557.59</Statistic.Value>
			</Statistic>
			<Segment textAlign="center">
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>
							<Statistic size="tiny" color="green">
								<Statistic.Label style={{ textAlign: 'center' }}>Incoming</Statistic.Label>
								<Statistic.Value>1,051.59</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic size="tiny" color="red">
								<Statistic.Label style={{ textAlign: 'center' }}>Expenses</Statistic.Label>
								<Statistic.Value>701.59</Statistic.Value>
							</Statistic>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Header as="h3">History</Header>
			<Segment color="red">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">
							Something
						</Grid.Column>
						<Grid.Column width={3} alignSelf="center">
							$10,00
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered />
							<Icon name="trash" bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color="green">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">
							Something Else
						</Grid.Column>
						<Grid.Column width={3} alignSelf="center">
							$91,09
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered />
							<Icon name="trash" bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment color="red">
				<Grid columns={3} textAlign="right">
					<Grid.Row>
						<Grid.Column width={10} textAlign="left">
							Something Else
						</Grid.Column>
						<Grid.Column width={3} alignSelf="center">
							$70,99
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name="edit" bordered />
							<Icon name="trash" bordered />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Header as="h3">Add new Transaction</Header>
			<Form unstackable>
				<Form.Group>
					<Form.Input label="Description" placeholder="New shinny thing" icon="tags" width={12} />
					<Form.Input label="Value" placeholder="100.00" icon="dollar" width={4} iconPosition='left' />
				</Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Okey</Button>
        </Button.Group>
			</Form>
		</Container>
	);
}

export default App;
