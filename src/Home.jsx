import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = () => {
    let timerInterval;
    Swal.fire({
        position: "top-end",
        icon: "info",
        title: "The 3D models may take a while to load depending on your internet speed.",
        showConfirmButton: false,
        timer: 5000,
        html: "Closes in <b></b> milliseconds.",
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Auto closed by the timer");
          }
      });
    return (
        <>
            <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div>
                
                </div>
                <div
                    className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
                >
                    <h1 className='text-3xl text-center font-bold pt-4'>Solar 3D</h1>
                    <p className='pb-10 text-center'>Our Vision is to provide 3D experience and serving information on Astronomy.</p>
                    <p className='pt-10 text-center'>وَٱلسَّمَآءَ بَنَيْنَـٰهَا بِأَيْي۟دٍۢ وَإِنَّا لَمُوسِعُونَ ٤٧</p>
                    <p>"We built the universe with great might, and We are certainly expanding it."</p>
                    <div className='flex items-center justify-center py-4'>
                        <Link to='/earth'><button class="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
                            Earth
                        </button></Link>
                    </div>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                        src="https://videos.pexels.com/video-files/856309/856309-hd_1920_1080_30fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>
        </>
    )
}

export default Home