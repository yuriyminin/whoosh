//Of course I can code this more programatically, but this seems good to me.
$().ready(function() {
                $('.send').click(function() {
                  console.log(document.getElementById("planetext").value);
                  //have the clear value after the form successfully sends the data.
                  $('#planetext').val('').empty();
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
                                }, 600);
                            }, 2000);
                        }, 2800);
                    }, 200);
                    $.ajax({
                        url: '/planes',
                        type: 'POST',
                        data: JSON.stringify({"message":document.getElementById("planetext").value.toString(), "emotion":"angry"}),
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json',
                        async: false,
                        success: function(msg) {
                            alert(msg);
                        }
                    });
                });


  $('#add').click(function() {
            document.querySelector("#planetext").style.boxShadow = '0 0 10px #525354';
            document.querySelector("#planetext").style.display = 'block';
            $('#plate').addClass('front');
            $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
            $('.curvable').removeClass('curved');
  });

  $('#get').click(function() {
    $.get("/plane", function(data, status){
        $('#start').text(data);
    });
    document.querySelector("#planetext").style.display = 'none';
      $('#plate').addClass('front');
      $('#start').addClass('read');
      $('#planetext').removeClass('display');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');
          });
  });
