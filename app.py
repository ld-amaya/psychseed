from flask import Flask, redirect

app = Flask(__name__)


@app.route("/")
"""Redirect to Facebook Page"""
return redirect("https://www.facebook.com/iwillpsychseed")
