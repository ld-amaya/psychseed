from flask import Flask, redirect

app = Flask(__name__)


@app.route("/")
def redirect_page():
    """Redirect to Facebook Page"""
    return redirect("https://www.facebook.com/iwillpsychseed")
