import { Fragment } from "preact";

export const D_Payments = ({payments}) => {
	return (
		<Fragment>
			<h3 class="mt-4 mb-2">Metodi di pagamento:</h3>
			<div class="mb-2">
				{payments.map((payment) => {
					return (
						<span
							class="inline-block py-1 px-3 mb-2 mr-2 text-sm rounded-full bg-gray-500 font-semibold"
							target="_blank"
							rel="noopener noreferrer"
						>
							{payment}
						</span>
					);
				})}
			</div>
		</Fragment>
	);
};
