export default function SearchForm({ handleChange, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here smth..."
        className="button form__input"
        onChange={handleChange}
      />
      <button type="submit" className="button form__submit">Search</button>
    </form>
  );
}
