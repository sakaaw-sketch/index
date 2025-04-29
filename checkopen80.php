
<?php

 $url = 'http://sakasaka.tplinkdns.com/home/';
$handle = @fopen($url,'r');
if($handle !== false){
   echo '<font size="3" color="#00FF00">系統: <font color="#00FF00">開放中~</font>';
}  else {
   echo '<font size="3" color="#FF0000">系統:<font color="#FF0000">關閉中</font>';
}
?>
