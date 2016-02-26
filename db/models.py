from google.appengine.ext import ndb


class Node(ndb.Model):
    # the base object
    # define the behavior
    namespace = ndb.StringProperty()

    # store all property in the object
    fields = ndb.JsonProperty(default={})

    # # cache control
    # cache = ndb.JsonProperty()
    # cache_updated = ndb.DateTimeProperty()

    deleted = ndb.BooleanProperty(default=False)

    @classmethod
    def get_by_id(cls, id):
        obj = super(Node, cls).get_by_id(id)
        if obj and not obj.deleted:
            return obj

    @classmethod
    def create(cls, namespace, data):
        obj = Node(
            namespace=namespace,
            fields=data
        )
        obj.put()
        return obj

    def update(self, data):
        self.fields.update(data)
        self.put()

    def delete(self):
        assert self.deleted == False
        self.deleted = True
        self.put()

    def to_dict(self):
        obj = {"id": self.key.id()}
        obj.update(self.fields)
        return obj

class Edge(ndb.Model):
    namespace = ndb.StringProperty()
    from_node = ndb.KeyProperty(Node)
    to_node = ndb.KeyProperty(Node)

    created = ndb.DateTimeProperty(auto_now_add=True)

    deleted = ndb.BooleanProperty(default=False)

    @classmethod
    def create(cls, namespace, from_node, to_node):
        obj = cls(
            id= "%s_%s" % ( from_node.key.id(), to_node.key.id()),
            namespace=namespace,
            from_node=from_node,
            to_node=to_node
        )
        obj.put()
        return obj

    def delete(self):
        assert self.deleted == False
        self.deleted = False
        self.put()


class EdgeManager(ndb.Model):
    # id equals type + from
    namespace = ndb.StringProperty()
    from_node = ndb.KeyProperty(Node)

    cache = ndb.JsonProperty()
    cache_updated = ndb.DateTimeProperty()

    total_count = ndb.IntegerProperty(default=0)

    def refresh(self):
        self.total_count = self.query().count()
        self.put()

    @classmethod
    def get(cls, node_id, namespace):
        return EdgeManager.get_by_id("%s-%s" % (node_id, namespace))

    def add(self, node):
        edge = Edge.create(self.from_node, node)
        self.total_count += 1
        self.put()

    def query(self):
        return Edge.query().filter(
            Edge.namespace == self.namespace,
            Edge.deleted == False
        ).filter(
            Edge.from_node==self.from_node
        ).order(-Edge.updated)

    def list(self, cursor=None):
        return self.query().fetch(50, start_cursor=cursor)


