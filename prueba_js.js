document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

  // Or with jQuery

 /* $(document).ready(function(){
    $('.collapsible').collapsible();
  });*/

  /**/
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
        