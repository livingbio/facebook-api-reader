from db.models import _Node
from schema import Schema
from db.validator import *


class friend - request(_Node):
    namespace = "friend-request"
    get_validater = Schema({
        Optional('created_time'): is_datetime,
        Optional('from'): is_User,
        Optional('message'): is_string,
        Optional('object'): is_User,
        Optional('unread'): is_bool,
        Optional('updated_time'): is_datetime,
    })
    update_validater = Schema({
        Optional('unread'): is_bool,
    })
    insert_validater = Schema({
        Optional('message'): is_string,
        Optional('object'): is_User,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /friend-request/:id Request friend-request information
        @apiName Get friend-request
        @apiGroup friend-request

        @apiParam {string} id friend-request unique ID.

        @apiSuccess { datetime } created_time The time this comment was made
        @apiSuccess { User } from The person who sent the friend request
        @apiSuccess { string } message The comment text
        @apiSuccess { User } object The person to whom the friend request was sent. This will always be the current user.
        @apiSuccess { bool } unread Indicates that the notification is unread. Note that 'read' notifications will not be accessible.
        @apiSuccess { datetime } updated_time When the notification was last updated.

        """
        return super(friend - request, cls).get(id)

    def update(self, data):
        """
        @api {post} /friend-request/:id Update friend-request information
        @apiName Update friend-request
        @apiGroup friend-request

        @apiParam { bool } [unread] Indicates that the notification is unread. Note that 'read' notifications will not be accessible.

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(friend - request, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /friend-request/ Insert new friend-request information
        @apiName Insert friend-request
        @apiGroup friend-request

        @apiParam { string } [message] The comment text
        @apiParam { User } [object] The person to whom the friend request was sent. This will always be the current user.


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(friend - request, cls).insert(data)

    def delete(self):
        """
        @api {delete} /friend-request/:id Delete friend-request information
        @apiName Delete friend-request
        @apiGroup friend-request

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(friend - request, self).delete()
