import Ember from 'ember';

export default Ember.Controller.extend({
    contactTitle: 'Send us a message :)',
    emailAddress: '',
    contactMessage: '',
    responseMsg: 'We got your message and we’ll get in touch soon',
    secondaryContactMsg: 'Love us much? Send us another message',
    isMsgSent: false,

    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isSendDisabled: Ember.computed('isEmailValid', 'contactMessage', function() {
        return !(this.get('isEmailValid') && (this.get('contactMessage') !== ''));
    }),

    actions: {
        sendMessage() {
            console.log('sending contact message...');
            this.toggleProperty('isMsgSent');
        },

        sendAgain() {
            this.set('contactMessage', '');
            this.set('emailAddress', '');
            this.toggleProperty('isMsgSent');
        }
    }
});
