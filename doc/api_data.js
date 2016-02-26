define({ "api": [
  {
    "type": "delete",
    "url": "/album/:id",
    "title": "Delete album information",
    "name": "Delete_album",
    "group": "album",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "get",
    "url": "/album/:id",
    "title": "Request album information",
    "name": "Get_album",
    "group": "album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>album unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>Number of photos in this album.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "cover_photo",
            "description": "<p>The ID of the album&#39;s cover photo.</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "created_time",
            "description": "<p>The time the album was initially created.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the album.</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The profile that created the album.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The album ID.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>A link to this album on Facebook.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The title of the album.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "privacy",
            "description": "<p>The privacy settings for the album.</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "updated_time",
            "description": "<p>The last time the album was updated.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "post",
    "url": "/album/",
    "title": "Insert new album information",
    "name": "Insert_album",
    "group": "album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cover_photo",
            "description": "<p>The ID of the album&#39;s cover photo.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the album.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The title of the album.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "privacy",
            "description": "<p>The privacy settings for the album.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "get",
    "url": "/album/:id/comments",
    "title": "List comments information",
    "name": "List_album_s_comments",
    "group": "album",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comments",
            "description": "<p>related Comment</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "get",
    "url": "/album/:id/likes",
    "title": "List likes information",
    "name": "List_album_s_likes",
    "group": "album",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like",
            "optional": false,
            "field": "likes",
            "description": "<p>related Like</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "get",
    "url": "/album/:id/photos",
    "title": "List photos information",
    "name": "List_album_s_photos",
    "group": "album",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Photo",
            "optional": false,
            "field": "photos",
            "description": "<p>related Photo</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "post",
    "url": "/album/:id",
    "title": "Update album information",
    "name": "Update_album",
    "group": "album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cover_photo",
            "description": "<p>The ID of the album&#39;s cover photo.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the album.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The title of the album.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "privacy",
            "description": "<p>The privacy settings for the album.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/album.py",
    "groupTitle": "album"
  },
  {
    "type": "delete",
    "url": "/comment/:id",
    "title": "Delete comment information",
    "name": "Delete_comment",
    "group": "comment",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "get",
    "url": "/comment/:id",
    "title": "Request comment information",
    "name": "Get_comment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>comment unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "StoryAttachment",
            "optional": false,
            "field": "attachment",
            "description": "<p>Link or photo attached to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "int32",
            "optional": false,
            "field": "comment_count",
            "description": "<p>Number of replies to this comment</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "created_time",
            "description": "<p>The time this comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The person that made this comment</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "int32",
            "optional": false,
            "field": "like_count",
            "description": "<p>Number of times this comment was liked</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Parent object this comment was made on</p> "
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "user_likes",
            "description": "<p>Whether the viewer has liked this comment</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/comment/",
    "title": "Insert new comment information",
    "name": "Insert_comment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StoryAttachment",
            "optional": true,
            "field": "attachment",
            "description": "<p>Link or photo attached to the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "object",
            "description": "<p>Parent object this comment was made on</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{'attachment':{'id': '123'}, 'message': 'test message', 'object': {'id': '456'} }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "get",
    "url": "/comment/:id/comments",
    "title": "List comments information",
    "name": "List_comment_s_comments",
    "group": "comment",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comments",
            "description": "<p>related Comment</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "get",
    "url": "/comment/:id/likes",
    "title": "List likes information",
    "name": "List_comment_s_likes",
    "group": "comment",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like",
            "optional": false,
            "field": "likes",
            "description": "<p>related Like</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "post",
    "url": "/comment/:id",
    "title": "Update comment information",
    "name": "Update_comment",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StoryAttachment",
            "optional": true,
            "field": "attachment",
            "description": "<p>Link or photo attached to the comment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The comment text</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/comment.py",
    "groupTitle": "comment"
  },
  {
    "type": "delete",
    "url": "/cover-photo/:id",
    "title": "Delete cover-photo information",
    "name": "Delete_cover_photo",
    "group": "cover_photo",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/cover-photo.py",
    "groupTitle": "cover_photo"
  },
  {
    "type": "get",
    "url": "/cover-photo/:id",
    "title": "Request cover-photo information",
    "name": "Get_cover_photo",
    "group": "cover_photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>cover-photo unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "numberic_string",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the cover photo</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>Direct URL for the person&#39;s cover photo image</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/cover-photo.py",
    "groupTitle": "cover_photo"
  },
  {
    "type": "post",
    "url": "/cover-photo/",
    "title": "Insert new cover-photo information",
    "name": "Insert_cover_photo",
    "group": "cover_photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>Direct URL for the person&#39;s cover photo image</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/cover-photo.py",
    "groupTitle": "cover_photo"
  },
  {
    "type": "post",
    "url": "/cover-photo/:id",
    "title": "Update cover-photo information",
    "name": "Update_cover_photo",
    "group": "cover_photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>Direct URL for the person&#39;s cover photo image</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/cover-photo.py",
    "groupTitle": "cover_photo"
  },
  {
    "type": "delete",
    "url": "/experience/:id",
    "title": "Delete experience information",
    "name": "Delete_experience",
    "group": "experience",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/experience.py",
    "groupTitle": "experience"
  },
  {
    "type": "get",
    "url": "/experience/:id",
    "title": "Request experience information",
    "name": "Get_experience",
    "group": "experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>experience unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p> "
          },
          {
            "group": "Success 200",
            "type": "dict",
            "optional": false,
            "field": "ext",
            "description": "<p>The extension field of experience.</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>From</p> "
          },
          {
            "group": "Success 200",
            "type": "numberic_string",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/experience.py",
    "groupTitle": "experience"
  },
  {
    "type": "post",
    "url": "/experience/",
    "title": "Insert new experience information",
    "name": "Insert_experience",
    "group": "experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Description</p> "
          },
          {
            "group": "Parameter",
            "type": "dict",
            "optional": true,
            "field": "ext",
            "description": "<p>The extension field of experience.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Name</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/experience.py",
    "groupTitle": "experience"
  },
  {
    "type": "post",
    "url": "/experience/:id",
    "title": "Update experience information",
    "name": "Update_experience",
    "group": "experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Description</p> "
          },
          {
            "group": "Parameter",
            "type": "dict",
            "optional": true,
            "field": "ext",
            "description": "<p>The extension field of experience.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Name</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/experience.py",
    "groupTitle": "experience"
  },
  {
    "type": "get",
    "url": "/friend/:id",
    "title": "Request friend information",
    "name": "Get_friend",
    "group": "friend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>friend unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The person who create friendship</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Target object this friendship was made on</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/friend.py",
    "groupTitle": "friend"
  },
  {
    "type": "delete",
    "url": "/friend-request/:id",
    "title": "Delete friend-request information",
    "name": "Delete_friend_request",
    "group": "friend_request",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/friend-request.py",
    "groupTitle": "friend_request"
  },
  {
    "type": "get",
    "url": "/friend-request/:id",
    "title": "Request friend-request information",
    "name": "Get_friend_request",
    "group": "friend_request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>friend-request unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "created_time",
            "description": "<p>The time this comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The person who sent the friend request</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "object",
            "description": "<p>The person to whom the friend request was sent. This will always be the current user.</p> "
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "unread",
            "description": "<p>Indicates that the notification is unread. Note that &#39;read&#39; notifications will not be accessible.</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "updated_time",
            "description": "<p>When the notification was last updated.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/friend-request.py",
    "groupTitle": "friend_request"
  },
  {
    "type": "post",
    "url": "/friend-request/",
    "title": "Insert new friend-request information",
    "name": "Insert_friend_request",
    "group": "friend_request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Parameter",
            "type": "User",
            "optional": true,
            "field": "object",
            "description": "<p>The person to whom the friend request was sent. This will always be the current user.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/friend-request.py",
    "groupTitle": "friend_request"
  },
  {
    "type": "post",
    "url": "/friend-request/:id",
    "title": "Update friend-request information",
    "name": "Update_friend_request",
    "group": "friend_request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "unread",
            "description": "<p>Indicates that the notification is unread. Note that &#39;read&#39; notifications will not be accessible.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/friend-request.py",
    "groupTitle": "friend_request"
  },
  {
    "type": "get",
    "url": "/like/:id",
    "title": "Request like information",
    "name": "Get_like",
    "group": "like",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>like unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The person who create friendship</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Target object this friendship was made on</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/like.py",
    "groupTitle": "like"
  },
  {
    "type": "delete",
    "url": "/location/:id",
    "title": "Delete location information",
    "name": "Delete_location",
    "group": "location",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/location.py",
    "groupTitle": "location"
  },
  {
    "type": "get",
    "url": "/location/:id",
    "title": "Request location information",
    "name": "Get_location",
    "group": "location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>location unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The location&#39;s id.</p> "
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p> "
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "region",
            "description": "<p>Region</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>State</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "street",
            "description": "<p>Street</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/location.py",
    "groupTitle": "location"
  },
  {
    "type": "post",
    "url": "/location/",
    "title": "Insert new location information",
    "name": "Insert_location",
    "group": "location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p> "
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude</p> "
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region",
            "description": "<p>Region</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "street",
            "description": "<p>Street</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip code</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/location.py",
    "groupTitle": "location"
  },
  {
    "type": "post",
    "url": "/location/:id",
    "title": "Update location information",
    "name": "Update_location",
    "group": "location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p> "
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude</p> "
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region",
            "description": "<p>Region</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "street",
            "description": "<p>Street</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip code</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/location.py",
    "groupTitle": "location"
  },
  {
    "type": "delete",
    "url": "/notification/:id",
    "title": "Delete notification information",
    "name": "Delete_notification",
    "group": "notification",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/notification.py",
    "groupTitle": "notification"
  },
  {
    "type": "get",
    "url": "/notification/:id",
    "title": "Request notification information",
    "name": "Get_notification",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>notification unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "created_time",
            "description": "<p>When the notification was created.</p> "
          },
          {
            "group": "Success 200",
            "type": "Profile",
            "optional": false,
            "field": "from",
            "description": "<p>The entity (user, page, app, etc.) that &#39;sent&#39;, or is the source of the notification.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The notification&#39;s id.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>The URL that clicking on the notification would take someone.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The object (this can be a post, a photo, a comment, etc.) that was the subject of the notification.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The message text in the notification.</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "to",
            "description": "<p>The entity that received the notification.</p> "
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "unread",
            "description": "<p>Indicates that the notification is unread. Note that &#39;read&#39; notifications will not be accessible.</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "updated_time",
            "description": "<p>When the notification was last updated.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/notification.py",
    "groupTitle": "notification"
  },
  {
    "type": "post",
    "url": "/notification/",
    "title": "Insert new notification information",
    "name": "Insert_notification",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "link",
            "description": "<p>The URL that clicking on the notification would take someone.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "object",
            "description": "<p>The object (this can be a post, a photo, a comment, etc.) that was the subject of the notification.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The message text in the notification.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/notification.py",
    "groupTitle": "notification"
  },
  {
    "type": "post",
    "url": "/notification/:id",
    "title": "Update notification information",
    "name": "Update_notification",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "unread",
            "description": "<p>Indicates that the notification is unread. Note that &#39;read&#39; notifications will not be accessible.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/notification.py",
    "groupTitle": "notification"
  },
  {
    "type": "delete",
    "url": "/page/:id",
    "title": "Delete page information",
    "name": "Delete_page",
    "group": "page",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "get",
    "url": "/page/:id",
    "title": "Request page information",
    "name": "Get_page",
    "group": "page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>page unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "about",
            "description": "<p>Information about the Page</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bio",
            "description": "<p>Biography of the band. Applicable to Bands</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>The Page&#39;s category. e.g. Product/Service, Computers/Technology</p> "
          },
          {
            "group": "Success 200",
            "type": "CoverPhoto",
            "optional": false,
            "field": "cover",
            "description": "<p>Information about the page&#39;s cover photo</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Page</p> "
          },
          {
            "group": "Success 200",
            "type": "numberic_string",
            "optional": false,
            "field": "id",
            "description": "<p>Page ID. No access token is required to access this field</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Page</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "post",
    "url": "/page/",
    "title": "Insert new page information",
    "name": "Insert_page",
    "group": "page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "about",
            "description": "<p>Information about the Page</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>Biography of the band. Applicable to Bands</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>The Page&#39;s category. e.g. Product/Service, Computers/Technology</p> "
          },
          {
            "group": "Parameter",
            "type": "CoverPhoto",
            "optional": true,
            "field": "cover",
            "description": "<p>Information about the page&#39;s cover photo</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Page</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Page</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "get",
    "url": "/page/:id/feed",
    "title": "List feed information",
    "name": "List_page_s_feed",
    "group": "page",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "feed",
            "description": "<p>related Post</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "get",
    "url": "/page/:id/friends",
    "title": "List friends information",
    "name": "List_page_s_friends",
    "group": "page",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Friend",
            "optional": false,
            "field": "friends",
            "description": "<p>related Friend</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "post",
    "url": "/page/:id",
    "title": "Update page information",
    "name": "Update_page",
    "group": "page",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "about",
            "description": "<p>Information about the Page</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>Biography of the band. Applicable to Bands</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>The Page&#39;s category. e.g. Product/Service, Computers/Technology</p> "
          },
          {
            "group": "Parameter",
            "type": "CoverPhoto",
            "optional": true,
            "field": "cover",
            "description": "<p>Information about the page&#39;s cover photo</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the Page</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Page</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/page.py",
    "groupTitle": "page"
  },
  {
    "type": "get",
    "url": "/photo/:id",
    "title": "Request photo information",
    "name": "Get_photo",
    "group": "photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>photo unique ID.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/photo.py",
    "groupTitle": "photo"
  },
  {
    "type": "delete",
    "url": "/post/:id",
    "title": "Delete post information",
    "name": "Delete_post",
    "group": "post",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:id",
    "title": "Request post information",
    "name": "Get_post",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>post unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "caption",
            "description": "<p>The caption of a link in the post (appears beneath the name).</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "created_time",
            "description": "<p>The time the post was initially published.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A description of a link in the post (appears beneath the caption).</p> "
          },
          {
            "group": "Success 200",
            "type": "Profile",
            "optional": false,
            "field": "from",
            "description": "<p>Information about the profile that posted the message.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "icon",
            "description": "<p>A link to an icon representing the type of this post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The post ID</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>The link attached to this post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The status message in the post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the link.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>The picture scraped from any link included with the post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "privacy",
            "description": "<p>The privacy settings of the post. enum{EVERYONE, ALL_FRIENDS, FRIENDS_OF_FRIENDS, SELF}</p> "
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "shares",
            "description": "<p>The shares count of this post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>A URL to any Flash movie or video file attached to the post.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>A string indicating the object type of this post.</p> "
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "updated_time",
            "description": "<p>The time of the last change to this post, or the comments on it.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "post",
    "url": "/post/",
    "title": "Insert new post information",
    "name": "Insert_post",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "caption",
            "description": "<p>The caption of a link in the post (appears beneath the name).</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of a link in the post (appears beneath the caption).</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "icon",
            "description": "<p>A link to an icon representing the type of this post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "link",
            "description": "<p>The link attached to this post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The status message in the post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the link.</p> "
          },
          {
            "group": "Parameter",
            "type": "Profile",
            "optional": true,
            "field": "object",
            "description": "<p>The target profile of the post</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:id/comments",
    "title": "List comments information",
    "name": "List_post_s_comments",
    "group": "post",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comments",
            "description": "<p>related Comment</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:id/likes",
    "title": "List likes information",
    "name": "List_post_s_likes",
    "group": "post",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like",
            "optional": false,
            "field": "likes",
            "description": "<p>related Like</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "/post/:id/reports",
    "title": "List reports information",
    "name": "List_post_s_reports",
    "group": "post",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Report",
            "optional": false,
            "field": "reports",
            "description": "<p>related Report</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "post",
    "url": "/post/:id",
    "title": "Update post information",
    "name": "Update_post",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "caption",
            "description": "<p>The caption of a link in the post (appears beneath the name).</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of a link in the post (appears beneath the caption).</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "icon",
            "description": "<p>A link to an icon representing the type of this post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "link",
            "description": "<p>The link attached to this post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The status message in the post.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the link.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "privacy",
            "description": "<p>The privacy settings of the post. enum{EVERYONE, ALL_FRIENDS, FRIENDS_OF_FRIENDS, SELF}</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>A URL to any Flash movie or video file attached to the post.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "delete",
    "url": "/post-report/:id",
    "title": "Delete post-report information",
    "name": "Delete_post_report",
    "group": "post_report",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post-report.py",
    "groupTitle": "post_report"
  },
  {
    "type": "get",
    "url": "/post-report/:id",
    "title": "Request post-report information",
    "name": "Get_post_report",
    "group": "post_report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>post-report unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "from",
            "description": "<p>The person that made this post report</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Parent object this post report was made on</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>The process state</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/post-report.py",
    "groupTitle": "post_report"
  },
  {
    "type": "post",
    "url": "/post-report/",
    "title": "Insert new post-report information",
    "name": "Insert_post_report",
    "group": "post_report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "object",
            "description": "<p>Parent object this post report was made on</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post-report.py",
    "groupTitle": "post_report"
  },
  {
    "type": "post",
    "url": "/post-report/:id",
    "title": "Update post-report information",
    "name": "Update_post_report",
    "group": "post_report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>The comment text</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "object",
            "description": "<p>Parent object this post report was made on</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>The process state</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post-report.py",
    "groupTitle": "post_report"
  },
  {
    "type": " get ",
    "url": "/post/search",
    "title": "search post",
    "name": "let_post_search",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>keywords</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>user&#39;s id</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/post.py",
    "groupTitle": "post"
  },
  {
    "type": "delete",
    "url": "/profile-picture/:id",
    "title": "Delete profile-picture information",
    "name": "Delete_profile_picture",
    "group": "profile_picture",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/profile-picture.py",
    "groupTitle": "profile_picture"
  },
  {
    "type": "get",
    "url": "/profile-picture/:id",
    "title": "Request profile-picture information",
    "name": "Get_profile_picture",
    "group": "profile_picture",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>profile-picture unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the profile picture</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/profile-picture.py",
    "groupTitle": "profile_picture"
  },
  {
    "type": "post",
    "url": "/profile-picture/",
    "title": "Insert new profile-picture information",
    "name": "Insert_profile_picture",
    "group": "profile_picture",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "url",
            "description": "<p>URL of the profile picture</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/profile-picture.py",
    "groupTitle": "profile_picture"
  },
  {
    "type": "post",
    "url": "/profile-picture/:id",
    "title": "Update profile-picture information",
    "name": "Update_profile_picture",
    "group": "profile_picture",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "url",
            "description": "<p>URL of the profile picture</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/profile-picture.py",
    "groupTitle": "profile_picture"
  },
  {
    "type": "delete",
    "url": "/story_attachment/:id",
    "title": "Delete story_attachment information",
    "name": "Delete_story_attachment",
    "group": "story_attachment",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/story_attachment.py",
    "groupTitle": "story_attachment"
  },
  {
    "type": "get",
    "url": "/story_attachment/:id",
    "title": "Request story_attachment information",
    "name": "Get_story_attachment",
    "group": "story_attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>story_attachment unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Text accompanying the attachment</p> "
          },
          {
            "group": "Success 200",
            "type": "dict",
            "optional": false,
            "field": "ext",
            "description": "<p>The extension field of attachment.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The attachment&#39;s id.</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the attachment</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the attachment</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the attachment</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/story_attachment.py",
    "groupTitle": "story_attachment"
  },
  {
    "type": "post",
    "url": "/story_attachment/",
    "title": "Insert new story_attachment information",
    "name": "Insert_story_attachment",
    "group": "story_attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Text accompanying the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "dict",
            "optional": true,
            "field": "ext",
            "description": "<p>The extension field of attachment.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "url",
            "description": "<p>URL of the attachment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/story_attachment.py",
    "groupTitle": "story_attachment"
  },
  {
    "type": "post",
    "url": "/story_attachment/:id",
    "title": "Update story_attachment information",
    "name": "Update_story_attachment",
    "group": "story_attachment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>Text accompanying the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "dict",
            "optional": true,
            "field": "ext",
            "description": "<p>The extension field of attachment.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "type",
            "description": "<p>Type of the attachment</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "url",
            "description": "<p>URL of the attachment</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/story_attachment.py",
    "groupTitle": "story_attachment"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete user information",
    "name": "Delete_user",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request user information",
    "name": "Get_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>user unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "about",
            "description": "<p>The About Me section of this person&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "Location",
            "optional": false,
            "field": "address",
            "description": "<p>The person&#39;s address</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "bio",
            "description": "<p>The person&#39;s bio</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>The person&#39;s birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)</p> "
          },
          {
            "group": "Success 200",
            "type": "CoverPhoto",
            "optional": false,
            "field": "cover",
            "description": "<p>The person&#39;s cover photo</p> "
          },
          {
            "group": "Success 200",
            "type": "Experience[]",
            "optional": false,
            "field": "education",
            "description": "<p>The person&#39;s education</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The person&#39;s primary email address listed on their profile. This field will not be returned if no valid email address is available</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>The person&#39;s first name</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value</p> "
          },
          {
            "group": "Success 200",
            "type": "numberic_string",
            "optional": false,
            "field": "id",
            "description": "<p>The id of this person&#39;s user account. This ID is unique to each app and cannot be used across different apps. Our upgrade guide provides more information about app-specific IDs</p> "
          },
          {
            "group": "Success 200",
            "type": "Experience[]",
            "optional": false,
            "field": "languages",
            "description": "<p>Facebook Pages representing the languages this person knows</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>The person&#39;s last name</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "middle_name",
            "description": "<p>The person&#39;s middle name</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The person&#39;s full name</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "political",
            "description": "<p>The person&#39;s political views</p> "
          },
          {
            "group": "Success 200",
            "type": "ProfilePicture",
            "optional": false,
            "field": "profile_picture",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "relationship_status",
            "description": "<p>The person&#39;s relationship status</p> "
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "religion",
            "description": "<p>The person&#39;s religion</p> "
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "verified",
            "description": "<p>Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions: Register for mobile Confirm their account via SMS Enter a valid credit card</p> "
          },
          {
            "group": "Success 200",
            "type": "Experience[]",
            "optional": false,
            "field": "work",
            "description": "<p>Details of a person`s work experience</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Insert new user information",
    "name": "Insert_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "about",
            "description": "<p>The About Me section of this person&#39;s profile</p> "
          },
          {
            "group": "Parameter",
            "type": "Location",
            "optional": true,
            "field": "address",
            "description": "<p>The person&#39;s address</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The person&#39;s bio</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>The person&#39;s birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)</p> "
          },
          {
            "group": "Parameter",
            "type": "CoverPhoto",
            "optional": true,
            "field": "cover",
            "description": "<p>The person&#39;s cover photo</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "education",
            "description": "<p>The person&#39;s education</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The person&#39;s primary email address listed on their profile. This field will not be returned if no valid email address is available</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>The person&#39;s first name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "languages",
            "description": "<p>Facebook Pages representing the languages this person knows</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>The person&#39;s last name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "middle_name",
            "description": "<p>The person&#39;s middle name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The person&#39;s full name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "political",
            "description": "<p>The person&#39;s political views</p> "
          },
          {
            "group": "Parameter",
            "type": "ProfilePicture",
            "optional": true,
            "field": "profile_picture",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "relationship_status",
            "description": "<p>The person&#39;s relationship status</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "religion",
            "description": "<p>The person&#39;s religion</p> "
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "verified",
            "description": "<p>Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions: Register for mobile Confirm their account via SMS Enter a valid credit card</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "work",
            "description": "<p>Details of a person`s work experience</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id/feed",
    "title": "List feed information",
    "name": "List_user_s_feed",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "feed",
            "description": "<p>related Post</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id/friendrequests",
    "title": "List friendrequests information",
    "name": "List_user_s_friendrequests",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "FriendRequest",
            "optional": false,
            "field": "friendrequests",
            "description": "<p>related FriendRequest</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id/friends",
    "title": "List friends information",
    "name": "List_user_s_friends",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Friend",
            "optional": false,
            "field": "friends",
            "description": "<p>related Friend</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user/:id/notifications",
    "title": "List notifications information",
    "name": "List_user_s_notifications",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{\n    \"data\": [],\n    \"paging\": {\n        \"cursors\": {\n            \"after\": \"MTAxNTExOTQ1MjAwNzI5NDE=\",\n            \"before\": \"NDMyNzQyODI3OTQw\"\n        },\n    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Notification",
            "optional": false,
            "field": "notifications",
            "description": "<p>related Notification</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/:id",
    "title": "Update user information",
    "name": "Update_user",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "about",
            "description": "<p>The About Me section of this person&#39;s profile</p> "
          },
          {
            "group": "Parameter",
            "type": "Location",
            "optional": true,
            "field": "address",
            "description": "<p>The person&#39;s address</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The person&#39;s bio</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>The person&#39;s birthday.  This is a fixed format string, like MM/DD/YYYY.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)</p> "
          },
          {
            "group": "Parameter",
            "type": "CoverPhoto",
            "optional": true,
            "field": "cover",
            "description": "<p>The person&#39;s cover photo</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "education",
            "description": "<p>The person&#39;s education</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The person&#39;s primary email address listed on their profile. This field will not be returned if no valid email address is available</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>The person&#39;s first name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>The gender selected by this person, male or female. This value will be omitted if the gender is set to a custom value</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "languages",
            "description": "<p>Facebook Pages representing the languages this person knows</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>The person&#39;s last name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "middle_name",
            "description": "<p>The person&#39;s middle name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The person&#39;s full name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "political",
            "description": "<p>The person&#39;s political views</p> "
          },
          {
            "group": "Parameter",
            "type": "ProfilePicture",
            "optional": true,
            "field": "profile_picture",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "relationship_status",
            "description": "<p>The person&#39;s relationship status</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "religion",
            "description": "<p>The person&#39;s religion</p> "
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "verified",
            "description": "<p>Indicates whether the account has been verified. This is distinct from the is_verified field. Someone is considered verified if they take any of the following actions: Register for mobile Confirm their account via SMS Enter a valid credit card</p> "
          },
          {
            "group": "Parameter",
            "type": "Experience[]",
            "optional": true,
            "field": "work",
            "description": "<p>Details of a person`s work experience</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": " post ",
    "url": "/user/login",
    "title": "let user login",
    "name": "let_user_login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>user&#39;s name</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>user&#39;s password</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  },
  {
    "type": " get ",
    "url": "/user/logout",
    "title": "let user logout",
    "name": "let_user_logout",
    "group": "user",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \"success\": bool }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "db/nodes/user.py",
    "groupTitle": "user"
  }
] });