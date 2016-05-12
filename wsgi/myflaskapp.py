from flask import Flask

#---
import os
from flask import request, send_from_directory
from flask import render_template
from flask import jsonify
#from flask.ext.cors import CORS

#CORS(app)
#---




app = Flask(__name__)


@app.route("/")
def hello():
    DATA_DIR = os.environ.get('OPENSHIFT_DATA_DIR', ".")
    return DATA_DIR



#---
@app.route("/index.html")
def hello1():
    #return "--inedx.html-- !"
    return render_template( 'index.html')

#---

if __name__ == "__main__":
    app.run(debug=True)
