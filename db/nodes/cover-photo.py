from db.models import _Node
from schema import Schema
from db.validator import *


class cover - photo(_Node):
    namespace = "cover-photo"
    get_validater = Schema({
        Optional('id'): is_numberic_string,
        Optional('source'): is_string,
    })
    update_validater = Schema({
        Optional('source'): is_string,
    })
    insert_validater = Schema({
        Optional('source'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /cover-photo/:id Request cover-photo information
        @apiName Get cover-photo
        @apiGroup cover-photo

        @apiParam {string} id cover-photo unique ID.

        @apiSuccess { numberic_string } id The ID of the cover photo
        @apiSuccess { string } source Direct URL for the person's cover photo image

        """
        return super(cover - photo, cls).get(id)

    def update(self, data):
        """
        @api {post} /cover-photo/:id Update cover-photo information
        @apiName Update cover-photo
        @apiGroup cover-photo

        @apiParam { string } [source] Direct URL for the person's cover photo image

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(cover - photo, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /cover-photo/ Insert new cover-photo information
        @apiName Insert cover-photo
        @apiGroup cover-photo

        @apiParam { string } [source] Direct URL for the person's cover photo image


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(cover - photo, cls).insert(data)

    def delete(self):
        """
        @api {delete} /cover-photo/:id Delete cover-photo information
        @apiName Delete cover-photo
        @apiGroup cover-photo

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(cover - photo, self).delete()
