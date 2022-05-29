import React from 'react';
import styled from 'styled-components';
import { Collapse, Typography, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`

	&&& {
		.ant-collapse-header, p{
			color:white;
			background:  #171717;
		}
		.ant-collapse-content-bos {
			padding: 0, 40px;
		}
		.ant-collapse-content-bos, button{
			background: white;
			color: black;
		}
		overflow: auto;
	}
		
`;
const LinkStyled = styled(Typography.Link)`
display: block;
margin-bottom: 5px;
color: white;
`;
function RoomList() {
	return (
		<Collapse ghost defaultActiveKey={[ '1' ]}>
			<PanelStyled header="Rooms List" className="panel" key={'1'}>
				<LinkStyled style={{ color: 'white' }}>Room 1</LinkStyled>
				<LinkStyled style={{ color: 'white' }}>Room 2</LinkStyled>
				<LinkStyled style={{ color: 'white' }}>Room 3</LinkStyled>
				<Button type="text" icon={<PlusCircleOutlined />} className="add-room">
					Add-Room
				</Button>
			</PanelStyled>
		</Collapse>
	);
}

export default RoomList;
