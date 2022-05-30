import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';
const Wrapper = styled.div`
	margin-bottm: 14px;
	.sender {
		margin-left: 5px;
		font-weight: bold;
	}
	.date {
		margin-left: 14px;
		font-size: 11px;
		color: #a7a7a7;
	}
	.content {
		margin-left: 30px;
	}
`;
function Message({ text, displayName, sentDate, photoURL }) {
	return (
		<Wrapper>
			<div>
				<div>
					<Avatar size="small" src={photoURL}>
						A
					</Avatar>
					<Typography.Text className="sender">{displayName}</Typography.Text>
					<Typography.Text className="date">{sentDate}</Typography.Text>
				</div>
				<div>
					<Typography.Text className="content">{text}</Typography.Text>
				</div>
			</div>
		</Wrapper>
	);
}

export default Message;
