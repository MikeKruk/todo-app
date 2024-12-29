
import { useThemeContext } from '../lib/hooks';
import Counter from './Counter';
import ThemeToggleIcon from './ThemeToggleIcon';

export default function Header() {
  const { theme } = useThemeContext();
	return (
		<header className={`flex justify-between items-center px-[28px] col-[1/3] row-[1/2] ${theme === 'light' ? 'bg-[#fbf5ed] border-black/[0.08]' : 'bg-[#4b5563] border-white/[45%]'} border-b border-black/[0.08]`}>
			<ThemeToggleIcon />
			<Counter />
		</header>
	);
}
