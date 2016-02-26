from db.models import _Node
from schema import Schema
from db.validator import *

class {{name}}(_Node):
    namespace = "{{name}}"
    get_validater = Schema({
        {% for fname, field in fields|dictsort %}
        {% if accept_fields is defined and fname in accept_fields %}
        Optional('{{fname}}'): is_{{field.type}},
        {% endif %}
        {% endfor %}
    })
    update_validater = Schema({
        {% for fname, field in fields|dictsort %}
        {% if update_fields is defined and fname in update_fields %}
        {% if field.required %}
        '{{fname}}':{% else %}
        Optional('{{fname}}'):{% endif %} is_{{field.type}},
        {% endif %}
        {% endfor %}
    })
    insert_validater = Schema({
        {% for fname, field in fields|dictsort %}
        {% if insert_fields is defined and fname in insert_fields %}
        {% if field.required %}
        '{{fname}}':{% else %}
        Optional('{{fname}}'):{% endif %} is_{{field.type}},
        {% endif %}
        {% endfor %}
    })

    @classmethod
    def get(cls, id):
        """
        {% if type == "struct" %}
        @api {struct} /{{name}}/ {{name}} information
        @apiName {{name}}
        @apiGroup {{name}}

        {% for fname, field in fields|dictsort %}
        {% if accept_fields is defined and fname in accept_fields %}
        @apiSuccess { {{field.type}} } {{fname}} {{field.desp}}
        {% endif %}
        {% endfor %}

        {% else %}
        @api {get} /{{name}}/:id Request {{name}} information
        @apiName Get {{name}}
        @apiGroup {{name}}

        @apiParam {string} id {{name}} unique ID.

        {% for fname, field in fields|dictsort %}
        {% if accept_fields is defined and fname in accept_fields %}
        @apiSuccess { {{field.type}} } {{fname}} {{field.desp}}
        {% endif %}
        {% endfor %}

        {% endif %}
        """
        return super({{name}}, cls).get(id)

    def update(self, data):
        """
        {% if type == "node" and update_fields is defined %}
        @api {post} /{{name}}/:id Update {{name}} information
        @apiName Update {{name}}
        @apiGroup {{name}}

        {% for fname, field in fields|dictsort %}
        {% if update_fields is defined and fname in update_fields %}
        {% if field.required %}
        @apiParam { {{field.type}} } {{fname}} {{field.desp}}
        {% else %}
        @apiParam { {{field.type}} } [{{fname}}] {{field.desp}}
        {% endif %}
        {% endif %}
        {% endfor %}

        @apiExample {json} Response:
                   { "success": bool }

        {% endif %}
        """
        return super({{name}}, self).update(data)

    @classmethod
    def insert(cls, data):
        """
        {% if type == "node" %}
        @api {post} /{{name}}/ Insert new {{name}} information
        @apiName Insert {{name}}
        @apiGroup {{name}}

        {% for fname, field in fields|dictsort %}
        {% if insert_fields is defined and fname in insert_fields %}
        {% if field.required %}
        @apiParam { {{field.type}} } {{fname}} {{field.desp}}
        {% else %}
        @apiParam { {{field.type}} } [{{fname}}] {{field.desp}}
        {% endif %}
        {% endif %}
        {% endfor %}

        {% if insert_example is defined %}
        @apiParamExample {json} Request-Example:
            {{ insert_example }}
        {% endif %}

        @apiExample {json} Response:
                   { "success": bool }

        {% endif %}
        """
        return super({{name}}, cls).insert(data)


    def delete(self):
        """
        {% if type == "node" %}
        @api {delete} /{{name}}/:id Delete {{name}} information
        @apiName Delete {{name}}
        @apiGroup {{name}}

        @apiExample {json} Response:
                   { "success": bool }
        {% endif %}
        """
        return super({{name}}, self).delete()


    {% if edges is defined %}
    {% for key, field in edges|dictsort %}
    def list_{{key}}(self, cursor):
        """
        @api {get} /{{name}}/:id/{{key}} List {{key}} information
        @apiName List {{name}}'s {{key}}
        @apiGroup {{name}}

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

        @apiSuccess { {{field.type}} } {{key}} related {{field.type}}
        """
        return self._list_edges("{{key}}", cursor)

    {% endfor %}
    {% endif %}

    {% if apis is defined %}
    {% for key, field in apis|dictsort %}
    def {{key}}(self):
        """
        @api { {{ field.method }} }  /{{name}}/{{key}} {{field.desp}}
        @apiName let {{name}} {{key}}
        @apiGroup {{name}}

        {% if field.params is defined %}
        {% for param, p_field in field.params|dictsort %}
        @apiParam { {{p_field.type}} } {{param}} {{p_field.desp}}
        {% endfor %}
        {% endif %}

        @apiExample {json} Response:
                   { "success": bool }
        """
    {% endfor %}
    {% endif %}

