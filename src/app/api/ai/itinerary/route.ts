import { NextResponse } from 'next/server';

// AI itinerary generation endpoint
// Currently uses structured mock — ready for OpenAI/Groq integration
export async function POST(request: Request) {
  const body = await request.json();
  const { destination, days, style, budget } = body;

  // Simulate AI processing delay
  await new Promise((r) => setTimeout(r, 500));

  // Generate structured itinerary
  const itinerary = generateItinerary(destination || 'Japan', days || 7, style || 'balanced', budget || 'moderate');

  return NextResponse.json({
    success: true,
    itinerary,
    meta: {
      model: 'travelos-ai-v1',
      generatedAt: new Date().toISOString(),
    },
  });
}

function generateItinerary(destination: string, dayCount: number, style: string, budget: string) {
  const cityTemplates: Record<string, { city: string; activities: string[] }[]> = {
    Japan: [
      { city: 'Tokyo', activities: ['Shibuya Crossing', 'Meiji Shrine', 'Harajuku street food'] },
      { city: 'Mount Fuji', activities: ['Sunrise trek', 'Hakone hot springs', 'Lake Kawaguchi'] },
      { city: 'Kyoto', activities: ['Fushimi Inari', 'Bamboo Grove', 'Tea ceremony'] },
      { city: 'Osaka', activities: ['Dotonbori food tour', 'Osaka Castle', 'Kuromon Market'] },
      { city: 'Nara', activities: ['Todai-ji Temple', 'Deer park', 'Naramachi district'] },
      { city: 'Hiroshima', activities: ['Peace Memorial', 'Miyajima Island', 'Okonomiyaki dinner'] },
      { city: 'Tokyo', activities: ['Ginza shopping', 'Akihabara', 'Tsukiji outer market'] },
    ],
    default: [
      { city: destination, activities: ['City exploration', 'Local cuisine tour', 'Cultural sites'] },
      { city: destination, activities: ['Adventure activity', 'Nature walk', 'Market visit'] },
      { city: destination, activities: ['Historical landmarks', 'Art gallery', 'Sunset viewpoint'] },
    ],
  };

  const template = cityTemplates[destination] || cityTemplates.default;
  const days = [];

  for (let i = 0; i < dayCount; i++) {
    const t = template[i % template.length];
    days.push({
      day: i + 1,
      city: t.city,
      activities: t.activities,
      estimatedCost: budget === 'luxury' ? '$300' : budget === 'budget' ? '$80' : '$150',
    });
  }

  return {
    destination,
    totalDays: dayCount,
    style,
    budget,
    days,
  };
}
