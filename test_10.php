<?php
$name= $_POST['user_name'];
$password= $_POST['user_password'];
if ($name=="排赫尔丁" and $password=="020125"){
    echo "登录成功！";
}else{
    echo "登录失败";
}
?>