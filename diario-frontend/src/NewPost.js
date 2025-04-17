export default function NewPost() {
    return (
      <article>
        <form>
          <div className="fields">
            <div className="field">
              <label>Título</label>
              <input type="text" name="title" />
            </div>
            <div className="field">
              <label>Texto</label>
              <textarea name="content"></textarea>
            </div>
          </div>
          <button type="submit" className="button primary">Salvar</button>
        </form>
      </article>
    );
  }