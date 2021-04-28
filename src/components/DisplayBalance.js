import React from 'react';
import { Statistic } from 'semantic-ui-react';

const DisplayBalance = ({ size, color, style, value, amount }) => {
	return (
		<Statistic size={size} color={color}>
			<Statistic.Label style={style}>{value}</Statistic.Label>
			<Statistic.Value>{amount}</Statistic.Value>
		</Statistic>
	);
};

export default DisplayBalance;
