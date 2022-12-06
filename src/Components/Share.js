export default function Share({ trigger, setTrigger }) {
  return trigger ? (
    <article className="share flex bg-Very-Dark-Grayish-Blue px-6 py-4 justify-between">
      <div className="flex space-x-8 md:space-x-4">
        <p className="share-text uppercase my-auto text-Grayish-Blue">share</p>
        <div className="social-media flex my-auto space-x-5 md:space-x-3">
          <a href="https://www.facebook.com/">
            <img src=".\images\icon-facebook.svg" alt="icon-fb" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/">
            <img src=".\images\icon-twitter.svg" alt="icon-twt" className="w-6 h-6" />
          </a>
          <img src=".\images\icon-pinterest.svg" alt="icon-pinterest" className="w-6 h-6" />
        </div>
      </div>
      <div className="triangle"></div>
      <button className="close-share-popup bg-Light-Grayish-Blue w-8 h-8 rounded-full md:ml-4" onClick={() => setTrigger(false)}>
        <img src=".\images\icon-share.svg" alt="share-icon" className="mx-auto" />
      </button>
    </article>
  ) : (
    ""
  );
}
