import emailjs from '@emailjs/browser';

const serviceID = 'service_puqcanv';
const templateID = 'template_j0ihp7k';
const publicKey = 'MCRdLHkF6UnkHMYod';

// Initialize EmailJS
emailjs.init(publicKey);

// Function to send email
export const sendEmail = async (formElement) => {
  try {
    // Add current date to form data
    const formData = new FormData(formElement);
    formData.append('date', new Date().toLocaleString());
    
    const response = await emailjs.sendForm(
      serviceID,
      templateID,
      formElement,
      publicKey
    );
    
    return { success: true, data: response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: {
        message: error.text || 'Failed to send email. Please try again later.'
      } 
    };
  }
};

export default sendEmail;