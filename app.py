from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Привіт, світ!</h1>"


@app.route('/hello/<name>')
def hello(name):
    return render_template('hello.html.j2', name=name)

if __name__ == '__main__':
    app.run(debug=True)
