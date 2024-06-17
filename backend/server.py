from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


issues = [
    {"id": 1, "title": "Issue 1", "description": "This is issue 1"},
    {"id": 2, "title": "Issue 2", "description": "This is issue 2"},
    {"id": 3, "title": "Issue 3", "description": "This is issue 3"},


]

@app.route('/issues', methods=['GET'])
def get_issues():
    return jsonify(issues)

@app.route('/issues', methods=['POST'])
def create_issue():
    new_issue = request.get_json()
    issues.append(new_issue)
    return jsonify(new_issue), 201

@app.route('/issues/<int:id>', methods=['PUT'])
def update_issue(id):
    issue = next((issue for issue in issues if issue["id"] == id), None)
    if issue:
        data = request.get_json()
        issue.update(data)
        return jsonify(issue)
    return jsonify({"message": "Issue not found"}), 404

@app.route('/issues/<int:id>', methods=['DELETE'])
def delete_issue(id):
    global issues
    issues = [issue for issue in issues if issue["id"] != id]
    return jsonify({"message": "Issue deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
