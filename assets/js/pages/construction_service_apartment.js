$(document).ready(function(){
	







	//
	// finance_analysis
	//
	
	
	// data
	
	var val_planned_value = 10368000;
	var val_earned_value = 3522000;
	var val_balance_value = 6846000;
	var val_actual_cost = val_earned_value+val_balance_value;
	var val_cost_overrun = val_actual_cost-val_planned_value;
	
	var finance_analysis_data1 = val_actual_cost;
	var finance_analysis_data2 = val_cost_overrun;
	var finance_analysis_data3 = val_planned_value;
	var finance_analysis_data4 = val_balance_value;
	var finance_analysis_data5 = val_earned_value;
	
	$('.finance_analysis_data1 span.number').text('RM '+finance_analysis_data1.toLocaleString());
	$('.finance_analysis_data2 span.number').text('RM '+finance_analysis_data2.toLocaleString());
	$('.finance_analysis_data3 span.number').text('RM '+finance_analysis_data3.toLocaleString());
	$('.finance_analysis_data4 span.number').text('RM '+finance_analysis_data4.toLocaleString());
	$('.finance_analysis_data5 span.number').text('RM '+finance_analysis_data5.toLocaleString());
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#f0f','#00f']
		});
		Highcharts.chart('pcu1', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Actual Cost'
			},
			xAxis: {
				categories: ['']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'RM',
					align: 'high'
				}
			},
			tooltip: {
				formatter: function() {
					return this.series.name+' : <b>RM '+ this.point.y +'</b>';
				}
			},
			plotOptions: {
				column: {
					stacking: 'top'
				}
			},
			series: [{
				name: 'Cost Overrun',
				data: [
					{ y : val_cost_overrun, myData : '' }
				]
			}, {
				name: 'Planned Value',
				data: [
					{ y : val_planned_value, myData : '' }
				]
			}]
		});
	});
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#f50','#0c9']
		});
		Highcharts.chart('pcu2', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Progress Cost'
			},
			xAxis: {
				categories: ['']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'RM',
					align: 'high'
				}
			},
			tooltip: {
				formatter: function() {
					return this.series.name+' : <b>RM '+ this.point.y +'</b>';
				}
			},
			plotOptions: {
				column: {
					stacking: 'top'
				}
			},
			series: [{
				name: 'Balance Value',
				data: [
					{ y : val_balance_value, myData : '' }
				]
			}, {
				name: 'Earned Value',
				data: [
					{ y : val_earned_value, myData : '' }
				]
			}]
		});
	});



	//
	// milestone_kad
	//

	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"PRIMA Discuss project brief with President","baseline_start":"04 February 2016","baseline_finish":"12 February 2016","dayleft":"-359","pcomplete":"100%"},
		{"taskname":"PRIMA preparation of tender document","baseline_start":"15 February 2016","baseline_finish":"03 March 2016","dayleft":"-339","pcomplete":"100%"},
		{"taskname":"PRIMA Site Visit / Briefing","baseline_start":"04 March 2016","baseline_finish":"04 March 2016","dayleft":"-338","pcomplete":"100%"},
		{"taskname":"PRIMA FARMC and LOA","baseline_start":"09 May 2016","baseline_finish":"09 May 2016","dayleft":"-272","pcomplete":"0%"}
	]
	
	for (var i = 0; i < milestone_kpi_data.length; i++) {
		var d = milestone_kpi_data[i]
		d_taskname = d.taskname;
		d_baseline_s = d.baseline_start;
		d_baseline_f = d.baseline_finish;
		dd_dayleft = d.dayleft;
		d_pcomplete = d.pcomplete;
		
		if (dd_dayleft < 0 && parseInt(d_pcomplete) != 100) {
			var d_variance = Math.round(dd_dayleft/7);
			var d_dayleft = 0;
			var d_status = "colorcode_row1";
		} else if (dd_dayleft < 0 && parseInt(d_pcomplete) == 100) {
			var d_variance = 0;
			var d_dayleft = 0;
			var d_status = "";
		} else if (dd_dayleft >= 0){
			var d_variance = Math.round(dd_dayleft/7);
			var d_dayleft = dd_dayleft;
			var d_status = "";
		};
		
		$('.portlet_milestone tbody').append('<tr class="'+d_status+'"><td class="">'+d_taskname+'</td><td class="set_center">'+d_baseline_s+'</td><td class="set_center">'+d_baseline_f+'</td><td class="set_center">'+d_dayleft+'</td><td class="set_center">'+d_variance+' Week(s)</td><td class="set_center">'+d_pcomplete+'</td></tr>')
		
	};


	//
	// performance
	//

	var project = [
		// {"data_link":"aaaa","data_name":"aaaa","data_early":"aaaa","data_actual":"aaaa","data_late":"aaaa","data_ball":"aaaa"}
		{"data_link":"bccleaning","data_name":"Piling Block C","data_early":"94%","data_actual":"18%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"cooler","data_name":"Piling Block A","data_early":"71%","data_actual":"9%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"cooler","data_name":"Piling Block B","data_early":"71%","data_actual":"9%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"sealant","data_name":"Ground Beam and Pile Cap","data_early":"95%","data_actual":"32%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"seminar","data_name":"Workers Dorm A","data_early":"93%","data_actual":"52%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"seminar","data_name":"Workers Dorm B","data_early":"93%","data_actual":"52%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"tcaircond","data_name":"Earthworks for North side","data_early":"82%","data_actual":"82%","data_late":"88%","data_ball":"colorcode_ball_1"},
		{"data_link":"tcaircond","data_name":"Earthworks for South side","data_early":"82%","data_actual":"82%","data_late":"88%","data_ball":"colorcode_ball_1"}
	]
	
	for (var i = 0; i < project.length; i++) {
		var d = project[i]

		// p_link = d.data_link;
		p_link = '';
		p_name = d.data_name;
		p_early = d.data_early;
		p_actual = d.data_actual;
		p_late = Math.abs(parseInt(p_early)-parseInt(p_actual))+'%';
		p_ball = d.data_ball;
		
		// $('.portlet_performance tbody').append('<tr><td><a href="current_project_'+p_link+'.php">'+p_name+'</a></td><td class="val_early">'+p_early+'</td><td class="val_actual">'+p_actual+'</td><td class="val_late">'+p_late+'</td><td class="ball_indicator '+p_ball+'"><i class="fa fa-circle" aria-hidden="true"></i></td></tr>')
		$('.portlet_performance tbody').append('<tr><td><a href="#">'+p_name+'</a></td><td class="val_early">'+p_early+'</td><td class="val_actual">'+p_actual+'</td><td class="val_late">'+p_late+'</td><td class="ball_indicator '+p_ball+'"><i class="fa fa-circle" aria-hidden="true"></i></td></tr>')
		
	};



	//
	// s-curve
	//


	$('.portlet_scurve .iv_early').text('64.51');
	$('.portlet_scurve .iv_late').text('57.00');
	$('.portlet_scurve .iv_actual').text('54.79');

	Highcharts.chart('demo_scurve4', {

		title: {
			text: ''
		},

		subtitle: {
			text: ''
		},

		yAxis: {
			title: {
				text: 'Progress (%)'
			}
		},

		plotOptions: {
			series: {
				pointStart: 2010
			}
		},

		series: [{
			name: 'Early',
			color:'#0f0',
			data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,13.84,15.61,16.64,19.15,22.83,29.46,35.79,40.35,42.71,45.07,47.57,50.22,54.34,58.91,64.51,78.20,90.28,99.41,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00]
		},{
			name: 'Late',
			color:'#09f',
			data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,13.55,14.73,15.91,17.08,19.15,22.97,27.54,31.08,32.99,34.17,35.94,39.91,45.66,51.69,57.00,64.06,78.35,92.05,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00]
		},{
			name: 'Actual',
			color:'#f03',
			data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,15.17,17.38,19.59,22.39,25.77,28.28,33.43,38.59,41.83,44.48,46.54,48.16,50.07,51.99,54.79]
		}]

	});






	
});

