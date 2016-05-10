from flask import Flask

#---
from flask import request, send_from_directory
from flask import render_template
from flask import jsonify
from flask.ext.cors import CORS

CORS(app)
#---




app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"



#---
@app.route("/index.html")
def hello1():
    return send_from_directory('.', 'index.html')

#---

if __name__ == "__main__":
    app.run()
