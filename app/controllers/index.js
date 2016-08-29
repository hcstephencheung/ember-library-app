//app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    emailAddress: '',

    actions: {

        saveInvitation() {
            const email = this.get('emailAddress');
            const newInvitation = this.store.createRecord('invitation', {
                email: email
            });

            newInvitation.save().then((response) => {
                this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
                this.set('emailAddress', '');
            });
        }
    }

});
