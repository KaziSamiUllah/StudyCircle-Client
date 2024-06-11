<h1 align="center" id="title">Study Circle</h1>

<p id="description">Study Circle is an innovative online platform designed to facilitate collaborative studying by connecting students, tutors, and administrators. Our platform streamlines the scheduling of study sessions, facilitates resource sharing, and simplifies user management. By integrating these essential functionalities into a single, user-friendly interface, Study Circle aims to enhance collaboration, improve access to study materials, and ensure efficient management of educational activities. This repository outlines the key features, design principles, and implementation strategies necessary to develop a robust platform that meets the dynamic needs of modern education.</p>

<h2>🚀Live Link</h2>

[https://study-circle-a12.web.app/](https://study-circle-a12.web.app/)

Admin email: admin@gmail.com
Password: 123456
  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   users can sign up as a student or a tutor
*   A student can book study sessions by making payments through Stripe. Free sessions are not required to pay.
*   Students can find all the booked sessions in the dashboard. They can also find all the materials provided by the tutors in there.
*   Students can also take notes in the dashboard.
*   in the detailed view of a session in booked sessions a student can rate the session in stars and post a review.
*   The average of all ratings and the reviews are shown in the session details.
*   A tutor can create a session by putting necessary information create session page. Tutor can view all the sessions he/she created in My sessions page grouped by approval status.
*   Tutors can also upload materials in the form of Google drive link or image upload for the approved session by clicking the upload material button in My sessions list.
*   An admin is the only role that can assign admin roles or any other role to users. They can see all the registered users in All Users page in their Dashboard.
*   An admin can approve or reject sessions created by tutors. they can post a reason when rejecting and put a price on the sessions when approving.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Client side codes</p>

```
git clone https://github.com/programming-hero-web-course1/b9a12-client-side-KaziSamiUllah.git
```

<p>3. Navigate to the client project directory</p>

```
cd b9a12-client-side-KaziSamiUllah
```

<p>4. Install dependencies</p>

```
npm install
```

<p>5. run the development server</p>

```
npm run dev
```

<p>6. Clone Server side codes</p>

```
https://github.com/programming-hero-web-course1/b9a12-server-side-KaziSamiUllah.git
```

<p>7. Navigate to the client project directory</p>

```
cd b9a12-server-side-KaziSamiUllah
```

<p>8. Install dependencies</p>

```
npm install
```

<p>9. run server</p>

```
nodemon index.js
```

  


  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React.js
*   javascript
*   node.js
*   express.js
*   mongoDB
*   Stripe(for payment)
*   Firebase
*   Tailwind CSS
*   HTML
*   Axios
*   JWT auth
*   Tanstack Query