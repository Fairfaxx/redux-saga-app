import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

const EntryLine = ({color, columns, width, iconName, value, amount, columnWidth }) => {
	return (
		<Segment color={color}>
			<Grid columns={columns} textAlign="right">
				<Grid.Row>
					<Grid.Column width={width} textAlign="left">
						{value}
					</Grid.Column>
					<Grid.Column width={columnWidth}>{amount}</Grid.Column>
					<Grid.Column width={columnWidth}>
						<Icon name="edit" bordered />
						<Icon name="trash" bordered />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default EntryLine;
