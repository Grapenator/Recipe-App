import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from backend import create_app

app = create_app()
if __name__ == '__main__':
    app.run(debug=True, port=5000)