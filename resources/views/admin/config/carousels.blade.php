@extends('layouts.admin')
@section('css')
<link href="/js/bootstrap-iconpicker/dist/css/bootstrap-iconpicker.css" rel="stylesheet" type="text/css" />
<style>
    .m-portlet .m-portlet__head {
        padding: 0 1.2rem;
    }
    .divCategory{
        background:#e6e6e6;
        display: block;
        height: 60%;
        margin-top:11px;
        margin-right:20px;
        width: 0.5px;
    }
    .btn-icon-align{
        display:inline-block;
        vertical-align:middle;
    }
    .btn-icon-align i{
        font-size:1.4rem!important;
        vertical-align:middle;
    }
    .caret{
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid\9;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }
    .selectedIcono{/*para sobreescribir btn-outline */
        color: #fff!important;
        background-color: #5da814!important;
        border-color: #5da814!important;
    }
    .pad-30{
        padding-right: 30px;
    }
</style>
@stop
@section('content')
<div class="row">
    <div class="col-lg-12">
        <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                            Destacados
                        </h3>
                    </div>
                </div>
                <div class="m-portlet__head-tools">
                    <ul class="m-portlet__nav">		
                        <li class="m-portlet__nav-item">
                            <a href="#" class="m-btn m-btn--pill btn btn-sm btn-accent m-btn--wide btn-icon-align void addCarousel" ><i class="la la-plus-circle"></i> Agregar lista</a>
                        </li>	
                    </ul>
                </div>	
            </div>
        </div>
    </div>
</div>
<div class="row ui-sortable" id="m_sortable_portlets">
    <div class="col-lg-12">
        @foreach($carousels as $carousel)
            @include('admin.config.chunkCarousel')
        @endforeach
    </div>
</div>
<div class="modal fade" id="modalCarousel" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-md" role="document">
        <form id="frmCarousel" method="POST" class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed">
            <input type="hidden" name="parent_id" value="" \>
            <input type="hidden" name="id" value="" \>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Nueva lista</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            &times;
                        </span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group m-form__group row">
						<div class="col-lg-12 col-xs-12">
							<label for="nombre" class="form-control-label">Nombre:</label>
                            <input class="form-control" type="text" name="nombre" required>
                        </div>
					</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Cerrar
                    </button>
                    <a href="#" class="void btn btn-primary" id="saveCarousel">Guardar</a>
                </div>
            </div>
        </form>
    </div>
</div>
@stop
@section('js')
<script src="/metronic_v5.0.5/theme/default/dist/default/assets/vendors/custom/jquery-ui/jquery-ui.bundle.js" type="text/javascript"></script>
<script src="/js/bootstrap-iconpicker/dist/js/bootstrap-iconpicker-iconset-all.js"></script>
<script src="/js/bootstrap-iconpicker/dist/js/bootstrap-iconpicker.js"></script>

<script>
    var Config = [];
    Config.carousels = {!!json_encode($carousels_all)!!};
    Config._token = '{!! csrf_token() !!}';
    Config.new_carousel = "{{ route('admin-carousel-save') }}";
    Config.delete_carousel = "{{ route('admin-carousel-delete') }}";
    Config.orderby_carousel = "{{ route('admin-carousel-orderby') }}";
</script>
<script src="/js/carousels/carousel.js" type="text/javascript"></script>
<script>          
$(document).ready(function() {    
    $.validator.messages.required = 'Campo requerido';
    Carousels.init();
});
</script>
@stop