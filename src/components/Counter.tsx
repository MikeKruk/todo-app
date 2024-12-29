import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useTodosContext } from '../lib/hooks';

export default function Counter() {
	const {
		numberOfCompletedTodos,
		totalNumberOfTodos,
		numberOfCompletedUserTodos,
		totalNumberOfUserTodos,
	} = useTodosContext();
	const { isAuthenticated, isLoading } = useKindeAuth();

	return (
		<p>
			<b>
				{isLoading
					? null
					: isAuthenticated
					? numberOfCompletedUserTodos
					: numberOfCompletedTodos}
			</b>{' '}
			/{' '}
			{isLoading
				? null
				: isAuthenticated
				? totalNumberOfUserTodos
				: totalNumberOfTodos}{' '}
			todos completed
		</p>
	);
}
