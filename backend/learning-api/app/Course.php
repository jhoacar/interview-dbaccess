<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    protected $collection = 'courses';
    protected $fillable = ['name','duration','start-date','instructor_id'];
}
