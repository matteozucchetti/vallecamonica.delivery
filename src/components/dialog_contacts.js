import { Fragment } from "preact";

// Utils
import cleanUrls from '../utils/cleanUrls'

// Images
import MailIcon from '../assets/svg/icon_mail.svg';
import WebsiteIcon from '../assets/svg/icon_website.svg';
import FacebookIcon from '../assets/svg/icon_facebook.svg';
import TelIcon from '../assets/svg/icon_tel.svg';

function Tel({tel}) {
	const isArrayOfTel = Array.isArray(tel);

	return ( isArrayOfTel
		? tel.map((telNumber, i) => (
			<a href={`tel:${telNumber}`} class="inline-block rounded-lg text-sm">
				<span>{telNumber}</span>
				{tel.length !== i+1 && <span class="mx-2">-</span>}
			</a>
		))
		: <a href={`tel:${tel}`} class="inline-block rounded-lg text-sm">
			{tel}
		</a>
	);
}

export const D_Contacts = ({tel, mail, site}) => {
	return (
		<Fragment>
      <div class="vcd-dialogBox border-none">
        <div class="w-full">
    			<h3 class="mt-4 mb-2">Contatti</h3>
    			<div class="mb-2 mt-4 text-sm flex justify-center items-start">
    				{tel && (
    					<div class="text-center flex-1 mb-2">
                <TelIcon
                  class="w-4 h-4 mx-auto mb-2 contact-icon"
                  role="img"
                  aria-label="telephone"
                />
    						<Tel {...{tel}} />
    					</div>
    				)}
    				{site && (
    					<div class="text-center flex-1 mb-2">
                <a href={site} target="_blank">
      						<WebsiteIcon
                    class="w-4 h-4 mx-auto mb-2 contact-icon"
                    role="img"
                    aria-label="see the site"
                  />    						
    							<span>{cleanUrls(site)}</span>
    						</a>
    					</div>
    				)}
    				{mail && (
    					<div class="text-center flex-1 mb-2">
                <a href={`mailto:${mail}`}>
      						<MailIcon
                    class="w-4 h-4 mx-auto mb-2 contact-icon"
                    role="img"
                    aria-label="email"
                  />
    							<span>{mail}</span>
    						</a>
    					</div>
    				)}
    			</div>
        </div>
      </div>
		</Fragment>
	);
}