<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
// use Laravel\Socialite\Facades\Socialite;
// use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\Departments;
use App\Models\Pubhdrs;

class HomeController extends Controller
{
    public function index()
    {
        //Date Format
        date_default_timezone_set("Asia/kolkata");

        return view('home');
    }

    public function displayDepartment(){
        $departments = Departments::orderby('id','asc')->select('id','department')->get(); 

        $maxyearfordepartments = Pubhdrs::orderby('id','asc')
            ->select('departmentID', DB::raw('max(year(pubdate)) as maxyear'))
            ->groupBy('departmentID')
            ->get();

        $years = Pubhdrs::orderby('dt','desc')
            ->select(DB::raw('year(pubdate) as dt'), 'departmentID')
            ->groupBy('dt','departmentID')
            ->get();

        $maxyearfordepartment_data = [];    
        foreach($maxyearfordepartments as $maxyearfordepartment){

            if( $maxyearfordepartment_data == [] ) {
                $maxyearfordepartment_data = array(DB::select('call Get_Every_Year_Data_departmentwise (?,?)', array($maxyearfordepartment->departmentID,$maxyearfordepartment->maxyear)));
            }
            else
            {
                array_push($maxyearfordepartment_data, DB::select('call Get_Every_Year_Data_departmentwise (?,?)', array($maxyearfordepartment->departmentID,$maxyearfordepartment->maxyear)));
            }
        }

        return response()->json(['departments' => $departments, 'maxyearsfordepartments' => $maxyearfordepartments, 'maxyearfordepartment_data' => $maxyearfordepartment_data, 'years' => $years]);
    }


    public function postdepartmentid(Request $request){
        Session::forget('departmentId');
        Session::forget('year');

        session()->put('departmentId', trim($request->departmentId));
        session()->put('year', trim($request->year));
    }

    public function displayDepartmentForEveryYear(){

        $departmentDataForSelectedYear = array(DB::select('call Get_Every_Year_Data_departmentwise (?,?)', array(session()->get('departmentId'),session()->get('year'))));
            
        return response()->json([ 'departmentDataForSelectedYear' => $departmentDataForSelectedYear]);
    }
    
}
