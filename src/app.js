function mapSelect() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
      window.open("maps://www.google.com/maps/place/Fleamasters+Fleamarket/@26.6433935,-81.8316091,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6a31ebaafe97:0x6a602d7d273bba94!8m2!3d26.6433935!4d-81.829415");
    else /* else use Google */
      window.open("https://www.google.com/maps/place/Fleamasters+Fleamarket/@26.6433935,-81.8316091,17z/data=!3m1!4b1!4m5!3m4!1s0x88db6a31ebaafe97:0x6a602d7d273bba94!8m2!3d26.6433935!4d-81.829415");
  }