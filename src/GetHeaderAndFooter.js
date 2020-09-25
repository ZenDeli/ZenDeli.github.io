CreateHeader = () => {
    var isOnHomePage, isOnMenuPage, isOnLocationPage, isOnAboutPage = false;
    var active = " active text-primary";

    switch (location.pathname) {
        case "/":
        case "/index.html":
            isOnHomePage = true;
            break;
        case "/menu":
        case "/menu.html":
            isOnMenuPage = true;
            break;
        case "/locations":
        case "/locations.html":
            isOnLocationPage = true;
            break;
        case "/about":
        case "/about.html":
            isOnAboutPage = true;
            break;
        default:
            break;
    }

    document.body.innerHTML =
        `<header class="sticky-top">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a class="navbar-brand ml-1" href="index.html">
                    <img src="assets/ZenDeli.svg" width="96px">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link${isOnHomePage ? active : ""}" href="index.html">Home</a>
                        <a class="nav-item nav-link${isOnMenuPage ? active : ""}" href="menu.html">Menu</a>
                        <a class="nav-item nav-link${isOnLocationPage ? active : ""}" href="locations.html">Locations</a>
                        <!-- <a class="nav-item nav-link disabled${isOnAboutPage ? active : ""}" href="aboutus.html">About us</a> -->
                    </div>
                    <div class="navbar-nav navbar-right">
                        <span class="navbar-text">Flea Market Stand:&nbsp;
                            <a href="tel:239-313-5272">
                                <i class="fas fa-phone-alt"></i>&nbsp;(239) 313 - 5272
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        </header>` + document.body.innerHTML;
}

CreateFooter = () => {
    document.body.innerHTML +=
        `<footer class="footer">
            <div class="row bg-secondary m-0 p-4 text-light">
                <div class="col col-12 col-lg-4 py-3 d-flex justify-content-center">
                    <div class="text-center">
                        <h5 class="text-warning mb-3">
                            <i class="far fa-compass"></i>&nbsp;VISIT US
                        </h5>
                        <!-- Main Campus -->
                        <!-- <div class="display-5"><h5>ZEN Delicatessen</h5></div>
                        <div>15880 San Carlos Blvd</div>
                        <div>Suite #135</div>
                        <div>Fort Myers, FL 33908</div>
                        <div class="mt-2">
                            <a class="text-light" href="tel:239-362-3049">
                                (239) 362 - 3049
                            </a> 
                        </div> -->

                        <!-- Flea Market Stall -->
                        <div class="font-weight-bold text-warning">ZEN Delicatessen</div>
                        <div>Fleamasters Flea Market</div>
                        <div>4135 Dr. Martin Luther King Jr. Blvd.</div>
                        <div>Fort Myers, FL 33916</div>
                        <div class="mt-2">
                            <a class="text-light" href="tel:239-313-5272">
                                <i class="fas fa-phone-alt"></i>&nbsp;(239) 313 - 5272
                            </a> 
                        </div> 

                    </div>
                </div>
                
                <div class="col col-12 col-lg-4 py-3 d-flex justify-content-center">
                    <div class="text-center">
                        <h5 class="text-warning mb-3">
                            <i class="far fa-clock"></i>&nbsp;HOURS
                        </h5>
                        <div class="row">
                            <span class="col col-4 text-left">Monday</span>
                            <span class="col col-8 text-right">Closed</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Tuesday</span>
                            <span class="col col-8 text-right">Closed</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Wednesday</span>
                            <span class="col col-8 text-right">Closed</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Thursday</span>
                            <span class="col col-8 text-right">Closed</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Friday</span>
                            <span class="col col-8 text-right">9 AM - 3 PM</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Saturday</span>
                            <span class="col col-8 text-right">9 AM - 5 PM</span>
                        </div>
                        <div class="row">
                            <span class="col col-4 text-left">Sunday</span>
                            <span class="col col-8 text-right">9 AM - 5 PM</span>
                        </div>
                    </div>
                </div>
            
                <div class="col col-12 col-lg-4 py-3 d-flex justify-content-center">
                    <div class="text-center">
                        <h5 class="text-warning mb-1">
                            <i class="fas fa-mobile-alt"></i>&nbsp;Follow Us
                        </h5>
                        <div class="p-3 text-light d-flex flex-row flex-md-column lead">
                            <a class="m-2" href="https://www.facebook.com/zendelicatessen" target="_blank">
                                <i class="fab fa-facebook-f">&nbsp;facebook</i>
                            </a>
                            <a class="m-2" href="https://www.instagram.com/zendelicatessen" target="_blank">
                                <i class="fab fa-instagram">&nbsp;instagram</i>
                            </a>
                            <a class="m-2" href="https://www.twitter.com/zendelicatessen" target="_blank">
                                <i class="fab fa-twitter">&nbsp;twitter</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center py-4">
                <span class="text-center d-flex flex-column flex-md-row">
                    <span class="px-1">&copy; Copyright 2020 ZEN Delicatessen, LLC.</span>
                    <span class="px-1">All rights reserved.</span>
                </span>
            </div>
        </footer>`
}

CreateHeader();
CreateFooter();