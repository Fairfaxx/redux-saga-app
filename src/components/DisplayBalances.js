import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({totalIncomes, totalExpenses}) => {
	return (
		<Segment textAlign="center">
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance
							size="tiny"
							color="green"
							style={{ textAlign: 'center' }}
							value="Incoming"
							amount={`$${totalIncomes}`}
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							size="tiny"
							color="red"
							style={{ textAlign: 'center' }}
							value="Expenses"
							amount={`$${totalExpenses}`}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default DisplayBalances;
