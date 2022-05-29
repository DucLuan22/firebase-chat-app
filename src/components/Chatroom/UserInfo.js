import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	padding: .8rem 1rem;
	border-bottem: 1px solid;
	align-items: center;
	padding-bottom: 2rem;
	.Username {
		color: white;
		margin-left: 10px;
	}
	.logout-btn {
		border-radius: 1rem;
	}
`;
function UserInfo() {
	return (
		<Wrap>
			<div>
				<Avatar>A</Avatar>
				<Typography.Text className="Username">Name</Typography.Text>
			</div>
			<Button className="logout-btn">Logout</Button>
		</Wrap>
	);
}

export default UserInfo;
