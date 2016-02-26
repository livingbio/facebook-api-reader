from db.models import _Node
from schema import Schema
from db.validator import *


class user(_Node):
    namespace = "user"
    get_validater = Schema({
        Optional('about'): is_string,
        Optional('address'): is_Location,
        Optional('bio'): is_string,
        Optional('birthday'): is_string,
        Optional('cover'): is_CoverPhoto,
        Optional('education'): is_Experience[],
        Optional('email'): is_string,
        Optional('first_name'): is_string,
        Optional('gender'): is_string,
        Optional('id'): is_numberic_string,
        Optional('languages'): is_Experience[],
        Optional('last_name'): is_string,
        Optional('middle_name'): is_string,
        Optional('name'): is_string,
        Optional('political'): is_string,
        Optional('profile_picture'): is_ProfilePicture,
        Optional('relationship_status'): is_string,
        Optional('religion'): is_string,
        Optional('verified'): is_bool,
        Optional('work'): is_Experience[],
    })
    update_validater = Schema({
        Optional('about'): is_string,
        Optional('address'): is_Location,
        Optional('bio'): is_string,
        'birthday': is_string,
        Optional('cover'): is_CoverPhoto,
        Optional('education'): is_Experience[],
        'email': is_string,
        'first_name': is_string,
        'gender': is_string,
        Optional('languages'): is_Experience[],
        'last_name': is_string,
        'middle_name': is_string,
        'name': is_string,
        Optional('political'): is_string,
        Optional('profile_picture'): is_ProfilePicture,
        Optional('relationship_status'): is_string,
        Optional('religion'): is_string,
        Optional('verified'): is_bool,
        Optional('work'): is_Experience[],
    })
    insert_validater = Schema({
        Optional('about'): is_string,
        Optional('address'): is_Location,
        Optional('bio'): is_string,
        'birthday': is_string,
        Optional('cover'): is_CoverPhoto,
        Optional('education'): is_Experience[],
        'email': is_string,
        'first_name': is_string,
        'gender': is_string,
        Optional('languages'): is_Experience[],
        'last_name': is_string,
        'middle_name': is_string,
        'name': is_string,
        Optional('political'): is_string,
        Optional('profile_picture'): is_ProfilePicture,
        Optional('relationship_status'): is_string,
        Optional('religion'): is_string,
        Optional('verified'): is_bool,
        Optional('work'): is_Experience[],
    })

    @classmethod
    def get(cls, id):
        """
        @api {get} /user/:id Request user information
        @apiName Get user
        @apiGroup user

        @apiParam {string} id user unique ID.

        @apiSuccess { string } about The About Me section of this person's profile
        @apiSuccess { Location } address The person's address
        @apiSuccess { string } bio The person's bio
        @apiSuccess { string } birthday The person's birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)
        @apiSuccess { CoverPhoto } cover The person's cover photo
        @apiSuccess { Experience[] } education The person's education
        @apiSuccess { string } email The person's primary email address listed on their profile. This field will not be returned if no valid email address is available
        @apiSuccess { string } first_name The person's first name
        @apiSuccess { string } gender The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value
        @apiSuccess { numberic_string } id The id of this person's user account. This ID is unique to each app and cannot be used across different apps. Our upgrade guide provides more information about app-specific IDs
        @apiSuccess { Experience[] } languages Facebook Pages representing the languages this person knows
        @apiSuccess { string } last_name The person's last name
        @apiSuccess { string } middle_name The person's middle name
        @apiSuccess { string } name The person's full name
        @apiSuccess { string } political The person's political views
        @apiSuccess { ProfilePicture } profile_picture 
        @apiSuccess { string } relationship_status The person's relationship status
        @apiSuccess { string } religion The person's religion
        @apiSuccess { bool } verified Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions:
Register for mobile
Confirm their account via SMS
Enter a valid credit card

        @apiSuccess { Experience[] } work Details of a person`s work experience

        """
        return super(user, cls).get(id)

    def update(self, data):
        """
        @api {post} /user/:id Update user information
        @apiName Update user
        @apiGroup user

        @apiParam { string } [about] The About Me section of this person's profile
        @apiParam { Location } [address] The person's address
        @apiParam { string } [bio] The person's bio
        @apiParam { string } birthday The person's birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)
        @apiParam { CoverPhoto } [cover] The person's cover photo
        @apiParam { Experience[] } [education] The person's education
        @apiParam { string } email The person's primary email address listed on their profile. This field will not be returned if no valid email address is available
        @apiParam { string } first_name The person's first name
        @apiParam { string } gender The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value
        @apiParam { Experience[] } [languages] Facebook Pages representing the languages this person knows
        @apiParam { string } last_name The person's last name
        @apiParam { string } middle_name The person's middle name
        @apiParam { string } name The person's full name
        @apiParam { string } [political] The person's political views
        @apiParam { ProfilePicture } [profile_picture] 
        @apiParam { string } [relationship_status] The person's relationship status
        @apiParam { string } [religion] The person's religion
        @apiParam { bool } [verified] Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions:
Register for mobile
Confirm their account via SMS
Enter a valid credit card

        @apiParam { Experience[] } [work] Details of a person`s work experience

        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(user, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        @api {post} /user/ Insert new user information
        @apiName Insert user
        @apiGroup user

        @apiParam { string } [about] The About Me section of this person's profile
        @apiParam { Location } [address] The person's address
        @apiParam { string } [bio] The person's bio
        @apiParam { string } birthday The person's birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)
        @apiParam { CoverPhoto } [cover] The person's cover photo
        @apiParam { Experience[] } [education] The person's education
        @apiParam { string } email The person's primary email address listed on their profile. This field will not be returned if no valid email address is available
        @apiParam { string } first_name The person's first name
        @apiParam { string } gender The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value
        @apiParam { Experience[] } [languages] Facebook Pages representing the languages this person knows
        @apiParam { string } last_name The person's last name
        @apiParam { string } middle_name The person's middle name
        @apiParam { string } name The person's full name
        @apiParam { string } [political] The person's political views
        @apiParam { ProfilePicture } [profile_picture] 
        @apiParam { string } [relationship_status] The person's relationship status
        @apiParam { string } [religion] The person's religion
        @apiParam { bool } [verified] Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions:
Register for mobile
Confirm their account via SMS
Enter a valid credit card

        @apiParam { Experience[] } [work] Details of a person`s work experience


        @apiExample {json} Response:
                   { "success": bool }

        """
        return super(user, cls).insert(data)

    def delete(self):
        """
        @api {delete} /user/:id Delete user information
        @apiName Delete user
        @apiGroup user

        @apiExample {json} Response:
                   { "success": bool }
        """
        return super(user, self).delete()

    def list_feed(self, cursor):
        """
        @api {get} /user/:id/feed List feed information
        @apiName List user's feed
        @apiGroup user

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

    def list_friendrequests(self, cursor):
        """
        @api {get} /user/:id/friendrequests List friendrequests information
        @apiName List user's friendrequests
        @apiGroup user

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

        @apiSuccess { FriendRequest } friendrequests related FriendRequest
        """
        return self._list_edges("friendrequests", cursor)

    def list_friends(self, cursor):
        """
        @api {get} /user/:id/friends List friends information
        @apiName List user's friends
        @apiGroup user

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

    def list_notifications(self, cursor):
        """
        @api {get} /user/:id/notifications List notifications information
        @apiName List user's notifications
        @apiGroup user

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

        @apiSuccess { Notification } notifications related Notification
        """
        return self._list_edges("notifications", cursor)

    def login(self):
        """
        @api { post }  /user/login let user login
        @apiName let user login
        @apiGroup user

        @apiParam { string } name user's name
        @apiParam { string } password user's password

        @apiExample {json} Response:
                   { "success": bool }
        """

    def logout(self):
        """
        @api { get }  /user/logout let user logout
        @apiName let user logout
        @apiGroup user


        @apiExample {json} Response:
                   { "success": bool }
        """
