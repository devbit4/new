import React from 'react';

const Panel = (props) => {
    const arr = [
        'Blizzards',
        'Calm',
        'Dusty_Road',
        'Escape',
        'PayDay',
        'Retreat',
        'Seasonal',
        'Vespers',
    ];
    const deg = 45;
    const btnStyle = { position: 'fixed', top: 0, left: 0 };

    function changeArr(txt) {
        arr[0] = txt;
        console.log(arr);
    }



    return (
        <>
            <button style={btnStyle} onClick={() => changeArr()}>button</button>
            {arr.map((item, index) => {
                let style = { transform: `rotate(${deg * index}deg) translateY(-100vh)` }
                return (
                    <article key={index} style={style}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`img/${item}.jpg`} />
                            </div>
                            <h2>{item}</h2>

                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default Panel;
