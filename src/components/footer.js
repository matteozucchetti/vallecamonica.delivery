import { Component, Fragment } from 'preact';

export default class Footer extends Component {  
  
  componentDidMount(){
    const script = document.createElement("script");
    script.innerHTML = `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`;
    script.async = true;
    const footer = document.getElementById('component-footer');
    footer.appendChild(script);
  }
  
  render(){
    return (
      <Fragment>
        <div class="px-5 max-w-screen-lg mx-auto pb-10 text-center" id="component-footer">
          <p class="mb-5">
            Developed with ❤️ by
            <a class="text-orange-500" href={process.env.PREACT_APP_DEV_LINK}> {process.env.PREACT_APP_DEV_NAME}, special thanks to Matteo Bernardi</a>
          </p>
          <a href="https://www.instagram.com/vallecamonica_delivery/"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block hover:underline"
          >Visita la nostra pagina Instagram</a>
          <a href="https://github.com/tomma5o/domicilioBoilerplate"
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 text-xs block text-gray-500 hover:underline"
          >Se vuoi crearlo per la tua città visita la pagina GitHub del progetto</a>
          <p class="text-center">
            <a href="https://www.iubenda.com/privacy-policy/24435749" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/24435749" class="iubenda-white iubenda-embed" title="Cookie Policy ">Cookie Policy</a>
          </p>
        </div>      
      </Fragment>
    );
  }

	
};
