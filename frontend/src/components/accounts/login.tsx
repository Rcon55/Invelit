import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useAppDispatch } from '../../hooks/typedHooks';
import { AuthActions } from '../../store/redusers/authenticationReduser';


export const Login = () => {
	const dispatch = useAppDispatch()
	
	function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const data = new FormData(event.currentTarget);
	
		axios.post('/accounts/login/', { 
			email: data.get('email').toString(),
			password: data.get('password').toString(),
		})
		.then(function (response) {
			dispatch({type: AuthActions, payload: response.data.token})
			window.location.replace('/');
		})
		.catch(function (error) {
			return(error)
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
						<Grid item xs>
							<Link href="#" variant="body2">
								Забыли пароль?
							</Link>
						</Grid>

						<Grid item>
							<Link href="#" variant="body2">
								{"Зарегистрировать аккаунт"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}