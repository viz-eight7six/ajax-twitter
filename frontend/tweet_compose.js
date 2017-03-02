const APIUtil = require('./api_util');

class TweetCompose {
  constructor ($form) {
    console.log(this);
    // debugger
    this.$form = $form;
    this.$form.on('Submit', this.submit.bind(this)());  //
  }

  submit () {
    console.log('submitting...');
    console.log(this.$form);
    APIUtil.createTweet(this.$form.serializeJSON());
    // debugger
    // this.$form.find('input').prop('disabled', true);

  }

}

module.exports = TweetCompose;
