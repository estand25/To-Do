import React from 'react'

const ButtonGenerator = ({list}) => {
    return (
        <div>
            {list
                .map(it => (
                    <button
                        key={it.text + '_' + it.className}
                        className={it.className}
                        style={{ margin: 5 }}
                        onClick={it.onClick}
                    >
                        {it.text}
                    </button>
                ))}
        </div>
    )
}

export default ButtonGenerator