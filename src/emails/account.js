
const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
                to:email,
                from:'kcashish234@gmail.com',
                subject:'Welcome to Task Manager',
                text:`Welcome to the app, ${name}. Let me know how you are getting along with the app.`,
            })
    .then(() => {}, error => {
      console.error(error);
   
      if (error.response) {
        console.error(error.response.body)
      }
    });
    
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kcashish234@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
            })
    .then(() => {}, error => {
      console.error(error);
   
      if (error.response) {
        console.error(error.response.body)
      }
    });
    
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


