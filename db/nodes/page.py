from db.models import _Node
from schema import Schema
from db.validator import *


class page(_Node):
    namespace = "page"
    get_validater = Schema({
        Optional('about'): is_string,
        Optional('bio'): is_string,
        Optional('category'): is_string,
        Optional('cover'): is_CoverPhoto,
        Optional('description'): is_string,
        Optional('id'): is_numberic_string,
        Optional('name'): is_string,
    })
    update_validater = Schema({
        Optional('about'): is_string,
        Optional('bio'): is_string,
        'category': is_string,
        Optional('cover'): is_CoverPhoto,
        'description': is_string,
        'name': is_string,
    })
    insert_validater = Schema({
        Optional('about'): is_string,
        Optional('bio'): is_string,
        'category': is_string,
        Optional('cover'): is_CoverPhoto,
        'description': is_string,
        'name': is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /page/:id Request page information
        @apiName Get page
        @apiGroup page

        @apiParam {string} id page unique ID.

        @apiSuccess { string } about Information about the Page
        @apiSuccess { string } bio Biography of the band. Applicable to Bands
        @apiSuccess { string } category The Page's category. e.g. Product/Service, Computers/Technology
        @apiSuccess { CoverPhoto } cover Information about the page's cover photo
        @apiSuccess { string } description The description of the Page
        @apiSuccess { numberic_string } id Page ID. No access token is required to access this field
        @apiSuccess { string } name The name of the Page

        """
        return super(page, cls).get(id)

    def update(self, data):
        """
        @api {post} /page/:id Update page information
        @apiName Update page
        @apiGroup page

        @apiParam { string } [about] Information about the Page
        @apiParam { string } [bio] Biography of the band. Applicable to Bands
        @apiParam { string } category The Page's category. e.g. Product/Service, Computers/Technology
        @apiParam { CoverPhoto } [cover] Information about the page's cover photo
        @apiParam { string } description The description of the Page
        @apiParam { string } name The name of the Page

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(page, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /page/ Insert new page information
        @apiName Insert page
        @apiGroup page

        @apiParam { string } [about] Information about the Page
        @apiParam { string } [bio] Biography of the band. Applicable to Bands
        @apiParam { string } category The Page's category. e.g. Product/Service, Computers/Technology
        @apiParam { CoverPhoto } [cover] Information about the page's cover photo
        @apiParam { string } description The description of the Page
        @apiParam { string } name The name of the Page


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(page, cls).insert(data)

    def delete(self):
        """
        @api {delete} /page/:id Delete page information
        @apiName Delete page
        @apiGroup page

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(page, self).delete()

    def list_feed(self, cursor):
        """
        @api {get} /page/:id/feed List feed information
        @apiName List page's feed
        @apiGroup page

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

        @apiSuccess { Post } feed related Post
        """
        return self._list_edges("feed", cursor)

    def list_friends(self, cursor):
        """
        @api {get} /page/:id/friends List friends information
        @apiName List page's friends
        @apiGroup page

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

        @apiSuccess { Friend } friends related Friend
        """
        return self._list_edges("friends", cursor)
