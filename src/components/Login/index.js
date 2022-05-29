import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
function Login() {
	const navigate = useNavigate();
	const handleFnLogin = () => {
		auth.signInWithPopup(fbProvider);
	};
	auth.onAuthStateChanged((user) => {
		console.log({ user });
		if (user) {
			navigate('/');
		}
	});
	return (
		<div>
			<Row justify="center" style={{ height: 800 }}>
				<Col span={8}>
					<Title style={{ textAlign: 'center' }}>MyChat</Title>
					<Button style={{ width: '100%' }}>Login with Google</Button>
					<Button style={{ width: '100%' }} onClick={handleFnLogin}>
						Login with Facebook
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default Login;
