module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
	theme: {
    fontFamily: {
      'vcd': ['Poppins', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'vcd-azzurro': '#61bfbc',
        'vcd-azzurro-scuro': '#429a96',
        'vcd-arancione': '#F2923E',
        'vcd-rosa': '#EC6680',
        'vcd-rosso': '#E83261',
        'vcd-black': '#535353'
      }
    }
	}
}