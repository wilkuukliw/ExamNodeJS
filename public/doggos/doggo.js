$(document).ready(function() {
    var url = window.location.href;
    var pathArray = url.split("/");
    var id = pathArray[4];

    $.ajax({
        "url": "/doggo/collection/" + id,
        "type": "GET",
        "datatype": 'json',
        "success": function(x) {

            $('#doggos').DataTable({
                data: x.response,

                "ordering": false,
                "paging": false,
                "searching": false,
                "info": false,
                "lengthChange": false,


                "columnDefs": [{
                    "className": "dt-center",
                    "targets": "_all",
                }],

                columns: [

                    { data: 'id' },

                    { data: 'picture1',
                        "render": function(data, type, row) {
                            return '<img src="' + data + '"  width="500" height="500"/>';
                        }
                    },
                    { data: 'picture2',
                        "render": function(data, type, row) {
                            return '<img src="' + data + '"  width="500" height="500"/>';
                        }
                    },
                    { data: 'picture3',
                        "render": function(data, type, row) {
                            return '<img src="' + data + '" width="500" height="500"/>';
                        }
                    },
                    { data: 'description' }
                ]
            });
        }
    })
});