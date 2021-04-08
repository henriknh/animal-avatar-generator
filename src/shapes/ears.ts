import { Shape } from './types'
import { darken } from '../utils/colors'

export const ears: Shape[] = [
  (color) => `
    <path fill="${color}" d="M169 122.4a184.8 184.8 0 00-79.3 63.4c-6.5 9-12 18.8-16.5 29C64.7 177.9 46.6 85.4 78.9 84c27-1.1 66.6 22.4 90.1 38.3zM426.7 214.5c-3.9-8.7-8.5-17-13.7-24.9a184.5 184.5 0 00-82.1-67.3c23.5-15.8 63.1-39.4 90-38.2 32.3 1.3 14.3 93.3 5.8 130.4z"/>
    <path fill="#fec3aa" d="M149.2 132.2c-23.9 13.6-44.3 32-59.5 53.6-5.7-27-13.2-74.9 5.5-75.7 15.9-.6 38.7 12.1 54 22zM413 189.6a184.5 184.5 0 00-65.4-59.1c16.7-11 42-25.3 59.6-24.6 20.6 1 12 54.6 5.8 83.7z"/>
  `,
  (color) => `
    <path fill="${darken(color, 30)}" d="M71.4 144.8c-7.5-15.8 70.4-53.2 78-37.5 8.7 23 7.8 43-1.6 60.6a32 32 0 01-33.8 16.5c-21.4-3.7-35.8-16.6-42.6-39.6zM423.4 144.8c7.6-15.8-70.3-53.2-78-37.5-8.7 23-7.7 43 1.7 60.6a32 32 0 0033.8 16.5c21.4-3.7 35.8-16.6 42.5-39.6z"/>
  `,
  (color) => `
    <path fill="${darken(color, 30)}" d="M169 122.4C124 57.5 37.6 128 57 176.8c22.1 31.3 49.5 25.6 82.5-20.4a36 36 0 006.7-22.5c7.6-4.4 15.1-8.3 22.8-11.5zM331 122.4c44.9-64.9 131.4 5.7 112 54.4-22.1 31.3-49.5 25.6-82.5-20.4a36 36 0 01-6.7-22.5c-7.6-4.4-15.1-8.3-22.8-11.5z"/>
    <path d="M146.2 134c-.8-14-5-23.9-13.5-28 11.2-1 21.6 4.6 30.8 18.8l-17.3 9.1zM353.8 134c.8-14 5-23.9 13.5-28-11.2-1-21.6 4.6-30.8 18.8l17.3 9.1z"/>
  `,
  (color) => `
    <path fill="${color}" d="M169 122.4a194.5 194.5 0 00-56.5 37c-29.4-10.7-40.3-32.4-41-60.1 37-5.4 76.7-3 97.4 23.1zM331 122.4a194.5 194.5 0 0156.4 37c29.5-10.7 40.4-32.4 41.1-60.1-37-5.4-76.7-3-97.5 23.1z"/>
    <path fill="#fec3aa" d="M148.6 132.6c-12.3 7-23.7 15.4-33.9 24.7-20.7-8.3-28.4-24.3-29-44.6 27.2-4 49.4.6 62.9 19.9zM351.4 132.6c12.3 7 23.6 15.4 33.8 24.7 20.8-8.3 28.5-24.3 29-44.6-27.1-4-49.3.6-62.8 19.9z"/>
  `,
  (color) => `
    <path fill="${darken(color, 60)}" d="M107.1 128.2c-47.4 23-20.8 59 31.7 51.7 7.2-1 13.2-6.2 15.3-13.2 15.1-50.7-17-82-47-38.5zM392.2 128.2c47.4 23 20.8 59-31.8 51.7-7.2-1-13.1-6.2-15.2-13.2-15.1-50.7 17-82 47-38.5z"/>
  `,
  (color) => `
    <path fill="${color}" d="M169 122.4a192.3 192.3 0 00-68 49C76.4 142 81.3 125 110 88c31.7 0 58.3 4.1 59 34.5zM331 122.4a192.3 192.3 0 0168 49c24.6-29.4 19.6-46.4-9-83.5-31.7 0-58.3 4.1-59 34.5z"/>
    <path fill="#fec3aa" d="M155.6 128.7c-20 10.5-37.8 24.1-52.4 40.2-16.6-20.5-20.3-33.3.4-60 21.5 0 47 2.5 52 19.8zM344.4 128.7c20 10.5 37.8 24.1 52.4 40.2 16.6-20.5 20.3-33.3-.4-60-21.5 0-47 2.5-52 19.8z"/>
  `,
  (color) => `
    <path fill="${color}" d="M104.3 167.8a176.9 176.9 0 00-21.6 28.8 67.7 67.7 0 01-24.4-12.8 38.1 38.1 0 01-14.1-29.4c-.4-7 .7-13.8 1.8-19.5 2.6-13.3 52.2 27.8 58.3 32.9zM395.8 167.8a176.9 176.9 0 0121.6 28.8 67.7 67.7 0 0024.4-12.8 38.1 38.1 0 0014.1-29.4c.3-7-.7-13.8-1.9-19.5-2.6-13.3-52.2 27.8-58.2 32.9z"/>
    <path fill="#fec3aa" d="M91.3 183.6c-3.1 4.2-6 8.5-8.6 13a67.7 67.7 0 01-24.4-12.8 38.1 38.1 0 01-14.1-29.4c6.6.3 22 2 30.3 11 5.4 5.7 11.8 12.7 16.8 18.2zM408.8 183.6c3 4.2 6 8.5 8.6 13a67.7 67.7 0 0024.4-12.8 38.1 38.1 0 0014.1-29.4c-6.7.3-22 2-30.3 11-5.5 5.7-11.8 12.7-16.8 18.2z"/>
    <path fill="#937155" d="M114 61.8s6.7-1 9.5 6.8 1 20.3 8.3 24.1c7.4 3.8 17.2 1.2 16.8-9.8-.4-11 3.2-19.3 10.7-15 7.6 4.5 10.6 13.6 9.4 30.2s-1 36.3-5.2 41.7c-4.2 5.3-20.1 5.3-25.5-2.2-5.4-7.6-8-11-16.3-16a61.2 61.2 0 01-24.1-29.3c-3.4-11.5-1.3-32.7 16.5-30.5zM385.8 61.8s-6.6-1-9.4 6.8-1 20.3-8.3 24.1c-7.4 3.8-17.2 1.2-16.8-9.8.4-11-3.2-19.3-10.8-15-7.5 4.5-10.5 13.6-9.3 30.2s1 36.3 5.2 41.7c4.2 5.3 20 5.3 25.5-2.2 5.4-7.6 8-11 16.3-16 8.4-5 20.7-17.7 24.1-29.3 3.4-11.5 1.2-32.7-16.5-30.5z"/>
  `,
  (color) => `
    <path fill="${darken(color, 60)}" d="M46.1 205.5c2-34.2 73.5-80.3 97.5-80.3S119 235.2 107 243.5s-62.8-3.7-61-38zM454 205.5c-2-34.2-73.5-80.3-97.5-80.3s24.6 110 36.4 118.3 62.9-3.7 61-38z"/>
  `,
  (color) => `
    <path fill="${color}" d="M132.3 143a185.8 185.8 0 00-42.6 42.7c-28.4-20.8-36.5-43-31.4-66.4a86.2 86.2 0 018.4-22.1c33.5 4 56.8 18 65.6 45.9zM409.9 185.1a176.3 176.3 0 00-43.1-42.7c9-27.4 32.1-41.2 65.4-45.2 4 7.5 6.8 14.8 8.3 22.1 5.1 23.1-2.8 45.2-30.6 65.8z"/>
    <path fill="#fec3aa" d="M103.9 168.2c-5.1 5.5-9.9 11.4-14.2 17.5-28.4-20.8-36.5-43-31.4-66.4 6.8 2.4 16.2 6.7 27 14.4a48.3 48.3 0 0118.6 34.5zM409.9 185.1c-4.5-6.3-9.4-12.3-14.7-18a47.9 47.9 0 0118.4-33.4c10.8-7.7 20.1-12 27-14.4 5 23.1-3 45.2-30.7 65.8z"/>
  `,
  (color) => `
    <path fill="${color}" d="M396.4 168.5l-4-4.2a190.3 190.3 0 00-74.2-47c9.7-15.7 38.6-48.2 59.6-54.2 4.6-1.4 9.6.7 12 4.8 22.4 38.8 11.6 84.5 6.6 100.6zM103.6 168.5l4-4.2a190.3 190.3 0 0174.2-47c-9.7-15.7-38.6-48.2-59.6-54.2-4.6-1.4-9.6.7-12 4.8-22.4 38.8-11.6 84.5-6.6 100.6z"/>
    <path fill="#fec3aa" d="M392.4 164.3a190.3 190.3 0 00-57.6-40.2c8.4-12.5 28.6-34.4 43.4-38.7a8 8 0 019 3.6c16.8 28.9 9 62.8 5.2 75.3zM107.6 164.3a190.3 190.3 0 0157.6-40.2c-8.4-12.5-28.6-34.4-43.4-38.7a8 8 0 00-9 3.6c-16.8 28.9-9 62.8-5.2 75.3z"/>
  `,
  (color) => `
    <path fill="#813d14" d="M399.9 72.3c-2.1 5.7-4.5 11.3-7.8 16.8l-.6 1-.6 1-1.4 2.1-1.5 2-1.6 2-1.8 1.8c-.6.6-1.1 1.2-1.8 1.7l-2 1.7-1 .8-1 .7c-5.7 4-12.1 6.5-18.4 8-5 1.3-10 2-15 2.6-1 4.3-2.4 8.5-4.1 12.6-5-2.4-10-4.7-15.1-6.7 2-3.8 3.6-7.9 4.8-12a86.7 86.7 0 003-20.4c.2-7-.2-14-1.1-21.2-1-7.1-2.3-14.2-4-21.3v-.1a5 5 0 019.7-2.6c2.3 7.2 4.3 14.5 5.9 22a147.8 147.8 0 013 33.3c3.4-.1 6.7-.4 10-.8 5.1-.8 9.9-2.2 14-4.5l.8-.5.8-.5 1.5-1 1.4-1.1 1.4-1.2 1.3-1.4 1.3-1.3 1.2-1.5.6-.8.6-.8c3.1-4.2 5.8-9.2 8.3-14.3a5 5 0 019.2 4zM100.3 72.3c2 5.7 4.4 11.3 7.7 16.8l.6 1 .7 1 1.4 2.1 1.5 2 1.5 2 1.8 1.8 1.8 1.7 2 1.7 1 .8 1 .7c5.7 4 12.2 6.5 18.4 8 5 1.3 10.1 2 15 2.6 1 4.3 2.4 8.5 4.2 12.6 4.9-2.4 10-4.7 15-6.7-2-3.8-3.5-7.9-4.7-12a86.7 86.7 0 01-3-20.4c-.2-7 .2-14 1-21.2 1-7.1 2.4-14.2 4-21.3v-.1a5 5 0 00-9.6-2.6c-2.3 7.2-4.4 14.5-6 22a147.8 147.8 0 00-3 33.3c-3.4-.1-6.7-.4-9.9-.8-5.2-.8-10-2.2-14.1-4.5l-.8-.5-.7-.5-1.5-1-1.4-1.1-1.4-1.2-1.3-1.4c-.5-.4-1-.8-1.3-1.3l-1.3-1.5-.6-.8-.6-.8a93.6 93.6 0 01-8.2-14.3 5 5 0 00-9.3 4z"/>
    <path fill="${color}" d="M408 148.5c-5.9 3.7-13.4 6.7-22.6 9-10.8-10-23-18.8-36.1-26.1a57 57 0 0138.7-18.1c10.8-.9 22.6.5 35.4 3.9 1.6 13.5-3.6 23.8-15.4 31.3zM92 148.5c6 3.7 13.5 6.7 22.6 9 10.8-10 23-18.8 36.2-26.1a57 57 0 00-38.8-18.1c-10.8-.9-22.6.5-35.4 3.9C75 130.7 80.3 141 92 148.5z"/>
    <path d="M408 148.5c19.7-24.5 3.3-31.5-20-35.2 10.8-.9 22.6.5 35.4 3.9 1.6 13.5-3.6 23.8-15.4 31.3zM92 148.5c-19.7-24.5-3.2-31.5 20-35.2-10.8-.9-22.6.5-35.4 3.9C75 130.7 80.3 141 92 148.5z"/>
  `,
  (color) => `
    <path fill="${color}" d="M401.5 174.3l-5.9-6.7a185.5 185.5 0 00-39.2-32c24.6-43.7 98-5.4 45 38.7zM98.5 174.3l6-6.7a185.5 185.5 0 0139.1-32c-24.5-43.7-98-5.4-45 38.7z"/>
    <path fill="#fec3aa" d="M395.6 167.6c-8.7-9.4-18.6-18-29.3-25.5 16.3-26.9 62.3-2.6 29.3 25.5zM104.4 167.6c8.8-9.4 18.6-18 29.3-25.5-16.3-26.9-62.3-2.6-29.3 25.5zM360 71.1l-1 14.7-1.7 27.9-.3 6.3-1 15.3a201 201 0 00-72-26.6l18.7-28.8 10.9-17 4.3-6.6c2.3-3.7 6.9-5.2 11-3.7l25 9.3a9.3 9.3 0 016 9.2zM216.1 108.7a201 201 0 00-71.9 26.6l-1-15.3-.3-6.3-1.7-27.9-.9-14.7c-.2-4 2.2-7.8 6-9.2l25-9.3c4.1-1.5 8.7 0 11 3.7l4.3 6.6 10.3 16 .7 1 10.2 15.8 8.3 13z"/>
    <path fill="${color}" d="M337.5 72c0 5-10.5 9-23.5 9-4.1 0-8-.4-11.4-1.1l11-17h.4c13 0 23.5 4 23.5 9zM359 85.8l-1.7 27.9c-11.9-1.3-20.8-7-20.8-13.9 0-7.2 9.8-13.1 22.5-14zM207.8 95.7a73 73 0 01-13 3.8c-15.6 3.1-29 1.2-30-4.3-1.1-5.4 10.6-12.3 26-15.4l6.1-1 .7 1 10.2 16z"/>
  `,
  (color) => `
    <path fill="#b4a5a5" d="M141.3 140c2.3 7.6 28.7-1.3 26-13.2 0-64.8-28.5-105.3-67-50.6 25.7-13 39.8 7 41 63.8zM358.7 140c-2.3 7.6-28.7-1.3-26.1-13.2 0-64.8 28.6-105.3 67.1-50.6-25.8-13-39.8 7-41 63.8z"/>
    <path fill="${color}" d="M135.9 140.5a177 177 0 00-55.7 60.3c-107.4-4-38.6-64.3 55.7-60.3zM364.1 140.5a177 177 0 0155.7 60.3c107.3-4 38.6-64.3-55.7-60.3z"/>
    <path fill="#fff" d="M388.7 160.6a177 177 0 0128 34.9c68.8-1 72.8-34.4-28-35zM111.3 160.6a177 177 0 00-28 34.9c-68.8-1-72.8-34.4 28-35z"/>
  `,
  (color) => `
    <path fill="${color}"  d="M156.6 128.2c-21.3 11-40 25.5-55.1 42.6v.1l-.2.2-.2.1-1.6-88.7s1.8 0 5 1.2h.1c5 2 13.2 7.2 23.1 20.7a76.1 76.1 0 0028.9 23.8zM343.4 128.2c21.2 11 40 25.5 55.1 42.6v.1l.2.2.2.1 1.6-88.7s-1.8 0-5 1.2h-.1c-5 2-13.2 7.2-23.1 20.7a76.1 76.1 0 01-28.9 23.8z"/>
    <path fill="#fec3aa" d="M109.3 160.3c-2.9 3.4-5.4 6.9-7.8 10.5v.1l-.2.2-.2.1c-1 0-6.3-1-23.7-16a46.1 46.1 0 01-13-56.8c5.9-11.9 24-22 40.2-14.7a36.2 36.2 0 0115.8 14.9c12.2 20-1.5 47-11.2 61.7zM390.7 160.3c2.9 3.4 5.4 6.9 7.8 10.5v.1l.2.2.1.1c1.1 0 6.4-1 23.7-16a46.1 46.1 0 0013.1-56.8c-5.9-11.9-24-22-40.2-14.7a36.2 36.2 0 00-15.8 14.9c-12.2 20 1.5 47 11.1 61.7z"/>
  `,
]
