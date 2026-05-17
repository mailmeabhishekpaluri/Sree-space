export type Format = { title: string; body: string };
export type Modality = { title: string; body: string };
export type WhatFor = string;

export type Offering = {
  slug: string;
  title: string;
  short: string;
  hero: { headline: string; sub: string; image: string };
  formats?: Format[];
  modalities?: Modality[];
  whatFor?: WhatFor[];
  practicalInfo?: string[];
  howItWorks?: string[];
  testimonialIds?: string[];
};

export const offerings: Offering[] = [
  {
    slug: 'yoga',
    title: 'Yoga',
    short: 'Movement that meets you where you are. 1:1, group, therapy, kundalini.',
    hero: {
      headline: 'Yoga that meets you where you are.',
      sub: 'Movement, breath, and attention — woven so your body, mind, and life can settle into the same rhythm.',
      image: '/images/yoga-poses/04_crescent_lunge_tropical_garden.jpeg',
    },
    formats: [
      {
        title: 'Multi-style (1:1)',
        body: 'Agility, strength, conditioning, flexibility. Designed to begin wherever your body is today.',
      },
      {
        title: 'Multi-style (group)',
        body: 'Works on all planes of body and mind with a grounding approach to movement.',
      },
      {
        title: 'Therapy yoga (1:1)',
        body: "For specific mental or physical issues. Sessions are designed around your body's actual signals, not a syllabus.",
      },
      {
        title: 'Kundalini practices',
        body: 'Deepening connection to the body and embodying a meditative spirit. In-person initiation + ongoing group support.',
      },
    ],
    testimonialIds: ['likhitha-finance', 'anonymous-yoga'],
  },
  {
    slug: 'hands-on-therapy',
    title: 'Hands-on Therapy',
    short: 'Access Bars, Body Process, Energetic Face Lift. Quiet release.',
    hero: {
      headline: "Quiet sessions for what words can't reach.",
      sub: 'Access Bars · Body Process · Energetic Face Lift. You arrive, you receive, you leave lighter.',
      image: '/images/healing-sessions/02_beach_shavasana_head_touch.jpeg',
    },
    modalities: [
      {
        title: 'Access Bars',
        body: '32 points on the head, lightly held. Releases stored thoughts, judgments, and emotional weight. Like a deep nap your nervous system actually needed.',
      },
      {
        title: 'Body Process',
        body: 'Hands-on energetic work for specific areas of the body. Useful when a particular spot has been holding something for a long time.',
      },
      {
        title: 'Energetic Face Lift',
        body: 'Gentle face and neck work. Tends to leave the face softer, the eyes brighter, the mood quieter.',
      },
    ],
    practicalInfo: [
      'Sessions are typically 60–90 minutes.',
      'Bring loose, comfortable clothing.',
      'Most people feel the effects across the next 24–72 hours.',
    ],
    testimonialIds: ['yash', 'likhitha-finance'],
  },
  {
    slug: 'talk-energy-clearance',
    title: 'Talk Energy Clearance',
    short: "Conversation as energy work for life's knots.",
    hero: {
      headline: 'A conversation that moves something.',
      sub: 'Sometimes the knot loosens with the right question. This is energy work, in the form of a talk.',
      image: '/images/healing-sessions/05_session_balcony_hillstation_cafe.jpeg',
    },
    whatFor: [
      'Relationship issues',
      'Self-image and confidence',
      'Mental and emotional clarity',
      'Getting over traumas',
      'A different approach to mental illness',
      'Relationship with food and body image',
      'Crisis situations',
    ],
    testimonialIds: ['pragathi', 'nagavamsi'],
  },
  {
    slug: 'consultation',
    title: 'Consultation',
    short: 'Tailor-made plans drawing on yoga, mudra, kriya, and energy work.',
    hero: {
      headline: 'Small problem. Simple solution.',
      sub: 'A consultation to map your situation and prescribe a tailor-made plan drawing on yoga, mudra, kriya, and energy work.',
      image: '/images/portraits/07_blue_floral_kurta_workshop_context.jpeg',
    },
    howItWorks: [
      'Free 15-min intro call (often the Awareness Circle counts).',
      'Sree builds a tailor-made plan or short program for you.',
      'You practice. Check-ins as you go.',
    ],
    testimonialIds: ['pragathi', 'nagavamsi'],
  },
  {
    slug: 'outdoor-immersion',
    title: 'Outdoor Immersion Programs',
    short: 'Nature-based group experiences — rivers, forests, sunrise sessions. Movement, breath, and awareness practiced where the ground is uneven and the air is real.',
    hero: {
      headline: 'Practice where the ground is uneven.',
      sub: 'Group immersions in nature — rivers, forests, hillsides at sunrise. The practice changes when the setting does.',
      image: '/images/yoga-poses/04_crescent_lunge_tropical_garden.jpeg',
    },
  },
];
