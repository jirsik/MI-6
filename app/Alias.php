<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alias extends Model
{
    protected $table = 'aliases';

    public $timestamps = false;

    public function person()
    {
        return $this->belongsTo('App\Person');
    }
}
