import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faHome } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Breadcrumb, Card, Label, Select } from "flowbite-react";
import StarRatings from 'react-star-ratings';

import supabase from "./supabase";
import Image from "next/image";

export async function getStaticProps() {
    const { data } = await supabase
        .from("medicines")
        .select()

    return {
        props: {
            data,
        },
        revalidate: 10,
    };  
}

export default function Medicine({data}) {

    function currencyFormat(num) {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
     }  

    return(
        <div>
            <Navbar />
            <div className="flex justify-center items-center w-full max-w-screen bg-slate-100 px-10">
                <div className="flex lg:flex-row min-[350px]:flex-col justify-evenly items-start w-full h-full">

                    {/* Filter */}
                    <div className="flex flex-col justify-start items-start px-5 py-10 space-y-5 max-h-full lg:w-1/4 min-[350px]:w-full min-[350px]:p-10  border-r-[3px]">
                        <Breadcrumb aria-label="Default breadcrumb example" className="mb-8">
                            <Breadcrumb.Item
                                href="/"
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-3"/> Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                Medicine
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="w-full flex items-start justify-start">
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-4" icon={faFilter} />Filter</p>
                        </div>
                        <div className="flex justify-evenly flex-col w-full space-y-3 mx-3">
                                <div id="select" className="w-full">
                                    <div className="mb-2 pl-2 block">
                                        <Label
                                        htmlFor="countries"
                                        value="Sort By"
                                        />
                                    </div>
                                    <Select
                                        id="countries"
                                        required={true}
                                        className="mr-10"
                                    >
                                        <option value="title">
                                        Product Name
                                        </option>
                                        <option value="category">
                                        Category
                                        </option>
                                        <option value="rating">
                                        Rating
                                        </option>
                                    </Select>
                                </div>
                        </div>
                        <div className="flex justify-evenly flex-col w-full space-y-3 mx-3">
                            <div id="select" className="w-full">
                                <div className="mb-2 pl-2 block">
                                    <Label
                                    htmlFor="countries"
                                    value="Category"
                                    />
                                </div>
                                <Select
                                    id="countries"
                                    required={true}
                                    className="mr-10"
                                >
                                    <option>
                                    United States
                                    </option>
                                    <option>
                                    Canada
                                    </option>
                                    <option>
                                    France
                                    </option>
                                    <option>
                                    Germany
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex w-full mb-5 mx-3">
                            <button type="submit" className="w-full bg-blue-700 text-white font-semibold uppercase rounded-xl py-2 mt-3 mr-10">Search</button>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="flex flex-row flex-wrap justify-center items-start lg:w-3/4 min-[350px]:w-full min-[350px]:p-10 px-12 py-10">
                        {data.map((d) => (
                          <div className="max-w-sm w-56 h-full mx-2 my-2 shadow-xl">
                            <Card>
                                <div className="flex justify-center items center">
                                    <Image src={d.image_url} width={100} height={100} className="w-32 h-32 object-contain"/>
                                </div>
                                <a href="#">
                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {d.title.length > 16 ?
                                        `${d.title.substring(0, 16)}...` : d.title
                                    }
                                    </h5>
                                </a>
                                <div className="flex items-center">
                                    <StarRatings
                                        rating={d.rating}
                                        starRatedColor="gold"
                                        starDimension="18px"
                                        starSpacing="2px"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                        {d.rating}.0
                                        </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                                    {currencyFormat(d.price)}
                                    </span>
                                    <a
                                    href="#"
                                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                    Details
                                    </a>
                                </div>
                            </Card>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}