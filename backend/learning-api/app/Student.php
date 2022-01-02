<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Student extends Model
{
    protected $collection = 'students';
    protected $guarded = []; //This make all fields fillables
}
