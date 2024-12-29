/* eslint-disable react-refresh/only-export-components */
import { ThemeContextProps, TodosProviderProps } from 'lib/interface';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function TodosThemeProvider({ children }: TodosProviderProps) {
	const [theme, setTheme] = useState<'light' | 'dark'>(() => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const themeToggle = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, themeToggle }}>
			{children}
		</ThemeContext.Provider>
	);
}
