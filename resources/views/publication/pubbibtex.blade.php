
@extends('layouts.main')


@section('pubbib')
<div class="container mt-5" id="pubbibcontainer">
    <input type="hidden" name="application_url" id="application_url" value="{{URL::to(Request::route()->getPrefix())}}"/>
    <input type="hidden" name="departmentid" id="departmentid" value={{ request()->id }}/>
    
    <div class="card bibcard scroll">
        <div class="card-header sticky-top">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <header>Publication <small class="pubbibheadersmall">BibTex</small></header>
                </div>
                <div class="col-md-6 col-sm-12">
                    <a class="pubbibrefresh float-end" type="button"><i class="fa fa-duotone fa-rotate"></i></a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row g-0">
                <div class="col-md-5 col-sm-12 text-center align-self-center">
                    <p>
                        Please upload documents only in 'bib' format.
                    </p>
                </div>
                <div class="col-md-3 col-sm-12">
                    <button type="submit" class="btn btn-primary btnpublication pubbibbtndownload float-start">DownLoad &nbsp;<i class="fa-solid fa-file-arrow-down"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection