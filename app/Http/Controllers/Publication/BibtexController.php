<?php

namespace App\Http\Controllers\Publication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BibtexController extends Controller
{
    public function index()
    {
        //Date Format
        date_default_timezone_set("Asia/kolkata");


        return view('publication.pubbibtex')->with('departmentId',request()->id)->with('department',request()->dept);
    }
}
    