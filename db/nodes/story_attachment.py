from db.models import _Node
from schema import Schema
from db.validator import *


class story_attachment(_Node):
    namespace = "story_attachment"
    get_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('id'): is_string,
        Optional('title'): is_string,
        Optional('type'): is_string,
        Optional('url'): is_string,
    })
    update_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('title'): is_string,
        Optional('type'): is_string,
        Optional('url'): is_string,
    })
    insert_validater = Schema({
        Optional('description'): is_string,
        Optional('ext'): is_dict,
        Optional('title'): is_string,
        Optional('type'): is_string,
        Optional('url'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /story_attachment/:id Request story_attachment information
        @apiName Get story_attachment
        @apiGroup story_attachment

        @apiParam {string} id story_attachment unique ID.

        @apiSuccess { string } description Text accompanying the attachment
        @apiSuccess { dict } ext The extension field of attachment.
        @apiSuccess { string } id The attachment's id.
        @apiSuccess { string } title Title of the attachment
        @apiSuccess { string } type Type of the attachment
        @apiSuccess { string } url URL of the attachment

        """
        return super(story_attachment, cls).get(id)

    def update(self, data):
        """
        @api {post} /story_attachment/:id Update story_attachment information
        @apiName Update story_attachment
        @apiGroup story_attachment

        @apiParam { string } [description] Text accompanying the attachment
        @apiParam { dict } [ext] The extension field of attachment.
        @apiParam { string } [title] Title of the attachment
        @apiParam { string } [type] Type of the attachment
        @apiParam { string } [url] URL of the attachment

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(story_attachment, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /story_attachment/ Insert new story_attachment information
        @apiName Insert story_attachment
        @apiGroup story_attachment

        @apiParam { string } [description] Text accompanying the attachment
        @apiParam { dict } [ext] The extension field of attachment.
        @apiParam { string } [title] Title of the attachment
        @apiParam { string } [type] Type of the attachment
        @apiParam { string } [url] URL of the attachment


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(story_attachment, cls).insert(data)

    def delete(self):
        """
        @api {delete} /story_attachment/:id Delete story_attachment information
        @apiName Delete story_attachment
        @apiGroup story_attachment

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(story_attachment, self).delete()
