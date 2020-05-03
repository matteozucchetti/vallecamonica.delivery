import { useContext } from 'preact/hooks';

// Actions
import { Action } from '../index';

// Images
import IconInfo from '../assets/svg/icon_info.svg';
import IconTel from '../assets/svg/icon_tel.svg';

export const ListItem = (props) => {
	const { name, tel, site, mail, payments, services, note, where, newEntry } = props;

	const action = useContext(Action);
	const encodedName = encodeURIComponent(name);
	const searchUrl = `https://www.google.com/search?q=${encodedName}`;

	const isInfoVisible = Boolean(Array.isArray(tel) || site || mail || payments || services || note || Array.isArray(where));

	return (
		<article class={`relative cursor-pointer flex justify-center items-stretch w-full my-5 ${newEntry ? "new-entry" : ""}`}>

      <div onClick={(e) => action.setPopupNumbers(e, props)} class="flex flex-auto justify-start items-center border border-vcd-black rounded px-2 py-3 md:p-4">
        <span class="text-sm md:text-base">{name}</span>
      </div>

      {isInfoVisible && 
  			<div onClick={(e) => action.setPopupNumbers(e, props)} class="vdc-infoButtons vdc-infoButtons--info">  				
  					<span
  						role="img"
  						aria-label="more info"
  					><IconInfo width="100%" fill="#fff" />
  					</span>
        </div>
      }

      {tel && (
        <div class="vdc-infoButtons vdc-infoButtons--tel">
					<a href={`tel:${tel}`} onClick={(e) => tel.length > 1 && action.setPopupNumbers(e, props)}>
						<span
							role="img"
							aria-label="telephone"
						><IconTel width="100%" fill="#fff" />
						</span>
					</a>
			 </div>
      )}

    </article>
	);
};
