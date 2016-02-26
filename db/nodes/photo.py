from db.models import _Node
from schema import Schema
from db.validator import *

class photo(_Node):
    namespace = "photo"
    get_validater = Schema({
    })
    update_validater = Schema({
    })
    insert_validater = Schema({
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /photo/:id Request photo information
        @apiName Get photo
        @apiGroup photo

        @apiParam {string} id photo unique ID.


        """
        return super(photo, cls).get(id)

    def update(self, data):
        """
        """
        return super(photo, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /photo/ Insert new photo information
        @apiName Insert photo
        @apiGroup photo



        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(photo, cls).insert(data)


    def delete(self):
        """
        @api {delete} /photo/:id Delete photo information
        @apiName Delete photo
        @apiGroup photo

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(photo, self).delete()



