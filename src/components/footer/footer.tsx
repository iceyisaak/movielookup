import { MdCopyright } from "react-icons/md";

export const Footer = () => {
    return (
        <footer className="flex justify-center w-screen">
            <p className="mr-1">
                MovieLookUp GmbH
            </p>
            <MdCopyright size={13} />
            <p>
                {new Date().getFullYear()}
            </p>
        </footer>
    )
}
