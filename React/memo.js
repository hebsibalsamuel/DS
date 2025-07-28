import React, { useState } from "react";

//React.memo would handle this rerender.
const Counter = React.memo(({ data }) => {
    const [count, setCount] = useState(0);
    console.log("rendering count", data)
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Clicks: {count}
            </button>
        </div>
    );
});

const App = () => {
    const counters = [1, 2, 3, 4, 5];
    const [refresh, setRefresh] = useState(0); // ⬅ Force re-render trigger
    // the parent should have a state and if setState happens in parent,then child would re-render autommatically
    return <div>
        {
            counters.map(counter => <Counter key={counter} data={counter} />)
        }
        <button onClick={() => setRefresh((prev) => prev + 1)}>
            Re-render Parent {refresh}
        </button>

    </div>;
};

export default App;
