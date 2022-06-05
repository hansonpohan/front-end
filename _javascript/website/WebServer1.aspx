<%@ Page Language="C#" ContentType="text/html" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Welcome</title>
    <style>
        .main-box {
            margin: 50px auto;
            width: 400px;
            height: 200px;
            padding: 50px;
            box-shadow: 5px 5px 10px #999;
            border: 1px solid #fff;
            text-align: center;
            font-size: 40px;
            color: blue;
        }
    </style>
</head>
<body>
    <div class="main-box">歡迎<%= Request["username"] %> 光臨</div>
    <!-- query string   username=>query parameter-->
</body>
</html>


