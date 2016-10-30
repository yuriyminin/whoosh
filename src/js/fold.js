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
                    $.post("/planes",
                    {
                      message: document.getElementById("planetext").value,
                      emotion: "Angry"
                    },
                    function(data,status){
                        console.log(data);
                    });

                });


  $('#add').click(function() {
            document.querySelector("#planetext").style.boxShadow = '0 0 10px #525354';
            $('#plate').addClass('front');
            $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
            $('.curvable').removeClass('curved');
  });

  $('#get').click(function() {
    $.get("/planes", function(data, status){
      document.getElementById("planetext").value = data;
    });
      document.querySelector("#planetext").style.boxShadow = 'none';
      $('.message').attr('contenteditable', 'false');
      console.log(document.getElementById("planetext").contentEditable);
      $('#view').addClass('read');
      $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
      $('.curvable').removeClass('curved');

          });
  });
