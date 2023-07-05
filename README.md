# DevLit🔥

DevLit is a web-based Code Editor built with React. It allows users to write and run HTML, CSS, and JavaScript code in real-time, providing a live output preview. Users can sign in with their Google accounts using Firebase Authentication.

## Features

- **Real-time Editing:** Write code in the browser and see the changes instantly.
- **HTML, CSS, and JavaScript Support:** DevLit supports all three major web technologies.
- **Live Output Preview:** Get immediate feedback on your code by viewing the output within the Browser.
- **User-Friendly Interface:** The interface is designed to be intuitive and easy to use.
- **Firebase Authentication:** Sign in to DevLit with your Google account for a personalized experience.

## Live: 

https://devlit.vercel.app

## Installation

To use DevLit locally, follow these steps:

1. Clone the repository: `git clone https://github.com/mukundsolanki/Devlit-v2.git`
2. Navigate to the project directory: `cd Devlit-v2`
3. Install the dependencies: `npm install`
4. Set up a Firebase project:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable the "Google" sign-in provider in the Authentication section.
   - Copy your Firebase project's configuration (Web App) credentials.
5. Create a `.env` file in the root directory and add your Firebase credentials as environment variables:
    ```
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
    ```

6. Start the development server: `npm start`
7. Open your browser and visit `http://localhost:3000`

## Usage

1. Once the development server is running, you can access the DevLit in your browser.
2. Click the "Sign in with Google" button to authenticate with your Google account via Firebase.
3. Write your HTML, CSS, and JavaScript code in the provided editor panes.
4. As you make changes, the output preview will update automatically.
5. Experiment with different code snippets and see the results in real-time.
7. Sign out when you're done by clicking the "Log out" button.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository. You can also fork the project and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. You can find the details in the [LICENSE](LICENSE) file.
