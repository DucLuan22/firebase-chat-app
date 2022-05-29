import React from 'react';
import styled from 'styled-components';
import { Collapse, Typography } from 'antd';
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
`;

function RoomList() {
	return (
		<Collapse defaultActiveKey={[ '1' ]}>
			<Panel header="Rooms List" className="panel" key={'1'}>
				<Typography.Link>Room 1</Typography.Link>
				<Typography.Link>Room 2</Typography.Link>
				<Typography.Link>Room 3</Typography.Link>
			</Panel>
		</Collapse>
	);
}

export default RoomList;
