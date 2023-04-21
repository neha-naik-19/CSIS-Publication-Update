<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Annual Report</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="../css/styles.css">
    
    @routes
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img class="rounded" src="../image/BITS_Logo.jpg" alt="BITS Logo">
            <span class="bits">bits pilani k. k. birla goa campus <br><span class="annualreport">annual report</span></span>
          </a>
          <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"

                aria-label="Toggle navigation"
              >
          <span className="navbar-toggler-icon"></span>
          </button> 
        </div>
      </nav>
    </header>

    <main>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <!-- <nav> -->
          <div class="nav nav-tabs p-3" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-publication-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-publication"
              type="button"
              role="tab"
              aria-controls="nav-publication"
              aria-selected="true"
            >
              Publication
            </button>
            <button
              class="nav-link"
              id="nav-project-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-project"
              type="button"
              role="tab"
              aria-controls="nav-project"
              aria-selected="false"
            >
              Project
            </button>
            <button
              class="nav-link"
              id="nav-books-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-books"
              type="button"
              role="tab"
              aria-controls="nav-books"
              aria-selected="false"
            >
              Books
            </button>
          </div>
          <!-- </nav> -->
        </div>

        <div class="card-body">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-publication"
              role="tabpanel"
              aria-labelledby="nav-publication-tab"
            >
              @yield('content')
            </div>
            <div
              class="tab-pane fade"
              id="nav-project"
              role="tabpanel"
              aria-labelledby="nav-project-tab"
            >
              Project
            </div>
            <div
              class="tab-pane fade"
              id="nav-books"
              role="tabpanel"
              aria-labelledby="nav-books-tab"
            >
              Books
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <script src="{{ asset('js/home.js') }}" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
  </body>
</html>