import { Fragment } from "preact";

export const D_When = ({when}) => {

  let activeDaysObj = _.pickBy(when);
  let activeDaysArr = _.keys(activeDaysObj);
  let length = activeDaysArr.length

	return (
		<Fragment>
			<h3 class="mt-4 mb-2">Giorni:</h3>
			<div class="mb-2">
        <p>
            {length === 7 ? (
                <span class="day">Tutti i giorni</span>
            ) : (
              activeDaysArr.map((value, index) => {
                return ( index === length - 1
                  ? <span class="capitalize" key={index}>{value}</span>
                  : <span class="capitalize" key={index}>{value}, </span>                
                )
              })
            )}
        </p>
			</div>
		</Fragment>
	);
};
