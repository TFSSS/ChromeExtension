# -*- coding: utf-8 -*-
from flask import *
from flask_cors import CORS # <-追加
import json

api = Flask(__name__)
CORS(api) # <-追加

@api.route('/', methods=['POST'])
def sample():
    data = request.data.decode('utf-8')
    data = json.loads(data)
    date = str(data['date'])
    url = str(data['url'])
    title = str(data[''])
    print(date)
    print()

    result = {'result': 'Success!!'}

    return make_response(jsonify(result))

@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    api.run(port=3000)