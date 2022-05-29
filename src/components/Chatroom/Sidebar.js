import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';
const SidebarStyled = styled.div`
	background: #2f2d2d;
	color: white;
	height: 100vh;
`;
function Sidebar() {
	return (
		<SidebarStyled>
			<Row>
				<Col span={24}>
					<UserInfo />
				</Col>
				<Col span={24}>
					<RoomList />
				</Col>
			</Row>
		</SidebarStyled>
	);
}

export default Sidebar;
