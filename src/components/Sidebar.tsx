import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useThemeContext } from '../lib/hooks';
import AddTodoForm from './AddTodoForm';
import Button from './Button';

export default function Sidebar() {
	const { theme } = useThemeContext();
	const { login, register, isAuthenticated, logout, user, isLoading } = useKindeAuth();
	return (
		<section
			className={`flex flex-col col-[2/3] row-[2/3] ${
				theme === 'light'
					? 'bg-[#fffcf9] border-black/[0.08]'
					: 'bg-[#4b5563] border-white/[45%]'
			} border-l px-[25px] max-430:p-[0.625rem] pt-[18px] pb-[28px]`}
		>
			<AddTodoForm />

			<div className='mt-auto space-y-2'>
				{isLoading ? null : isAuthenticated ? (
					<>
          <p className='text-sm'>Logged in as {user?.email}</p>
						<Button onClick={logout} buttonType='secondary'>
							Log out
						</Button>
					</>
				) : (
					<>
						<Button onClick={login} buttonType='secondary'>
							Log in
						</Button>
						<Button onClick={register} buttonType='secondary'>
							Register
						</Button>
					</>
				)}
			</div>
		</section>
	);
}
