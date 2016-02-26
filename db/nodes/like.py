from db.models import _Node
from schema import Schema
from db.validator import *

class like(_Node):
    namespace = "like"
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
        @api {get} /like/:id Request like information
        @apiName Get like
        @apiGroup like

        @apiParam {string} id like unique ID.

        @apiSuccess { User } from The person who create friendship
        @apiSuccess { Object } object Target object this friendship was made on

        """
        return super(like, cls).get(id)

    def update(self, data):
        """
        """
        return super(like, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /like/ Insert new like information
        @apiName Insert like
        @apiGroup like

        @apiParam { Object } [object] Target object this friendship was made on


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(like, cls).insert(data)


    def delete(self):
        """
        @api {delete} /like/:id Delete like information
        @apiName Delete like
        @apiGroup like

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(like, self).delete()



