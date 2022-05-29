import React from 'react';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip, Input, Form } from 'antd';
const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	height: 0 1rem;
	align-items: center;
	border-bottom: 1px solid lightgray;
	.header {
		&__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 8px;
		}
		&__room-name {
			margin: 0;
			font-weight: Bold;
			font-size: 1.8rem;
		}
		&__description {
			font-size: 1rem;
		}
	}
`;

const ButtonGroupStyled = styled.div`
	display: flex;
	align-items: center;
	padding 0 2rem;
	font-size : 1.4rem;
`;
const MessageListStyled = styled.div``;
const ContentStyled = styled.div``;
function ChatWindow() {
	return (
		<div>
			<HeaderStyled>
				<div className="header__container">
					<p className="header__room-name">Room 1</p>
					<span className="header__description">This is room 1</span>
				</div>
				<div>
					<ButtonGroupStyled>
						<Button type="text" icon={<UserAddOutlined />}>
							Invite
						</Button>
						<Avatar.Group size="small" maxCount={2}>
							<Tooltip title="A">
								<Avatar>A</Avatar>
							</Tooltip>
							<Tooltip title="B">
								<Avatar>B</Avatar>
							</Tooltip>
							<Tooltip title="C">
								<Avatar>C</Avatar>
							</Tooltip>
							<Tooltip title="D">
								<Avatar>D</Avatar>
							</Tooltip>
						</Avatar.Group>
					</ButtonGroupStyled>
				</div>
			</HeaderStyled>
			<ContentStyled>
				<MessageListStyled>
					<Form>
						<Form.Item>
							<Input />
						</Form.Item>
					</Form>
					<Button>Send</Button>
				</MessageListStyled>
			</ContentStyled>
		</div>
	);
}

export default ChatWindow;
