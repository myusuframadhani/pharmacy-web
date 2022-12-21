import Image from "next/image"

import BannerImage from "../../public/dokter.png"
import Woods from "../../public/woods.png"
import Doctor from "../../public/dokter2.png"
import Courier from "../../public/kurir.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Banner() {
  return (
    <div className="bg-slate-100 w-screen flex justify-center items-center flex-col">
        <div className="container flex w-full max-w-screen-2xl lg:flex-row sm:flex-col-reverse bg-slate-100">
            <div className="flex flex-col lg:w-1/2 min-[350px]:w-full p-20 min-[350px]:p-10 sm:px-20 sm:py-5 lg:pt-20">
                <p className="text-black text-6xl font-bold animate-charcter">
                    Reliable on time home delivery
                </p>
                <p className="text-md text-slate-500 mt-6">Our in house pharmacist ensure your medicines reach you when you need them.</p>
                <div className="flex flex-row justify-evenly items-center mt-10">
                    <div className="delivery-succes bg-gradient-to-r from-cyan-500 to-blue-500 sm:p-6 min-[350px]:p-4 min-[350px]:my-2 text-white text-center rounded-[16px]">
                        <p className="sm:text-lg min-[350px]:text-md font-bold">100%</p>
                        <p className="sm:text-md min-[350px]:text-sm">Delivery Success</p>
                    </div>
                    <div className="delivery-succes bg-gradient-to-r from-yellow-500 to-orange-400 sm:p-6 min-[350px]:p-4 text-white text-center rounded-[16px]">
                        <p className="text-lg min-[350px]:text-md font-bold">5.0<span className="text-sm font-normal">(76k)</span></p>
                        <p className="text-md min-[350px]:text-sm">Customer Review</p>
                    </div>
                </div>
            </div>
            <div className="md:flex lg:w-1/2 min-[350px]:w-full min-[350px]:hidden justify-center items-center">
                <Image 
                    src={BannerImage}
                    width={410}
                    height={433}
                    className="pt-10 pb-10"
                    alt="Gambar Banner"
                />
            </div>
        </div>

        {/* Popular Product */}
        <div className="text-center">
            <p className="lg:text-5xl min-[350px]:text-3xl sm:px-20 font-bold mt-10 sm:mt-20 max-w-screen-2xl text-gray-800">Most Popular Products</p>
        </div>

        {/* Product Card */}
        <div className="container lg:max-w-screen-2xl md:flex-row sm:flex-col flex w-full justify-evenly flex-col items-center mt-5">
            <div className="w-64 max-w-sm bg-white rounded-[16px] shadow-lg my-7">
                <a href="#" className="flex justify-center items-center">
                    <Image className="p-8 rounded-t-lg" src={Woods} alt="product image" width={170}  />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">Woods Peppermint Expectorant 100mL</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-md font-bold text-gray-900">Rp 35.000</span>
                        <a href="#" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="w-64 max-w-sm bg-white rounded-[16px] shadow-lg my-7">
                <a href="#" className="flex justify-center items-center">
                    <Image className="p-8 rounded-t-lg" src={Woods} alt="product image" width={170}  />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">Woods Peppermint Expectorant 100mL</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-md font-bold text-gray-900">Rp 35.000</span>
                        <a href="#" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="w-64 max-w-sm bg-white rounded-[16px] shadow-lg my-7">
                <a href="#" className="flex justify-center items-center">
                    <Image className="p-8 rounded-t-lg" src={Woods} alt="product image" width={170}  />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">Woods Peppermint Expectorant 100mL</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-md font-bold text-gray-900">Rp 35.000</span>
                        <a href="#" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="w-64 max-w-sm bg-white rounded-[16px] shadow-lg my-7 sm:max-xl:hidden">
                <a href="#" className="flex justify-center items-center">
                    <Image className="p-8 rounded-t-lg" src={Woods} alt="product image" width={170}  />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">Woods Peppermint Expectorant 100mL</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-md font-bold text-gray-900">Rp 35.000</span>
                        <a href="#" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <div className="flex w-screen max-w-screen-2xl justify-center items-center">
            <div className="flex w-1/4 flex-row justify-evenly items-center mb-5 text-gray-800">
                <div className="sm:max-md:hidden">
                    <button type="button" className="bg-gradient-to-r from-slate-100 to-slate-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white shadow-md py-4 px-5 rounded-2xl">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div>
                    <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-black hover:from-gray-100 hover:to-gray-300 text-white shadow-md py-4 px-5 rounded-2xl">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>

        {/* Services */}
        <div className="flex w-screen max-w-screen-2xl justify-evenly items-center lg:flex-row md:flex-row min-[350px]:flex-col my-10">
            <div className="flex max-w-2xl flex-row min-[350px]:mb-3 justify-evenly items-center md:w-2/5 min-[350px]:w-4/5 min-[350px]:py-1 bg-white border py-10 border-gray-200 rounded-lg shadow-md">
                <div className="md:p-10 min-[350px]:p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Chat with a Doctor</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-600 py-4">Don't self medicate. Talk to an expert. Consult a doctor in less than 2 minutes</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700">
                        Get Started
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                <a href="#">
                    <Image className="rounded-t-lg" src={Doctor} alt="Service Dokter" width={300} />
                </a>
            </div>
            <div className="flex max-w-2xl flex-row min-[350px]:mb-3 justify-evenly items-center md:w-2/5 min-[350px]:w-4/5 min-[350px]:py-1 bg-white border border-gray-200 rounded-lg shadow-md py-5">
                <div className="md:p-10 min-[350px]:p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">Home delivery in 30 minutes</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-600">Tired of waiting in a queue? Too weak buy medicines?</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-blue-700">
                        Order Now
                        <svg className="w-4 h-4 ml-2 -mr-1 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </a>
                </div>
                <a href="#">
                    <Image className="rounded-t-lg" src={Courier} alt="Service Kurir" width={180} />
                </a>
            </div>
        </div>

        {/* Review */}
        <div className="text-center">
            <p className="text-3xl font-bold mt-10 text-gray-800">Customer Reviews</p>
        </div>

        <div className="flex w-screen lg:flex-row min-[350px]:flex-col max-w-screen-2xl justify-evenly items-center my-10">
            <div className="flex flex-col max-w-2xl justify-evenly items-center lg:w-1/4 min-[350px]:w-4/5 min-[350px]:mb-5 pt-10 bg-white border border-gray-200 rounded-xl shadow-lg">
                <svg aria-hidden="true" className="text-start mb-3 w-8 h-8 text-sky-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <div className="p-5 mb-5">
                    <p className="mb-3 font-normal italic text-center text-gray-600">Beautiful Application with elegant UI Design. I found this website very useful. How satisfy their delivery man. It so fast.</p>
                    
                </div>
                <div className="bg-sky-400 text-white w-full flex justify-center items-center flex-col pt-5 mt-5 pb-10 rounded-b-xl">
                    <Image className="rounded-full shadow-lg -mt-14" src="https://i.pravatar.cc/300?img=68" alt="Service Dokter" width={75} height={75} />
                    <p className="text-lg font-semibold py-3">Lance Jarvis</p>
                    <div className="flex w-1/3 justify-evenly items-center">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div> 
            <div className="flex flex-col max-w-2xl justify-evenly items-center lg:w-1/4 min-[350px]:w-4/5 min-[350px]:mb-5 pt-10 bg-white border border-gray-200 rounded-xl shadow-lg">
                <svg aria-hidden="true" className="text-start mb-3 w-8 h-8 text-indigo-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <div className="p-5 mb-5">
                    <p className="mb-3 font-normal italic text-center text-gray-600">Very helpful platform with easy in use with good User Experience. Placed order and received in just 30 minutes.</p>
                    
                </div>
                <div className="bg-indigo-400 w-full text-white flex justify-center items-center flex-col pt-5 mt-5 pb-10 rounded-b-xl">
                    <Image className="rounded-full shadow-lg -mt-14" src="https://i.pravatar.cc/300?img=47" alt="Service Dokter" width={75} height={75} />
                    <p className="text-lg font-semibold py-3">Ericka Lynda</p>
                    <div className="flex w-1/3 justify-evenly items-center">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div> 
            <div className="flex flex-col max-w-2xl justify-evenly items-center lg:w-1/4 min-[350px]:w-4/5 min-[350px]:mb-5 pt-10 bg-white border border-gray-200 rounded-xl shadow-lg">
                <svg aria-hidden="true" className="text-start mb-3 w-8 h-8 text-red-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <div className="p-5 mb-5">
                    <p className="mb-3 font-normal italic text-center text-gray-600">I recommend this website and the mobile application. The price is very friendly.</p>
                    
                </div>
                <div className="bg-red-400 w-full text-white flex justify-center items-center flex-col pt-5 mt-5 pb-10 rounded-b-xl">
                    <Image className="rounded-full shadow-lg -mt-14" src="https://i.pravatar.cc/300?img=12" alt="Service Dokter" width={75} height={75} />
                    <p className="text-lg font-semibold py-3">Neil Wilford</p>
                    <div className="flex w-1/3 justify-evenly items-center">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
