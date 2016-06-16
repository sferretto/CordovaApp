from flask import Flask

from flask import Flask,request, send_from_directory
from flask import render_template
from flask import jsonify
from json import dumps



app = Flask(__name__)
positions = {}

@app.route("/")
def hello():
    return render_template( 'index.html')

@app.route("/test")
def test():
    return render_template( 'indexTest.html')

@app.route("/js/<nomeFileJs>")
def jsLoad(nomeFileJs):
    return send_from_directory('js', nomeFileJs)

@app.route("/css/<nomeFileCss>")
def cssLoad(nomeFileCss):
    return send_from_directory('css', nomeFileCss)
   


@app.route("cordovaapp-sferretto.rhcloud.com", methods = ["POST"])
def readPositions():
    stringa = str(positions)
    return stringa


@app.route("cordovaapp-sferretto.rhcloud.com", methods = ["POST"])
def cleanPositions():
    positions = {}
    return ""
    
if __name__ == "__main__":
    app.debug=True
    # app.run(debug=True, port=5006)
 