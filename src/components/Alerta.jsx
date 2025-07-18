const Alerta = ({ alerta }) => {
    const { error, msg } = alerta

    return (
        <div
            id="general-error"
            className={`p-3 ${error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'} rounded-lg`}
        >
            <div className="flex">
                {error ? (
                    <svg
                        className="h-5 w-5 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                ) : (
                    <svg
                        className="h-5 w-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
                <div className="ml-3">
                    <p className={`text-sm ${error ? 'text-red-800' : 'text-green-800'}`} id="error-message">
                        {msg}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Alerta