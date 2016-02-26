from db.models import _Node
from schema import Schema
from db.validator import *

class album(_Node):
    namespace = "album"
    get_validater = Schema({
        Optional('count'): is_int,
        Optional('cover_photo'): is_string,
        Optional('created_time'): is_datetime,
        Optional('description'): is_string,
        Optional('from'): is_User,
        Optional('id'): is_string,
        Optional('link'): is_string,
        Optional('name'): is_string,
        Optional('privacy'): is_string,
        Optional('updated_time'): is_datetime,
    })
    update_validater = Schema({
        Optional('cover_photo'): is_string,
        Optional('description'): is_string,
        Optional('name'): is_string,
        Optional('privacy'): is_string,
    })
    insert_validater = Schema({
        Optional('cover_photo'): is_string,
        Optional('description'): is_string,
        Optional('name'): is_string,
        Optional('privacy'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /album/:id Request album information
        @apiName Get album
        @apiGroup album

        @apiParam {string} id album unique ID.

        @apiSuccess { int } count Number of photos in this album.
        @apiSuccess { string } cover_photo The ID of the album's cover photo.
        @apiSuccess { datetime } created_time The time the album was initially created.
        @apiSuccess { string } description The description of the album.
        @apiSuccess { User } from The profile that created the album.
        @apiSuccess { string } id The album ID.
        @apiSuccess { string } link A link to this album on Facebook.
        @apiSuccess { string } name The title of the album.
        @apiSuccess { string } privacy The privacy settings for the album.
        @apiSuccess { datetime } updated_time The last time the album was updated.

        """
        return super(album, cls).get(id)

    def update(self, data):
        """
        @api {post} /album/:id Update album information
        @apiName Update album
        @apiGroup album

        @apiParam { string } [cover_photo] The ID of the album's cover photo.
        @apiParam { string } [description] The description of the album.
        @apiParam { string } [name] The title of the album.
        @apiParam { string } [privacy] The privacy settings for the album.

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(album, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /album/ Insert new album information
        @apiName Insert album
        @apiGroup album

        @apiParam { string } [cover_photo] The ID of the album's cover photo.
        @apiParam { string } [description] The description of the album.
        @apiParam { string } [name] The title of the album.
        @apiParam { string } [privacy] The privacy settings for the album.


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(album, cls).insert(data)


    def delete(self):
        """
        @api {delete} /album/:id Delete album information
        @apiName Delete album
        @apiGroup album

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(album, self).delete()


    def list_comments(self, cursor):
        """
        @api {get} /album/:id/comments List comments information
        @apiName List album's comments
        @apiGroup album

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
        @api {get} /album/:id/likes List likes information
        @apiName List album's likes
        @apiGroup album

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

    def list_photos(self, cursor):
        """
        @api {get} /album/:id/photos List photos information
        @apiName List album's photos
        @apiGroup album

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

        @apiSuccess { Photo } photos related Photo
        """
        return self._list_edges("photos", cursor)


