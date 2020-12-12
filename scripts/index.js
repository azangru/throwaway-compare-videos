import { html, render } from 'https://unpkg.com/lit-html?module';

import { ids as youtubeData } from './ids.js';

const width = 950;
const aspectRatio = 16/9;
const height = width / aspectRatio;

const renderAll = () => {
  // renderTextarea();
  renderVideos();
};

// const renderTextarea = () => {
//   const container = document.querySelector('.controls');
//   const textarea = html`
//     <textarea>${ids.join(' ')}</textarea>
//   `;

//   render(textarea, container);
// }

const renderVideos = () => {
  const videos = youtubeData.map(item => renderVideoIframe(item));
  const container = document.querySelector('.video-list');

  render(videos, container);
};

const renderVideoIframe = (data) => {
  const [id, title] = data;
  const src = `https://www.youtube.com/embed/${id}`;
  return html`
    <div class="video-wrapper">
      <h1>${title}</h1>
      <iframe
        src="${src}"
        width="${width}"
        height="${height}"
        allowfullscreen
        frameborder="0"
      >
      </iframe>
    </div>
  `;
};

renderAll();


/*
someone's key found on github: AIzaSyCsAzu9Sapz3od9-UGZUbH4GMX3UjezNGw
*/
