<?php
/**
 * Created by PhpStorm.
 * User: ROMEO
 * Date: 24.02.14
 * Time: 20:08
 */


$user = array(
	'email' => 'admin@test.com',
	'name' => 'Maxim Denisov',
	'token' => '***fakeAccessToken***'
);
echo json_encode($user);