<?php

namespace App\Http\Controllers\Publication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PrintController extends Controller
{
    public function index()
    {
        //Date Format
        date_default_timezone_set("Asia/kolkata");

        return view('publication.pubprint');
    }
}
