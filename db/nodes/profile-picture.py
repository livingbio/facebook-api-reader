from db.models import _Node
from schema import Schema
from db.validator import *


class profile - picture(_Node):
    namespace = "profile-picture"
    get_validater = Schema({
        Optional('id'): is_string,
        Optional('url'): is_string,
    })
    update_validater = Schema({
        Optional('url'): is_string,
    })
    insert_validater = Schema({
        Optional('url'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /profile-picture/:id Request profile-picture information
        @apiName Get profile-picture
        @apiGroup profile-picture

        @apiParam {string} id profile-picture unique ID.

        @apiSuccess { string } id The comment ID
        @apiSuccess { string } url URL of the profile picture

        """
        return super(profile - picture, cls).get(id)

    def update(self, data):
        """
        @api {post} /profile-picture/:id Update profile-picture information
        @apiName Update profile-picture
        @apiGroup profile-picture

        @apiParam { string } [url] URL of the profile picture

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(profile - picture, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /profile-picture/ Insert new profile-picture information
        @apiName Insert profile-picture
        @apiGroup profile-picture

        @apiParam { string } [url] URL of the profile picture


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(profile - picture, cls).insert(data)

    def delete(self):
        """
        @api {delete} /profile-picture/:id Delete profile-picture information
        @apiName Delete profile-picture
        @apiGroup profile-picture

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(profile - picture, self).delete()
