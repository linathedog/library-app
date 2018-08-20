import DS from 'ember-data';
import { match, gte, and, not } from '@ember/object/computed';
export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  //match compairs the two strings
  // (/,/)begining and end, (^,$) begining and end, (.+) any number of characters, (\.) the actual character (.)
  isValidEmail: match('email', /^.+@.+\..+$/),
  // gte= greater than equal
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),
  isDisabled: not('isValid')
});
