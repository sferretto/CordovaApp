from flask import Flask
from flask import Flask,request, send_from_directory
from flask import render_template
from flask import jsonify


app = Flask(__name__)
positions = {}


@app.route("cordovaapp-sferretto.rhcloud.com", methods = ["POST"])
def readPositions():
    stringa = str(positions)
    return stringa

    
if __name__ == "__main__":
    app.debug=True
    
 