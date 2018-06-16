const client_id = config.CLIENT_ID;
const client_secret = config.CLIENT_SECRET;

$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // make ajax request to github
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      data: {
        client_id: client_id,
        client_secret: client_secret
      }
    }).done(function(user){
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img src="${user.avatar_url}" class="thumbnail" />
              </div>
              <div class="col-md-9">
              </div>
            </div>
          </div>
        </div>
      `)
    });
  });
});
