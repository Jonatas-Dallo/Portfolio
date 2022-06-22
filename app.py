from flask import Flask, render_template

app = Flask("__name__",template_folder='templates')

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/int')
def interesses():
    return render_template('interesses.html')

@app.route('/port')
def portfolio():
    return render_template('portfólio.html')


if __name__ == "__ main__":
    app.run(debug=True)