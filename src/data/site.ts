export const site = {
  name: 'Sree Space',
  tagline: 'The body already knows.',
  url: 'https://sreespace.com', // TODO: confirm domain with Likhitha
  description:
    'Yoga, hands-on energy work, and consciousness practices with Likhitha Sree.',
  socials: {
    instagram: 'https://instagram.com/sree_space_',
    whatsapp: 'https://wa.me/91XXXXXXXXXX',       // TODO: confirm number
    email: 'sree.spacebylikhitha@gmail.com',
  },
  mondayCall: {
    day: 'Monday',
    timezone: 'IST',
    rsvpUrl: '/monday',
    whatsappGroupUrl: 'https://chat.whatsapp.com/XXXXXXXXXX', // TODO: confirm invite link
    meetUrl: 'https://meet.google.com/REPLACE-ME',            // TODO: replace with live Google Meet link
  },
  signaturePhrases: [
    'Come home to yourself.',
    'Your health doesn\'t need quick fixes.',
    'Do you dare to be totally aware?',
    'Ask and you shall receive.',
    'Be you and change the world.',
  ],
} as const;
