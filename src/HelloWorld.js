import React from 'react'

const HelloWorld = () => {
    const name = "rizki novriandri";
    let width = 500;
    let ShowImage = true;
    
    return (
        // bisa pakai fragment kalau tidak mau pake div -> sytax nya <> </>
        <div>
            <h1 className="title">Hello World {2019+1}</h1>
            <p className="description">A javascript library for building anywhere</p>
            <p>{name.toUpperCase()}</p>
            
            {
                ShowImage 
                ? 
                    <img
                    className = "gambar"
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAaV8MkrZbgzcAwgGqw2g3iAXMpJoCuQ-8Tg&usqp=CAU"
                    alt = "Gambar Mobil"
                    width = {width}
                ></img> 
                :
                <div>
                    gambar tidak muncul
                </div>
            }
            

        </div>
        );
};

export default HelloWorld;