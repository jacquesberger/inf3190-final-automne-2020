<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  http_response_code(404);
  exit;
}

$correction = [
  "q1" => $_POST['q1'] == 'q1_a',
];

print(json_encode($correction));
