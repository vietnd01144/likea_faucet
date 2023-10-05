var main = {
	GLOBAL: {},

	CONSTS: {},

	SELECTORS: {
    allprogress: ".all-progress",
	},

	init: function () {
		main.progressBar();
	},

  progressBar: function() {
    $(main.SELECTORS.allprogress).simple_progressbar();
  },
};

$(function () {
	main.init();
});
