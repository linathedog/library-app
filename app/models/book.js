import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),
  //Belongs to a library "UNIQUE"
  library: DS.belongsTo('library'),
  author: DS.belongsTo('author')
});
