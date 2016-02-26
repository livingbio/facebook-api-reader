from db.models import _Node
from schema import Schema
from db.validator import *


class location(_Node):
    namespace = "location"
    get_validater = Schema({
        Optional('city'): is_string,
        Optional('country'): is_string,
        Optional('id'): is_string,
        Optional('latitude'): is_float,
        Optional('longitude'): is_float,
        Optional('name'): is_string,
        Optional('region'): is_string,
        Optional('state'): is_string,
        Optional('street'): is_string,
        Optional('zip'): is_string,
    })
    update_validater = Schema({
        Optional('city'): is_string,
        Optional('country'): is_string,
        Optional('latitude'): is_float,
        Optional('longitude'): is_float,
        Optional('name'): is_string,
        Optional('region'): is_string,
        Optional('state'): is_string,
        Optional('street'): is_string,
        Optional('zip'): is_string,
    })
    insert_validater = Schema({
        Optional('city'): is_string,
        Optional('country'): is_string,
        Optional('latitude'): is_float,
        Optional('longitude'): is_float,
        Optional('name'): is_string,
        Optional('region'): is_string,
        Optional('state'): is_string,
        Optional('street'): is_string,
        Optional('zip'): is_string,
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /location/:id Request location information
        @apiName Get location
        @apiGroup location

        @apiParam {string} id location unique ID.

        @apiSuccess { string } city City
        @apiSuccess { string } country Country
        @apiSuccess { string } id The location's id.
        @apiSuccess { float } latitude Latitude
        @apiSuccess { float } longitude Longitude
        @apiSuccess { string } name Name
        @apiSuccess { string } region Region
        @apiSuccess { string } state State
        @apiSuccess { string } street Street
        @apiSuccess { string } zip Zip code

        """
        return super(location, cls).get(id)

    def update(self, data):
        """
        @api {post} /location/:id Update location information
        @apiName Update location
        @apiGroup location

        @apiParam { string } [city] City
        @apiParam { string } [country] Country
        @apiParam { float } [latitude] Latitude
        @apiParam { float } [longitude] Longitude
        @apiParam { string } [name] Name
        @apiParam { string } [region] Region
        @apiParam { string } [state] State
        @apiParam { string } [street] Street
        @apiParam { string } [zip] Zip code

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(location, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /location/ Insert new location information
        @apiName Insert location
        @apiGroup location

        @apiParam { string } [city] City
        @apiParam { string } [country] Country
        @apiParam { float } [latitude] Latitude
        @apiParam { float } [longitude] Longitude
        @apiParam { string } [name] Name
        @apiParam { string } [region] Region
        @apiParam { string } [state] State
        @apiParam { string } [street] Street
        @apiParam { string } [zip] Zip code


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(location, cls).insert(data)

    def delete(self):
        """
        @api {delete} /location/:id Delete location information
        @apiName Delete location
        @apiGroup location

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(location, self).delete()
