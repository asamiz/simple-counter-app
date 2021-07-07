# Simple Counter App

A simple counter app where user can increment or decrement the value of a counter and add the value to another counter exists in the mobile version.

## Main functionality

Users can increment and decrement the value of the counter and close thea pp to add counter value to the counter on the mobile app version.

## Important Notes

- I am using deep linking to open the mobile app from the web app and pass the counter value, deep linking has three main shapes:

  - Based on uri scheme(which I am using): They are like creating a **private network** for the apps with **specific(private)** url, the main take off of this shape is that it doesn't provide a fallback option like for example if the app doesn't exist, it automatically opens the app on Google Play or App Store.
  - Based on universal links(IOS): It solves the problem that uri scheme has, **it provides a fallback option** and the **links can be public not private** and also it checks if any corresponding apps are installed or not.
  - Based on App Links(android): Same as universal links but for android devices.

  **_The reason why I used uri scheme as I don't have a Google Developer account or Apple Developer Membership and I will not be able to provide a fallback option also universal links requires having Apple Developer Membership_**

- As a result of what I mentioned in the first note, **Please make sure that you installed the app on your phone by running it locally on physical device on debugging mode or install the APK(For Android) or IPA(For IOS) as mentioned in the mobile app repo before using the web app to perform the requested cycle**

[Mobile App Repo](https://github.com/asamiz/qr-counter)

## Live Demo

The app has been deployed on `GitHub Pages` and you access the app through [this link](https://asamiz.github.io/simple-counter-app/#/)
.

### Steps to run the app locally

- Firstly, you need to clone this repo on your machine by running the following command on your cmd / terminal (after change the directory):

  ```shell
  git clone https://github.com/asamiz/simple-counter-app.git
  ```

- Secondly, change to app directory by running the following command on the same tab of your cmd / terminal:

  ```shell
  cd simple-counter-app
  ```

- Thirdly, install the required dependencies by running the following command on the same tab of your cmd / terminal:

  ```shell
  yarn
  ```

- Now, you can run the app by running the following command on the same tab of your cmd / terminal:

  ```shell
  yarn start
  ```

  Now the app is running and should open a new tab in your default browser to be able to use it, but if the app doesn't start automatically you can access it on the `localhost` port number `3000`

  ```shell
   http://localhost:3000
  ```

## Run Test Suites:

You can run the `Test Suites` for the components by running the following command in the app directory:

```shell
yarn run test
```

## App URL QR Code

You can scan this QRCode and It will open the live app on your phone

![QRCode](QRCode.png)
