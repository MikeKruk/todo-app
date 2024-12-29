import { buttonProps } from 'lib/interface';
import { useThemeContext } from '../lib/hooks';

export default function Button({ buttonType, children, onClick }: buttonProps) {
	const { theme } = useThemeContext();
	return (
		<button
    onClick={onClick}
			className={`h-[45px] max-430:h-[1.875rem] bg-[#473a2b] hover:bg-[#322618] max-430:hover:bg-[#473a2b] w-full ${theme === 'light' ? 'text-white' : 'text-[#d4d4d8]'} rounded-[5px] cursor-pointer 
      ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`}
		>
			{children}
		</button>
	);
}
