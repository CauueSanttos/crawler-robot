/* eslint-disable no-undef */

import puppeteer from 'puppeteer';

import baseUrl from './baseUrl';

export default async function scrapingData(checkin, checkout) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(baseUrl(checkin, checkout));

  const result = await page.evaluate(() => {
    const results = [];

    const table = document.querySelector('.maintable');

    const rooms = table.querySelectorAll('.roomName');

    rooms.forEach(room => {
      const roomResult = {};

      /**
       * Find room price
       */
      roomResult.price = room
        .querySelector('.sincePrice')
        .querySelector('h6').textContent;

      /**
       * Find room description
       */
      const description = room.querySelector('.excerpt');
      roomResult.name = description.querySelector('h5').textContent;
      roomResult.description = description.querySelector('p').textContent;

      /**
       * Find room images
       */
      const thumb = room.querySelector('.thumb');
      const slides = thumb.querySelectorAll('.slide');
      const images = [];
      slides.forEach(slide => {
        images.push(
          `https://myreservations.omnibees.com${slide
            .querySelector('img')
            .getAttribute('src')}`
        );
      });
      roomResult.images = images;

      results.push(roomResult);
    });

    return results;
  });

  return result;
}
