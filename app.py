from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def calculate():
    data = request.get_json()
    value = data.get('res')
    if not value:
        return jsonify({"msg":"No value is found"}), 400
    try:
        res = eval(value)
    except:
        pass
    return jsonify({'result':res})
    

if('__main__'== __name__):
    app.run(debug=True)