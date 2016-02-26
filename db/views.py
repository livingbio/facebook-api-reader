import webapp2
from .models import Node, Edge, EdgeManager
from schema import *


class _Node(object):
    # a proxy model

    namespace = None

    get_validater = Schema({})
    insert_validater = Schema({})
    update_validater = Schema({})

    register_model = {}

    def __init__(self, node):
        self.node = node

    @property
    def id(self):
        return self.node.key.id()

    @classmethod
    def get(cls, id):
        node = Node.get_by_id(id)
        assert node.namespace == cls.namespace
        return cls(node)

    @classmethod
    def insert(cls, data):
        data = self.insert_schema.validate(data)
        node = Node.create(cls.namespace, data)
        return cls(node)

    def to_dict(self):
        return self.get_schema.validate(self.node.to_dict())

    def update(self, data):
        data = self.update_schema.validate(data)
        self.node.update(data)
        return self

    def delete(self):
        self.node.delete()

    def _list_edges(self, edge_type, cursor=None):
        # the default behavior
        manager = EdgeManager.get(self.id, edge_type)
        if manager:
            return manager.list(cursor)
        return []

    # def list_edges(self, edge_type, cursor=None):
    #     method = getattr(self, 'list_%s' % edge_type, None)
    #     if method:
    #         return method(id, cursor)

    #     return self._list_edges(edge_type, cursor)

    # @classmethod
    # def api_method(cls, method):
    #     method = getattr(cls, 'api_%s' % method, None)
    #     if method:
    #         return method(cls, method)


class NameSpaceHandler(webapp2.RequestHandler):

    def post(self, namespace):
        _Node.set_namespace(namespace).insert(self.request)
        # create a new type
        pass


class NodeHandler(webapp2.RequestHandler):

    def get(self, namespace, id):
        pass

    def post(self, namespace, id):
        pass

    def delete(self, namespace, id):
        pass


class EdgeHandler(webapp2.RequestHandler):

    def get(self, namespace, id, edge_type):
        pass


class MethodHandler(webapp2.RequestHandler):

    def get(self, namespace, method):
        pass

    def post(self, namespace, method):
        pass

(r'/([\w]+)', NameSpaceHandler)
(r'/([\w]+)/([\d]+)', NodeHandler)
(r'/([\w]+)/([\d]+)/([\w]+)', EdgeHandler),
(r'/([\w]+)/([\w]+)', MethodHandler),
