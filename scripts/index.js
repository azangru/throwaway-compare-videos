import { html, render } from 'https://unpkg.com/lit-html?module';

const ids = [
  '3QpfOlm_Gmg',
  'C2mHnRnBnn0',
  '0JkcuESmiDM'
];
const width = 950;
const aspectRatio = 16/9;
const height = width / aspectRatio;

const renderAll = () => {
  renderTextarea();
  renderVideos();
};

const renderTextarea = () => {
  const container = document.querySelector('.controls');
  const textarea = html`
    <textarea>${ids.join(' ')}</textarea>
  `;

  render(textarea, container);
}

const renderVideos = () => {
  const videos = ids.map(id => renderVideoIframe(id));
  const container = document.querySelector('.video-list');

  render(videos, container);
};

const renderVideoIframe = (youtubeId) => {
  const src = `https://www.youtube.com/embed/${youtubeId}`;
  return html`
    <div class="video-wrapper">
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
