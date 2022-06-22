from flask import Flask, render_template

app = Flask("__name__")

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/interesse')
def interesses():
    return render_template('interesses.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


if __name__ == "__ main__":
    app.run(debug=True)