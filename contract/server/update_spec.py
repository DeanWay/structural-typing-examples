import json
from app import app

with open('spec.json', 'w') as spec_file:
    spec_file.writelines(json.dumps(app.openapi(), indent=2))
