$(document).ready(function() {
    var url = window.location.href;
    var pathArray = url.split("/");
    var id = pathArray[4];

    $.ajax({
        "url": "/doggos/collection/" + id,
        "type": "GET",
        "datatype": 'json',

        "success": function(x) {

            $('#doggos').DataTable({
                data: x.response,
                rowId: 'id',
                "ordering": false,
                "searching": true,

                "columnDefs": [{
                    "className": "dt-center",
                    "targets": "_all"
                }],
                columns: [

                    { data: 'id' },
                    { data: 'doggo' },
                    { data: 'age' },
                    { data: 'breed' },
                    { data: 'picture1',
                        "render": function(data, type, row) {
                            return '<img src="' + data + '" width="500" height="500"/>';
                        }
                    },

                ],
            });
            var table = $('#doggos').DataTable();
            $(document).on("click", "#doggos tr", function(e) {
                var id = table.row(this).id();
                window.location = "http://ec2-34-202-157-224.compute-1.amazonaws.com:5003/doggos/" + id;
                //alert( 'Clicked row id ' + id );
            });
        }
    })
});

            
        