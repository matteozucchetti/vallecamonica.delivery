import { Component, Fragment } from 'preact';

// gtag
import gtagEvent from '../utils/gtagEvent.js';

// Images
import IconInsta from '../assets/svg/insta.svg';

export default class Header extends Component {  
  
  componentDidMount(){
    
  }
  
  render(){
    return (
      <Fragment>
        <div class="w-full py-2 px-5 md:px-10 bg-vcd-azzurro text-right vcd-header">
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-white"
            onClick={() => { gtagEvent('custom_click','header','click on instagram profile link') }}
          >vallecamonica_delivery
            <IconInsta />
          </a>
        </div>      
      </Fragment>
    );
  }

	
};
