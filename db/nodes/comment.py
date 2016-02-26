from db.models import _Node
from schema import Schema
from db.validator import *


class comment(_Node):
    namespace = "comment"
    get_validater = Schema({
        Optional('attachment'): is_StoryAttachment,
        Optional('comment_count'): is_int32,
        Optional('created_time'): is_datetime,
        Optional('from'): is_User,
        Optional('id'): is_string,
        Optional('like_count'): is_int32,
        Optional('message'): is_string,
        Optional('object'): is_Object,
        Optional('user_likes'): is_bool,
    })
    update_validater = Schema({
        Optional('attachment'): is_StoryAttachment,
        Optional('message'): is_string,
    })
    insert_validater = Schema({
        Optional('attachment'): is_StoryAttachment,
        Optional('message'): is_string,
        Optional('object'): is_Object,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /comment/:id Request comment information
        @apiName Get comment
        @apiGroup comment

        @apiParam {string} id comment unique ID.

        @apiSuccess { StoryAttachment } attachment Link or photo attached to the comment
        @apiSuccess { int32 } comment_count Number of replies to this comment
        @apiSuccess { datetime } created_time The time this comment was made
        @apiSuccess { User } from The person that made this comment
        @apiSuccess { string } id The comment ID
        @apiSuccess { int32 } like_count Number of times this comment was liked
        @apiSuccess { string } message The comment text
        @apiSuccess { Object } object Parent object this comment was made on
        @apiSuccess { bool } user_likes Whether the viewer has liked this comment

        """
        return super(comment, cls).get(id)

    def update(self, data):
        """
        @api {post} /comment/:id Update comment information
        @apiName Update comment
        @apiGroup comment

        @apiParam { StoryAttachment } [attachment] Link or photo attached to the comment
        @apiParam { string } [message] The comment text

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(comment, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /comment/ Insert new comment information
        @apiName Insert comment
        @apiGroup comment

        @apiParam { StoryAttachment } [attachment] Link or photo attached to the comment
        @apiParam { string } [message] The comment text
        @apiParam { Object } [object] Parent object this comment was made on

        @apiParamExample {json} Request-Example:
            {'attachment':{'id': '123'}, 'message': 'test message', 'object': {'id': '456'} }

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(comment, cls).insert(data)

    def delete(self):
        """
        @api {delete} /comment/:id Delete comment information
        @apiName Delete comment
        @apiGroup comment

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(comment, self).delete()

    def list_comments(self, cursor):
        """
        @api {get} /comment/:id/comments List comments information
        @apiName List comment's comments
        @apiGroup comment

        @apiExample {json} Response:
                    {
                        "data": [],
                        "paging": {
                            "cursors": {
                                "after": "MTAxNTExOTQ1MjAwNzI5NDE=",
                                "before": "NDMyNzQyODI3OTQw"
                            },
                        }
                    }

        @apiSuccess { Comment } comments related Comment
        """
        return self._list_edges("comments", cursor)

    def list_likes(self, cursor):
        """
        @api {get} /comment/:id/likes List likes information
        @apiName List comment's likes
        @apiGroup comment

        @apiExample {json} Response:
                    {
                        "data": [],
                        "paging": {
                            "cursors": {
                                "after": "MTAxNTExOTQ1MjAwNzI5NDE=",
                                "before": "NDMyNzQyODI3OTQw"
                            },
                        }
                    }

        @apiSuccess { Like } likes related Like
        """
        return self._list_edges("likes", cursor)
