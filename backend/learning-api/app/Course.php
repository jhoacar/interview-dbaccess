<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    protected $collection = 'courses';
    protected $guarded = []; //This make all fields fillables
}
