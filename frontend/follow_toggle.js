const APIUtil = require("./api_util");

class FollowToggle {
  constructor ($el, userId, followState) {
    this.userId = $el.attr('data-user-id') || userId;
    this.followState = $el.attr('data-initial-follow-state') || followState;
    this.$el = $el;
    this.render();
    $el.click(this.handleClick.bind(this));
  }

  render(){
    if (this.followState === "following") {
      this.$el.prop("disabled", true);
      return this.$el.html("following");
    } else if (this.followState === "unfollowing") {
      this.$el.prop("disabled", true);
      return this.$el.html("unfollowing");
    } else if (this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      return this.$el.html("Follow!");
    } else {
      this.$el.prop("disabled", false);
      return this.$el.html("Unfollow!");
    }
  }

  toggle () {
    if (this.followState === "following") {
      this.followState = "followed";
    } else {
      this.followState = "unfollowed";
    }
  }

  handleClick () {
    if (this.followState === "unfollowed") {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId)
      .then(res => this.toggle())
      .then(res => this.render());
    }
    else {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowerUser(this.userId)
      .then(res => this.toggle())
      .then(res => this.render());
    }
  }
}



module.exports = FollowToggle;
