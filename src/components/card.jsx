
const PetCard = ({ nome, tipo, genero, idade, tags, imagem }) => {
    return (
      <div className="card">
        <img src={imagem} alt={nome} className="card-image" />
        <div className="card-content">
          <h2>{nome}</h2>
          <p>{tipo}</p>
          <p>
            Gênero: <span>{genero}</span>
          </p>
          <p>
            Idade: <span>{idade}</span>
          </p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className={`tag tag-${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PetCard;
  