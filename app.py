from flask import Flask, render_template, url_for
from flask_bootstrap import Bootstrap

from main.routes import site

app = Flask(__name__)
Bootstrap(app)

app.register_blueprint(site)

if __name__ == '__main__':
    app.run(debug=True)