$(document).ready(function() {
 log("docuready");
$.ajax(
		{
		url: "dataTables.xsp/getPeople",
		dataType: 'json',
		success: function (data) {$computedField1.html(JSON.stringify(data));}
		})

 log("id: " + $dataTableNames);
 $dataTableNames.DataTable({
     "ajax": "dataTables.xsp/getPeople"
       
 });
} );