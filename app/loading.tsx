export default function Loading() {
    return(
        <div className="flex items-center justify-center w-screen h-screen bg-white bg-opacity-10 dark:bg-black/75">
            <div className="w-20 h-20 mr-5 border-t-2 border-black rounded-full dark:border-white animate-spin"></div>
            <h1 className="text-2xl font-semibold animate-pulse">Loading</h1>
        </div>
    )
}