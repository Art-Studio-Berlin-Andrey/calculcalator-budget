    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */

    /*Когда пользователь нажимает на кнопку,
      переключаться между скрытием и отображением выпадающего содержимого*/


      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
  
      
      // Close the dropdown if the user clicks outside of it
  
      // Закрываем раскрывающийся список, если пользователь щелкает за его пределами
  
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
  
  
  
  
  let test = document.getElementById('test');
  
  test.onclick = function () {
    
  let a = document.getElementById('1').value;
  
  let b = document.getElementById('2').value;
  
  let b1 = document.getElementById('2a').value;
  
  let c = document.getElementById('3').value;
  
  let d = document.getElementById('4').value;
  
  let d1 = document.getElementById('4a').value;
  
  let limit = document.getElementById('5').value;
  
  
  
  let suma = Number(a) + Number(b) + Number(b1) + Number(c) + Number(d) + Number(d1);
  
  if (suma < limit) {
    
   let out = document.getElementById('out');
  
  out.innerHTML = `<p>Остаток относительно лимита: ${limit - suma} </p>`;
    
  } else if (suma > limit) {
    
    let out = document.getElementById('out');
  
  out.innerHTML = `<p>Недостаток относительно лимита: ${limit - suma} </p>` ;
    
  }
  }