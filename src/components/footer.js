import { Component, Fragment } from 'preact';

export default class Footer extends Component {  
  
  componentDidMount(){
    const script = document.createElement("script");
    script.innerHTML = `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`;
    script.async = true;
    const footer = document.getElementById('vcd-footer');
    footer.appendChild(script);
  }
  
  render(){
    return (
      <Fragment>
        <div class="px-5 max-w-screen-lg mx-auto text-center" id="vcd-footer">
          <p class="mb-5">
            Developed with ❤️ by
            <a class="text-teal-500" href={process.env.PREACT_APP_DEV_LINK}> {process.env.PREACT_APP_DEV_NAME}</a>, special thanks to Matteo Bernardi
          </p>
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block hover:underline text-teal-500"
          >Visita la nostra pagina Instagram</a>
          <a href="https://github.com/tomma5o/domicilioBoilerplate"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block hover:underline"
          >Se vuoi creare una piattaforma simile per la tua città, visita la pagina GitHub del progetto</a>
          <p class="text-center">
            <a href="https://www.iubenda.com/privacy-policy/19385130" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/19385130/cookie-policy" class="iubenda-white iubenda-embed" title="Cookie Policy ">Cookie Policy</a>
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
