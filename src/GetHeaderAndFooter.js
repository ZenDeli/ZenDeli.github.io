CreateHeader = () => {
    var isOnHomePage, isOnMenuPage, isOnLocationPage, isOnAboutPage = false;
    var active = " active text-primary";

    const today = new Date();
    const currentDayOfWeek = today.getDay();

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

    const hoursOfOperations = {
        '0': {
            'main': 'Open 11 AM - 5 PM',
            'market': 'Open 9 AM - 5 PM',
        },
        '1': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Closed Today',
        },
        '2': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Closed Today',
        },
        '3': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Closed Today',
        },
        '4': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Closed Today',
        },
        '5': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Open 9 AM - 5 PM',
        },
        '6': {
            'main': 'Open 11 AM - 8 PM',
            'market': 'Open 9 AM - 5 PM',
        },
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
                    <div class="navbar-nav navbar-right d-flex flex-row">
                        <span class="navbar-text container d-flex flex-column mx-2">
                            <label class="row justify-content-center phone-label">South Fort Myers Location:</label>
                            <div class="row justify-content-center">
                                <a href="tel:239-362-3049">
                                    <i class="fas fa-phone-alt"></i>&nbsp;(239) 362 - 3049
                                </a>
                            </div>
                            <label class="row justify-content-center">
                                ${today > new Date("2021/03/29") ? hoursOfOperations[currentDayOfWeek].main : "Closed Today"}
                            </label>
                        </span>
                        <span class="navbar-text container d-flex flex-column mx-2">
                            <label class="row justify-content-center phone-label">Fleamasters FleaMarket:</label>
                            <div class="row justify-content-center">
                                <a href="tel:239-362-3049">
                                    <i class="fas fa-phone-alt"></i>&nbsp;(239) 362 - 3049
                                </a>
                            </div> 
                            <label class="row justify-content-center">${hoursOfOperations[currentDayOfWeek].market}</label>                             
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
                    <div class="text-center col justify-content-between">
                        <h5 class="text-warning mb-3">
                            <i class="far fa-compass"></i>&nbsp;VISIT US
                        </h5>
                        <div>
                            <!-- Main Campus -->
                            <div class="font-weight-bold text-warning ">ZEN Delicatessen</div>
                            <div class="mt-2 font-weight-bold">Main Location</div>
                            <div>15880 San Carlos Blvd. #135</div>
                            <div>Fort Myers, FL 33908</div>
                            <div class="mt-2">
                                <a class="text-warning" href="tel:239-362-3049">
                                    <i class="fas fa-phone-alt mr-2"></i>(239) 362 - 3049
                                </a> 
                            </div>
                        </div>
                        <div>
                            <!-- Flea Market Stall -->
                            <div class="mt-4 font-weight-bold">Fleamasters Flea Market</div>
                            <div>4135 Dr. Martin Luther King Jr. Blvd.</div>
                            <div>Fort Myers, FL 33916</div>
                            <div class="mt-2">
                                <a class="text-warning" href="tel:239-313-5272">
                                    <i class="fas fa-phone-alt mr-2"></i>(239) 313 - 5272
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col col-12 col-lg-4 py-3 d-flex justify-content-center">
                    <div class="text-center">
                        <h5 class="text-warning mb-3">
                            <i class="far fa-clock"></i>&nbsp;HOURS
                        </h5>
                        <div>
                            <div class="mt-4 font-weight-bold">Main Location</div>
                            <div class="row">
                                <span class="col col-4 text-left">Monday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Tuesday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Wednesday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Thursday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Friday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Saturday</span>
                                <span class="col col-8 text-right">11 AM - 8 PM</span>
                            </div>
                            <div class="row">
                                <span class="col col-4 text-left">Sunday</span>
                                <span class="col col-8 text-right">11 AM - 5 PM</span>
                            </div>
                        </div>
                        <div>
                            <div class="mt-4 font-weight-bold">Fleamasters Flea Market</div>
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
                                <span class="col col-8 text-right">9 AM - 5 PM</span>
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
                    <span class="px-1">&copy; Copyright 2021 ZEN Delicatessen, LLC.</span>
                    <span class="px-1">All rights reserved.</span>
                </span>
            </div>
        </footer>`
}

CreateHeader();
CreateFooter();

/* Header Phone Number
                        <span class="navbar-text container d-flex flex-column mx-2">
                            <label class="row justify-content-center phone-label">Fleamasters FleaMarket:</label>
                            <div class="row justify-content-center">
                                <a href="tel:239-362-3049">
                                    <i class="fas fa-phone-alt"></i>&nbsp;(239) 362 - 3049
                                </a>
                            </div>                            
                        </span>
*/


/* Footer Location
                        <!-- Cape Coral Campus -->
                        <!-- <div class="mt-4 font-weight-bold">Cape Coral Location</div>
                        <div>41847 NE Pine Island Rd. #650</div>
                        <div>Cape Coral, FL 33909</div>
                        <div class="mt-2">
                            <a class="text-warning" href="tel:239-313-5272">
                                <i class="fas fa-phone-alt mr-2"></i>(239) 313 - 5272
                            </a> 
                        </div> -->
*/