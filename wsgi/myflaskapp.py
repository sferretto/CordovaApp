from flask import Flask
from flask import Flask,request, send_from_directory
from flask import render_template
from flask import jsonify


app = Flask(__name__)



@app.route("/readPositions/", methods = ["POST"])
def readPositions():
    return stringa

    
if __name__ == "__main__":
    app.debug=True
    
 