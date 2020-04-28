import { Fragment } from "preact";

export const D_Notes = ({note}) => {
	return (
		<Fragment>
			<h3 class="mt-4 mb-2">Note:</h3>
			<div class="mb-2">
            <p>{note}</p>
			</div>
		</Fragment>
	);
};
