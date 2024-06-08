

const StarRating = ({rating}) => {
  const maxStars = 5;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
      } else {
        stars.push(<span key={i}>★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="text-2xl">
      {renderStars()}
    </div>
  );
};

export default StarRating;
