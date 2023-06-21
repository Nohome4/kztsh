import "../styles/PDF.css";
const PDF = (props) => {
  return (
    <div>
      <iframe className="pdf" title="pdf" src={props.src} />
    </div>
  );
};

export default PDF;
