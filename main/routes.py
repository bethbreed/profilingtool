from flask import Blueprint, render_template, url_for

site = Blueprint('site', __name__)

@site.route('/')
def index():
    return render_template("index.html")

@site.route('/something')
def something():
    return render_template('something.html')