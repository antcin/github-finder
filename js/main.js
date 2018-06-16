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
      console.log(user);
    });
  });
});
