export default function Form() {
	return (
		<div class="mt-10">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/form/success">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>


        <div class="flex flex-wrap">

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">Nome
              <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="name" />
            </label>
          </div>

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">Numero di telefono
              <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" type="text" inputmode="numeric" name="telephone" />
            </label>
          </div>

        </div>

        <div class="flex flex-wrap">

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">Email
              <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="mail" />
            </label>
          </div>

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">Sito Web
              <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" type="text" name="site" />
            </label>
          </div>

        </div>

        <div class="flex flex-wrap">

          <div class="w-full px-2 mb-5">
            <label class="">Dove consegni? (specifica qui i comuni in cui puoi effettuare le consegne)
              <textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="delivery city" />
            </label>
          </div>

        </div>

        <div class="flex flex-wrap">

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">In quali giorni è attivo il servizio?
              <div class="md:text-right mb-1 md:mb-0 pr-4 flex align-center items-center flex-wrap">
                <label>Lun
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Lun" />
                </label>
                <label>Mar
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Mar" />
                </label>
                <label>Mer
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Mer" />
                </label>
                <label>Gio
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Gio" />
                </label>
              </div>
              <div class="md:text-right mb-1 md:mb-0 pr-4 flex align-center items-center flex-wrap">
                <label>Ven
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Ven" />
                </label>
                <label>Sab
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Sab" />
                </label>
                <label>Dom
                  <input class="ml-2 mr-5" type="checkbox" name="delivery day - Dom" />
                </label>
              </div>
            </label>
          </div>

          <div class="w-full md:w-1/2 px-2 mb-5">
            <label class="">Saresti interessato a mantenere attivo il servizio anche dopo il periodo di lockdown dovuto al COVID-19?
              <div class="md:text-right mb-1 md:mb-0 pr-4 flex align-center items-center flex-wrap">
                <label>Si
                  <input required class="ml-2 mr-5" type="radio" name="post covid" value="si" />
                </label>
                <label>No
                  <input required class="ml-2 mr-5" type="radio" name="post covid" value="no" />
                </label>
                <label>Forse
                  <input required class="ml-2 mr-5" type="radio" name="post covid" value="forse" />
                </label>                
              </div>
            </label>
          </div>

        </div>

        <div class="flex flex-wrap">

          <div class="w-full px-2 mb-5">
            <label class="">Note
              <textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-4 block w-full appearance-none leading-normal" type="text" name="note" />
            </label>
          </div>

        </div>

        <div class="flex flex-wrap">

          <div class="w-full md:w-1/4 ml-auto px-2 mb-5">
            <button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Invia La Richiesta</button>
          </div>

        </div>

			</form>
		</div>
	);
}
