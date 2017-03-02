const followToggle = require('./follow_toggle');
const usersSearch = require('./users_search');
const tweetCompose = require('./tweet_compose');

$(function() {
  $("button.follow-toggle").each((idx, button) => {
    console.log(button);
    new followToggle($(button));
  });
  $("nav.users-search").each((idx, search) => {
    new usersSearch($(search));
  });
  $("form.tweet-compose").each((idx, form) => {
    new tweetCompose($(form));
  });
});
