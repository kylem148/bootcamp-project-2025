import React from 'react'

interface LangButtonProps {
    lang: string;
}

const LangButton = (lang: LangButtonProps) => {
    return (
        <div className="w-fit h-9 m-1 pl-1 pr-1 text-center font-bold rounded-sm border-3 border-emerald-950 bg-green-900 hover:bg-green-800">
            {lang.lang}
        </div>
    )
}

export default LangButton
