import { ListItem } from './lisItem';

export const ListCategory = ({ name = '', category = {}}) => {
	return (
		<section id={name.replace(' ', '_')} className="relative py-5">
			<h2 className="text-2xl md:text-3xl capitalize">
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
