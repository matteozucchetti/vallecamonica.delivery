import { useContext } from 'preact/hooks';

// Actions
import { Action } from '../index'

export const ListItem = (props) => {
	const { name, tel, site, mail, payments, services, note, where, newEntry } = props;

	const action = useContext(Action);
	const encodedName = encodeURIComponent(name);
	// const encodedCity = encodeURIComponent(process.env.PREACT_APP_CITY);
  const encodedCity = encodeURIComponent('Valle Camonica');
	const searchUrl = `https://www.google.com/search?q=${encodedName}`;

	const isInfoVisible = Boolean(Array.isArray(tel) || site || mail || payments || services || note || Array.isArray(where));

	return (
		<article onClick={(e) => action.setPopupNumbers(e, props)} class={`relative cursor-pointer border border-teal-500 p-4 my-5 ${newEntry ? "new-entry" : ""}`}>
			<div class="flex justify-between items-center">
				<span>{name}</span>				
				<div class="flex">
					{isInfoVisible && 
						<span
							class="inline-block mx-1 cursor-pointer text-center"
							role="img"
							aria-label="more info"
						>
							ℹ️
						</span>
					}
					{mail && !site && !tel && (
						<a href={`mailto:${mail}`}>
							<span
								class="inline-block mx-1 cursor-pointer text-center"
								role="img"
								aria-label="mail"
							>
							✉️
							</span>
						</a>
					)}
					{site && !tel && (
						<a href={`${site}`}>
							<span
								class="inline-block mx-1 cursor-pointer text-center"
								role="img"
								aria-label="website"
							>
							🌐
							</span>
						</a>
					)}
					{tel && (
						<a href={`tel:${tel}`} onClick={(e) => Array.isArray(tel) && action.setPopupNumbers(e, props)}>
							<span
								class="inline-block mx-1 cursor-pointer text-center"
								role="img"
								aria-label="telephone"
							>
							📞
							</span>
						</a>
					)}
				</div>
			</div>
    </article>
	);
};
