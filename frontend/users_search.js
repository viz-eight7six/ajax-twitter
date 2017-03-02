const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch{
  constructor ($el){
    console.log($el);
    this.$el = $el;
    this.$input = $($el.find("input"));
    this.$ul = $($el.find("ul"));
    this.$input.on("input",  this.handleInput.bind(this));
  }

  handleInput () {
    // debugger
    let val =  this.$input.val();
    APIUtil.searchUsers(val)
      .then(this.renderResults.bind(this));
  }

  renderResults (data) {
    this.$ul.empty();
    data.forEach(user => {
      let $button = $("<button></button>");
      let followState = user.followed ? 'followed' : 'unfollowed';
      let userLink = $(`<a href="/users/${user.id}">${user.username}</a>`);
      let $li = $("<li></li>");
      $li.append(userLink).append($button);
      new FollowToggle($button, user.id, followState);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
