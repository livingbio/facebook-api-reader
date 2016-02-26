from db.models import _Node
from schema import Schema
from db.validator import *


class post(_Node):
    namespace = "post"
    get_validater = Schema({
        Optional('caption'): is_string,
        Optional('created_time'): is_datetime,
        Optional('description'): is_string,
        Optional('from'): is_Profile,
        Optional('icon'): is_string,
        Optional('id'): is_string,
        Optional('link'): is_string,
        Optional('message'): is_string,
        Optional('name'): is_string,
        Optional('picture'): is_string,
        Optional('privacy'): is_string,
        Optional('shares'): is_object,
        Optional('source'): is_string,
        Optional('type'): is_string,
        Optional('updated_time'): is_datetime,
    })
    update_validater = Schema({
        Optional('caption'): is_string,
        Optional('description'): is_string,
        Optional('icon'): is_string,
        Optional('link'): is_string,
        Optional('message'): is_string,
        Optional('name'): is_string,
        Optional('privacy'): is_string,
        Optional('source'): is_string,
    })
    insert_validater = Schema({
        Optional('caption'): is_string,
        Optional('description'): is_string,
        Optional('icon'): is_string,
        Optional('link'): is_string,
        Optional('message'): is_string,
        Optional('name'): is_string,
        Optional('object'): is_Profile,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /post/:id Request post information
        @apiName Get post
        @apiGroup post

        @apiParam {string} id post unique ID.

        @apiSuccess { string } caption The caption of a link in the post (appears beneath the name).
        @apiSuccess { datetime } created_time The time the post was initially published.
        @apiSuccess { string } description A description of a link in the post (appears beneath the caption).
        @apiSuccess { Profile } from Information about the profile that posted the message.
        @apiSuccess { string } icon A link to an icon representing the type of this post.
        @apiSuccess { string } id The post ID
        @apiSuccess { string } link The link attached to this post.
        @apiSuccess { string } message The status message in the post.
        @apiSuccess { string } name The name of the link.
        @apiSuccess { string } picture The picture scraped from any link included with the post.
        @apiSuccess { string } privacy The privacy settings of the post. enum{EVERYONE, ALL_FRIENDS, FRIENDS_OF_FRIENDS, SELF}
        @apiSuccess { object } shares The shares count of this post.
        @apiSuccess { string } source A URL to any Flash movie or video file attached to the post.
        @apiSuccess { string } type A string indicating the object type of this post.
        @apiSuccess { datetime } updated_time The time of the last change to this post, or the comments on it.

        """
        return super(post, cls).get(id)

    def update(self, data):
        """
        @api {post} /post/:id Update post information
        @apiName Update post
        @apiGroup post

        @apiParam { string } [caption] The caption of a link in the post (appears beneath the name).
        @apiParam { string } [description] A description of a link in the post (appears beneath the caption).
        @apiParam { string } [icon] A link to an icon representing the type of this post.
        @apiParam { string } [link] The link attached to this post.
        @apiParam { string } [message] The status message in the post.
        @apiParam { string } [name] The name of the link.
        @apiParam { string } [privacy] The privacy settings of the post. enum{EVERYONE, ALL_FRIENDS, FRIENDS_OF_FRIENDS, SELF}
        @apiParam { string } [source] A URL to any Flash movie or video file attached to the post.

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(post, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /post/ Insert new post information
        @apiName Insert post
        @apiGroup post

        @apiParam { string } [caption] The caption of a link in the post (appears beneath the name).
        @apiParam { string } [description] A description of a link in the post (appears beneath the caption).
        @apiParam { string } [icon] A link to an icon representing the type of this post.
        @apiParam { string } [link] The link attached to this post.
        @apiParam { string } [message] The status message in the post.
        @apiParam { string } [name] The name of the link.
        @apiParam { Profile } [object] The target profile of the post


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(post, cls).insert(data)

    def delete(self):
        """
        @api {delete} /post/:id Delete post information
        @apiName Delete post
        @apiGroup post

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(post, self).delete()

    def list_comments(self, cursor):
        """
        @api {get} /post/:id/comments List comments information
        @apiName List post's comments
        @apiGroup post

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
        @api {get} /post/:id/likes List likes information
        @apiName List post's likes
        @apiGroup post

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

    def list_reports(self, cursor):
        """
        @api {get} /post/:id/reports List reports information
        @apiName List post's reports
        @apiGroup post

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

        @apiSuccess { Report } reports related Report
        """
        return self._list_edges("reports", cursor)

    def search(self):
        """
        @api { get }  /post/search search post
        @apiName let post search
        @apiGroup post

        @apiParam { string } q keywords
        @apiParam { string } user user's id

        @apiExample {json} Response:
                   { "success": bool }
        """
