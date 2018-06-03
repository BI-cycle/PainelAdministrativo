( function ( $ ) {
	"use strict";

	//radar chart
	var ctx = document.getElementById( "radarChart" );
	ctx.height = 221;
	var myChart = new Chart( ctx, {
		type: 'radar',
		data: {
			labels: [ "Iluminação", "Buraco na Via", "Acidente", "Assalto", "Mato na Via", "Sinalização" ],
			datasets: [
				{
					label: "Ocorrências Maio",
					data: [ 65, 32, 66, 45, 56, 37 ],
					borderColor: "rgba(0, 123, 255, 0.6)",
					borderWidth: "1",
                    backgroundColor: "rgba(239, 83, 80, 0.42)"
                            },
				{
					label: "Ocorrências Junho",
					data: [ 28, 12, 40, 19, 63, 21 ],
					borderColor: "rgba(0, 123, 255, 0.7",
					borderWidth: "1",
					backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
		},
		options: {
			legend: {
				position: 'top'
			},
			scale: {
				ticks: {
					beginAtZero: true
				}
			}
		}
	} );
} )( jQuery );
