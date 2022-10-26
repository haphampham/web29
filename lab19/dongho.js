 function cu() {
 
        const hourHand = document.getElementById(".hourHand");
        const minuteHand = document.getElementById(".minuteHand");
        const secondHand = document.getElementById("sec");
        const Gio_hien_tai = new Date().getHours();
        const Phut_hien_tai = new Date().getMinutes();
        const Giay_hien_tai = new Date().getSeconds();
        hourHand.innerHTML = Gio_hien_tai;
        minuteHand.innerHTML = Phut_hien_tai;
        secondHand.innerHTML = Giay_hien_tai;
    }
   const Dem_gioi = setInterval(cu, 1000);
       
      

    // 
    function Dong_ho() {
        const gio = document.getElementById("gio");
        const phut = document.getElementById("phut");
        const giay = document.getElementById("giay");
        const Gio_hien_tai = new Date().getHours();
        const Phut_hien_tai = new Date().getMinutes();
        const Giay_hien_tai = new Date().getSeconds();
        gio.innerHTML = Gio_hien_tai;
        phut.innerHTML = Phut_hien_tai;
        giay.innerHTML = Giay_hien_tai;
    }
   const Dem_gio = setInterval(Dong_ho, 1000);