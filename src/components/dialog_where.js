import { Fragment } from "preact";

export const D_Where = ({where}) => {

  let length = where.length;

	return (
		<Fragment>
			<h3 class="text-lg font-bold mb-2">Consegna a:</h3>
			<div class="where mb-5">
         <p>
            {
              where.map((value, index) => {
              return ( index === length - 1
                ? <span class="city" key={index}>{value}</span>
                : <span class="city" key={index}>{value}, </span>                
              )
            })
            }
         </p>
			</div>
		</Fragment>
	);
};
