import jinja2
import yaml
import os

env = jinja2.Environment(
    trim_blocks=True,
    lstrip_blocks=True,
    loader=jinja2.FileSystemLoader('.')
)
template = env.get_template('api-template.pyt')

def gen_model():
    for config in os.listdir('./api'):
        if '.conf' in config: continue

        with open('./api/%s' % config) as ifile:
            config = yaml.load(ifile)
            name = config['name']

            if os.path.exists('./api/%s.conf.yml' % name):
                with open('./api/%s.conf.yml' % name) as efile:
                    kwargs = yaml.load(efile)
                    for key in kwargs:
                        if key in config:
                            if isinstance(config[key], dict):
                                config[key].update(kwargs[key])
                                continue

                        config[key] = kwargs[key]

            content = template.render(**config)
            with open('./db/nodes/%s.py' % config['name'], 'w') as ofile:
                ofile.write(content)

gen_model()
assert os.system('apidoc -i db') == 0
# assert os.system('appcfg.py update .') == 0
