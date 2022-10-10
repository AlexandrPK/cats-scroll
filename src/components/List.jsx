
import React from "react";

import Card from "./Card";

const List = ({ catsData }) => {

    return (
        <div class="grid gap-5 mb-6 lg:mb-16 md:grid-cols-1 ">
        {console.log(catsData)}
            {catsData.map((cats, index) => {
                return (
                    <Card
                        key={index}
                        image={cats.data.file}
                        name={cats.name}
                    />
                );
            })}
        </div>
    );
};

export default List;