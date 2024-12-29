import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Todo } from 'lib/interface';
import { useThemeContext, useTodosContext } from '../lib/hooks';
import DeleteButton from './DeleteButton';

export default function TodoList() {
	const { todos, handelToggleTodo, handelDeleteTodo, userTodos } =
		useTodosContext();
	const { theme } = useThemeContext();
	const { isAuthenticated, isLoading } = useKindeAuth();

	return (
		<ul className='snap-y overflow-y-auto'>
			{todos.length === 0 && (
				<li className='h-full flex justify-center items-center font-semibold'>
					No todos yet
				</li>
			)}

			{isLoading
				? null
				: isAuthenticated
				? userTodos.map((todo: Todo) => (
						<li
							key={`${todo.id}${todo.title}`}
							className={`flex justify-between items-center px-8 h-[50px] text-[14px] ${
								theme === 'light' ? 'text-black' : 'border-white/[45%]'
							} cursor-pointer border-b border/black/[8%]`}
							onClick={() => handelToggleTodo(todo)}
						>
							<span
								className={`${todo.completed && 'line-through text-[#ccc]'}`}
							>
								{todo.title}
							</span>

							<DeleteButton id={todo.id} onDeleteTodo={handelDeleteTodo} />
						</li>
				))
				: todos.map((todo: Todo) => (
						<li
							key={`${todo.id}${todo.title}`}
							className={`flex justify-between items-center px-8 h-[50px] text-[14px] ${
								theme === 'light' ? 'text-black' : 'border-white/[45%]'
							} cursor-pointer border-b border/black/[8%]`}
							onClick={() => handelToggleTodo(todo)}
						>
							<span
								className={`${todo.completed && 'line-through text-[#ccc]'}`}
							>
								{todo.title}
							</span>

							<DeleteButton id={todo.id} onDeleteTodo={handelDeleteTodo} />
						</li>
				))}
		</ul>
	);
}
