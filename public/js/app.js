//--------------------- jquery DOM ready ------------------------
$(document).ready(function(){


//-------------jQuery Ajax/JSON------------ Load JSON file -- load images and country name in to a specfic diiv -------------------------
  $.ajax({
    url: './countries.json',
    dataType:'json',
    cache: false,
  })
  .done(function(data){
      $.each(data, function(id,obj){
        $.each(obj, function(index,name){
          // console.log(obj[index].name);
          //  $('.countryList').append('<a href="">'+ '<img src='+ obj[index].image + '>' + '<span>' + obj[index].name +'</span>'+ '</a>');
           $('.countryList').append('<a>'+ '<img src='+ obj[index].image + '>' + '<span>' + obj[index].name +'</span>'+ '</a>');


        });
      });
  });
//-------------jQuery Ajax/JSON------------ Load JSON file -- load images and country name in to a specfic diiv -------------------------


//-------------------- Show the List of Country Div ------------------------------
$('#countryBtn').click(function(){

  $('.countryList').toggleClass('show');


});


//----------------------End of show the list of country Div ----------------------


//-------------------- Click event from the list of country --- Jquery Ajax/JSON -------------------------------------------------
  $('.countryList').on('click','a', function(){
    var cname = $(this).text();
    // console.log(cname);
    $('.countryList').toggleClass('show');
    $('.btnCountryName').text(cname);

    $.ajax({
      url: './countries.json',
      dataType:'json',
      cache: false,
    })
    .done(function(data){
        $.each(data, function(id,obj){
          $.each(obj, function(index,name){
              if(obj[index].name === cname){
                    $('#countryBtn').css('background-image','url('+ obj[index].image +'),url("./img/drop-icon.png")');
                    $('#countryBtn').css('background-position',"left,right");
                    $('#countryBtn').css('background-repeat','no-repeat');
              }

          });
        });
    });
  });
  //-------------------- Click event from the list of country --- Jquery Ajax/JSON -------------------------------------------------


  //---------------------End of Jquery DOM ready function -------------------------------------
});
