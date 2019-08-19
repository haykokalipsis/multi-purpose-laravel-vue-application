<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>AdminLTE 3 | Starter</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="{{ asset('assets/admin-lte/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('assets/admin-lte/dist/css/adminlte.min.css') }}">
    <!-- Vue js -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">

<div class="wrapper" id="app">
    @include('admin.layouts._navbar')

    @include('admin.layouts._main-sidebar')

    @yield('content')

    @include('admin.layouts._control-sidebar')

    @include('admin.layouts._footer')
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="{{ asset('assets/admin-lte/plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('assets/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('assets/admin-lte/dist/js/adminlte.min.js') }}"></script>
<!-- Vue js -->
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
