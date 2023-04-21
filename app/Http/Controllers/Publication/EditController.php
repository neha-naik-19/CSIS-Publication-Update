<?php

namespace App\Http\Controllers\Publication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

use DB;

use App\Models\Categories;
use App\Models\Authortypes;
use App\Models\Rankings;
use App\Models\Broadareas;
use App\Models\Articletypes;
use App\Models\Pubhdrs;
use App\Models\Pubdtls;

class EditController extends Controller
{
    public function index()
    {
        //Date Format
        date_default_timezone_set("Asia/kolkata");

        // Fetch AuthorTypes
        $authortypeData['data'] = authortypes::orderby("authortype","asc")
        ->select('id','authortype')
        ->get();

        // Fetch Categories
        $categoryData['data'] = Categories::orderby("category","asc")
        ->select('id','category')
        ->get();

        // Fetch only Rankings -> Others
        $rankingsOnlyAstarData = rankings::select('id','ranking')
        ->where('ranking','=','Core A*')
        ->get();                        
        
        // Fetch w/o Rankings -> Others
        $rankingsNoOthersData = rankings::orderby("ranking","asc")
        ->select('id','ranking')
        ->whereNotIn('ranking', ['Core A*','Others'])
        ->get();                         

        // Fetch only Rankings -> Others
        $rankingsOnlyOthersData = rankings::select('id','ranking')
        ->where('ranking','=','Others')
        ->get();

        //Fetch all rankings in
        $rankingsData['data'] = $rankingsOnlyAstarData->merge($rankingsNoOthersData)->merge($rankingsOnlyOthersData);

        return view('publication.pubedit')->with('departmentId',request()->id)->with('department',request()->dept)
        ->with('authortypeData', $authortypeData)->with("categoryData",$categoryData)->with('rankingsData', $rankingsData);
    }
}
