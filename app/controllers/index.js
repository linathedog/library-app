import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  indexMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      //We get the eimailAddress attribute from the controller
      const email = this.get('emailAddress');

      //We create an invitation model holding the email attribute
      const newInvitation = this.store.createRecord('invitation', { email });

      //Here we use arrow syntax because we want this. to refer to the correct scope
      //once the promise has been completed we sent the response to the function that prints the message to the user
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });

    }
  }

});
