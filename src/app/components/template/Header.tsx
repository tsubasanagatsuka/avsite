export default function Header() {
  return (
    <>
      <header>
        <h1>（仮）AVWiki</h1>
      </header>

      {/* ナビバー */}
      <nav>
        <ul>
          <li>
            <a href="https://www.mgstage.com/">MGS動画</a>
          </li>
          <li>
            <a href="https://www.dmm.co.jp/digital/">FANZA動画</a>
          </li>
          <li>
            <a href="#">ジャンル</a>
          </li>
          <li>
            <a href="#">女優一覧</a>
          </li>
          <li>
            <a href="#">女優一覧</a>
          </li>
          <li>
            <a href="#">配信メーカー</a>
          </li>
        </ul>
      </nav>

      {/* 検索 */}
      <div className="search-bar">
        <input type="text" placeholder="キーワード" />
        <button>検索</button>
      </div>
    </>
  );
}
