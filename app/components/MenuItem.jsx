export default function MenuItem({ menuItem, price, description }) {
    return (
        <div className="pt-1">
            <p className="uppercase lg:text-md font-semibold flex flex-col lg:flex-row justify-between font-heading">{menuItem} <span className="text-brand-green font-semibold capitalize mt-1 lg:mt-0">Ksh {price}</span></p>
            <p className="text-light-black">{description}</p>
        </div>
    )
}