$(function(){
  function buildHTML(message) {
    if (message.image){
      var html = 
        `<div class="chat-main__contents__group">
          <div class="info">
            <p class="person">
              ${message.user_name}
            </p>
            <p class="data">
              ${massae.crated_at}
            </p>
          </div>
          <div class="post">
            <p class="post__content">
              ${message.content}
            </p>
            <img class="lower-message__image" src=${message.image} >
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat-main__contents__group">
          <div class="info">
            <p class="person">
              ${message.user_name}
            </p>
            <p class="data">
              ${message.created_at}
            </p>
          </div>
          <div class="post">
            <p class="post__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__contents').append(html);
      $('.chat-main__contents').animate({ scrollTop: $('.chat-main__contents')[0].scrollHeight});
      $('form')[0].reset();
      $('.chat-main__footer__send').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });

  })
});