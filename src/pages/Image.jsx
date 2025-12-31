import { useState } from "react";
import Layout from "../components/Layout";

function Image() {
    const [imageIndex, setImageIndex] = useState(0);
    const arr = ["https://wallpaperaccess.com/full/191366.jpg",
        "https://wallpaperset.com/w/full/e/8/7/461154.jpg",
        "https://images.unsplash.com/photo-1598978362397-9c12bf201b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80.jpg",
        "https://cdn.pixabay.com/photo/2015/09/05/22/40/macbook-925856_640.jpg",
        "https://cdn.pixabay.com/photo/2016/03/26/14/42/macbook-1280687_1280.jpg",
        "https://images.unsplash.com/photo-1635684542893-69b525ca4fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80.jpg",
        "https://images.unsplash.com/photo-1559898311-a334f657cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80.jpg",
        "https://images.unsplash.com/photo-1542471562201-7086102e3374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80",
        "https://images.unsplash.com/photo-1616812828442-f5d7c2777f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80.jpg"]


    const previous = () => {
        setImageIndex((imageIndex) => imageIndex - 1);
    }

    const next = () => {
        setImageIndex((imageIndex) => imageIndex + 1);
    }
    return (
        <div>
            <Layout />
            <div className="container mt-5" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <h1 className="text-center">Image Carousoul</h1>
                <div className="row mb-4" >
                    <div className="col-7 offset-4 mt-5">
                        <img src={arr[imageIndex]} alt="image" height={400} width={400} />
                        <h2 className="text-center">Latest Laptop</h2>

                    </div>
                    <div className="col-6 text-center">
                        <button className="btn btn-outline-primary" disabled={imageIndex === 0} onClick={previous}>Previous</button>
                    </div>
                    <div className="col-6 text-center">
                        <button className="btn btn-outline-primary" disabled={imageIndex === arr.length - 1} onClick={next}>Next</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Image;