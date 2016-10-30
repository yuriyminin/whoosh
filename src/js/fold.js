//Of course I can code this more programatically, but this seems good to me.
$().ready(function() {
              var state = 'add';
                $('.send').click(function() {
                  if (state == 'get') {
                    $('#get').show();
                    $('#dropdown').show();
                  }
                  var feeling;
                  if(state == 'add'){
                    $.ajax({
                        url: '/analyze',
                        type: 'POST',
                        data: JSON.stringify({message : document.getElementById("planetext").value, emotion : ""}),
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'text',
                        async: false,
                        success: function(msg) {
                          feeling = msg;
                            if(msg == 'joy'){
                                $('#screencover').text("Glad you're feeling " + msg + "!");
                            }else{
                                $('#screencover').text("Sorry you're feeling " + msg + ".");
                            }
                        },

                                            });
                      setTimeout(function() {
                          $('.sendmessage').show();
                      }, 600);
                  }
                  if(state == 'add'){
                    console.log("ADDING")
                  console.log(document.getElementById("planetext").value);
                  $.ajax({
                      url: '/planes',
                      type: 'POST',
                      data: JSON.stringify({message : document.getElementById("planetext").value, emotion : feeling}),
                      contentType: 'application/json; charset=utf-8',
                      dataType: 'json',
                      async: false,
                      success: function(msg) {
                          alert(msg);
                      }
                    });
                  }
                  //have the clear value after the form successfully sends the data.
                  //$('#planetext').val('').empty();
                    setTimeout(function() {
                        $('#plate').removeClass('front');
                        $('#container').removeClass('beginning');
                        $('.curvable').addClass('curved');
                        setTimeout(function() {
                            $('#container').addClass('hover');
                            setTimeout(function() {
                                $('#container').addClass('fly_away_first');
                                setTimeout(function() {
                                    $('#container').addClass('fly_away');
                                    document.getElementById("planetext").value = '';
                                    $('.sendmessage').hide();
                                }, 600);
                            }, 2000);
                        }, 2800);
                    }, 200);
                    $('#send').hide();
                    $('#type-wrap').hide();
                    $('#video').hide();
                });


  $('#add').click(function() {
            $('#screencover').text("");
            state = 'add';
            document.querySelector("#planetext").style.boxShadow = '0 0 12px white';
            document.querySelector("#planetext").style.display = 'block';
            $('#start'). removeClass('read');
            $('#plate').addClass('front');
            $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
            $('.curvable').removeClass('curved');
            $('#type-wrap').delay(800).show(0);
            setTimeout(function() {
                  $('#send').show();
            }, 700);
  });

  $('#get').click(function() {
    state = 'get';
    $.get("/plane", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
    });

 $('#angry').click(function() {
    state = 'get';
    $.get("/angry", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
    });


$('#disgust').click(function() {
    state = 'get';
    $.get("/disgust", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
  });

$('#fear').click(function() {
    state = 'get';
    $.get("/fear", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
  });

$('#joy').click(function() {
    state = 'get';
    $.get("/joy", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
    });

$('#sadness').click(function() {
    state = 'get';
    $.get("/sadness", function(data, status){
        $('#start').text(JSON.parse(data)[0]);
        console.log(JSON.parse(data)[0]);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
      $('#type-wrap').hide();
      $('#get').hide();
      $('#dropdown').hide();
      setTimeout(function() {
            $('#send').show();
      }, 700);
    });
});
