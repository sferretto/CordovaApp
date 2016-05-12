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

# simula molto bene un database di dizionari con chiave numerica
# i dizionari possono anche essere vuoti alla partenza
registroAlunni = {0:{"numeroReg":0,"nome":"xxxxxxx","cognome":"yyyyyy","annoNascita":"1900"}}



@app.route("/")
def hello():
    #DATA_DIR = os.environ.get('OPENSHIFT_DATA_DIR', ".")
    return 'Hello 2'



#---
@app.route("/index.html")
def hello1():
    #return "--inedx.html-- !"
    return render_template( 'index.html')

#---
'''
@app.route("/<nomeFile>")
def trovaFileInTemplate(nomeFile):
    
    return render_template( nomeFile)
'''

if __name__ == "__main__":
    app.run(debug=True)
