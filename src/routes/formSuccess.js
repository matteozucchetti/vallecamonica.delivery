export default function FormSuccess() {
	return (
		<div class="text-center">
      <h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize">{`${process.env.PREACT_APP_CITY}`}</h1>
			<p class="mt-10 text-2xl">Grazie per aver aggiunto l'attività!</p>
			<p class="mt-5">
				Abbiamo preso in carico la tua richiesta, normalmente la fase di approvazione richiede 24 ore.<br />
				Non dimenticare di condividere con i tuoi amici quest'app per fare in modo che tutte le piccole attività e non, in Valle Camonica, siano presenti!
			</p>
			<span class="text-5xl" aria-label="thanks icons">🙏</span>
		</div>
	);
}
