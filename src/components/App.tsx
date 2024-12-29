import { useEffect } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDeviceInfo, useThemeContext } from '../lib/hooks';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import TodoList from './TodoList';

function App() {
	const { theme } = useThemeContext();
	const { isMobile, isLandscape } = useDeviceInfo();

	useEffect(() => {
		if (isMobile && isLandscape) {
			toast.error('Please rotate your phone', {
				position: 'top-center',
				autoClose: false,
			});
		} else {
			toast.dismiss();
		}
	}, [isMobile, isLandscape]);

	return (
		<div
			className={`flex justify-center items-center fonts-sans ${
				theme === 'light' ? 'bg-[#f1d4b3]' : 'bg-[#155e75]'
			}  min-h-screen flex-col overflow-hidden`}
		>
			{!isMobile && <BackgroundHeading />}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				limit={isMobile ? 2 : 4}
				theme={`${theme === 'light' ? 'light' : 'dark'}`}
				transition={Bounce}
			/>

			<main
				className={`relative w-full max-w-[972px] sm:max-w-[620px] lg:max-w-[750px] xl:max-w-[972px] mx-auto h-[636px] max-430:h-[30.5rem] ${
					theme === 'light' ? ' bg-white' : 'bg-[#374151] text-[#d4d4d8]'
				} rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] ${
					isLandscape && isMobile ? 'hidden' : ''
				} grid grid-cols-[7fr_4fr] max-430:grid-cols-[6fr_4fr] grid-rows-[59px_1fr] overflow-hidden}`}
			>
				<Header />

				<TodoList />

				<Sidebar />
			</main>

			<Footer />
		</div>
	);
}

export default App;
