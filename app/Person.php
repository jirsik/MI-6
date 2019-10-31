<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = 'people';

    public $timestamps = false;

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function aliases()
    {
        return $this->hasMany('App\Alias');
    }

    public function image()
    {
        return $this->hasOne('App\Image', 'id', 'image_id');
    }

    public function Status()
    {
        return $this->belongsTo('App\Status');
    }
}
