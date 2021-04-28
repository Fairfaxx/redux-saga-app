import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
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
							amount="1,051.59"
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							size="tiny"
							color="red"
							style={{ textAlign: 'center' }}
							value="Expenses"
							amount="701.59"
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default DisplayBalances;
