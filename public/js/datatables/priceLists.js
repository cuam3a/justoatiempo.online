//== Class definition
var PriceLists = function() {
    //== Private functions
    // basic demo
    var demo = function() {
        var datatable = $(".m_datatable").mDatatable({
            // datasource definition
            data: {
                type: "remote",
                source: {
                    read: {
                        method: "GET",
                        url: Config["datatable"],
                        map: function(raw) {
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
                    cookie: false,
                    webstorage: false
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
            columns: [{
                    field: "id",
                    textAlign: "center",
                    title: "Id",
                    width: 80
                },
                {
                    field: "name",
                    title: "Nombre",
                    width: 150
                },
                {
                    field: "Acciones",
                    textAlign: "center",
                    title: "Acciones",
                    sortable: false,
                    overflow: "visible",
                    width: 80,
                    template: function(row) {
                        var dropup =
                            row.getDatatable().getPageSize() - row.getIndex() <= 4 ?
                            "dropup" :
                            "";
                        var statusTxt = ["Habilitar", "Deshabilitar"];
                        var statusIcon = ["la-check-circle", "la-ban"];
                        return (
                            '\
						<a href="' +
                        Config["edit"].replace("price_list_id", row.id) +
                        '" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill">\
							<i class="la la-edit"></i>\
                        </a>\
                        <a href="#" data-id="' + row.id + '" data-name="' + row.name + '" class="void m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill deletePriceList">\
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
        init: function() {
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    PriceLists.init();
});