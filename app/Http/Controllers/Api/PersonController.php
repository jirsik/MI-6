<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    public function index()
    {
        $collection = Person::orderBy('name')->with('image')->limit('20')->get();
        $collection = json_encode($collection);
        return $collection;
    }

// Inside select first 20 records from the table people ordered by name (or equivalent) in alphabetical order.

// Return the records as a JSON string.
}
