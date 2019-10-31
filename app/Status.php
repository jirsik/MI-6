<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'statuses';
    
    public $timestamps = false;

    public function people()
    {
        return $this->hasMany('App\Person');
    }
}
