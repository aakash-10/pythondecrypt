
from Naked.toolshed.shell import muterun_js
from flask import Flask
app = Flask(__name__)
# web: gunicorn wsgi:app
@app.route('/')
def hello():
    secret="Files will never end"
    thor="What can you do about it"
    l= ['1','2']
    line_list=[]
    total_num_lines=0
    print("zx")
    for line in l:
        print("x")
        total_num_lines=0
        line = line.strip()
        pathNodeScript = 'decrypt.js'
        cmd = pathNodeScript + " " + line + " " + secret + " " + thor

        response = muterun_js(cmd)
        print(response)
        print(response.stdout)
        return response.stdout
@app.route('/hello')
def test():
    return {"message":"hello"}
if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)