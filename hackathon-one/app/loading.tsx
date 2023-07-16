export default function Loading() {
    return(
        <div className="flex w-screen h-screen bg-white dark:bg-black/75 justify-center items-center">
            <div className="w-12 h-12 rounded-full border-t-2 border-black dark:border-white animate-spin mr-5"></div>
            <h1 className="text-lg font-medium">Loading</h1>
        </div>
    )
}