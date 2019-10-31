<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';

    public $timestamps = false;

    public function person()
    {
        return $this->hasOne('App\Person');
    }
}
