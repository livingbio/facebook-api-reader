import requests
import re
from bs4 import BeautifulSoup
import pandas
re_table = re.compile(
    r'<h3>(\w+)</h3><div class="_57-c">(<table class.*</table>)</div>')


def parse_doc(url, fields=set()):
    filename = url.split('/')[-1]
    content = requests.get(url).content
    index = 0

    while True:
        # import pdb; pdb.set_trace()
        x = content.find('_57-c', index)
        h3 = content.rfind('<h3', 0, x)
        title = re.findall('<h3[^<]*>([\w\s]+)</h3>', content[h3:x])[0]

        start = content.find('<table', x)
        end = content.find('</table>', start)

        content = content[start:end + len('</table>')]
        if end < 0:
            break

        index = end
        if title == 'Fields':
            body = BeautifulSoup(content)
            if 'v2.3' not in url:
                codes = body.select('._yc span code')
                types = body.select('._yb')
                desps = body.select('tr > td:nth-of-type(2)')

                assert len(codes) == len(types) == len(desps)
            else:
                codes = body.select('tr > td:nth-of-type(1)')
                desps = body.select('tr > td:nth-of-type(2)')
                types = body.select('tr > td:nth-of-type(3)')

                assert len(codes) == len(types) == len(desps)

                new_codes = []
                new_types = []
                new_desps = []

                for code, type, desp in zip(codes, types, desps):
                    # print code.parent.attrs['class']
                    if 'hidden_elem' in code.parent.attrs['class']:
                        continue

                    new_codes.append(code)
                    new_types.append(type)
                    new_desps.append(desp)

                codes = new_codes
                types = new_types
                desps = new_desps

            api = {
                "name": filename,
                "fields": {}
            }

            for code, _type, desp in zip(codes, types, desps):
                desp = desp.text
                # if '.' in desp:
                # desp = desp[0:desp.find('.')]

                required = 'Core' in desp
                default = "Default" in desp

                desp = desp.replace("Core", "")
                desp = desp.replace("Default", "")

                code = code.text
                _type = _type.text

                if 'numeric string' == _type:
                    _type = 'numberic_string'

                elif 'enum' in _type:
                    _type = 'string'

                elif '|' in _type:
                    _type = "Profile"
                elif not _type and code == 'from':
                    _type = "Profile"

                _type = _type.split(' ')[0]
                _type = _type.replace('`', '')

                if 'list<' in _type:
                    _type = _type.replace('list<', '').replace('>', '')
                    _type += '[]'

                # if not fields or code in fields:
                api['fields'][str(code)] = {
                    "type": str(_type),
                    "name": str(code),
                    "desp": str(desp),
                    "required": required,
                    "default": default
                }

            if 'id' not in api['fields']:
                api["type"] = "struct"
            else:
                api["type"] = "node"

            with open('./api/%s.yml' % filename, 'w') as ofile:
                yaml.dump(api, ofile)

            return

if __name__ == '__main__':
    import yaml
    config = yaml.load(open('config.yml'))
    for k in config['nodes']:
        parse_doc(**config['nodes'][k])

    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/v2.3/comment')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/v2.3/link')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/v2.3/status')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/page')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/user',
    #     {'id', 'about', 'address', 'age_range', 'bio', 'birthday', 'education', 'email', 'first_name', 'gender',
    #     'last_name', 'middle_name', 'name', 'relationship_status', 'languages', 'religion', 'verified', 'work', 'cover', 'political'})
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/v2.3/post')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/v2.3/notification')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/photo')
    # parse_doc('https://developers.facebook.com/docs/graph-api/reference/video')
