<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Instructor extends Model
{
    protected $collection = 'instructors';
    protected $guarded = []; //This make all fields fillables
}
