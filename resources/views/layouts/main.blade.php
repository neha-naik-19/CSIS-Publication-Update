<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Annual Report</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" type="text/css" href="../css/styles-main.css">
    
    @routes
  </head>
  <body>
    <header class="home">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid headercontainer"> 
          <a class="navbar-brand">
            <img class="rounded" src="../image/BITS_Logo.jpg" alt="BITS Logo">
            <span class="bits">bits pilani k. k. birla goa campus <br><span class="annualreport">annual report</span></span>
            <div class="dept">
              <span>{{strtoupper($department ?? '')}}</span>
              <a href="{{ route('home') }}">
                <i class="fa fa-house"></i>
              </a>
            </div>
          </a>
        </div>
      </nav>
    </header>

    <main class="pubadd">
      @yield('pubadd')
    </main>

    <main class="pubeditview">
      @yield('pubeditview')
    </main>

    <main class="pubupdate">
      @yield('pubupdate')
    </main>

    <main class="pubbib">
      @yield('pubbib')
    </main>

    <footer class="footer fixed-bottom">
      <div class="container-fluid p-0">
        <p class="text-light text-muted">© {{ now()->year }} BITS Pilani Goa Campus</p>
        <div id="imgdiv">
          <img
            src="../image/bits-line.gif" class="d-block w-25" alt="..."
          />
        </div>
      </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- Include Bootstrap Datepicker -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('js/main.js') }}" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
  </body>
</html>