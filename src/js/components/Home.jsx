import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">Cat Gallery</a>
      </div>
    </nav>
  );
};


const Jumbotron = () => {
  return (
    <div className="container my-4">
      <div className="p-5 bg-light rounded-3">
        <h1 className="display-4">Welcome to the Cat World</h1>
        <p className="lead">Discover adorable and curious cats from around the globe.</p>
        <hr className="my-4" />
        <p>As always, I cannot imagine a project without cats.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Start Exploring Cats</a>
      </div>
    </div>
  );
};


const Card = ({ title, imageUrl, description, buttonUrl, buttonLabel }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={imageUrl}
          className="card-img-top object-fit-cover"
          alt={title}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a href={buttonUrl} className="btn btn-primary mt-auto">{buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  const cardsData = [
    {
      title: 'Curious Tabby',
      imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'An alert tabby cat exploring the surroundings.',
      buttonUrl: '#',
      buttonLabel: 'See More'
    },
    {
		title: 'Relaxed Feline',
		imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'A calm cat lounging on a bamboo chair.',
		buttonUrl: '#',
		buttonLabel: 'See More'
	  }
	  ,
    {
      title: 'Green-Eyed Beauty',
      imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A majestic gray cat with piercing green eyes.',
      buttonUrl: '#',
      buttonLabel: 'See More'
    },
    {
      title: 'Scared and Lazy',
      imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A scared situation happend while a cat was being lazy.',
      buttonUrl: '#',
      buttonLabel: 'See More'
    }
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
              buttonUrl={card.buttonUrl}
              buttonLabel={card.buttonLabel}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
