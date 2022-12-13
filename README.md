# flexmoney-assignment

Problem Statement - 

Assume that you are the CTO for the outsourcing firm which has been chosen to build an admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:
- Only people within the age limit of 18-65 can enroll for the monthly classes and they will be paying the fees on a month on month basis. I.e. an individual will have to pay the fees every month and he can pay it any time of the month.
- They can enroll any day but they will have to pay for the entire month. The monthly fee is 500/- Rs INR.
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The participants can choose any batch in a month and can move to any other batch next month. I.e. participants can shift from one batch to another in different months but in same month they need to be in same batch

## Installation

Use NPM Package manager to install react app stored in client folder and node backend stored in server folder

## Tech stack

Fronted - RectJS, TaiwindCSS, HTML, CSS, JS

Backend - ExpressJS, MongoDB, Mongoose, NodeJS

# Solution Approach
Solution builds an frontend of ReactForm which is accessible at [https://lucent-banoffee-914fe4.netlify.app/](https://lucent-banoffee-914fe4.netlify.app/) which is connected to a backend web service deployed at [https://flexmoney-assignment-yi28.onrender.com](https://flexmoney-assignment-yi28.onrender.com).
So once the user fills the data at frontend and submit the form , the data will be passed to backend where a mock function `CompletePayment()` is assumed to complete the payment and the response after saving details to mongodb backend are returned to frontend and shown to user via a modal.
