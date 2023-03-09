import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function SignUp() {
	const navigate = useNavigate();
	const defaultMessage:any = {};
	const [message, setMessage] = useState(defaultMessage);


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});

		axios.post('/accounts/registration/', { 
			first_name: data.get('firstName').toString(),
			last_name: data.get('lastName').toString(),
			username: data.get('username').toString(),
			email: data.get('email').toString(),
			password: data.get('password').toString(),
		})
		.then(() => navigate("/login/"))
		.catch(function (error) {
			setMessage(error.response.data)
		})
  };

  	return (
		<Container component="main" maxWidth="xs">
			<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			>

			<Typography component="h1" variant="h5">
				Регистрация
			</Typography>

			{Object.keys(message).map(item => 
				<Typography color='red' key={item}>
					{item === 'email' ? 'Неверный Email' : 
					item === 'password' ? 'Неверный пароль':
					item === 'username' ? 'Неверное имя пользователя':
					item === 'non_field_errors' ? 'Пользователь с такими учетными данными не найден': 
					'Ошибка'}
				</Typography>)
			}

			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
				<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete="given-name"
						name="firstName"
						fullWidth
						id="firstName"
						label="Имя"
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="lastName"
						label="Фамилия"
						name="lastName"
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name="password"
						label="Пароль"
						type="password"
						id="password"
						autoComplete="new-password"
					/>
				</Grid>
				</Grid>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Зарегистрироваться
				</Button>

				<Grid container justifyContent="flex-end">
					<Grid item>
						<Link href="/login" variant="body2">
							Уже есть аккаунт? Войти
						</Link>
					</Grid>
				</Grid>
			</Box>
			</Box>
		</Container>
	);
}