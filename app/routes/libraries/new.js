// import Route from '@ember/routing/route';
//
// export default Route.extend({
//
//   model() {
//     return this.store.createRecord('library');
//   },
//
//   actions: {
//
//     saveLibrary(newLibrary) {
//       newLibrary.save().then(() => this.transitionTo('libraries'));
//     },
//
//     willTransition() {
//       // rollbackAttributes() removes the record from the store
//       // if the model 'isNew'
//       this.controller.get('model').rollbackAttributes();
//     }
//   }
// });


import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },
  

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
      }
    }

});
