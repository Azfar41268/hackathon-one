

export default function Wrapper({ children } : { children : React.ReactNode }) {
    return(
        <div className="h-full w-11/12">
            {children}
        </div>
    )
}