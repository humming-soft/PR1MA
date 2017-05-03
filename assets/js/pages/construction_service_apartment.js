$(document).ready(function(){




	var siteurl =  "../assets/images/";

	images = [
		{"path":"sample-images/example-1.jpg","title":"PR1MA @ Cyberjaya 2 Construction Site","kind":"album","id":1},
		{"path":"sample-images/example-1.jpg","title":"PR1MA @ Cyberjaya 2 Construction Site","kind":"image","id":1},
		{"path":"sample-images/example-2.jpg","title":"PR1MA @ Cyberjaya 2 Construction Site","kind":"image","id":1},
		{"path":"sample-images/example-3.jpg","title":"PR1MA @ Cyberjaya 2 Construction Site","kind":"image","id":1},
		{"path":"sample-images/example-4.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"album","id":2},
		{"path":"sample-images/example-4.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":2},
		{"path":"sample-images/example-5.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":2},
		{"path":"sample-images/example-6.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":2},
		{"path":"sample-images/example-7.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"album","id":3},
		{"path":"sample-images/example-7.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":3},
		{"path":"sample-images/example-8.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":3},
		{"path":"sample-images/example-9.jpg","title":"PR1MA @ Cyberjaya 2 Construction Progress","kind":"image","id":3}
	];
	var nano_items = [];
	for(var i=0;i<images.length;i++){
		image = images[i];
		if(image.kind == 'album'){
			nano_items.push({
				"src":  siteurl+image.path,
				"srct":  siteurl+image.path,
				"title":  image.title,
				"ID":  image.id,
				"kind":  image.kind,
			});
		}
		else if(image.kind == 'image'){
			nano_items.push({
				"src":  siteurl+image.path,
				"srct":  siteurl+image.path,
				"title":  image.title,
				"albumID":  image.id,
			});
		}
	}
	$("#nanoGallery2").nanoGallery({
		items: nano_items,
		whiteList: 'PR1MA @ Cyberjaya 2 PROGRESS - 16-May-17 to 22-May-17',
		thumbnailWidth: 'auto', thumbnailHeight: '200 XS50 SM120 LA200 XL230',
		paginationMaxLinesPerPage: 2,
		imageTransition: 'slide',
		thumbnailLabel: {display: true, align: 'center', position: 'overImageOnBottom'},
		galleryFullpageButton: false,
		theme: 'default',
		i18n: { breadcrumbHome: 'PR1MA @ Cyberjaya 2 Image Gallery' },
		dataSorting: 'standard',
		touchAutoOpenDelay: -1
	});



	//
	// diagram
	//
	
	d_unit_total = 469;
	d_data1_unit_build = 17;
	d_data1_unit_total = 110;
	d_data2_unit_build = 43;
	d_data2_unit_total = 124;
	d_data3_unit_build = 124;
	d_data3_unit_total = 125;
	d_data4_unit_build = 110;
	d_data4_unit_total = 110;
	d_unit_build = d_data1_unit_build+d_data2_unit_build+d_data3_unit_build+d_data4_unit_build
	
	$('.diagram_font_plate_number_a.data1 tspan').text(d_data1_unit_build);
	$('.diagram_font_plate_number_b.data1 tspan').text(d_data1_unit_total);
	$('.diagram_font_plate_number_a.data2 tspan').text(d_data2_unit_build);
	$('.diagram_font_plate_number_b.data2 tspan').text(d_data2_unit_total);
	$('.diagram_font_plate_number_a.data3 tspan').text(d_data3_unit_build);
	$('.diagram_font_plate_number_b.data3 tspan').text(d_data3_unit_total);
	$('.diagram_font_plate_number_a.data4 tspan').text(d_data4_unit_build);
	$('.diagram_font_plate_number_b.data4 tspan').text(d_data4_unit_total);
	$('.diagram_font_plate_number_a.data5 tspan').text(d_unit_build);
	$('.diagram_font_plate_number_b.data5 tspan').text(d_unit_total);
	
	
	
	
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
			var d_status = "colorcode_row2";
			var d_blink = "blink";
		} else if (dd_dayleft < 0 && parseInt(d_pcomplete) == 100) {
			var d_variance = 0;
			var d_dayleft = 0;
			var d_status = "";
			var d_blink = "";
		} else if (dd_dayleft >= 0){
			var d_variance = Math.round(dd_dayleft/7);
			var d_dayleft = dd_dayleft;
			var d_status = "";
			var d_blink = "";
		};
		
		$('.portlet_milestone tbody').append('<tr class="'+d_status+'"><td class=""><a href="construction_service_apartment_milestone.php"><span class="'+d_blink+'">'+d_taskname+'</span></a></td><td class="set_center">'+d_baseline_s+'</td><td class="set_center">'+d_baseline_f+'</td><td class="set_center">'+d_dayleft+'</td><td class="set_center">'+d_variance+' Week(s)</td><td class="set_center">'+d_pcomplete+'</td></tr>')
		$('.blink').blink();
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


	// $('.portlet_scurve .iv_early').text('64.51');
	// $('.portlet_scurve .iv_late').text('57.00');
	// $('.portlet_scurve .iv_actual').text('54.79');
    //
	// Highcharts.chart('demo_scurve4', {
    //
	// 	title: {
	// 		text: ''
	// 	},
    //
	// 	subtitle: {
	// 		text: ''
	// 	},
    //
	// 	yAxis: {
	// 		title: {
	// 			text: 'Progress (%)'
	// 		}
	// 	},
    //
	// 	plotOptions: {
	// 		series: {
	// 			pointStart: 2010
	// 		}
	// 	},
    //
	// 	series: [{
	// 		name: 'Early',
	// 		color:'#0f0',
	// 		data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,13.84,15.61,16.64,19.15,22.83,29.46,35.79,40.35,42.71,45.07,47.57,50.22,54.34,58.91,64.51,78.20,90.28,99.41,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00]
	// 	},{
	// 		name: 'Late',
	// 		color:'#09f',
	// 		data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,13.55,14.73,15.91,17.08,19.15,22.97,27.54,31.08,32.99,34.17,35.94,39.91,45.66,51.69,57.00,64.06,78.35,92.05,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00,100.00]
	// 	},{
	// 		name: 'Actual',
	// 		color:'#f03',
	// 		data: [0.00,0.15,0.15,0.59,1.03,1.62,2.21,2.80,4.71,7.36,8.98,11.34,13.55,15.17,17.38,19.59,22.39,25.77,28.28,33.43,38.59,41.83,44.48,46.54,48.16,50.07,51.99,54.79]
	// 	}]
    //
	// });

	var json = [
		{"chart_title":"","chart_name":"","chart_id":"db_donut_0a","chart_val_planned":"82","chart_val_actual":"78","set_donut":"1","url":"#"}
	];



	for (i = 0; i < json.length; i++) {
		var b = json[i];
		use_chart_title = b.chart_title;
		use_chart_id = b.chart_id;
		use_chart_value_1 = b.chart_val_planned;
		use_chart_value_2 = b.chart_val_actual;
		use_chart_set_donut = b.set_donut;
		use_chart_name = b.chart_name;
		use_chart_url= b.url;

		use_chart_font_size = '50px';
		use_chart_font_color = '#FFF';
		use_chart_donut_color_planned = '#09f';
		use_chart_donut_color_actual = '#0fa';
		use_chart_svg_width = 200;
		use_chart_svg_height = 200;
		use_chart_circle_r = 88;
		use_chart_circle_cx = 95;
		use_chart_circle_cy = 95;
		use_chart_circle_data_total = 553;
		use_chart_circle_data_used_1 = use_chart_value_1 / 100 * use_chart_circle_data_total;
		use_chart_circle_data_used_2 = use_chart_value_2 / 100 * use_chart_circle_data_total;

		$('.portlet_progress_v2 div.plate1 span.number').text(use_chart_value_1+'%');
		$('.portlet_progress_v2 div.plate2 span.number').text(use_chart_value_2+'%');
		$('.portlet_progress_v2 div.plate3 span.number').text(Math.abs(use_chart_value_1-use_chart_value_2)+'%');

		donut_body = '<div><a class="url_donut_system" style="text-decoration: none; color: #fff;" href="'+use_chart_url+'" title="'+use_chart_name+'"><span class="">'+use_chart_title+'</span></a><svg class="svg_donut_system" width="'+use_chart_svg_width+'" height="'+use_chart_svg_height+'" style="border:5px solid rgba(255, 255, 255, 0.14)"><text style="font-style:normal;font-size:'+use_chart_font_size+';fill:'+use_chart_font_color+';" transform="matrix(0,1,-1,0,0,0)"><tspan sodipodi:role="line" x="45" y="-80">'+use_chart_value_2+'%</tspan></text><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color_planned+';stroke-dasharray: '+use_chart_circle_data_used_1+','+use_chart_circle_data_total+';"></circle><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color_actual+';stroke-dasharray: '+use_chart_circle_data_used_2+','+use_chart_circle_data_total+';"></circle></svg></div>';

		$('#donut').html(donut_body);
	}

	// line_chart_1

	$(function () {
		Highcharts.setOptions({
			colors: ['#09f','#0fa']
		});
		Highcharts.chart('line_chart_1', {
			chart: {
				type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['Jan-16','Feb-16','Mar-16','Apr-16','May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16']
			},
			yAxis: {
				max:100,
				tickPositions: [0,10,20,30,40,50,60,70,80,90,100],
				title: {
					text: 'Percentages',
					align: 'middle'
				},
				labels: {
					formatter: function () {
						return this.value + '%';
					}
				},
				tickInterval: 2
			},
			rangeSelector: {
				selected: 1
			},
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: '%'
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#666666',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: 'Planned',
				marker: {
					symbol: 'square'
				},
				data: [27,39,44,48,53,71,71,74,74,75,78,100]

			}, {
				name: 'Actual',
				marker: {
					symbol: 'diamond'
				},
				data: [27,39,44,48,53,71,71,74,74,75,78,78]
			}]
		});
	});


	// line_chart_2

	$(function () {
		Highcharts.setOptions({
			colors: ['#09f','#0fa']
		});
		Highcharts.chart('line_chart_2', {
			chart: {
				type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['Jan-16','Feb-16','Mar-16','Apr-16','May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16','Jan-17']
			},
			yAxis: {
				title: {
					text: 'Numbers',
					align: 'middle'
				},
				labels: {
					formatter: function () {
						return this.value + '';
					}
				},
				tickInterval: 2
			},
			rangeSelector: {
				selected: 1
			},
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: ''
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#666666',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: 'Planned',
				marker: {
					symbol: 'square'
				},
				data: [19,17,16,14,13,11,10,8,6,5,3,2,0]

			}, {
				name: 'Actual',
				marker: {
					symbol: 'diamond'
				},
				data: [17,15,14,13,12,5,5,4,4,4,3,3]
			}]
		});
	});
	
});

