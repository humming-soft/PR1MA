$(document).ready(function(){
	//
	// KPI
	//

	var project = [
		// {"data_link":"aaaa","data_name":"aaaa","data_early":"aaaa","data_actual":"aaaa","data_late":"aaaa","completed":"aaaa"}
		{"data_link":"bccleaning","data_name":"Piling Block C","data_bs":"01-04-2017","data_bf":"01-04-2017","data_actual":"0","data_late":"0","completed":"100"},
		{"data_link":"cooler","data_name":"Piling Block A","data_bs":"11-04-2017","data_bf":"01-04-2017","data_actual":"0","data_late":"0","completed":"100"},
		{"data_link":"cooler","data_name":"Piling Block B","data_bs":"23-04-2017","data_bf":"01-04-2017","data_actual":"0","data_late":"0","completed":"100"},
		{"data_link":"sealant","data_name":"Ground Beam and Pile Cap","data_bs":"01-05-2017","data_bf":"06-05-2017","data_actual":"5","data_late":"1","completed":"95"},
		{"data_link":"seminar","data_name":"Workers Dorm A","data_bs":"25-04-2017","data_bf":"23-05-2017","data_actual":"28","data_late":"4","completed":"90"},
		{"data_link":"seminar","data_name":"Workers Dorm B","data_bs":"04-06-2017","data_bf":"30-07-2017","data_actual":"36","data_late":"4","completed":"88"},
		{"data_link":"tcaircond","data_name":"Earthworks for North side","data_bs":"10-06-2017","data_bf":"20-07-2017","data_actual":"42","data_late":"6","completed":"75"},
		{"data_link":"tcaircond","data_name":"Earthworks for South side","data_bs":"15-06-2017","data_bf":"28-07-2017","data_actual":"47","data_late":"7","completed":"69"}
	]
	
	for (var i = 0; i < project.length; i++) {
		var d = project[i]

		// p_link = d.data_link;
		p_link = '';
		p_name = d.data_name;
		p_bs = d.data_bs;
		p_bf = d.data_bf;
		p_actual = d.data_actual;
		p_late = d.data_late;
		p_complete = d.completed+'%';
		
		// $('.portlet_performance tbody').append('<tr><td><a href="current_project_'+p_link+'.php">'+p_name+'</a></td><td class="val_early">'+p_early+'</td><td class="val_actual">'+p_actual+'</td><td class="val_late">'+p_late+'</td><td class="ball_indicator '+p_ball+'"><i class="fa fa-circle" aria-hidden="true"></i></td></tr>')
		$('.portlet_kpi tbody').append('<tr><td>'+p_name+'</td><td class="val_early set_center">'+p_bs+'</td><td class="val_early set_center">'+p_bf+'</td><td class="val_actual set_center">'+p_actual+'</td><td class="val_late set_center">'+p_late+' Week(s)</td><td class="set_center">'+p_complete+'</td></tr>')
	};
});

