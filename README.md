# The Outta Touch Staple Website

## Description

I started this project to redesign the website for the Outta Touch yacht chartering service. I sawe this as an opportunity to dive into a few technologies I have been studying, but have not implemented fully. Leveraging the NextJS 13 framework, I utilized Supabase, Google Cloud, and Vercel to fully bring this project to light. I thoroughly enjoyed building this website during my corporate hiatus.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Google Cloud Sheets API](#google-cloud-sheets-api)
- [Google Cloud CDN](#google-cloud-cdn)
- [Supabase](#supabase)
- [Vercel](#vercel)
- [License](#license)

## Installation

After cloning the repository, run:

```
npm i
npm run gen-types
npm run dev
```

and your application will begin running on `port 3000`.

## Google Cloud Sheets API

From Google Cloud, I utilized the Sheets API to quickly implement a Contact form for the website. I created a service account and copied the credentials file to the root of the project. I then created a `.env.local` file and added the following variables:

```
OOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
```

This allowed me to use the `google-spreadsheet` package to quickly implement a contact form without the need for a backend. I weighed the use cases for a backend and decided, with the help of my client, that they would access data easier through a Google Sheet.

## Google Cloud CDN

The largest hurdle with this site was implementing the `/gallery` pages. With several hundred photos and videos of content, I needed a CDN to optimally and reliably retrieve images. I used Google Cloud Storage to store the images and videos and then used the Google Cloud CDN. I created a bucket and uploaded the images and videos to the bucket. I then created a load balancer and added the bucket as a backend service.

However, I ran into some performance issues fetching all of the photos in bulk, and needed a solution to store the image metadata in a database to quickly sort and filter the images without fetching large amounts of data.

## Supabase

I used Supabase to store the image metadata. I created a `.env.local` file and added the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

I then created a table called `images` with the following columns:

```
id: integer
folder: text
filename: text
altText: text
favorite: boolean
```

This allowed me to make one fetch request to the database and retrieve all of the image metadata. I then used the `folder` column to filter the images by gallery. I also added a `favorite` column to allow the client to select their favorite images and display them on the home page.

## Vercel

I used Vercel to deploy the website. I followed the instructions to connect my GitHub repository to Vercel and then added the necessary environment variables. I then added the following build commands:

```
npm i
npm run gen-types
npm run build
```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

Nicholas (Teddy) Wagner - [GitHub](https://github.com/teddywagner)

## License

MIT License

Copyright &copy; 2023 Nicholas Wagner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

🏆 🏆 🏆
