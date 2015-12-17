# -*- coding: utf-8 -*-
from distutils.core import setup
from setuptools import find_packages

setup(
    name='django-tinymce-biblio',
    version='0.0.1',
    author=u'Rick Taylor',
    author_email='rick.taylor@york.ac.uk',
    packages=find_packages(),
    include_package_data=True,
    url='https://github.com/ricktaylord/django-tinymce-biblio',
    description='TinyMCE plugin for creating Biblio tags via Drupal API',
    zip_safe=False,
)
