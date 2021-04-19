import './info.scss';

const Info = (props) => {
  const text = props.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit, id neque tortor odio lacus.';
  return (
    <div className="info-wrapper">
      <span>i</span>
      <div className="info-text">
        <p className="small">{ text }</p>
      </div>
    </div>
  );
}
export default Info