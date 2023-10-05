var main = {
	GLOBAL: {},

	CONSTS: {},

	SELECTORS: {
    allprogress: ".all-progress",
	},

	init: function () {
		main.progressBar();
		setInterval(function() {main.countDown() }, 1000);
	},

	countDown: function() {
		var currDate= new Date();
        var endTime = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 24,0,0);
        // endTime.setTime(currTime.getTime() + (2 * 60 * 1000));
        var now = new Date();
		endTime = (Date.parse(endTime) / 1000);
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if(hours > 8){hours=0; minutes=0; seconds=0;}
                if (hours < "24") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
				$("#hour").html(hours)
                $("#minute").html(minutes)
                $("#second").html(seconds)
	},

	progressBar: function() {
		$(main.SELECTORS.allprogress).simple_progressbar();
	},
};

$(function () {
	main.init();
});
