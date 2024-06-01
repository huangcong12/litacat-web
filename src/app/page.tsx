'use client'

import ReactCompareImage from "react-compare-image";


export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div
                className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8 mt-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="./1.jpg"
                            rightImage="./2.jpg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="/3.jpg"
                            rightImage="/4.jpg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="/5.png"
                            rightImage="/6.png"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="7.png"
                            rightImage="8.png"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="9.jpg"
                            rightImage="10.jpeg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="11.jpg"
                            rightImage="12.jpeg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="13.jpg"
                            rightImage="14.jpeg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="15.jpg"
                            rightImage="16.jpeg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

            <div className="max-w-5xl p-6 bg-white rounded-lg shadow-lg w-full min-h-[40vh] flex mb-8"> {/* 修改 */}
                <div className="flex font-sans mx-auto px-4 space-x-6 w-full">
                    {/* 图片容器 */}
                    <div className="flex-1 relative overflow-hidden h-full"> {/* 修改 */}
                        <ReactCompareImage
                            leftImage="17.jpg"
                            rightImage="18.jpeg"
                        />
                    </div>
                    {/* 表单 */}
                    <form className="flex-1 p-6 h-full flex flex-col justify-between"> {/* 修改 */}
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                                Demo Package
                            </h1>
                            <div className="text-2xl font-semibold text-slate-500">
                                $110.00
                            </div>
                            <div className="w-full flex-none text-lg font-medium text-slate-700 mt-2">
                                In stock
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-lg">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-lg font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-12 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit">
                                    Buy now
                                </button>
                                <button
                                    className="h-12 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                    type="button">
                                    Add to bag
                                </button>
                            </div>
                            <button
                                className="flex-none flex items-center justify-center w-12 h-12 rounded-md text-slate-300 border border-slate-200"
                                type="button" aria-label="Like">
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
}