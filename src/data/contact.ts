export const WHATSAPP_NUMBER = '917396866338'; // +91 73968 66338

export const WHATSAPP_OPTIONS = [
  'Yoga classes',
  'Hands-on therapy',
  'Talk + energy clearance',
  'One-on-one consultation',
  'Outdoor immersion programs',
  'Awareness Circle (Monday call)',
  'Something else',
];

export function buildWhatsAppMessage(name: string, choices: string[]): string {
  const lines = [
    `Hi Likhitha, this is ${name}.`,
    "I'd love to know more about:",
    ...choices.map((c) => `• ${c}`),
  ];
  return lines.join('\n');
}

export function whatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
