import { Component, Fragment } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
  
  render(){
    return (
      <Fragment>
        <div class="px-5 max-w-screen-lg mx-auto text-center" id="component-header">
          This is header
        </div>
      </Fragment>
    );
  }
	
};
