# Netflix GPT
- Create React App
    - npx create-react-app netflix-gpt
- Remove all the code, logo, css
- Add tailwindcss
    - In get started tailwindcss, FrameworkGuides
    - Select create-react-app and follow the steps
    - Add tailwind and stop and re-run the server

- Plan for the project!
- Netflix Home screen
- Signin & Sign-up Form
    - redirect to browse page
- Browse page (after authendication)
    - Header
    - Main movie
        - Tailer in the background
        - Movie title and play buttons
    - Movie suggestions list
        - Movie list into N
        - Vertically scrollerable
- Netflix GPT
    - A search bar 
    - Movie suggesstions

- Setup Router
    - npm i react-router-dom
    - Create a createBrowserRouter in Body component
    - ```js
            const appRouter = createBrowserRouter([
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/browse",
                    element: <Browse />
                }
            ]);
        ```
- Add a `<RouterProvider router={appRouter} />` to the body
- Create all empty compoennt Body, Browse, Header, Login

# Login 
- Created a Header, Added Header logo, 
- Created a Login screen, Added Bg image, 
- Imported Header component
- Created a basic form with Input of (Name, Email, Password)
- Added some simple CSS according to Netflix
- Added a Sign-up and Sign-in toggle
- And changed content according to Sign-in form or Sign-up forms based on toggle value
- Added Ref's to all the input
- Added Validate.js file
- In `checkValidate` validate the email, passowrd, and name and return message
- Show the error message if any error
- Add prevent default() to form

# Firebase
- https://firebase.google.com/ => Get started
- Create new project
- Give `project name`
- Enable Google analitics and `Continue`
- Select `google default account`
- And create project
- App is created so select the web app
    - Here Register your app
    - Give the `same app name`
    - And select auot hosting the web app
    - By default the npm method is selected
    - so run this in terminal `npm install firebase`
    - Add the FirebaseSDK to the project by creating `firebase.js` file and add the SDK's
    - Install firebase CLI `npm install -g firebase-tools`
    - Now login and deploy
        - firebase login
        - firebase init
            - It will ask you some config
                - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. 
                    - Ans: Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
                - Please select an option: 
                    - Ans: Use an existing project
                - Select a default Firebase project for this directory: 
                    - netflixgpt-25047 (netflixGPT)
                - What do you want to use as your public directory? - Ans build
                - Configure as a single-page app (rewrite all urls to /index.html)? - Ans No
                - Set up automatic builds and deploys with GitHub? No
        - firebase deploy
            - Copy the deployed URL
            - https://netflixgpt-25047.web.app/
- Create Sign-up user account in firebase
- Read Firebase docs
    - ~Reading documentation is the power of developer~
- Redux store
    - Install `npm i @reduxjs/toolkit`
    - Install `npm i react-redux`
    - Create appStore in utils with congifureStore which takes reducer object
    - create userSlice using createSlcie, which takes a object of  name, initialState, reducer actions
    - addUser and removeUser function
    - then export the reducer and reducer actions
    - add a Provider as wrapper to the app.js 