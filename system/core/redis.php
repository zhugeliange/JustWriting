<?php
// if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* redis
*/
class MyRedis
{
	private static $handler;

    private static function handler() {
        if(!self::$handler){
            self::$handler = new Redis();
            self::$handler -> connect('127.0.0.1', 6379);
        }

        return self::$handler;
    }

    public static function get($key) {
        $value = self::handler() -> get($key);
		$value_serl = @unserialize($value);

        if(is_object($value_serl) || is_array($value_serl)){
            return $value_serl;
        }

        return $value;
    }

    public static function set($key, $value) {
        if(is_object($value) || is_array($value)) {
            $value = @serialize($value);
        }

        return self::handler() -> set($key, $value);
    } 
}

// $array1 = [1, 'ss', '\+=-!@#$%^&*()', '呵呵'];
// print_r(MyRedis::unicode_encode('呵呵'));
// MyRedis::set('array1', $array1);
// print_r(MyRedis::get('array1'));
// echo "\n";
?>