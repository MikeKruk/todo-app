import { useThemeContext, useTodosContext } from '../lib/hooks';
import Button from './Button';

export default function AddTodoForm() {
	const { handelAddTodo, todoText, setTodoText } = useTodosContext();
	const { theme } = useThemeContext();

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				handelAddTodo(todoText);
				setTodoText('');
			}}
		>
			<h2
				className={`font-medium ${
					theme === 'light' ? 'text-[#231d15]' : 'text-[#d4d4d8]'
				}`}
			>
				Add a todo
			</h2>
			<label
				htmlFor='todoInput'
				className={`relative flex items-center overflow-hidden`}
			>
				<input
					type='text'
					className={`h-[45px] max-430:h-[1.875rem] border ${
						theme === 'light'
							? 'border-black/[12%]'
							: 'border-white/[45%] bg-[#6b7280]'
					} rounded-[5px] my-[9px] 'text-[14px]' block w-full px-[16px]`}
					placeholder='What needs to be done ?'
					value={todoText}
					onChange={event => {
						setTodoText(event.target.value);
					}}
				/>
			</label>
			<Button>Add to list</Button>
		</form>
	);
}
