<?php
//vse chto prihodit ot clienta decodiruem iz json
$_POST = json_decode(file_get_contents("php://input"), true);

echo var_dump($_POST);