export interface buttonProps {
	onClick?: () => Promise<void>;
	buttonType?: 'primary' | 'secondary';
	children: React.ReactNode;
}

export interface DeleteButtonProps {
	id: number;
	onDeleteTodo: (id: number) => void;
}

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface TodosProviderProps {
	children: React.ReactNode;
}

export interface TodosContextProps {
	todos: Todo[];
	userTodos: Todo[];
	todoText: string;
	setTodoText: (value: string) => void;
	totalNumberOfTodos: number;
	totalNumberOfUserTodos: number;
	numberOfCompletedTodos: number;
  numberOfCompletedUserTodos: number;
	handelAddTodo: (todoText: string) => void;
	handelToggleTodo: (todo: Todo) => void;
	handelDeleteTodo: (id: number) => void;
}

export interface ThemeContextProps {
	theme: 'light' | 'dark';
	themeToggle: () => void;
}
