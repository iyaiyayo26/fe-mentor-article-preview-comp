// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Share from "./Components/Share";

function App() {
  const [buttonShare, setButtonShare] = useState(false);

  return (
    <div className="container font-Manrope bg-white rounded-lg overflow-hidden md:flex">
      {/* section 1 = header */}
      <section className="gambar md:flex md:flex-1">
        <img src=".\images\drawers.jpg" alt="header" />
      </section>

      <section className="md:flex-1">
        {/* section 2 = article */}
        <article className="description px-8 pt-8">
          <h5 className="text-Very-Dark-Grayish-Blue font-semibold">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h5>
          <p className="text-Desaturated-Dark-Blue font-thin text-sm mt-4">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
          </p>
        </article>

        {/* section 3 = profile */}
        {!buttonShare ? (
          <article className="profile flex flex-row mt-8 justify-between px-8 mb-5">
            <div className="user-profile flex">
              <img src=".\images\avatar-michelle.jpg" alt="profile-pict" className="w-10 h-10 rounded-full" />
              <div className="profile-desc my-auto ml-5">
                <h5 className="text-Very-Dark-Grayish-Blue font-semibold text-sm">Michelle Appleton</h5>
                <p className="text-Desaturated-Dark-Blue text-xs">28 Jun 2020</p>
              </div>
            </div>
            {/* share button */}
            <button type="submit" className="bg-Light-Grayish-Blue w-8 h-8 rounded-full my-auto" onClick={() => setButtonShare(true)}>
              <img src=".\images\icon-share.svg" alt="share-icon" className="mx-auto" />
            </button>
          </article>
        ) : (
          <article className="profile flex flex-row mt-8 justify-between px-8 mb-5">
            <div className="user-profile flex">
              <img src=".\images\avatar-michelle.jpg" alt="profile-pict" className="w-10 h-10 rounded-full" />
              <div className="profile-desc my-auto ml-5">
                <h5 className="text-Very-Dark-Grayish-Blue font-semibold text-sm">Michelle Appleton</h5>
                <p className="text-Desaturated-Dark-Blue text-xs">28 Jun 2020</p>
              </div>
            </div>
            {/* share button */}
            <button type="submit" className="bg-Light-Grayish-Blue w-8 h-8 rounded-full my-auto" onClick={() => setButtonShare(!true)}>
              <img src=".\images\icon-share.svg" alt="share-icon" className="mx-auto" />
            </button>
          </article>
        )}

        {/* section 4 = share pop up */}
        <Share trigger={buttonShare} setTrigger={setButtonShare} />
      </section>

      {/* <section className="share-popup">muncul</section> */}
    </div>
  );
}

export default App;
