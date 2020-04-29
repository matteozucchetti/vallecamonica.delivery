import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = {}}) => {
	return (
		<section id={name.replace(' ', '_')} className="">
			<h2 className="capitalize">
				{name}
			</h2>
			<div>
				{
					category.data
						.map(props => (
							<ListItem key={props.tel} {...props} />
						))
				}
			</div>
		</section>
	);
};
