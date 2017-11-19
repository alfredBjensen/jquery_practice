$( document ).ready(scriptStart);

function scriptStart(){
  hideMain();
  showMain();
}


function hideMain(){
  $('main').hide();
}

function showMain(){
    //select based on tag
    $('main').show(2000);
}
