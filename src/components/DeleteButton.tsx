import { DeleteButtonProps } from 'lib/interface';


export default function DeleteButton({
	id,
  onDeleteTodo
}: DeleteButtonProps) {
	return (
		<button
			onClick={event => {
				event.stopPropagation();
				onDeleteTodo(id);
			}}
		>
			❌
		</button>
	);
}
