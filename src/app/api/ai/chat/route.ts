import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  // Simulate AI thinking
  await new Promise((r) => setTimeout(r, 300));

  const response = generateResponse(message);

  return NextResponse.json({
    role: 'assistant' as const,
    content: response,
    timestamp: new Date().toISOString(),
  });
}

function generateResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('japan') || lower.includes('tokyo')) {
    return "Japan is incredible! I'd recommend starting in Tokyo for 2-3 days (Shibuya, Harajuku, Meiji Shrine), then a day trip to Mount Fuji, followed by Kyoto's temples and Osaka's street food. Budget around $150/day for a comfortable trip. Want me to build a detailed itinerary?";
  }
  if (lower.includes('budget') || lower.includes('cheap') || lower.includes('cost')) {
    return "I can help optimize your budget! Southeast Asia offers amazing value — Thailand, Vietnam, and Bali average $40-80/day. For Europe on a budget, consider Portugal, Czech Republic, or Greece off-season. What's your target budget per day?";
  }
  if (lower.includes('beach') || lower.includes('tropical')) {
    return "For beach destinations, here are my top picks: Maldives (luxury), Bali (adventure + culture), Santorini (romance), Tulum (trendy), and Sri Lanka (hidden gem). Each offers a unique vibe. What matters most to you — relaxation, water sports, or nightlife?";
  }
  if (lower.includes('weather') || lower.includes('when')) {
    return "Great question! Timing is everything. I can check real-time weather forecasts and historical patterns for any destination. Which city are you considering? I'll give you the best months to visit and what to pack.";
  }
  if (lower.includes('group') || lower.includes('friends') || lower.includes('family')) {
    return "Group trips are my specialty! I can create collaborative itineraries where everyone votes on activities, split expenses automatically, and find accommodations that work for the whole group. How many people are traveling?";
  }

  return "I'd love to help plan your perfect trip! Tell me your destination, travel dates, budget, and what kind of experience you're looking for (adventure, relaxation, culture, food). I'll create a personalized itinerary in seconds.";
}
