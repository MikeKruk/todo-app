import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import TodosThemeProvider from './contexts/TodosThemeProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<KindeProvider
			clientId='873d28a9475643dd8b760ec8f899cdc6'
			domain='https://mikemo.kinde.com'
			redirectUri={
				process.env.NODE_ENV === 'production'
					? 'https://todo-app-mikhails-projects-1f34ecce.vercel.app/'
					: 'http://localhost:5173'
			}
			logoutUri={
				process.env.NODE_ENV === 'production'
					? 'https://todo-app-mikhails-projects-1f34ecce.vercel.app/'
					: 'http://localhost:5173'
			}
		>
			<TodosThemeProvider>
				<TodosContextProvider>
					<App />
				</TodosContextProvider>
			</TodosThemeProvider>
		</KindeProvider>
	</React.StrictMode>
);
