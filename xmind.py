#! /usr/bin/env python
# -*- coding: utf-8 -*-
import re
from collections import OrderedDict
pattern = re.compile(r'<a name=.*>(.*)</a>')
import csv

class Node(object):
    def __init__(self, name, parent=None):
        self.name = name
        self.parent = parent
        self.label = None
        self.children = []
        self._include = None # default
        self._priority = None

        if parent:
            self.parent.children.append(self)

    def path(self):
        if self.parent:
            return self.parent.path() + [self.name.encode('utf8')]
        return [self.name.encode('utf8')]

    def __unicode__(self):
        return self.name

    def __repr__(self):
        return self.name.encode('utf8')

    @property
    def include(self):
        if not self.parent:
            return True

        if not self._include is None:
            return self._include

        return self.parent.include

    @include.setter
    def include(self, value):
        self._include = value

    @property
    def priority(self):
        if not self.parent:
            return True

        if not self._priority is None:
            return self._priority

        return self.parent.priority

    @priority.setter
    def priority(self, value):
        self._priority = value


def to_csv(filename):
    with open(filename) as ifile:
        path = []

        buf = None

        for iline in ifile:
            # handle endline
            if buf:
                iline = buf + iline
                iline = iline.replace('\n', '')
                buf = None

            if '<a ' in iline and '</a>' not in iline:
                buf = iline
                continue

            if '<img class="marker"' in iline:
                if 'priority_1.png' in iline:
                    path[-1].priority = 1
                elif 'priority_2' in iline:
                    path[-1].priority = 2
                elif 'priority_3' in iline:
                    path[-1].priority = 3

                if 'people_red.png' in iline:
                    path[-1].include = True
                elif 'people_blue' in iline:
                    path[-1].include = False

                continue

            m = pattern.findall(iline.decode('utf8'))
            if not m: continue
            iline = m[0]

            level = iline.count('&nbsp;')
            name = iline.replace('&nbsp;', '')

            path = path[:level+1]
            parent = path[-1] if path else None
            path.append(Node(name, parent))
            # print path

        def dfs(node):
            yield node

            for k in node.children:
                for p in dfs(k):
                    yield p

        # with open(filename + '.csv', 'w') as ofile:
        #     spamwriter = csv.writer(ofile)

        for p in dfs(path[0]):
            # spamwriter.writerow([p.include, p.priority] + p.path())
            x = [p.include, p.priority]
            x.extend(p.path()[1:])

            if len(x) > 2:
                print '\t'.join(map(str, x))
        # for level0 in tree:
        #     if not tree[level0]:
        #         print level0
        #         continue

        #     for level1 in tree[level0]:
        #         if not tree[level0][level1]:
        #             print level0, '\t', level1
        #             continue

        #         if len(tree[level0][level1]) == 1 and len(tree[level0][level1].values()[0]) > 1:
        #             print level0, '\t', level1, '\t', ",".join(tree[level0][level1].values()[0])
        #         else:
        #             print level0, '\t', level1, '\t', ",".join(tree[level0][level1])


if __name__ == '__main__':
    import clime; clime.start(debug=True)
