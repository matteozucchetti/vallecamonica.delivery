import { Component, Fragment } from 'preact';

export default class Footer extends Component {  
  
  componentDidMount(){
    const script = document.createElement("script");
    script.innerHTML = `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`;
    script.async = true;
    const footer = this.base;
    footer.appendChild(script);
  }
  
  render(){
    return (
      <Fragment>
        <div class="w-full text-center vcd-footer py-10 px-5 bg-vcd-rosa">
          <p class="mb-5 text-white">
            Developed with 🤍 by
            <a class="font-semibold" href={process.env.PREACT_APP_DEV_LINK}> {process.env.PREACT_APP_DEV_NAME}</a>, design by <a class="font-semibold" href="https://www.linkedin.com/in/francesca-da-forno-55312a119/" target="_blank">Francesca Da Forno</a>
          </p>
          <p class="mb-5 text-white">
            Special thanks to <span class="font-semibold">Matteo Bernardi</span>
          </p>
          <a href="https://github.com/tomma5o/domicilioBoilerplate"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block text-white"
          >Based on <span class="underline">this</span> GitHub project</a>
          <p class="text-center text-white">
            <a href="https://www.iubenda.com/privacy-policy/19385130" class="iubenda-white iubenda-embed mx-2" title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/19385130/cookie-policy" class="iubenda-white iubenda-embed mx-2" title="Cookie Policy ">Cookie Policy</a>
          </p>
          {/*<p class="text-center pb-2 text-xs block text-gray-500">
            Se vuoi supportarci, fai una donazione
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="QP2S2PSUTXZE6" />
              <input type="image" src="https://placehold.it/100x30" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Fai una donazione con il pulsante PayPal" />
              <img alt="" border="0" src="https://www.paypal.com/it_IT/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </p>*/}
        </div>      
      </Fragment>
    );
  }

	
};
