export default function TrailerPopup({ isOpen, onClose, trailer }) {
  return (
    <div className={`popup popup_overlay${isOpen ? " popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container">
        <iframe width="1160" height="655" src={`https://www.youtube.com/embed/${trailer}`} frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}
