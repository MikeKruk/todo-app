import { useDeviceInfo, useThemeContext } from '../lib/hooks';

export default function Footer() {
	const { theme } = useThemeContext();
	const { isLandscape, isMobile } = useDeviceInfo();
	return (
		<footer
			className={`flex justify-between items-center w-[972px] max-lg:w-[750px] max-md:w-[620px] max-430:max-w-[380px] max-390:max-w-[350px] text-[11px] ${
				theme === 'light' ? 'opacity-30' : ''
			} mt-[12px] ${isLandscape && isMobile ? 'hidden' : ''}`}
		>
			<small className='text-[11px]'>&copy; 2025. Copyright by MikeMO</small>
			<p>
				Version <b>1.0</b>
			</p>
		</footer>
	);
}
