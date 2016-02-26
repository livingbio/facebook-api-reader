from db.models import _Node
from schema import Schema
from db.validator import *

class friend(_Node):
    namespace = "friend"
    get_validater = Schema({
        Optional('from'): is_User,
        Optional('object'): is_Object,
    })
    update_validater = Schema({
    })
    insert_validater = Schema({
        Optional('object'): is_Object,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /friend/:id Request friend information
        @apiName Get friend
        @apiGroup friend

        @apiParam {string} id friend unique ID.

        @apiSuccess { User } from The person who create friendship
        @apiSuccess { Object } object Target object this friendship was made on

        """
        return super(friend, cls).get(id)

    def update(self, data):
        """
        """
        return super(friend, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /friend/ Insert new friend information
        @apiName Insert friend
        @apiGroup friend

        @apiParam { Object } [object] Target object this friendship was made on


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(friend, cls).insert(data)


    def delete(self):
        """
        @api {delete} /friend/:id Delete friend information
        @apiName Delete friend
        @apiGroup friend

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(friend, self).delete()



