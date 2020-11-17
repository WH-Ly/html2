     var Kermit="groot";
    window.onload=function() {
        alert('Welcome to the webpage stranger');
    }
    
    function changedata(file) {
      var content=document.getElementById("content");
      content.data=file;
    }
    
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
