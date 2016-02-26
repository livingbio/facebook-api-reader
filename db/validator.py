import re
from schema import *


def Url(url):
    if not isinstance(url, basestring):
        return False
    else:
        regex = re.compile(
            r'^(?:http|ftp)s?://'  # http:// or https://
            # domain...
            r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|'
            r'localhost|'  # localhost...
            r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|'  # ...or ipv4
            r'\[?[A-F0-9]*:[A-F0-9:]+\]?)'  # ...or ipv6
            r'(?::\d+)?'  # optional port
            , re.IGNORECASE)
        result = regex.match(url)

        return result and True


def is_numberic_string(x):
    if not isinstance(x, basestring):
        return False

    try:
        int(x)
        return True
    except:
        return False


def is_datetime(x):
    pass

is_dict = Use(dict)
is_int32 = Use(int)
is_int = is_int32
is_string = Use(str)
is_bool = User(bool)
