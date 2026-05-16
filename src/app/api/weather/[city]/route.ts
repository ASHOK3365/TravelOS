import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;

  // Mock weather data — ready for OpenWeatherMap integration
  const weatherDB: Record<string, { temp: number; condition: string; humidity: number; wind: number; icon: string }> = {
    tokyo:     { temp: 22, condition: 'Partly Cloudy', humidity: 55, wind: 12, icon: '⛅' },
    kyoto:     { temp: 24, condition: 'Clear Sky',     humidity: 45, wind: 8,  icon: '☀️' },
    paris:     { temp: 18, condition: 'Light Rain',    humidity: 72, wind: 15, icon: '🌧️' },
    bali:      { temp: 30, condition: 'Sunny',         humidity: 68, wind: 10, icon: '☀️' },
    maldives:  { temp: 29, condition: 'Tropical Sun',  humidity: 75, wind: 14, icon: '🌤️' },
    santorini: { temp: 26, condition: 'Clear Sky',     humidity: 40, wind: 18, icon: '☀️' },
    swiss:     { temp: 12, condition: 'Snow Showers',  humidity: 60, wind: 20, icon: '❄️' },
  };

  const key = city.toLowerCase().replace(/[^a-z]/g, '');
  const data = weatherDB[key] || { temp: 20, condition: 'Fair', humidity: 50, wind: 10, icon: '🌤️' };

  const forecast = Array.from({ length: 5 }, (_, i) => ({
    date: new Date(Date.now() + (i + 1) * 86400000).toISOString().slice(0, 10),
    high: data.temp + Math.round(Math.random() * 4 - 2),
    low: data.temp - Math.round(Math.random() * 5 + 3),
    condition: data.condition,
  }));

  return NextResponse.json({
    city: city.charAt(0).toUpperCase() + city.slice(1),
    ...data,
    forecast,
  });
}
