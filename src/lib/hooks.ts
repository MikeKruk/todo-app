import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TodosContext } from '../contexts/TodosContextProvider';
import { ThemeContext } from '../contexts/TodosThemeProvider';

export function useTodosContext() {
	const context = useContext(TodosContext);
	if (!context) {
		throw new Error('Todos context not found');
	}
	return context;
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('Theme context not found');
	}
	return context;
}

export function useDeviceInfo() {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
	return { isLandscape, isMobile };
}
