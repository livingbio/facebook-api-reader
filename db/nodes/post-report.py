from db.models import _Node
from schema import Schema
from db.validator import *


class post - report(_Node):
    namespace = "post-report"
    get_validater = Schema({
        Optional('from'): is_User,
        Optional('message'): is_string,
        Optional('object'): is_Object,
        Optional('state'): is_string,
    })
    update_validater = Schema({
        Optional('message'): is_string,
        Optional('object'): is_Object,
        Optional('state'): is_string,
    })
    insert_validater = Schema({
        Optional('message'): is_string,
        Optional('object'): is_Object,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /post-report/:id Request post-report information
        @apiName Get post-report
        @apiGroup post-report

        @apiParam {string} id post-report unique ID.

        @apiSuccess { User } from The person that made this post report
        @apiSuccess { string } message The comment text
        @apiSuccess { Object } object Parent object this post report was made on
        @apiSuccess { string } state The process state

        """
        return super(post - report, cls).get(id)

    def update(self, data):
        """
        @api {post} /post-report/:id Update post-report information
        @apiName Update post-report
        @apiGroup post-report

        @apiParam { string } [message] The comment text
        @apiParam { Object } [object] Parent object this post report was made on
        @apiParam { string } [state] The process state

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(post - report, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /post-report/ Insert new post-report information
        @apiName Insert post-report
        @apiGroup post-report

        @apiParam { string } [message] The comment text
        @apiParam { Object } [object] Parent object this post report was made on


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(post - report, cls).insert(data)

    def delete(self):
        """
        @api {delete} /post-report/:id Delete post-report information
        @apiName Delete post-report
        @apiGroup post-report

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(post - report, self).delete()
