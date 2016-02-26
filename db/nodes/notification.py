from db.models import _Node
from schema import Schema
from db.validator import *


class notification(_Node):
    namespace = "notification"
    get_validater = Schema({
        Optional('created_time'): is_datetime,
        Optional('from'): is_Profile,
        Optional('id'): is_string,
        Optional('link'): is_string,
        Optional('object'): is_Object,
        Optional('title'): is_string,
        Optional('to'): is_User,
        Optional('unread'): is_bool,
        Optional('updated_time'): is_datetime,
    })
    update_validater = Schema({
        Optional('unread'): is_bool,
    })
    insert_validater = Schema({
        Optional('link'): is_string,
        Optional('object'): is_Object,
        Optional('title'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /notification/:id Request notification information
        @apiName Get notification
        @apiGroup notification

        @apiParam {string} id notification unique ID.

        @apiSuccess { datetime } created_time When the notification was created.
        @apiSuccess { Profile } from The entity (user, page, app, etc.) that 'sent', or is the source of the notification.
        @apiSuccess { string } id The notification's id.
        @apiSuccess { string } link The URL that clicking on the notification would take someone.
        @apiSuccess { Object } object The object (this can be a post, a photo, a comment, etc.) that was the subject of the notification.
        @apiSuccess { string } title The message text in the notification.
        @apiSuccess { User } to The entity that received the notification.
        @apiSuccess { bool } unread Indicates that the notification is unread. Note that 'read' notifications will not be accessible.
        @apiSuccess { datetime } updated_time When the notification was last updated.

        """
        return super(notification, cls).get(id)

    def update(self, data):
        """
        @api {post} /notification/:id Update notification information
        @apiName Update notification
        @apiGroup notification

        @apiParam { bool } [unread] Indicates that the notification is unread. Note that 'read' notifications will not be accessible.

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(notification, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /notification/ Insert new notification information
        @apiName Insert notification
        @apiGroup notification

        @apiParam { string } [link] The URL that clicking on the notification would take someone.
        @apiParam { Object } [object] The object (this can be a post, a photo, a comment, etc.) that was the subject of the notification.
        @apiParam { string } [title] The message text in the notification.


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(notification, cls).insert(data)

    def delete(self):
        """
        @api {delete} /notification/:id Delete notification information
        @apiName Delete notification
        @apiGroup notification

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(notification, self).delete()
