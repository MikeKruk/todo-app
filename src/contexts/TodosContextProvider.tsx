/* eslint-disable react-refresh/only-export-components */
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Todo, TodosContextProps, TodosProviderProps } from 'lib/interface';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const TodosContext = createContext<TodosContextProps | null>(null);

export default function TodosContextProvider({ children }: TodosProviderProps) {
	const [todos, setTodos] = useState<Todo[]>(() =>
		localStorage.getItem('todos')
			? JSON.parse(localStorage.getItem('todos') as string)
			: []
	);
	const [userTodos, setUserTodos] = useState<Todo[]>(() =>
		localStorage.getItem('userTodos')
			? JSON.parse(localStorage.getItem('userTodos') as string)
			: []
	);
	const [todoText, setTodoText] = useState('');
	const { isAuthenticated } = useKindeAuth();
	const totalNumberOfTodos = todos.length;
	const totalNumberOfUserTodos = userTodos.length;
	const numberOfCompletedTodos = todos.filter(todo => todo.completed).length;
	const numberOfCompletedUserTodos = userTodos.filter(todo => todo.completed).length;

	const handelAddTodo = (todoText: string) => {
		if (todos.some(todo => todo.title === todoText) || userTodos.some(todo => todo.title === todoText)) {
			toast.error(`Todo ${todoText} already exists`);
			return;
		}
		if (todoText.trim() === '') {
			toast.error(`Todo ${todoText} cannot be empty`);
			return;
		}
		if (todos.length >= 3 && !isAuthenticated) {
			toast.error('Authorization for adding more todos is required');
			return;
		}

		if (isAuthenticated) {
			setUserTodos(prev => [
				...prev,
				{
					id: prev.length + 1,
					title: todoText,
					completed: false,
				},
			]);
		} else {
			setTodos(prev => [
				...prev,
				{
					id: prev.length + 1,
					title: todoText,
					completed: false,
				},
			]);
		}
		toast.success(`Todo ${todoText} added successfully`);
	};

	const handelToggleTodo = (todo: Todo) => {
		if (isAuthenticated) {
			setUserTodos(
				userTodos.map(t => {
					return t.id === todo.id ? { ...t, completed: !t.completed } : t;
				})
			);
		} else {
			setTodos(
				todos.map(t => {
					return t.id === todo.id ? { ...t, completed: !t.completed } : t;
				})
			);
		}

		toast.success(`Todo ${todo.title} updated successfully`);
	};

	const handelDeleteTodo = (id: number) => {
		if (isAuthenticated) {
			setUserTodos(prev => prev.filter(todo => todo.id !== id));
		} else {
			setTodos(prev => prev.filter(todo => todo.id !== id));
		}
	};

	useEffect(() => {
		if (!isAuthenticated) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}, [todos, isAuthenticated]);

	useEffect(() => {
		if (isAuthenticated) {
			localStorage.setItem('userTodos', JSON.stringify(userTodos));
		}
	}, [userTodos, isAuthenticated]);

	useEffect(() => {
		if (isAuthenticated) {
			const savedUserTodos = localStorage.getItem('userTodos');
			if (savedUserTodos) {
				setUserTodos(JSON.parse(savedUserTodos));
			}
		} else {
			const savedTodos = localStorage.getItem('todos');
			if (savedTodos) {
				setTodos(JSON.parse(savedTodos));
			}
		}
	}, [isAuthenticated]);

	return (
		<TodosContext.Provider
			value={{
				todos,
        userTodos,
				todoText,
				setTodoText,
				totalNumberOfTodos,
        totalNumberOfUserTodos,
				numberOfCompletedTodos,
        numberOfCompletedUserTodos,
				handelAddTodo,
				handelToggleTodo,
				handelDeleteTodo,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
}
