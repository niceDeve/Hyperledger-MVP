'use strict';
/**
 * A medical practicioner grants access to Data Accessors / Other participants
 * @param {org.medichain.mvp.GrantAccess} grantAccess - the function to grant access
 * @transaction
 */

 function GrantAccess(grantAccess) {

    var me = getCurrentParticipant();

    console.log('**** AUTH: ' + me.getIdentifier + 'granting access to ' + grantAccess.accessorId)

    if(!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is not already authorized, we authorize them
    var index = -1;

    if(!me.authorized) {
        me.authorized = [];
    }
    else {
        index = me.authorized.indexOf(grantAccess.accessorId);
    }

    if(index < 0) {
        me.authorized.push(grantAccess.accessorId);

        return getParticipantRegistry('org.medichain.mvp.DataAccessor')
        .then(function (memberRegistry) {

            // emit an event
            var event = getFactory().newEvent('org.medichain.mvp', 'MemberEvent');
            event.permissionControl = grantAccess;
            emit(event);

            // persist the state of the member
            return memberRegistry.update(me);
        });
    }
}
 
