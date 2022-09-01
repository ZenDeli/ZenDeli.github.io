function mapSelect() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
      window.open("maps://www.google.com/maps/place/Zen+Deli/@26.6727351,-81.9347462,19z/data=!3m1!4b1!4m5!3m4!1s0x88db43117c30cc57:0xd765870417ce32e0!8m2!3d26.6727339!4d-81.934199");
    else /* else use Google */
      window.open("https://www.google.com/maps/place/Zen+Deli/@26.6727351,-81.9347462,19z/data=!3m1!4b1!4m5!3m4!1s0x88db43117c30cc57:0xd765870417ce32e0!8m2!3d26.6727339!4d-81.934199");
  }