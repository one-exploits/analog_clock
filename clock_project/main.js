console.log("hellow");
setInterval(() => {
    time= new Date();
    h=time.getHours();
    m=time.getMinutes();
    s=time.getSeconds();
    if (h>12) {
    var am_pm=h-12;
    }
   else{
       am_pm=h;
   }
    hrotation=(30*am_pm)+(m/2)+((0.5*s)/60);
    mrotation=(m*6)+((0.5*s)/60);
    srotation=(s*6)
    console.log(h)
    //console.log(hrotation);

      document.getElementById("hour-nedle").style.transform=`rotate(${hrotation}deg)`;
    document.getElementById("minute-nedle").style.transform=`rotate(${mrotation}deg)`;
    document.getElementById("second-nedle").style.transform=`rotate(${srotation}deg)`;
  /* .style.transform=`rotate(${4}deg)`;
    sencond-nedle.style.transform=`rotate(${34}deg)`;
     */

}, 1000);