<?php
echo '<pre>';
print_r(json_decode(file_get_contents("php://input"),true));
echo '</pre>';