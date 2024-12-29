import { FaMoon, FaRegSun } from 'react-icons/fa';
import { useThemeContext } from '../lib/hooks';
export default function ThemeToggleIcon() {
	const { themeToggle, theme } = useThemeContext();
	return (
		<button onClick={themeToggle}>
			{theme === 'light' ? (
				<FaMoon />
			) : (
				<FaRegSun className='text-yellow-400' />
			)}
		</button>
	);
}
