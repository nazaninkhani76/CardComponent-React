const CardButtons = ({ buttons }) => {
  return (
    <div className="card-buttons">
      {buttons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default CardButtons;
