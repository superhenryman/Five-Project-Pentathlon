from flask import Flask, request, render_template
from utils import init_db, insert_confession

app = Flask(__name__)
init_db()

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/confess", methods=["POST"])
def confess():
    confession = request.form.get("confession")
    print(confession)
    insert_confession(confession)
    return render_template("index.html", message=f"Submitted Succesfully. {confession}")

if __name__ == "__main__":
    app.run(debug=True)
