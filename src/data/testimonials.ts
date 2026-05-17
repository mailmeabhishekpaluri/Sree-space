export type Offering = 'yoga' | 'hands-on' | 'talk' | 'consultation';

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  offerings: Offering[];
  featured?: boolean;
  video?: { src: string; poster: string };
};

export const testimonials: Testimonial[] = [
  {
    id: 'ritasha-facelift',
    name: 'Ritasha',
    role: 'Yoga teacher',
    quote: 'TODO: insert pull-quote from video before publishing',
    offerings: ['hands-on'],
    featured: true,
    video: {
      src: '/videos/testimonials/01_ritasha_access_facelift.mp4',
      poster: '/videos/testimonials/01_ritasha_access_facelift_poster.jpg',
    },
  },
  {
    id: 'pragathi',
    name: 'Pragathi',
    role: 'Teacher',
    quote:
      "Likhitha's questions don't bind me with the set answers, they set me free to find the answers for myself. She has put her awareness and sincere efforts to make me independent and feel safe in my own skin.",
    offerings: ['talk', 'consultation'],
    featured: true,
  },
  {
    id: 'yash',
    name: 'Yash',
    role: 'Climbing instructor',
    quote:
      "On the drive back from the Bars session it was a lot quieter than before. I had this positive reinforcement, this subtle energy that was telling me it's all gonna be okay soon. I've come a long way from that day — so many good things are constantly happening that now it's hard to believe it's all for real. Thank you, Likhitha. It had a huge part in where I am today.",
    offerings: ['hands-on'],
    featured: true,
  },
  {
    id: 'nagavamsi',
    name: 'Nagavamsi',
    quote:
      'Likhitha has got a different way of looking at life which is very refreshing and sensible. A few conversations with her made my understanding of concepts like money, vocation and progress clearer.',
    offerings: ['talk', 'consultation'],
  },
  {
    id: 'likhitha-finance',
    name: 'Likhitha',
    role: 'Finance',
    quote:
      'Likhitha was my yoga instructor during my pregnancy and postpartum journey — her classes played a significant role in helping me heal from post-pregnancy body pains. I always felt more lively and energized after her sessions.',
    offerings: ['yoga', 'hands-on'],
  },
  {
    id: 'anonymous-yoga',
    name: 'A long-time student',
    quote:
      'I really enjoy the way you teach yoga. It is more like doing it out of love and respect for my body. Building strength sustainably.',
    offerings: ['yoga'],
  },
];
