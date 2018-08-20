import Component from '@ember/component';

export default Component.extend({
  buttonLabel: 'Save',

  actions: {

    buttonClicked(param) {
      //With sendAction we can invoke a function located outside of our Component
      //The name of the function is passed upon initialisation 
      this.sendAction('action', param);
    }

  }
});
