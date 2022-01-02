<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    protected $collection = 'instructors';
    protected $guarded = []; //This make all fields fillables
}
