<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $collection = 'students';
    protected $guarded = []; //This make all fields fillables
}
