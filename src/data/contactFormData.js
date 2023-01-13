export const contactFormData = {
  fr: {
    inputs: [
      {
        label: "Votre nom",
        type: "text",
        name: "user_name",
        placeholder: "Ex : Rachelle Dupont",
      },
      {
        label: "Votre email",
        type: "email",
        name: "user_email",
        placeholder: "Ex : rachelle.dupont@mail.com",
      },
      {
        label: "Objet du message",
        type: "text",
        name: "message_object",
        placeholder: "Ex : Collaboration",
      },
    ],
    textarea: {
      label: "Votre message",
      type: "text",
      name: "user_message",
      placeholder: "Max 300 caractères",
      maxlength: "300",
    },
    submit: "Envoyer le message",
    previousBtn: "Retour au formulaire",
    submitSuccess: "Votre message a bien été envoyé !",
    submitError: "Une erreur est survenue !",
  },
  en: {
    inputs: [
      {
        label: "Your name",
        type: "text",
        name: "user_name",
        placeholder: "Ex : Rachel Spencer",
      },
      {
        label: "Your email",
        type: "email",
        name: "user_email",
        placeholder: "Ex : rachel.spencer@mail.com",
      },
      {
        label: "Message object",
        type: "text",
        name: "message_object",
        placeholder: "Ex : Collaboration",
      },
    ],
    textarea: {
      label: "Your message",
      type: "text",
      name: "user_message",
      placeholder: "Max 300 characters",
    },
    submit: "Send message",
    previousBtn: "Return to contact form",
    submitSuccess: "Your message have been sent !",
    submitError: "Something went wrong !",
  },
};
