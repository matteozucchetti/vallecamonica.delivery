import { Fragment } from "preact";

export const D_MinOrder = ({min_order}) => {
	return (
		<Fragment>
			<h3 class="mt-4 mb-2">Ordine minimo:</h3>
			<div class="mb-2">
            <p>{min_order}</p>
			</div>
		</Fragment>
	);
};
