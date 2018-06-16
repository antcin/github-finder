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
                <img src="${user.avatar_url}" class="thumbnail avatar" />
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View profile</a>
              </div>
              <div class="col-md-9">
                <span class="label label-default">Public Repos: ${user.public_repos}</span>
                <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                <span class="label label-success">Followers: ${user.followers}</span>
                <span class="label label-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `)
    });
  });
});
