$(document).on('turbolinks:load', function(){
  function buildMESSAGE(message){ 
    var html = `<div class="message">
                  <div class="upper-message">
                  <div class="upper-message__user-name">
                  ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                  ${message.created_time}
                  </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    <p class="lower-message__image">
                    <img src= "${message.img}">
                    </P>
                  </div>
                </div>`
    return html;
 }

  $('#new_message').on('submit', function(e){

    e.preventDefault();
    var formData = new FormData(this);

    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMESSAGE(message);
      $('.main__body'). append(html)
      $("form")[0].reset()
      // $('.form__message').val('')
      $(".form__submit").prop('disabled', false);
      $('.main').animate({scrollTop: $('.main')[0].scrollHeight});
      // scrollBottom
    })
    .fail(function(){
      alert('エラー');
    })
  })
});   





