import { Link } from 'react-router';

const CoffeeCard = ({ coffee, setAddedCoffee , AddedCoffee }) => { 

    
    const handleDelete = (id) => {
        console.log('Delete id: ', id) 

        const confirmDelete = window.confirm('Are you sure you want to delete this item?');
        if (!confirmDelete) {
            return;
        }
        fetch(`http://localhost:3000/addcoffee/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {


            const remaining = AddedCoffee.filter(cof => cof._id !== id);
            setAddedCoffee(remaining);
            console.log("After delete",data)
            alert('Deleted Successfully')
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
          <Link to={`/coffee-card-edit/${coffee._id}`} className="btn btn-sm btn-warning">Edit</Link>
          <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard; 
