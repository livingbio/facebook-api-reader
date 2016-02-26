from db.models import _Node
from schema import Schema
from db.validator import *


class experience(_Node):
    namespace = "experience"
    get_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('from'): is_User,
        Optional('id'): is_numberic_string,
        Optional('name'): is_string,
    })
    update_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('name'): is_string,
    })
    insert_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('name'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /experience/:id Request experience information
        @apiName Get experience
        @apiGroup experience

        @apiParam {string} id experience unique ID.

        @apiSuccess { string } description Description
        @apiSuccess { dict } ext The extension field of experience.
        @apiSuccess { User } from From
        @apiSuccess { numberic_string } id ID
        @apiSuccess { string } name Name

        """
        return super(experience, cls).get(id)

    def update(self, data):
        """
        @api {post} /experience/:id Update experience information
        @apiName Update experience
        @apiGroup experience

        @apiParam { string } [description] Description
        @apiParam { dict } [ext] The extension field of experience.
        @apiParam { string } [name] Name

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(experience, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /experience/ Insert new experience information
        @apiName Insert experience
        @apiGroup experience

        @apiParam { string } [description] Description
        @apiParam { dict } [ext] The extension field of experience.
        @apiParam { string } [name] Name


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(experience, cls).insert(data)

    def delete(self):
        """
        @api {delete} /experience/:id Delete experience information
        @apiName Delete experience
        @apiGroup experience

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(experience, self).delete()
