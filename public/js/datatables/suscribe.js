//== Class definition
var Suscribe = function () {
    //== Private functions
    // basic demo
    var demo = function () {
        var datatable = $(".m_datatable").mDatatable({
            // datasource definition
            data: {
                type: "remote",
                source: {
                    read: {
                        method: "GET",
                        url: Config["datatable"],
                        map: function (raw) {
                            // sample data mapping
                            var dataSet = raw;
                            if (typeof raw.data !== "undefined") {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        }
                    }
                },
                pageSize: 10,
                saveState: {
                    cookie: true,
                    webstorage: true
                },
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true
            },

            // layout definition
            layout: {
                theme: "default", // datatable theme
                class: "", // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                // toolbar items
                items: {
                    // pagination
                    pagination: {
                        // page size select
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            },

            search: {
                input: $("#generalSearch")
            },

            // columns definition
            columns: [/*{
                    field: "id",
                    textAlign: "center",
                    title: "Id",
                    width: 80
            },*/
                {
                    field: "email",
                    title: "Correo electrónico",
                    width: 200
                },
                {
                    field: "date_created",
                    title: "Fecha de inscripción",
                    textAlign: "center",
                    width: 200
                },
                {
                    field: "Acciones",
                    textAlign: "center",
                    title: "Acciones",
                    sortable: false,
                    overflow: "visible",
                    width: 80,
                    template: function (row) {
                        return (
                            '\
						<a href="#" data-id="'+ row.id + '" data-email="' + row.email + '"' +
                            'class="void m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deleteSuscribe void">\
							<i class="la la-trash"></i>\
                        </a>\
					'
                        );
                    }
                }
            ],
            translate: {
                records: {
                    processing: "Por favor espere...",
                    noRecords: "No se encontraron registros"
                },
                toolbar: {
                    pagination: {
                        items: {
                            default: {
                                first: "Primero",
                                prev: "Anterior",
                                next: "Siguiente",
                                last: "Ultimo",
                                more: "Más páginas",
                                input: "Número de página",
                                select: "Elija tamaño de página"
                            },
                            info: "Mostrando {{start}} - {{end}} de {{total}} registros"
                        }
                    }
                }
            }
        });
    };

    return {
        // public functions
        init: function () {
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    Suscribe.init();
});