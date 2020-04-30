import { Component, Fragment } from 'preact';

// Images
import IconInsta from '../assets/svg/icon_insta.svg';

export default class Header extends Component {  
  
  componentDidMount(){
    
  }
  
  render(){
    return (
      <Fragment>
        <div class="w-full py-2 px-5 md:px-10 bg-vcd-azzurro flex align-items-center justify-center md:justify-end vcd-header">
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-white"
          >vallecamonica_delivery
            <IconInsta />
          </a>
        </div>      
      </Fragment>
    );
  }

	
};
