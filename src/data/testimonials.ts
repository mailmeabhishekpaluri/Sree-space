export type Offering = 'yoga' | 'hands-on' | 'talk' | 'consultation' | 'kids-therapy';

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
    quote: 'Within two days I could see my whole personality had changed — the way I was dressing, the way I was feeling, the way my face looked.',
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
  {
    id: 'lokesh-engineer',
    name: 'Lokesh',
    role: 'Engineer',
    quote:
      'Energy perigindi and previous ga naku chala easy ga kopam vachedi. But from that moment I was processing things better before feeling angry. Primary kashtam lo oka small solution vachindi. And somewhat mentally relief.',
    offerings: ['talk'],
  },
  {
    id: 'vijay-ca',
    name: 'Vijay',
    role: 'CA',
    quote:
      'I am feeling very peaceful after so long. Nothing external changed drastically but mood is very peaceful and I think it is the bars… thank you!',
    offerings: ['hands-on'],
  },
  {
    id: 'fabiana-yoga',
    name: 'Fabiana',
    role: 'French expat',
    quote:
      "Likhitha's teaching is unlike anything I have experienced before. She focuses deeply on the foundations of the practice, emphasizing the importance of being present and listening to our own bodies. Every simple movement becomes essential to build a posture and she is very caring about it. Without pressure, comparison or stress the main target is to learn how to relax in the moment and allow the body and mind, through breathing, to work together. Her approach brings awareness to muscles and movements I had long forgotten. Even without sweating or feeling exhausted, I feel I'm doing a lot for my overall well-being. Thanks Likhitha!",
    offerings: ['yoga'],
    featured: true,
  },
  {
    id: 'fabiana-bars',
    name: 'Fabiana',
    role: 'French expat',
    quote:
      "I tried Access Bar therapy just out of curiosity, and also because I felt totally safe and trusting with Likhitha. For almost an hour, I was lying down in this strange state between sleep and full awareness. It's hard to put into words. When the session ended, it felt like only 10 minutes had passed. After the session, time felt different. The whole day went by in slow motion. My mind wanted to move fast like it normally does, but my body just wouldn't. It kept asking me to slow down. I don't understand what happened, and maybe I'm not supposed to. Maybe I'm just meant to live it.",
    offerings: ['hands-on'],
    featured: true,
  },
  {
    id: 'anupa-bars-talk',
    name: 'Anupa Sekhar',
    role: 'Mother of 2 professional athletes',
    quote:
      'It was a pleasant experience doing the bars with Likhitha. The verbal processing work with her was pretty insightful and brought out various dimensions to focus on. She gives a lot of comfort and helps us ease into the process.',
    offerings: ['hands-on', 'talk'],
  },
  {
    id: 'anupa-yoga',
    name: 'Anupa Sekhar',
    role: 'Mother of 2 professional athletes',
    quote:
      "I enjoy practising yoga with Likhitha as it doesn't feel like a monotonous routine. There is a lot of flow and it sets the rhythm for the day ahead. My daughter also enjoys the sessions and looks forward to it.",
    offerings: ['yoga'],
  },
  {
    id: 'anupa-son',
    name: 'Anupa Sekhar',
    role: 'Mother of 2 professional athletes',
    quote:
      'My son also has been receiving bars and verbal energy facilitation and it has helped him in keeping his cool during races.',
    offerings: ['hands-on', 'talk', 'kids-therapy'],
  },
];
