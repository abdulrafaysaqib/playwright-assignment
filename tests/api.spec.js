const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('Verify Islamabad temperature from OpenWeather API', async ({ request }) => {

  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${apiKey}&units=metric`
  );

  // Check status code
  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log('Temperature:', body.main.temp);

  // Validate temperature exists
  expect(body.main.temp).toBeDefined();
});