import React from 'react';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar, Tooltip, Input, Form } from 'antd';
import Message from './Message';
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
			font-weight: bold;
			font-size: 1.8rem;
		}
		&__description {
			font-size: 1rem;
			font-weight: 600;
		}
	}
`;

const ButtonGroupStyled = styled.div`
	display: flex;
	align-items: center;
	padding 0 2rem;
	font-size : 1.4rem;
`;
const MessageListStyled = styled.div`
	max-height: 100%;
	overflow-y: auto;
`;
const ContentStyled = styled.div`
	height: calc(100% - 56px);
	display: flex;
	flex-direction: column;
	padding: 11px;
	justify-content: flex-end;
`;
const Wrapper = styled.div`height: 100vh;`;
const FormStyled = styled(Form)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 2px 2px 0;
	border: 1px solid rgb(230, 230, 230);
	border-radius: 2px;
	.ant-form-item {
		flex: 1;
		margin-bottom: 0;
	  }
`;
function ChatWindow() {
	return (
		<Wrapper>
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
					<Message text="Hello" photo={null} displayName="Luan" sentDate={1231233123} />
					<Message text="Hello" photo={null} displayName="Luan2" sentDate={1231233123} />
					<Message text="Hello" photo={null} displayName="Luan3" sentDate={1231233123} />
				</MessageListStyled>
				<FormStyled>
					<Form.Item>
						<Input bordered={false} autoComplete="off" />
					</Form.Item>
					<Button>Send</Button>
				</FormStyled>
			</ContentStyled>
		</Wrapper>
	);
}

export default ChatWindow;
