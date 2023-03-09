import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../entities';
import { setupActions } from '../../entities/store/setup/actions';
import { useState } from 'react';

export const LoginPage = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const defaultMessage:any = {};
	const [message, setMessage] = useState(defaultMessage);

	function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const data = new FormData(event.currentTarget);
	
		axios.post('/accounts/login/', { 
			email: data.get('email').toString(),
			password: data.get('password').toString(),
		})
		.then(function (response) {
			dispatch({type: setupActions.SET_TOKEN, payload: response.data.token})
			axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
		})
		.then(() => navigate("/"))
		.catch(function (error) {
			setMessage(error.response.data)
		})	
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{Object.keys(message).map(item => 
					<Typography color='red' key={item}>
						{item === 'email' ? 'Неверный Email' : 
						item === 'password' ? 'Неверный пароль':
						item === 'non_field_errors' ? 'Пользователь с такими учетными данными не найден': 
						'Ошибка'}
					</Typography>)
				}
				
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Пароль"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Запомнить"
						disabled
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Войти
					</Button>

					<Grid container>
						{/* <Grid item xs>
							<Link href="#" variant="body2">
								Забыли пароль?
							</Link>
						</Grid> */}

						<Grid item>
							<Link href="/registration/" variant="body2">
								{"Зарегистрировать аккаунт"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}
