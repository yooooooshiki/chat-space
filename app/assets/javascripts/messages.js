$(document).on('turbolinks:load', function(){
  function buildMESSAGE(message){ 
    message.image == null ? insertImage = '' : insertImage = `<img class="lower-message__image" src=${message.image}>`;
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
                    ${insertImage}
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
      $(".form__submit").prop('disabled', false);
      $('.main__body').animate({scrollTop: $('.main__body')[0].scrollHeight});
    })
    .fail(function(){
      alert('エラー');
    })
  })
});   





