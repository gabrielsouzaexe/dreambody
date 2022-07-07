interface ButtonProps {
    value: string
}

export function Button({value}: ButtonProps) {
    return (
        <button className="mx-2 bg-red-600 px-5 py-2 text-white border rounded-md shadow-lg hover:shadow-red-700/70 border-red-700 transition-shadow">
            {value}
        </button>
    )
}