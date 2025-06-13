import { Link } from 'react-router';

const CoffeeCard = ({ coffee }) => {
    const handleDelete = (id) => {
        console.log('Delete id: ', id) 
        fetch(`http://localhost:3000/addcoffee/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log("After delete",data)
        })
    }

  return (
    <div className="card w-full max-w-xs bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-300">
      <figure className="px-4 pt-4">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="rounded-xl w-32 h-32 object-cover border border-base-300"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-base-content">{coffee.name}</h2>
        <p className="text-sm text-base-content/70">Category: {coffee.category}</p>
        <div className="card-actions mt-4 flex flex-wrap justify-center gap-2">
          <Link to={`/coffee/${coffee._id}`} className="btn btn-sm btn-primary">View</Link>
          <button className="btn btn-sm btn-warning">Edit</button>
          <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
