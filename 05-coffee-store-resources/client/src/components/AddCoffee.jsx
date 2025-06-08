import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h1>
                Add Coffee
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste laborum perspiciatis ad placeat saepe aliquam natus odit, minima ducimus nisi ratione repudiandae veritatis voluptatibus, ipsam quae rerum exercitationem dicta.
            </p>

            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="My awesome page" />

                    <label className="label">Slug</label>
                    <input type="text" className="input" placeholder="my-awesome-page" />

                 
                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;