# sitemate_challenge

# Issue Tracker

A simple Issue Tracker application built with a Flask backend and a React frontend. The application allows you to create, read, update, and delete issues.

## Features

- **Create Issue**: Add a new issue with a title and description.
- **Read Issues**: View the list of all issues with detailed information (ID, title, and description).
- **Update Issue**: Modify the title or description of an existing issue.
- **Delete Issue**: Remove an issue from the list.

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: React, Material-UI (MUI)

## Setup and Installation

### Prerequisites

- Python 3.x
- Node.js
- npm (Node Package Manager)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/callumholt/sitemate_challenge.git
   cd sitemate_challenge
   ```

2. Create and activate a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required Python packages:

   ```bash
   pip install Flask flask-cors
   ```

4. Run the Flask server:

   ```bash
   python3 server.py
   ```

### Frontend Setup

1. Navigate to the React client directory:

   ```bash
   cd sitemate_challenge/issue-tracker-client
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

## Running the Application

1. Ensure the Flask server is running:

   ```bash
   python3 server.py
   ```

2. Start the React development server:

   ```bash
   cd issue-tracker-client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit pull requests or open issues to improve this project.
